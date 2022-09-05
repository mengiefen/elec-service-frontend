import React from 'react';
import styles from './Shape2.module.css';

const Shape2 = () => {
  return (
    <div className="w-full flex items-center justify-center ">
      <div
        className=" w-3/4 my-2 h-[400px] bg-emerald-700 relative flex 
      items-center justify-center  "
      >
        <div className="w-full h-2/3 bg-pink-900 z-10"></div>
        <div
          className="absolute right-0 top-25 w-[200px] h-[350px] bg-red-900 z-0 
        rounded-[30px]"
        ></div>
        <div
          className={`absolute top-0 right-0 h-[200px] bg-slate-800 w-[150px] z-20 
          ${styles.trapezoidTop}`}
        ></div>
        <div
          className={`absolute bottom-0 right-0 h-[200px] bg-slate-900 w-[150px] z-20 
        ${styles.trapezoidBottom}`}
        ></div>
      </div>
    </div>
  );
};

export default Shape2;
