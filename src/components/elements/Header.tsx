import React from 'react';
import BottomNav from './BottomNav';
import TopNav from './TopNav';

const Header = () => {
  return (
    <header className="w-[100vw] z-10">
      <TopNav />
      <BottomNav />
    </header>
  );
};

export default Header;
