import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import schema from './data/yupSchema';
import useAuth from 'hook/useAuth';
import useHandleSignInCustomer from 'hook/useHandleSignInCustomer';

const useSignInForm = () => {
  const { signInErrorMessage, setSignInErrorMessage } = useAuth();
  const handleSignInCustomer = useHandleSignInCustomer();

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

  const onSubmit = handleSubmit(
    async (formData) =>
      await handleSignInCustomer({
        credentials: formData,
        setErrorMessage: setSignInErrorMessage,
      })
  );

  return {
    formRegister,
    onSubmit,
    isValid,
    errors,
    signInErrorMessage,
  };
};

export default useSignInForm;
