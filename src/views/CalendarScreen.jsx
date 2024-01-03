import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { CalendarEvent } from '../components/calendar/CalendarEvent';
import { messages } from '../helpers/calendar-messages-es';
import { Navbar } from '../components/ui/Navbar';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es'
import { CalendarModal } from '../components/calendar/CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '@/store/ui/uiSlice';
import { eventClearActiveEvent, eventSetActive } from '@/store/calendar/calendarSlice';
import { AddNewFab } from '@/components/ui/AddNewFab';
import { DeleteEventFab } from '@/components/ui/DeleteEventFab';


moment.locale('es');

const localizer = momentLocalizer(moment)

// const events = [{
//     title: 'Cumpleaños del jefe',
//     start: moment().toDate(),
//     end: moment().add(2, 'hours') .toDate(),
//     bgcolor: '#fafafa',
//     user: {
//         id: '123',
//         name: 'Pedro'
//     }
// }]

export const CalendarScreen = () => {

    const [lastView, setLastView] = useState( localStorage.getItem('view') || 'month' );
    const dispatch = useDispatch()

    const { activeEvent, events } = useSelector( state => state.calendar )

    const onDoubleClick = ()=>{
        
        dispatch( openModal() )
    };

    const onSelectEvent = (e)=>{
        dispatch( eventSetActive(e) )
        
    };

    const onSelectSlot = ()=>{

        dispatch( eventClearActiveEvent() )

    }

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
            onSelectSlot={onSelectSlot}
            onView={onViewChange}
            selectable={true}
            startAccessor="start"
            view={lastView}
        />

        <AddNewFab />

        {activeEvent && <DeleteEventFab />}

        <CalendarModal />
    </div>
  )
}
