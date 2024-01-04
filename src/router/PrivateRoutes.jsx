import { Navigate } from 'react-router-dom';
import React from 'react'
import { useSelector } from 'react-redux';

export default function PrivateRoutes( {children} ) {
  
    const { uid } = useSelector(state => state.auth)
    const isLoggedIn = (!!uid) ? true : false  
    
    return isLoggedIn
                ? children
                : <Navigate to={'/login'} />
    
  
}
