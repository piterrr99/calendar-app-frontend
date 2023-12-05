import { eventClearActiveEvent } from '@/store/calendar/calendarSlice'
import { openModal } from '@/store/ui/uiSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

export const AddNewFab = () => {

    const dispatch = useDispatch()

    const handleClickNew = ()=>{
        dispatch( eventClearActiveEvent() );
        dispatch( openModal() )
    }

    return (
        <button className='btn btn-primary fab' onClick={handleClickNew} >
            <i className='fas fa-plus' ></i>
        </button>
    )
}
