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
        eventLogout: (state)=>{
            state.activeEvent = null;
            state.events = []
        },
        eventDeleted: (state)=>{
            state.events = state.events.filter( event => event.id !== state.activeEvent.id );
            state.activeEvent = null
        },
        eventsLoaded: (state, {payload})=>{
            state.events = payload
        },
        eventSetActive: (state, {payload})=>{
            state.activeEvent = { ...payload }
        },
        eventUpdated: (state, {payload})=>{
            state.events = state.events.map( event => (event.id === payload.id) ? payload : event )
        }
    }
})

export const { eventAddNew, eventClearActiveEvent, eventLogout, eventDeleted, eventsLoaded, eventSetActive, eventUpdated } = CalendarSlice.actions
export default CalendarSlice.reducer