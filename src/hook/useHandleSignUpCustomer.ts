import signUpCustomer, {
  ISignUpCustomerParams,
} from 'utils/authentication/singUpCustomer';
import authPasswordFlow from 'utils/authentication/authPasswordFlow';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import signInCustomer from 'utils/authentication/signInCustomer';

interface IHandleSignUpCustomerParams {
  customerData: ISignUpCustomerParams;
  setErrorMessage: (errorMessage: string) => void;
}

const useHandleSignUpCustomer = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  return async ({
    customerData,
    setErrorMessage,
  }: IHandleSignUpCustomerParams) => {
    try {
      await signUpCustomer(customerData);
    } catch (e) {
      if (e instanceof Error && e.message === '400') {
        setErrorMessage(
          'There is already an existing customer with the provided email.'
        );
      } else {
        setErrorMessage('Something went wrong. Try later');
      }
      return;
    }

    const credentials = {
      email: customerData.email,
      password: customerData.password,
    };

    try {
      await authPasswordFlow({
        email: credentials.email,
        password: credentials.password,
      });
      await signInCustomer({
        email: credentials.email,
        password: credentials.password,
      });
      setIsLoggedIn(true);
      navigate('/');
    } catch (e) {
      if (e instanceof Error && e.message === '400') {
        setErrorMessage('Failed to login');
      } else {
        setErrorMessage('Something went wrong. Try later');
      }
    }
  };
};

export default useHandleSignUpCustomer;
