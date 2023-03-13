import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Blob from "../components/Blob";

const works = () => {
  return (
    <>
      <Navbar />
      <div className="-z-00 absolute top-0 h-[2000px] w-[100vw] overflow-hidden">
        <div className="absolute top-0 z-20 hidden h-[2000px] w-[100vw] overflow-hidden mix-blend-screen backdrop-blur-[10vmax] backdrop-filter lg:block"></div>
        <Blob />
      </div>
    </>
  );
};

export default works;
