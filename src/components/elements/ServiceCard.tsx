import React from "react";
import Image from "next/image";
import styles from "./ServiceCard.module.css";

type ServiceCardProps = {
  imageUrl?: string;
  title?: string;
  description?: string;
  color?: string;
  borderColor?: string;
  bgColor?: string;
};

const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div
      className={`${styles.diamondCard} flex flex-col items-center p-2 bg-gray-200 gap-2 border-8 border-slate-500 rounded-md shadow-md shadow-yellow-300`}
    >
      <Image
        src={props.imageUrl || "/images/design.png"}
        alt="Picture of the author"
        width={250}
        height={250}
      />
      <h2 className="text-2xl text-slate-800 font-bold text-center">
        {props.title || "Electrical Services"}
      </h2>
      <p className="text-slate-800 text-center pt-2">
        {props.description ||
          "We offer a wide range of services including electrical, plumbing, and electrical and plumbing repairs."}
      </p>
    </div>
  );
};

export default ServiceCard;
