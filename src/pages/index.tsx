import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>M&Z Electrical Service</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="text-4xl text-slate-900 font-semibold text-center min-w-screen min-h-screen flex justify-center items-center">
          Front Page
        </div>
      </Layout>
    </div>
  );
};

export default Home;
