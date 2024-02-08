import React from 'react';
import { MdLogin } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import Navigation from 'components/Navigation';
import { AiOutlineHome } from 'react-icons/ai';
import Logo from 'components/Logo';
import NavLinkItem from 'components/NavLinkItem/NavLinkItem';
import useHeader from './Header.hook';
import NavButtonItem from 'components/NavButtonItem';
import { PiSignOutBold } from 'react-icons/pi';
import { HiOutlineShoppingBag } from 'react-icons/hi';

const Header: React.FC = () => {
  const { isLoggedIn, handleSignOut } = useHeader();

  const navigationLinksForNonAuthUser = [
    {
      key: 'home',
      element: (
        <NavLinkItem to="/">
          <AiOutlineHome className="text-red-500" />
          <span>Home</span>
        </NavLinkItem>
      ),
    },
    {
      key: 'catalog',
      element: (
        <NavLinkItem to="catalog">
          <HiOutlineShoppingBag className="text-violet-500" />
          <span>Catalog</span>
        </NavLinkItem>
      ),
    },
    {
      key: 'sign-in',
      element: (
        <NavLinkItem to="sign-in">
          <MdLogin className="text-emerald-500" />
          <span>Sign in</span>
        </NavLinkItem>
      ),
    },
    {
      key: 'sign-up',
      element: (
        <NavLinkItem to="sign-up">
          <FaRegUser className="text-amber-300" />
          <span>Sign up</span>
        </NavLinkItem>
      ),
    },
  ];

  const navigationLinksForAuthUser = [
    {
      key: 'home',
      element: (
        <NavLinkItem to="/">
          <AiOutlineHome className="text-red-500" />
          <span>Home</span>
        </NavLinkItem>
      ),
    },
    {
      key: 'catalog',
      element: (
        <NavLinkItem to="catalog">
          <HiOutlineShoppingBag className="text-violet-500" />
          <span>Catalog</span>
        </NavLinkItem>
      ),
    },
    {
      key: 'sign-out',
      element: (
        <NavButtonItem handleClick={handleSignOut}>
          <PiSignOutBold className="text-red-500" />
          <span>Sign out</span>
        </NavButtonItem>
      ),
    },
  ];

  return (
    <header className="bg-indigo-900">
      <div className="flex justify-between max-w-7xl min-h-14 px-3 m-auto">
        <Logo />
        <Navigation
          items={
            isLoggedIn
              ? navigationLinksForAuthUser
              : navigationLinksForNonAuthUser
          }
        ></Navigation>
      </div>
    </header>
  );
};

export default Header;
