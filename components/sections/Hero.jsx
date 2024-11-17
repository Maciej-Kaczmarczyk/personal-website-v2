import React from "react";
import ButtonFill from "../ButtonFill";
import ButtonOutline from "../ButtonOutline";
import BgGradient from "../BgGradient";
import { WavyBackground } from "../wavy-background";

const Hero = () => {
  return (
    <div id="hero" className="xL:mb-64 relative z-30 mb-32 flex h-fit w-[100vw] justify-center pt-16 sm:pt-32 xl:mb-64 xl:pt-56">
      <div className="relative z-30 flex h-full flex-col items-center gap-7 text-center">
        <h2 className="relative z-20 bg-gradient-to-b from-[#E8EBF1] to-[#B7B7B7] bg-clip-text px-4 py-2 text-5xl font-extrabold tracking-tight text-transparent drop-shadow-sm lg:text-8xl">
          <span className="bg-gradient-to-b from-[#E8EBF1] to-[#B7B7B7] bg-clip-text text-transparent">Need a </span>
          <span className="headerGradient relative z-30">creative person</span> <br /> for your project?
        </h2>
        <h1 className="z-20 max-w-3xl px-4 text-lg font-light text-white opacity-80 xl:text-xl xl:leading-relaxed">Creating modern websites, intuitive user interfaces, and unique graphic designs to help you stand out online.</h1>
        <div className="z-30 mt-4 flex w-[100vw] justify-center gap-8 px-4 lg:w-fit">
          <ButtonFill className="w-1/2 lg:w-[200px]">Contact</ButtonFill>
          <ButtonOutline className="w-1/2 lg:w-[200px]">Portfolio</ButtonOutline>
        </div>
      </div>
      <WavyBackground canvasClassName="absolute -top-[380px] sm:-top-[350px] lg:-top-[250px] xl:-top-[140px] -z-20" />
      <BgGradient className="top-40 left-0 -z-10 bg-blue opacity-30"> </BgGradient>
      <BgGradient className="bottom-40 right-0 -z-10 bg-purple opacity-30"> </BgGradient>
    </div>
  );
};

export default Hero;
