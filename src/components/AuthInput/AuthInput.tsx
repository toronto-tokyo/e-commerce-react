import React from 'react';
import IAuthInputProps from './AuthInput.interface';

const AuthInput: React.FC<IAuthInputProps> = ({
  id,
  register,
  type,
  isInputValid,
}) => {
  const className = `outline-none rounded border-2  px-3 py-2 ${
    isInputValid ? 'border-gray-400' : 'border-red-500'
  }`;

  return <input className={className} id={id} type={type} {...register} />;
};

export default AuthInput;
