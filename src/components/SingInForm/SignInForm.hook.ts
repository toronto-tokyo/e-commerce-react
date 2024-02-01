import { yupResolver } from '@hookform/resolvers/yup';
import schema from './data/yupSchema';
import { useForm } from 'react-hook-form';
import useAuth from 'hook/useAuth';
import authPasswordFlow from 'utils/authentication/authPasswordFlow';
import loginCustomer from 'utils/authentication/loginCustomer';
import { useNavigate } from 'react-router-dom';

const useSignInForm = () => {
  const { signInErrorMessage, setSignInErrorMessage, setIsLoggedIn } =
    useAuth();
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const navigate = useNavigate();

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
      navigate('/');
    } catch (e) {
      if (e instanceof Error && e.message === '400') {
        setSignInErrorMessage(
          'Failed to sign in: invalid email or/and password'
        );
      } else {
        setSignInErrorMessage('Something went wrong. Try later');
      }
    }
  });

  return {
    formRegister,
    onSubmit,
    isValid,
    errors,
    signInErrorMessage,
  };
};

export default useSignInForm;
