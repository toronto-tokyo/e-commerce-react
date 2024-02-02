import React from 'react';
import INavListItemProps from './NavListItem.interface';
import { NavLink } from 'react-router-dom';

const NavListItem: React.FC<INavListItemProps> = ({ to, children }) => {
  return (
    <li className="flex">
      <NavLink
        to={to}
        className="text-white flex items-center gap-2 p-3 aria-[current=page]:bg-blue-500"
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavListItem;
