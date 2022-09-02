import React from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="mx-10 mt-10 min-w-[100vh]">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
