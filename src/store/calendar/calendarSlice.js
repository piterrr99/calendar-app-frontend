import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'


const initialState = {
    events:  [{
        title: 'Cumpleaños del jefe',
        start: moment().toDate(),
        end: moment().add(2, 'hours') .toDate(),
        bgcolor: '#fafafa',
        user: {
            id: '123',
            name: 'Pedro'
        }
    }],
    activeEvent: null
}

const CalendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        eventAddNew: (state, {payload})=>{
            state.events.push( payload )
        },
        eventSetActive: (state, {payload})=>{
            state.activeEvent = { ...payload }
        }
    }
})

export const { eventAddNew, eventSetActive } = CalendarSlice.actions
export default CalendarSlice.reducer