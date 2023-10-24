"use client";

import React, { use, useEffect, useRef, useState } from "react";

export const Blob = () => {
  const blob = useRef(null);

  // current mouse position
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  useEffect(() => {
    // get window size
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // set blob position to center of screen
    window.onload = () => {
      blob.current.style = `top: ${windowWidth / 2 - 300}px; left: ${
        windowHeight / 2 - 300
      }px;`;
    };

    // move blob on mouse move
    document.body.onpointermove = (event) => {
      setClientX(event.clientX);
      setClientY(event.clientY);
      blob.current.style = `top: ${windowWidth / 2 - 300}px; left: ${
        windowHeight / 2 - 300
      }px;`;
      blob.current.style.transform = `translate(${
        event.clientX - windowHeight / 2
      }px, ${event.clientY - windowWidth / 2}px)`;
    };
  }, []);

  return (
    <div className="-z-00 fixed top-0 hidden h-[100vh] w-[100vw] overflow-hidden lg:block">
      <div className="fiexd top-0 z-20 hidden h-[100vh] w-[100vw] overflow-hidden backdrop-blur-[10vmax] backdrop-filter lg:block"></div>

      <div
        ref={blob}
        className="absolute top-1/2  left-1/2 -z-10 hidden aspect-[1] w-[600px] -translate-x-1/2 -translate-y-1/2 transform duration-1000 ease-out lg:block"
      >
        <div className="animate-spinBlob blobGradient h-full w-full rounded-full bg-green"></div>
      </div>
    </div>
  );
};

export default Blob;
