import React from 'react';
import INavigationProps from './Navigation.interface';
import NavListItem from 'components/NavListItem';

const Navigation: React.FC<INavigationProps> = ({ items }) => {
  return (
    <nav>
      <ul className="flex h-full">
        {items.map((item) => (
          <NavListItem key={item.key}>{item.element}</NavListItem>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
