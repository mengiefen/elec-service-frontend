import React from "react";
import ServiceCard from "../elements/ServiceCard";
import Container from "../elements/Container";

const Services = () => {
  return (
    <Container>
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-4xl font-bold uppercase text-yellow-900">
          Our Services
        </h2>
        <div className="flex flex-col md:flex-row item-center w-full min-h-screen mt-10">
          <ServiceCard
            title={"Excellent Design Team"}
            imageUrl={"/images/design2.png"}
          />
          <ServiceCard
            title="Skilled Professionals"
            imageUrl={"/images/person2.png"}
          />
          <ServiceCard
            title="Quality Workmanship"
            imageUrl={"/images/person.png"}
          />
        </div>
        <p className="text-xl py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </div>
    </Container>
  );
};

export default Services;
