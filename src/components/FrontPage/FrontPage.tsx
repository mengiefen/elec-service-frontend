import React from 'react';
import EnquiryForm from '../elements/EnquiryForm';
import Image from 'next/image';
import Container from '../elements/Container';

const FrontPage = () => {
  return (
    <Container bg="bg-gray-50">
      <div className="flex flex-col mt-32 max-w-full h-[80%] max-h-screen bg-white-200">
        <div className="h-[100%] flex justify-between items-center ">
          <div className="w-1/2">
            <h1 className="text-6xl text-slate-90000 font-bold pb-10 ">
              M & Z Electrical Service
            </h1>
            <p className="text-slate-700 text-lg">
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
      </div>
    </Container>
  );
};

export default FrontPage;
