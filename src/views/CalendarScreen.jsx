import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { CalendarEvent } from '../components/calendar/CalendarEvent';
import { messages } from '../helpers/calendar-messages-es';
import { Navbar } from '../components/ui/Navbar';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es'
import { CalendarModal } from '../components/calendar/CalendarModal';
import { useDispatch } from 'react-redux';
import { openModal } from '@/store/ui/uiSlice';
import { eventSetActive } from '@/store/calendar/calendarSlice';
import { AddNewFab } from '@/components/ui/AddNewFab';
// import { startOpenningModal } from '@/store/ui/thunks';

moment.locale('es');

const localizer = momentLocalizer(moment)

const events = [{
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours') .toDate(),
    bgcolor: '#fafafa',
    user: {
        id: '123',
        name: 'Pedro'
    }
}]

export const CalendarScreen = () => {

    const [lastView, setLastView] = useState( localStorage.getItem('view') || 'month' );
    const dispatch = useDispatch()

    const onDoubleClick = (e)=>{
        console.log('doble click')
        dispatch( openModal() )
    };

    const onSelectEvent = (e)=>{
        console.log(e)
        dispatch( eventSetActive(e) )
    };

    const onViewChange = (e)=>{
        setLastView(e);
        localStorage.setItem('view', e)
    }

    const eventStyleGetter = (event, start, end, isSelected)=>{
        
        const style={
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }
        
        return {
            style
        }
    }

  return (
    <div className='calendar-screen' >
        <Navbar />

        <Calendar
            components={{
                event: CalendarEvent
            }}
            endAccessor="end"
            eventPropGetter={eventStyleGetter}
            events={events}
            localizer={localizer}
            messages={messages}
            onDoubleClickEvent={onDoubleClick}
            onSelectEvent={onSelectEvent}
            onView={onViewChange}
            startAccessor="start"
            view={lastView}
        />

        <AddNewFab />

        <CalendarModal />
    </div>
  )
}
