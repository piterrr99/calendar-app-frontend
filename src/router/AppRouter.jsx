import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';

import { CalendarScreen } from '../views/CalendarScreen'
import { LoginScreen } from '../views/LoginScreen'

export const AppRouter = () => {
  return (
    
    <BrowserRouter>

        <Routes>

            <Route path='/' element={ <CalendarScreen /> } />
            <Route path='/login' element={ <LoginScreen /> } />
            <Route path='/*' element = { <Navigate to='/' /> } />

        </Routes>
    
    </BrowserRouter>

  )
}
