import signInCustomer, {
  ISignInCustomerParams,
} from 'utils/authentication/signInCustomer';
import useAuth from './useAuth';
import authPasswordFlow from 'utils/authentication/authPasswordFlow';
import { useNavigate } from 'react-router-dom';

interface IHandleSignInCustomerParams {
  credentials: ISignInCustomerParams;
  setErrorMessage: (errorMessage: string) => void;
}

const useHandleSignInCustomer = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  return async ({
    credentials,
    setErrorMessage,
  }: IHandleSignInCustomerParams) => {
    try {
      await signInCustomer({
        email: credentials.email,
        password: credentials.password,
      });
      await authPasswordFlow({
        email: credentials.email,
        password: credentials.password,
      });
      setIsLoggedIn(true);
      navigate('/');
    } catch (e) {
      if (e instanceof Error && e.message === '400') {
        setErrorMessage('Failed to sign in: invalid email or/and password');
      } else {
        setErrorMessage('Something went wrong. Try later');
      }
    }
  };
};

export default useHandleSignInCustomer;
