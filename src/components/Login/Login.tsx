import React, { useState } from 'react';
import Link from 'next/link';
import { FaUser, FaFacebookF, FaTwitter, FaGithub } from 'react-icons/fa';

import { FcGoogle } from 'react-icons/fc';
import { BsLockFill } from 'react-icons/bs';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  return (
    <div className="login-card">
      <div className="py-5 px-3 form">
        <h2 className="uppercase font-thin text-lg text-center">Welcome to</h2>
        <h1 className="text-2xl pb-10 text-center">
          <span className="block text-3xl font-bold text-yellow-600 ">
            M & Z
          </span>
          Services
        </h1>
        <div>
          <form className="login-form">
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="form-control"
                value={formData.email}
              />

              <FaUser className="form-icon" />
            </div>

            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
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
      <div className="login-right relative backdrop">
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
