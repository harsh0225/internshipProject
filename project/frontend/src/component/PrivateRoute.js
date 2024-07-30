import React from 'react'
import {Navigate } from 'react-router-dom';
import Login from '../pages/Login';

export const PrivateRoute = ({isLoggedIn,children}) => {
  
    if(isLoggedIn)
    {
        return children;
    }
    else
    {
        return  <Navigate to="/login"/>
    }
}
