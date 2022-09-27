import Link from 'next/link';
import React from 'react';

const BottomNav = () => {
  return (
    <nav className="nav-container">
      <h1 className="text-4xl font-bold text-purple-900">M & Z</h1>
      <ul
        className="nav justify-content-center mt-2 
      flex gap-5 h-15 items-center 
      justify-end "
      >
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link-custom">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/register">
            <a className="nav-link-custom">Register</a>
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link-custom " href="#">
            Services
          </a>
        </li>
        <li className="nav-item">
          <Link href="/testimonials">
            <a className="nav-link-custom ">About</a>
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link-custom " href="#">
            SignIn
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
