import useAuth from 'hook/useAuth';
import React from 'react';
import { MdLogin } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import NavListItem from 'components/NavListItem';
import Navigation from 'components/Navigation';
import { AiOutlineHome } from 'react-icons/ai';
import Logo from 'components/Logo';

const Header: React.FC = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className="bg-indigo-900">
      <div className="flex justify-between max-w-7xl min-h-14 px-3 m-auto">
        <Logo />
        <Navigation>
          <NavListItem to="/">
            <AiOutlineHome className="text-red-500" />
            <span>Home</span>
          </NavListItem>
          {!isLoggedIn && (
            <>
              <NavListItem to="sign-in">
                <MdLogin className="text-emerald-500" />
                <span>Sign in</span>
              </NavListItem>
              <NavListItem to="sign-up">
                <FaRegUser className="text-amber-300" />
                <span>Sign up</span>
              </NavListItem>
            </>
          )}
        </Navigation>
      </div>
    </header>
  );
};

export default Header;
