import { startDeletingEvent } from '@/store/calendar/thunks'
import React from 'react'
import { useDispatch } from 'react-redux'

export const DeleteEventFab = () => {

  const dispatch = useDispatch()

  const handleDeleteNote = ()=>{
    dispatch( startDeletingEvent() )
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
