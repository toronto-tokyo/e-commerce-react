import React from 'react';
import IAuthInputBlockProps from './AuthInputBlock.interface';
import AuthInput from 'components/AuthInput/AuthInput';

const AuthInputBlock: React.FC<IAuthInputBlockProps> = ({
  id,
  label,
  register,
  type,
  error,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-2 pl-1">
        {label}
      </label>
      <AuthInput
        isInputValid={!error}
        id={id}
        type={type}
        register={register}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default AuthInputBlock;
