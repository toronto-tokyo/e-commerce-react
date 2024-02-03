import React from 'react';
import INavListItemProps from './NavListItem.interface';

const NavListItem: React.FC<INavListItemProps> = ({ children }) => {
  return <li className="flex">{children}</li>;
};

export default NavListItem;
