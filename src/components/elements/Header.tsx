import React from "react";
import BottomNav from "./BottomNav";
import TopNav from "./TopNav";

const Header = () => {
  return (
    <header className="w-[100vw]">
      <TopNav />
      <BottomNav />
    </header>
  );
};

export default Header;
