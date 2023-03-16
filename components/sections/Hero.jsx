import React from "react";
import heroImg from "../../public/hero_img.png";
import siatka from "../../public/siatka.svg";
import Image from "next/image";
import ButtonFill from "../ButtonFill";
import ButtonOutline from "../ButtonOutline";

const Hero = () => {
  return (
    <div className="relative z-20 my-[22vw] flex h-fit w-full justify-center overflow-x-clip p-4 md:my-0 lg:my-44">
      <div className="flex h-fit w-full max-w-screen-xl flex-col-reverse items-start justify-between gap-4 md:max-w-screen-md lg:max-w-screen-lg lg:flex-row lg:items-center xl:max-w-screen-xl ">
        <div className="flex h-full flex-col gap-4 lg:w-1/2">
          <h2 className="text-7xl font-black text-white dark:text-black xl:text-8xl">
            Hello, <br /> I'm{" "}
            <span className="bg-gradient-to-r from-blue to-purple bg-clip-text text-transparent">
              Maciek!
            </span>
          </h2>
          <h1 className="max-w-md text-[#919EC0] dark:text-black lg:max-w-xl xl:text-2xl">
            I am a designer, developer and a big fan of new technologies. Let's
            create something awesome together!
          </h1>
          <div className="mt-2 flex gap-4 xl:justify-start">
            <ButtonFill>Contact</ButtonFill>
            <ButtonOutline>Portfolio</ButtonOutline>
          </div>
        </div>

        <div className="relative flex h-48 w-full items-center justify-end lg:h-fit lg:w-1/2">
          <Image
            className="absolute right-0 -z-10 w-[400px] md:top-32 md:-right-20 lg:relative lg:top-0 lg:right-0 lg:z-10 lg:w-full"
            src={heroImg}
            alt="/"
          />
          <div className="absolute right-0 -z-10 h-[400px] w-full bg-gradient-to-t from-[#090911] to-[#ffffff00] md:top-32 md:-right-20 lg:hidden"></div>
        </div>

        <div className="absolute top-40 left-0 -z-10 aspect-square w-[30vw] rounded-full bg-blue opacity-20 dark:opacity-40 blur-[100px] lg:blur-[200px]"></div>
        <div className="absolute bottom-40 right-0 -z-10 aspect-square w-[25vw] rounded-full bg-purple opacity-20 dark:opacity-40 blur-[100px] md:top-10 lg:blur-[200px]"></div>
        <Image
          src={siatka}
          className="absolute -z-20 aspect-square w-1/2 opacity-100 lg:left-1/3"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
