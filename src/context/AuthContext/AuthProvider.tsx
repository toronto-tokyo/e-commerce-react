import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import authAnonymFlow from 'utils/authentication/authAnonymFlow';
import isCustomerLoggedIn from 'utils/authentication/isCusromerLoggedIn';

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signInErrorMessage, setSignInErrorMessage] = useState<string>('');
  const [signUpErrorMessage, setSignUpErrorMessage] = useState<string>('');

  useEffect(() => {
    (async () => {
      if (!(await isCustomerLoggedIn())) {
        await authAnonymFlow();
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    })();
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        signInErrorMessage,
        setSignInErrorMessage,
        signUpErrorMessage,
        setSignUpErrorMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
