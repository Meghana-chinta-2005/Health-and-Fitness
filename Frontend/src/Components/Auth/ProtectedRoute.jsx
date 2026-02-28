import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children }) => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('token');

  useEffect(() => {
    if (!isAuthenticated && !shouldRedirect) {
      toast.error('Please login😊', {
        toastId: 'auth-error', // This prevents duplicate toasts
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
      });
      setShouldRedirect(true);
    }
  }, [isAuthenticated, shouldRedirect]);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;