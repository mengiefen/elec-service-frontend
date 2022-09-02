import React from 'react';
import { TbClock } from 'react-icons/tb';
import { GoLocation } from 'react-icons/go';
import { AiOutlineShoppingCart, AiOutlinePhone } from 'react-icons/ai';

const TopNav = () => {
  return (
    <div className="w-[100vw] fixed top-0 left-0 h-12 bg-slate-900 flex justify-between items-center px-20 z-11">
      <div className="flex gap-5 items-center">
        <GoLocation className="text-2xl text-yellow-600" />
        <span className="text-yellow-200">Jimma, Ethiopia </span>
      </div>
      <div className="flex gap-5 items-center">
        <TbClock className="text-2xl text-yellow-600" />
        <span className="text-yellow-200">Mon-Fri 08:00 AM - 05:00 PM</span>
      </div>
      <div className="flex gap-5 items-center">
        <AiOutlinePhone className="text-2xl text-yellow-600" />
        <span className="text-yellow-200">(+251) 855-45-56-56</span>
      </div>
      <AiOutlineShoppingCart className="text-3xl text-yellow-600" />
    </div>
  );
};

export default TopNav;
