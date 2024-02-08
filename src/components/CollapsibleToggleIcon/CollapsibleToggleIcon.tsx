import React from 'react';
import ICollapsibleToggleIconProps, {
  ColorMode,
} from './CollapsibleToggleIcon.interface';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

const CollapsibleToggleIcon: React.FC<ICollapsibleToggleIconProps> = ({
  isOpen,
  colorMode,
}) => {
  const colorModeIconStyles: Record<ColorMode, string> = {
    blue: 'text-blue-500',
    gray: 'text-gray-600',
  };

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
        className={`duration-200 ${colorMode && colorModeIconStyles[colorMode]} ${isOpen ? 'rotate-180' : ''}`}
      />
    </div>
  );
};

export default CollapsibleToggleIcon;
