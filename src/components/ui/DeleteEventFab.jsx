import { eventDeleted } from '@/store/calendar/calendarSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

export const DeleteEventFab = () => {

  const dispatch = useDispatch()

  const handleDeleteNote = ()=>{
    dispatch( eventDeleted() )
  }

  return (
    <button
        className='btn btn-danger fab-danger'
        onClick={handleDeleteNote}
    >
        <i className='fas fa-trash'></i>
        <span> Borrar evento</span>
    </button>
  )
}
