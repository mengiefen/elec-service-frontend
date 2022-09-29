import Link from 'next/link';
import React from 'react';
import DateTime from '../../components/elements/DateTime';
import Layout from '../../components/elements/Layout';

const register = () => {
  return (
    <Layout>
      <div className="bg-slate-200 min-h-screen flex justify-center items-center flex-col">
        <DateTime />
      </div>
    </Layout>
  );
};

export default register;
