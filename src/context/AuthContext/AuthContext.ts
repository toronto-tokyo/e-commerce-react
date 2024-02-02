import { createContext } from 'react';

interface IAuthContextData {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  signInErrorMessage: string;
  setSignInErrorMessage: (authErrorMessage: string) => void;
  signUpErrorMessage: string;
  setSignUpErrorMessage: (signUpErrorMessage: string) => void;
}

const initialData = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  signInErrorMessage: '',
  setSignInErrorMessage: () => {},
  signUpErrorMessage: '',
  setSignUpErrorMessage: () => {},
};

const AuthContext = createContext<IAuthContextData>(initialData);

export default AuthContext;
