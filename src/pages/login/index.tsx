import React from 'react';
import Login from '../../components/Login/Login';
import Layout from '../../components/elements/Layout';

const SignIn = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen w-screen mt-12">
        <Login />
      </div>
    </Layout>
  );
};

export default SignIn;
