import React from "react";
import avatar from "../public/avatar.png";
import Image from "next/image";
import ButtonFill from "./ButtonFill";

const About = () => {
  return (
    <div className="relative z-20 my-20 flex h-fit w-full justify-center overflow-x-clip p-4 md:my-0 lg:my-32">
      <div className="flex h-fit w-full max-w-screen-xl flex-col-reverse items-start justify-between gap-4 md:max-w-screen-md lg:max-w-screen-lg lg:flex-row-reverse lg:items-center xl:max-w-screen-xl ">
        <div className="flex h-full flex-col gap-4 lg:w-1/2">
          <h2 className="text-7xl font-black text-white xl:text-8xl">
            About me
          </h2>
          <h1 className="max-w-md text-[#919EC0] lg:max-w-none xl:text-2xl">
            My name is Maciek Kaczmarczyk and I'm a creative person based in
            Poland. My main goal is just to create awesome things. Now I'm 21
            years old but since 14 I have already tried graphic design, video
            editing, and 3D modeling. Since last year I have been mainly focused
            on UI/UX designing and fronted development. My greatest asset is
            that I love to learn new things and technologies.
          </h1>
          <div className="mt-2 flex gap-4 xl:justify-start">
            <ButtonFill>Resume</ButtonFill>
            
          </div>
        </div>

        <div className="card relative flex h-fit w-full items-center justify-end rounded-2xl lg:h-fit lg:w-fit">
          <Image src={avatar} alt="" className=" rounded-lg aspect-square w-[500px]" />
        </div>

        <div className="absolute top-40 left-0 -z-10 aspect-square w-[20vw] rounded-full bg-[#6f00ff] blur-[80px] lg:blur-[200px]"></div>
        <div className="absolute bottom-40 right-0 -z-10 aspect-square w-[20vw] rounded-full bg-[#0043ff] blur-[80px] md:top-10 lg:blur-[200px]"></div>
      </div>
    </div>
  );
};

export default About;
