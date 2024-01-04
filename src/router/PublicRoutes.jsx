import { Navigate } from 'react-router-dom';
import React from 'react'
import { useSelector } from 'react-redux';

export const PublicRoutes = ( {children} )=>{

    const { uid } = useSelector(state => state.auth)
    const isLoggedIn = (!!uid) ? true : false  

    return isLoggedIn
                ? <Navigate to={'/'} />
                : children
}