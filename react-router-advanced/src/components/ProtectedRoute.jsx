import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from './hooks/useAuth';  // Import the useAuth hook

const ProtectedRoute = ({ children, isAuthenticated }) => {
    const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;