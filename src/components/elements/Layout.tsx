import React from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <body className="relative">
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  );
};

export default Layout;
