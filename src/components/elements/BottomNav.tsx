import React from 'react';

const BottomNav = () => {
  return (
    <nav
      className="fixed left-[10%] top-10 z-11 w-4/5 h-20 mx-auto
    shadow-lg py-2 px-10 rounded  bg-yellow-100 flex justify-between items-center"
    >
      <h1 className="text-4xl font-bold text-purple-900">M & Z</h1>
      <ul
        className="nav justify-content-center mt-2 
      flex gap-5 h-15 items-center 
      justify-end "
      >
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">
            Disabled
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
