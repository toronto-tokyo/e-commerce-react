import { useState } from 'react';
import { IUseAuthInput } from './AuthInput.interface';

const useAuthInput = ({ type }: IUseAuthInput) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
    setInputType((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  return {
    inputType,
    showPassword,
    togglePasswordVisibility,
  };
};

export default useAuthInput;
