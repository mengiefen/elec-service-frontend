import React from 'react';
import styles from './About.module.css';
import Container from '../elements/Container';
import Polygon from '../elements/Polygon';

const About = () => {
  return (
    <Container bg="bg-slate-900">
      <div
        className={`w-full min-h-screen ${styles.sampleBg} flex flex-col items-start`}
      >
        <h2 className="text-4xl font-bold text-yellow-400 self-center uppercase">
          About Us
        </h2>
        <div className="flex flex-col items-center">
          <div className="flex translate-y-1/2">
            <Polygon />
            <Polygon />
          </div>

          <div className="flex">
            <Polygon />
            <Polygon />
            <Polygon />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
