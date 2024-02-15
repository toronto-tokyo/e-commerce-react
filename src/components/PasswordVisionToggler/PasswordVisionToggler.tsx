import React from 'react';
import IPasswordVisionTogglerProps from './PasswordVisionToggler.interface';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordVisionToggler: React.FC<IPasswordVisionTogglerProps> = ({
  isVisible,
  handleClick,
}) => {
  return (
    <div
      className="select-none w-10 cursor-pointer flex items-center justify-center text-gray-600"
      onClick={handleClick}
    >
      {isVisible ? <FaEyeSlash /> : <FaEye />}
    </div>
  );
};

export default PasswordVisionToggler;
