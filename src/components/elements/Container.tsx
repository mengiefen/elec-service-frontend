import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  bg?: string;
};

const Container = (props: ContainerProps) => {
  return (
    <section className={`px-10 pt-10 w-100 ${props.bg}`}>
      {props.children}
    </section>
  );
};

export default Container;
