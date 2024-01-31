import { createContext } from 'react';

interface IAuthContextData {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  authErrorMessage: string;
  setAuthErrorMessage: (authErrorMessage: string) => void;
}

const initialData = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  authErrorMessage: '',
  setAuthErrorMessage: () => {},
};

const AuthContext = createContext<IAuthContextData>(initialData);

export default AuthContext;
