import React from 'react';
import styles from './Shape2.module.css';

type ShapeProps = {
  color?: string;
};

const Shape2 = (props: ShapeProps) => {
  return (
    <div className="w-full flex items-center justify-center ">
      <div
        className=" w-3/4 my-2 h-[200px] relative flex 
      items-center justify-center overflow-hidden "
      >
        <div
          className="w-full h-2/3 bg-slate-900 
        z-10 -translate-x-28 rounded-md
         text-white text-3xl flex justify-center items-center"
        >
          Sample Shape
        </div>
        <div
          className="absolute right-[170px] top-25 w-[100px] h-[225px]
           bg-yellow-700 z-0 
        rounded-[30px] -rotate-3"
        ></div>
        <div
          className={`absolute top-0 right-0 h-[200px] bg-yellow-500 w-[150px] z-20 
          ${styles.trapezoidTop}`}
        ></div>
        <div
          className={`absolute bottom-0 right-0 h-[200px] bg-yellow-600 w-[150px] z-20 
        ${styles.trapezoidBottom}`}
        ></div>
      </div>
    </div>
  );
};

export default Shape2;
