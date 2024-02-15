import React from 'react';
import { IAuthSubmitBtnProps } from './AuthSubmitBtn.interface';

const AuthSubmitBtn: React.FC<IAuthSubmitBtnProps> = ({
  children,
  disabled,
  className,
}) => {
  return (
    <button
      className={`
        bg-blue-500 
        text-lg 
        text-white 
        tracking-wider 
        rounded-md 
        px-5
        py-2 
        ${className}`}
      type="submit"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default AuthSubmitBtn;
