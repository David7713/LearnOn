import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <Route
      {...rest}
      element={isLoggedIn ? element : <Navigate to="/login" />}
    />
  );
};

export default ProtectedRoute;
