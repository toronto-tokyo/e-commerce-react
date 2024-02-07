import React from 'react';
import ICollapsibleToggleIconProps from './CollapsibleToggleIcon.interface';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

const CollapsibleToggleIcon: React.FC<ICollapsibleToggleIconProps> = ({
  isOpen,
}) => {
  return (
    <div
      className={`
        w-6
        h-6
        flex
        items-center
        justify-center
      `}
    >
      <IoIosArrowDropdownCircle
        className={`text-blue-500 duration-200 ${isOpen ? 'rotate-180' : ''}`}
      />
    </div>
  );
};

export default CollapsibleToggleIcon;
