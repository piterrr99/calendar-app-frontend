import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';

import { CalendarScreen } from '../views/CalendarScreen'
import { LoginScreen } from '../views/LoginScreen'
import { useDispatch } from 'react-redux';
import { startChecking } from '@/store/auth/thunks';

export const AppRouter = () => {

  const dispacth = useDispatch();
  
  useEffect(() => {
    
    dispacth( startChecking() )  
    
  }, [])
  
  

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
