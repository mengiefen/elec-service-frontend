import React, { useEffect, useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import { FaUser, FaFacebookF, FaTwitter, FaGithub } from 'react-icons/fa';

import { FcGoogle } from 'react-icons/fc';
import { BsLockFill } from 'react-icons/bs';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [move, setMove] = useState({
    email: '',
    password: '',
  });

  const moveLabelToTop = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name === 'email' || e.target.value !== '') {
      setMove({
        ...move,
        email: 'move-top',
      });
    }
    if (e.target.name === 'password' || e.target.value !== '') {
      setMove({
        ...move,
        password: 'move-top',
      });
    }
  };

  const moveLabelToBottom = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name === 'email' && e.target.value === '') {
      setMove({
        ...move,
        email: '',
      });
    }

    if (e.target.name === 'password' && e.target.value === '') {
      setMove({
        ...move,
        password: '',
      });
    }
  };

  return (
    <div className="login-card">
      <div className="p-5 form">
        <h2 className="uppercase font-light text-md text-center">Welcome to</h2>
        <h1 className="text-2xl pb-3 text-center">
          <span className="block text-3xl font-bold text-yellow-600 ">
            M & Z
          </span>
          Services
        </h1>
        <p className="pb-5 font-light text-sm text-center">
          Login to get all our services
        </p>

        <div>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email" className={`form-label ${move.email}`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
                onFocus={(e) => moveLabelToTop(e)}
                onBlur={(e) => moveLabelToBottom(e)}
                className="form-control"
                value={formData.email}
              />

              <FaUser className="form-icon" />
            </div>

            <div className="form-group">
              <label
                htmlFor="password"
                className={`form-label ${move.password}`}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                }}
                onFocus={(e) => moveLabelToTop(e)}
                onBlur={(e) => moveLabelToBottom(e)}
                className="form-control"
                value={formData.password}
              />

              <BsLockFill className="form-icon" />
            </div>

            <button type="submit" className="btn-submit">
              SIGN IN
            </button>
            <p className="text-sm py-5">
              Don&apos;t have an account?{' '}
              <Link href="/register">
                <a className="btn-link">Sign Up</a>
              </Link>
            </p>
          </form>
          <div>
            <p className="text-center font-thin text-lg text-yellow-800">
              Or Sign in with
            </p>
            <div className="social-icons">
              <button type="button" className="btn-social">
                <FcGoogle className="social-icon google" />
              </button>
              <button type="button" className="btn-social">
                <FaFacebookF className="social-icon facebook" />
              </button>

              <button type="button" className="btn-social">
                <FaTwitter className="social-icon twitter" />
              </button>
              <button type="button" className="btn-social github">
                <FaGithub className="social-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="login-right relative backdrop hidden md:flex">
        <div className="text-center flex flex-col gap-11 h-full w-full items-center justify-center z-10">
          <h1 className="text-4xl capitalize font-thin">
            <span className="block text-5xl font-bold">M & Z</span>
            Services
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
            voluptatum quos quidem natus quas. Quisquam, quae. Quisquam, quae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
