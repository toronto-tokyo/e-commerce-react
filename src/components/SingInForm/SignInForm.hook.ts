import { yupResolver } from '@hookform/resolvers/yup';
import schema from './data/yupSchema';
import { useForm } from 'react-hook-form';
import useAuth from 'hook/useAuth';
import authPasswordFlow from 'utils/authentication/authPasswordFlow';
import loginCustomer from 'utils/authentication/loginCustomer';

const useSignInForm = () => {
  const { authErrorMessage, setAuthErrorMessage, setIsLoggedIn } = useAuth();
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const formRegister = {
    email: register('email'),
    password: register('password'),
  };

  const onSubmit = handleSubmit(async (formData) => {
    try {
      await loginCustomer({
        email: formData.email,
        password: formData.password,
      });
      await authPasswordFlow({
        email: formData.email,
        password: formData.password,
      });
      setIsLoggedIn(true);
    } catch (e) {
      if (e instanceof Error && e.message === '400') {
        setAuthErrorMessage('Failed to sign in: invalid email or/and password');
      }
    }
  });

  return {
    formRegister,
    onSubmit,
    isValid,
    errors,
    authErrorMessage,
  };
};

export default useSignInForm;
