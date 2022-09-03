import React from 'react';
import ServiceCard from './elements/ServiceCard';

const Services = () => {
  return (
    <section className="flex item-center w-full min-h-screen mt-2">
      <ServiceCard
        title={'Excellent Design Team'}
        imageUrl={'/images/design2.png'}
      />
      <ServiceCard
        title="Skilled Professionals"
        imageUrl={'/images/person2.png'}
      />
      <ServiceCard
        title="Quality Workmanship"
        imageUrl={'/images/person.png'}
      />
    </section>
  );
};

export default Services;
