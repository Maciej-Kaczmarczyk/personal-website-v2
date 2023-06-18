import React from "react";
import heroImg from "../../public/hero_img.png";
import siatka from "../../public/siatka.svg";
import Image from "next/image";
import ButtonFill from "../ButtonFill";
import ButtonOutline from "../ButtonOutline";

const Hero = () => {
  return (
    <div className="relative z-20 mt-[42vw] flex h-fit w-full justify-center overflow-x-clip p-4 md:my-0 lg:my-44">
      <div className="flex h-fit w-full max-w-screen-xl flex-col-reverse items-start justify-between gap-4 md:max-w-screen-md lg:max-w-screen-lg lg:flex-row lg:items-center xl:max-w-screen-xl ">
        <div className="flex h-full flex-col gap-4 w-full lg:w-1/2">
          <h2 className="text-7xl font-bold text-white dark:text-gray-dark xl:text-8xl">
            Hello, <br /> I&apos;m Maciek!
          </h2>
          <h1 className="max-w-md text-gray-light dark:text-gray-dark lg:max-w-xl xl:text-2xl">
            I am a designer, developer and a big fan of new technologies. Let&apos;s
            create something awesome together!
          </h1>
          <div className="mt-2 flex gap-4 xl:justify-start">
            <ButtonFill>Contact</ButtonFill>
          </div>
        </div>

        <div className="relative flex h-48 w-full items-center justify-end lg:h-fit lg:w-1/2">
         
          <div className="absolute right-0 -z-10 h-[400px] w-full bg-gradient-to-t from-gray-dark dark:from-white to-transparent md:top-32 md:-right-20 lg:hidden"></div>
        </div>

        <div className="absolute top-40 left-0 -z-10 aspect-square w-[30vw] rounded-full bg-blue opacity-50 dark:opacity-70 blur-[100px] lg:blur-[200px]"></div>
        <div className="absolute bottom-40 right-0 -z-10 aspect-square w-[25vw] rounded-full bg-purple opacity-50 dark:opacity-70 blur-[100px] md:top-10 lg:blur-[200px]"></div>
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
