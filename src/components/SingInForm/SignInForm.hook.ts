import { yupResolver } from '@hookform/resolvers/yup';
import schema from './data/yupSchema';
import { useForm } from 'react-hook-form';

const useSignInForm = () => {
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
    console.log(formData);
  });

  return {
    formRegister,
    onSubmit,
    isValid,
    errors,
  };
};

export default useSignInForm;
