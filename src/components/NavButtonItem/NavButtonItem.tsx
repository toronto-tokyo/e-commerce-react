import React from 'react';
import INavButtonItemProps from './NavButtonItem.interface';

const NavButtonItem: React.FC<INavButtonItemProps> = ({
  handleClick,
  children,
}) => {
  return (
    <button
      onClick={handleClick}
      className="text-red-500 flex items-center gap-2 p-3"
    >
      {children}
    </button>
  );
};

export default NavButtonItem;
