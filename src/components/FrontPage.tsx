import React from 'react';
import EnquiryForm from './EnquiryForm';
import Image from 'next/image';

const FrontPage = () => {
  return (
    <section className="flex flex-col mt-32 h-[80%] max-h-screen bg-yellow-300">
      <div className="h-[100%] flex justify-between items-center ">
        <div className="w-1/2">
          <h1 className="text-6xl text-slate-900 font-bold pb-10 ">
            M & Z Electrical Service
          </h1>
          <p className="text-yellow-900 text-lg">
            We are a family run electrical service company based in the
            surrounding area. We offer a wide range of services including
            electrical, plumbing, and electrical and plumbing repairs.
          </p>
        </div>
        <Image
          src="/images/front.png"
          width={500}
          height={520}
          alt="electrician"
        />
      </div>
      <EnquiryForm />
    </section>
  );
};

export default FrontPage;
