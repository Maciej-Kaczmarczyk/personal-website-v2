import React from "react";

const BgGradient = ({ className }) => {
  return (
    <div
      className={`absolute bottom-40 right-0 -z-10 aspect-square w-[25vw] transform-gpu rounded-full bg-blue blur-[70px] dark:opacity-70 sm:blur-[100px] md:top-10 lg:blur-[200px] ${className}`}
    ></div>
  );
};

export default BgGradient;
