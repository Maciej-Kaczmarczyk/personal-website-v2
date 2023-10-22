"use client";

import React, { useEffect, useRef } from "react";

export const Blob = () => {
  const blob = useRef("blob");

  useEffect(() => {
    window.onpointermove = (event) => {
      const { clientX, clientY } = event;

      blob.current.animate(
        {
          left: `${clientX - 300}px`,
          top: `${clientY - 300}px`,
        },
        { duration: 10000, fill: "forwards" }
      );
    };
  }, [blob.current]);

  return (
    <div className="-z-00 absolute top-0 hidden h-[3000px] w-[100vw] overflow-hidden lg:block">
      <div className="absolute top-0 z-20 hidden h-[3000px] w-[100vw] overflow-hidden backdrop-blur-[10vmax] backdrop-filter lg:block"></div>
      <div
        ref={blob}
        className="blobGradient animate-spinBlob fixed -z-10 hidden aspect-[1] w-[600px] rounded-full lg:block"
      ></div>
    </div>
  );
};

export default Blob;
