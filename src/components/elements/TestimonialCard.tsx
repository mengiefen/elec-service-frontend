import Image from 'next/image';
import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';
import { BsStarFill } from 'react-icons/bs';

const TestimonialCard = () => {
  return (
    <div
      className="flex justify-between w-[700px] 
    h-[320px] border border-yellow-300 rounded-lg shadow-2xl mx-auto translate-y-1/4
    overflow-hidden border-l-[16px] border-l-yellow-600 bg-gray-100"
    >
      <div className="flex flex-col gap-2  w-[60%] p-2">
        <div>
          <ImQuotesLeft className="text-4xl text-yellow-600" />
          <h2 className="pl-5 text-2xl font-semibold">
            Fast, Excellent, and Durable Service!
          </h2>
        </div>
        <div className="flex gap-1 pl-5  pb-5">
          <BsStarFill className="text-yellow-600" />
          <BsStarFill className="text-yellow-600" />
          <BsStarFill className="text-yellow-600" />
          <BsStarFill className="text-yellow-600" />
          <BsStarFill className="text-yellow-600" />
        </div>

        <p className="pl-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
          corrupti quos cupiditate quod vero non molestiae possimus, et quis
          eveniet dignissimos veritatis...
        </p>

        <div className="ml-auto  border-l-4 border-yellow-600 px-2">
          <h3 className="text-sm font-semibold">Joel Doe</h3>
          <p className="text-gray-500 text-sm">CEO, ABC Company</p>
        </div>
      </div>
      <div className="w-[40%] testimonial-image">
        <Image src="/images/1.png" width={300} height={600} alt="testimonial" />
      </div>
    </div>
  );
};

export default TestimonialCard;
