import Link from 'next/link';
import React from 'react';
import { DatePicker } from 'antd';
import Form from '../../components/elements/Form';
import 'antd/dist/antd.css';
import CustomCarousel from '../../components/elements/CustomCarousel';

const register = () => {
  return (
    <div>
      <h1>register</h1>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Form />

      <CustomCarousel />
    </div>
  );
};

export default register;
