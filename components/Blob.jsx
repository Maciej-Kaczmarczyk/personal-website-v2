import React, { useEffect, useRef, useState } from "react";
import Bowser from "bowser";

export const Blob = () => {
  const blob = useRef(null);

  // Perform the browser check outside of useEffect
  const [isChromium, setIsChromium] = useState(false);

  useEffect(() => {
    setIsChromium(
      typeof window !== "undefined" &&
        Bowser.getParser(window.navigator.userAgent).parsedResult.engine
          .name === "Blink"
    );

    // Don't execute the rest of the code if not Chromium
    if (!isChromium) {
      return;
    }

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
      blob.current.style = `top: ${windowWidth / 2 - 300}px; left: ${
        windowHeight / 2 - 300
      }px;`;
      blob.current.style.transform = `translate(${
        event.clientX - windowHeight / 2
      }px, ${event.clientY - windowWidth / 2}px)`;
    };
  }, [isChromium]);

  // Render the blob conditionally
  if (!isChromium) {
    return null; // Don't render anything if not Chromium
  }

  return (
    <div className="-z-00 fixed top-0 hidden h-[100vh] w-[100vw] overflow-hidden lg:block">
      <div className="fiexd top-0 z-20 hidden h-[100vh] w-[100vw] overflow-hidden backdrop-blur-[10vmax] backdrop-filter lg:block"></div>

      <div
        ref={blob}
        className="dynamicElement absolute top-1/2 left-1/2 -z-10 hidden aspect-[1] w-[600px] -translate-x-1/2 -translate-y-1/2 transform duration-1000 ease-out lg:block"
      >
        <div className="dynamicElement animate-spinBlob blobGradient h-full w-full rounded-full bg-green"></div>
      </div>
    </div>
  );
};

export default Blob;
