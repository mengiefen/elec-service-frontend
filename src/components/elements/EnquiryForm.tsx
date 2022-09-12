import React from 'react';
import Image from 'next/image';

const EnquiryForm = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<any>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="relative flex items-center justify-between bg-gray-200 w-[80%] p-5 rounded shadow-red-300 shadow-md">
      <h2 className="absolute -top-1/4 -translate-y-1/2 p-2 left-0 w-2/6 bg-slate-600 text-white text-2xl rounded">
        Make an Enquiry
      </h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex items-center justify-between w-ful gap-2 w-full"
      >
        <input
          type="text"
          id="name"
          onChange={(e) => handleChange(e)}
          className="p-2 border-2 border-yellow-600 rounded-md focus:outline-none focus:border-slate-400 bg-slate-100 text-slate-800 "
          placeholder="Name"
        />
        <input
          type="tel"
          id="phone"
          onChange={(e) => handleChange(e)}
          className="p-2 border-2 border-yellow-600 rounded-md focus:outline-none focus:border-slate-400 bg-slate-100 text-slate-800 "
          placeholder="Your Phone"
        />

        <select className="p-2 border-2 border-yellow-600 rounded-md focus:outline-none focus:border-slate-400 bg-slate-100 text-slate-800 ">
          <option value="">Select Service</option>
          <option value="Electrical">Electrical</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Electrical and Plumbing">
            Electrical and Plumbing
          </option>
        </select>

        <button
          type="submit"
          className="bg-slate-800 text-white p-3 rounded-md px-10"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
