import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import ReactLoading from 'react-loading'

import { CalendarScreen } from '../views/CalendarScreen'
import { LoginScreen } from '../views/LoginScreen'
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '@/store/auth/thunks';
import PrivateRoutes from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

import '../css/react-loading.css'

export const AppRouter = () => {

  const dispacth = useDispatch();
  const { checking } = useSelector( state => state.auth )
  
  useEffect(() => {
    
    dispacth( startChecking() )  
    
  }, [])
  
	if (checking) {
		
		return (
			<div className='react-loading' >
				<ReactLoading type='spin' color='#0000FF' height={80} width={80} />
			</div>
		)

	}

  return (
    
    <BrowserRouter basename= { import.meta.env.DEV ? '/' : '/calendar-app-frontend/' } >



        <Routes>

            <Route path='/' element={ 
				<PrivateRoutes>
					<CalendarScreen /> 
				</PrivateRoutes>
			} />
            
            <Route path='/login' element={ 
				<PublicRoutes>
					<LoginScreen /> 
				</PublicRoutes>
			} />
            
			<Route path='/*' element = { <Navigate to='/' /> } />

        </Routes>
    
    </BrowserRouter>

  )
}
