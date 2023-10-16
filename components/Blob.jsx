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
  }, []);

  return (
    <div
      ref={blob}
      className="animate-rotate fixed -z-10 hidden aspect-[1] h-[600px] w-[600px] rounded-full bg-gradient-to-r blobGradient animate-spinBlob blur-[10px] dark:opacity-100 lg:block"
    ></div>
  );
};

export default Blob;
