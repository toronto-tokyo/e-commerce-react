import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import schema from './data/yupSchema';
import signUpCustomer from 'utils/authentication/singUpCustomer';

const useSignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = handleSubmit(async (formData) => {
    try {
      await signUpCustomer(formData);
    } catch (e) {}
  });

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
  };
};

export default useSignUpForm;
