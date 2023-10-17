import React from "react";
import { useSpring, animated } from "react-spring";


const WavyLine = () => {
  // Define the animation properties
  const animationProps = useSpring({
    from: { amplitude: 10, frequency: 1, translateY: 0 },
    to: { amplitude: 20, frequency: 2, translateY: 0 },
    config: { duration: 2000, loop: true },
  });

  return (
    <animated.div
      className="w-full h-[3px] bg-green-light"
      style={{
        transform: animationProps.translateY.to(
          (value) => `translateY(${value}px)`
        ),
      }}
    />
  );
};

export default WavyLine;
