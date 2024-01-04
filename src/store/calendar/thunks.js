import { fetchConToken } from "@/helpers/fetch"
import { eventAddNew, eventDeleted, eventUpdated, eventsLoaded } from "./calendarSlice";
import { prepareEvents } from "@/helpers/prepareEvents";
import Swal from "sweetalert2";



export const startAddNew = ( event )=>{

    return async( dispatch, getState )=>{

        const { name, uid } = getState().auth

        try {
            
            const resp = await fetchConToken( 'events', event, 'POST' );
            const body = await resp.json();

            if (body.ok) {
                
                event.id = body.event.id;
                event.user = {
                    _id: uid,
                    name: name
                };

                dispatch( eventAddNew( event ) )
            }
            
        } catch (error) {
            console.log(error)
        };        
    };
};



export const startDeletingEvent = ()=>{

    return async( dispatch, getState )=>{
        
        const { id } = getState().calendar.activeEvent

        try {
            
            const resp = await fetchConToken( `events/${id}`, {}, 'DELETE' );
            const body = await resp.json();

            if( body.ok ){
                dispatch(eventDeleted())
            } else {
                Swal.fire('Error', body.msg, 'error')
            };

        } catch (error) {
            console.log(error)
        };
    }
}



export const startLoadingEvents = ()=>{

    return async(dispatch )=>{

        const resp = await fetchConToken( 'events' );
        const body = await resp.json();

        const events = prepareEvents( body.events )

        dispatch( eventsLoaded( events ) )

    };
};



export const startUpdatingEvent = ( event )=>{

    return async(dispatch)=>{

        try {
            
            const resp = await fetchConToken( `events/${event.id}`, event, 'PUT' );
            const body = await resp.json();

            if( body.ok ){
                dispatch(eventUpdated( event ))
            } else {
                Swal.fire('Error', body.msg, 'error')
            };

        } catch (error) {
            console.log(error)
        };
    };
};