import React from 'react';
import IAuthErrorMessageProps from './AuthErrorMessage.interface';

const AuthErrorMessage: React.FC<IAuthErrorMessageProps> = ({ children }) => {
  return (
    <p className="text-center px-3 py-2 bg-red-300 text-red-950 border border-red-950 rounded">
      {children}
    </p>
  );
};

export default AuthErrorMessage;
