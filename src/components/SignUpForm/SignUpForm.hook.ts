import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import schema from './data/yupSchema';
import signUpCustomer from 'utils/authentication/singUpCustomer';
import useAuth from 'hook/useAuth';

const useSignUpForm = () => {
  const { setSignUpErrorMessage, signUpErrorMessage } = useAuth();
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
    } catch (e) {
      if (e instanceof Error && e.message === '400') {
        setSignUpErrorMessage(
          'There is already an existing customer with the provided email.'
        );
      } else {
        setSignUpErrorMessage('Something went wrong. Try later');
      }
    }
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
    signUpErrorMessage,
  };
};

export default useSignUpForm;
