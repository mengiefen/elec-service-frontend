import Link from "next/link";
import React from "react";
import DateTime from "../../components/elements/DateTime";

const register = () => {
  return (
    <div className="bg-slate-200 min-h-screen ">
      <h1>register</h1>
      <Link href="/">
        <a>Home</a>
      </Link>

      <DateTime />
    </div>
  );
};

export default register;
