import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaAddressBook,
  FaInstagramSquare,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative flex w-100 h-[200px] px-5  bg-slate-700 justify-between items-center">
      <div
        className="absolute -top-[50%] left-[50%] w-[50%] px-3  gap-3
       h-[50%] -translate-x-[50%] translate-y-[50%] bg-yellow-600 rounded flex items-center justify-center"
      >
        <span className="text-3xl text-slate-100">
          Want to know our services?
        </span>
        <button
          className=" text-slate-200 border-2 border-slate-200 
          p-2 rounded-md px-10 flex gap-2 items-center hover:bg-slate-200 hover:text-yellow-700  "
        >
          <FaPhone /> 7078
        </button>
      </div>

      <div className="flex gap-2 h-[50%] items-center">
        <FaFacebookSquare className="footer-social-icon" />
        <FaTwitterSquare className="footer-social-icon " />
        <FaInstagramSquare className="footer-social-icon" />
        <FaLinkedin className="footer-social-icon" />
      </div>
      <div className="">
        <p className="text-slate-100 text-center">
          &copy; 2022 All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
