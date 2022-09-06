import React from 'react';
import Shape2 from '../elements/Shape2';

const Shape = () => {
  return (
    <section className="flex flex-col gap-10">
      <Shape2 />
      <Shape2 color="pink" />
      <Shape2 color="cyan" />
    </section>
  );
};

export default Shape;
