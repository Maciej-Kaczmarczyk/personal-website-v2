import React from "react";
import ButtonFill from "../ButtonFill";
import ButtonOutline from "../ButtonOutline";
import CurvedLine from "../CurvedLine1";
import CurvedLine2 from "../CurvedLine2";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative z-30 flex h-fit w-[100vw] justify-center pt-24 sm:pt-32 lg:pt-72 mb-64"
    >
      <div className="relative flex h-full flex-col items-center gap-7 text-center">
        <h2 className="relative z-20 bg-gradient-to-b from-[#E8EBF1] to-[#B7B7B7] bg-clip-text py-2 text-5xl font-extrabold text-transparent drop-shadow-sm lg:text-8xl">
          <span className="bg-gradient-to-b from-[#E8EBF1] to-[#B7B7B7] bg-clip-text text-transparent">
            Need a{" "}
          </span>
          <span className="headerGradient relative z-30">creative person</span>{" "}
          <br /> for your project?
        </h2>
        <h1 className="font-light max-w-3xl text-white opacity-80 xl:text-xl xl:leading-relaxed">
          You are in the right place! My name is Maciek and I will be happy to
          help with all kind of creative work, from graphic design, UI/UX to
          development of website and SEO. Feel free to contact me!
        </h1>
        <div className="mt-6 flex w-[100vw] justify-center gap-8 lg:w-fit">
          <ButtonFill className="w-1/2 lg:w-[200px]">Contact</ButtonFill>
          <ButtonOutline className="w-1/2 lg:w-[200px]">
            Portfolio
          </ButtonOutline>
        </div>
        <CurvedLine className="absolute -top-[200px] z-10 lg:-top-[230px] " />
        <CurvedLine2 className="absolute -top-[40px] z-10 lg:-top-[70px]" />
      </div>

      <div className="absolute top-40 left-0 -z-10 aspect-square w-[30vw] rounded-full bg-blue opacity-50 blur-[100px] dark:opacity-70 lg:blur-[200px]"></div>
      <div className="absolute bottom-40 right-0 -z-10 aspect-square w-[25vw] rounded-full bg-purple opacity-50 blur-[100px] dark:opacity-70 md:top-10 lg:blur-[200px]"></div>
    </div>
  );
};

export default Hero;
