import React from "react";
import ButtonFill from "../ButtonFill";
import ButtonOutline from "../ButtonOutline";
import CurvedLine from "../CurvedLine1";
import CurvedLine2 from "../CurvedLine2";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative z-30 flex h-fit w-full justify-center overflow-x-clip p-4 pt-72"
    >
      <div className="flex flex-col">
        <div className="relative flex h-full flex-col items-center gap-7 text-center">
          <h2 className="relative z-20 bg-gradient-to-b from-[#E8EBF1] to-[#B7B7B7] bg-clip-text py-2 text-7xl font-black text-transparent drop-shadow-sm xl:text-8xl">
            <span className="bg-gradient-to-b from-[#E8EBF1] to-[#B7B7B7] bg-clip-text text-transparent">
              Need a{" "}
            </span>
            <span className="headerGradient relative z-30">
              creative person
            </span>{" "}
            <br /> for your next project?
          </h2>
          <h1 className="max-w-md font-light text-white lg:max-w-3xl xl:text-xl xl:leading-relaxed">
            You are in the right place! My name is Maciek and I will be happy to
            help with all kind of creative work, from graphic design, UI/UX to
            development of website and SEO. Feel free to contact me!
          </h1>
          <div className="mt-6 flex gap-8">
            <ButtonFill>Contact</ButtonFill>
            <ButtonOutline>Portfolio</ButtonOutline>
          </div>
          <CurvedLine className="absolute -top-[230px] z-10 " />
          <CurvedLine2 className="absolute -top-[70px] z-10" />
        </div>

        <div className="relative flex h-48 w-full items-center justify-end lg:h-fit lg:w-1/2">
          <div className="absolute right-0 -z-10 h-[400px] w-full bg-gradient-to-t from-gray-dark to-transparent dark:from-white md:top-32 md:-right-20 lg:hidden"></div>
        </div>

        <div className="absolute top-40 left-0 -z-10 aspect-square w-[30vw] rounded-full bg-blue opacity-50 blur-[100px] dark:opacity-70 lg:blur-[200px]"></div>
        <div className="absolute bottom-40 right-0 -z-10 aspect-square w-[25vw] rounded-full bg-purple opacity-50 blur-[100px] dark:opacity-70 md:top-10 lg:blur-[200px]"></div>
      </div>
    </div>
  );
};

export default Hero;
