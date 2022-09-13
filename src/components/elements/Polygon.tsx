import React from "react";
import styles from "./Polygon.module.css";

const Polygon = () => {
  return (
    <div
      className={`${styles.polygon} flex items-center justify-center border-[20px] border-red-700
       bg-yellow-600 w-[300px] h-[300px] hover:bg-slate-300 shadow-md shadow-yellow-700`}
    >
      <h1 className="text-slate-900 text-3xl">Content</h1>
    </div>
  );
};

export default Polygon;
