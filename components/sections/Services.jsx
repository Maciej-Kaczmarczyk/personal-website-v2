import React from "react";
import CheckboxWithText from "../CheckboxWithText";

const Skills = () => {
  return (
    <div
      id="services"
      className="relative z-40 flex h-fit w-full flex-col items-center justify-center overflow-x-clip bg-gray-dark px-4 md:my-0"
    >
      <div className="w-full max-w-2xl lg:max-w-none">
        <h2 className="xL:mb-20 relative z-20 bg-gradient-to-b from-[#E8EBF1] to-[#B7B7B7] bg-clip-text pt-10 text-center text-5xl font-extrabold text-transparent drop-shadow-sm lg:py-32 lg:text-6xl">
          <span className="bg-gradient-to-b from-[#E8EBF1] to-[#B7B7B7] bg-clip-text text-transparent">
            All services you need
          </span>
          <br />
          <span className="headerGradient relative z-30">
            in one place
          </span>{" "}
        </h2>
        <div className="flex w-full flex-col">
          <div className="flex w-full flex-col-reverse lg:flex-row">
            <div className="flex items-center justify-center lg:w-5/12 lg:justify-end">
              <div className="flex flex-col gap-6 text-center lg:max-w-[500px] lg:gap-10 lg:text-left">
                <h3 className="text-4xl font-bold text-white lg:text-5xl">
                  Graphic design
                </h3>
                <p className="font-light text-white opacity-80 lg:text-2xl ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur temporibus eius beatae culpa, molestiae voluptatem
                </p>
                <div className="flex flex-wrap justify-around gap-5 lg:justify-start">
                  <CheckboxWithText text="Logo design" color="#0043FF" />
                  <CheckboxWithText text="Logo design" color="#0043FF" />
                  <CheckboxWithText text="Logo design" color="#0043FF" />
                  <CheckboxWithText text="Logo design" color="#0043FF" />
                </div>
              </div>
            </div>
            <div className="hidden w-2/12 flex-col items-center justify-center lg:flex">
              <div className="my-4 aspect-square w-5 rounded-full bg-white"></div>
              <div className="h-full w-1 rounded-3xl bg-white"></div>
            </div>
            <div className="py-10 lg:w-5/12 lg:py-20 xl:pr-20">
              <div className=" aspect-video w-full rounded-3xl border-[1px] border-blue"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
