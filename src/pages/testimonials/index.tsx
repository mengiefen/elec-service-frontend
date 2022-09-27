import TestimonialCard from '../../components/elements/TestimonialCard';
import Layout from '../../components/elements/Layout';

import React from 'react';

const Testimonial = () => {
  return (
    <Layout>
      <div className="testimonial relative">
        <h4 className="text-3xl uppercase pl-5">Testimonials</h4>
        <TestimonialCard />
      </div>
    </Layout>
  );
};

export default Testimonial;
