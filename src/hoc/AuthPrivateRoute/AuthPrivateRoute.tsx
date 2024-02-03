import React from 'react';
import IAuthPrivateRouteProps from './AuthPrivateRoute.interface';
import useAuth from 'hook/useAuth';
import { Navigate } from 'react-router-dom';

const AuthPrivateRoute: React.FC<IAuthPrivateRouteProps> = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};

export default AuthPrivateRoute;
