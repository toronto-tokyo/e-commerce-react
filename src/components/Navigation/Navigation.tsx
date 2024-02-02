import React from 'react';
import INavigationProps from './Navigation.interface';

const Navigation: React.FC<INavigationProps> = ({ children }) => {
  return (
    <nav>
      <ul className="flex h-full">{children}</ul>
    </nav>
  );
};

export default Navigation;
