import { createSlice } from '@reduxjs/toolkit'



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
        eventDeleted: (state)=>{
            state.events = state.events.filter( event => event.id !== state.activeEvent.id );
            state.activeEvent = null
        },
        eventSetActive: (state, {payload})=>{
            state.activeEvent = { ...payload }
        },
        eventUpdated: (state, {payload})=>{
            state.events = state.events.map( event => (event.id === payload.id) ? payload : event )
        }
    }
})

export const { eventAddNew, eventClearActiveEvent, eventDeleted, eventSetActive, eventUpdated } = CalendarSlice.actions
export default CalendarSlice.reducer