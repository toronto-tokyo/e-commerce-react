import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import schema from './data/yupSchema';

const useSignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  const formRegister = {
    email: register('email'),
    password: register('password'),
    firstName: register('firstName'),
    lastName: register('lastName'),
  };

  return {
    formRegister,
    onSubmit,
    errors,
    isValid,
  };
};

export default useSignUpForm;
