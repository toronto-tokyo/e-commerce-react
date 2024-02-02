import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import schema from './data/yupSchema';
import useAuth from 'hook/useAuth';
import useHandleSignUpCustomer from 'hook/useHandleSignUpCustomer';

const useSignUpForm = () => {
  const { setSignUpErrorMessage, signUpErrorMessage } = useAuth();
  const handleSignUpCustomer = useHandleSignUpCustomer();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = handleSubmit(
    async (formData) =>
      await handleSignUpCustomer({
        customerData: formData,
        setErrorMessage: setSignUpErrorMessage,
      })
  );

  const formRegister = {
    email: register('email'),
    password: register('password'),
    confirmPassword: register('confirmPassword'),
    firstName: register('firstName'),
    lastName: register('lastName'),
    dateOfBirth: register('dateOfBirth'),
  };

  return {
    formRegister,
    onSubmit,
    errors,
    isValid,
    signUpErrorMessage,
  };
};

export default useSignUpForm;
