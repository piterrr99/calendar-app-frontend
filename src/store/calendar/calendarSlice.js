import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'




const initialState = {
    events:  [],
    activeEvent: null
}

const CalendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        eventAddNew: (state, {payload})=>{
            state.events.push( payload )
        },
        eventClearActiveEvent: (state)=>{
            state.activeEvent = null
        },
        eventSetActive: (state, {payload})=>{
            state.activeEvent = { ...payload }
        }
    }
})

export const { eventAddNew, eventClearActiveEvent, eventSetActive } = CalendarSlice.actions
export default CalendarSlice.reducer