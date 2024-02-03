import React from 'react';
import INavLinkItemProps from './NavLinkItem.interface';
import { NavLink } from 'react-router-dom';

const NavLinkItem: React.FC<INavLinkItemProps> = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className="text-white flex items-center gap-2 p-3 aria-[current=page]:bg-blue-500"
    >
      {children}
    </NavLink>
  );
};

export default NavLinkItem;
