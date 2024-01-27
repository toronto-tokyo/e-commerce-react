import React from 'react';

import useAuthInput from './AuthInput.hook';
import PasswordVisionToggler from 'components/PasswordVisionToggler';
import { IAuthInputProps } from './AuthInput.interface';

const AuthInput: React.FC<IAuthInputProps> = ({
  id,
  register,
  type,
  isInputValid,
}) => {
  const { inputType, showPassword, togglePasswordVisibility } = useAuthInput({
    type,
  });

  return (
    <div
      className={`flex rounded border-2 ${
        isInputValid ? 'border-gray-400' : 'border-red-500'
      }`}
    >
      <input
        className="outline-none px-3 py-2 grow"
        id={id}
        type={inputType}
        {...register}
      />
      {type === 'password' && (
        <PasswordVisionToggler
          isVisible={showPassword}
          handleClick={togglePasswordVisibility}
        />
      )}
    </div>
  );
};

export default AuthInput;
