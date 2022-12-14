import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../firebase/auth';

export function ProtectedRoute() {
  const { user } = useAuth()
  
  return (
    user ? <Outlet /> : <Navigate to="/signup" />
  )
}


