import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Link to="/">
        <h1 className="text-amber-300 text-3xl font-bold tracking-wide">
          Closet
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
