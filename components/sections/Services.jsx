import React from "react";
import ButtonFill from "../ButtonFill";
import CheckboxWithText from "../CheckboxWithText";

const codeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
    />
  </svg>
);

const uiIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
    />
  </svg>
);

const designIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
    />
  </svg>
);

const Skills = () => {
  return (
    <div
      id="services"
      className="relative z-30 my-20 flex h-fit w-full flex-col justify-center overflow-x-clip bg-gray-dark py-20 md:my-0 lg:my-32"
    >
      <h2 className="relative z-20 mb-20 bg-gradient-to-b from-[#E8EBF1] to-[#B7B7B7] bg-clip-text py-2 text-center text-5xl font-extrabold text-transparent drop-shadow-sm lg:text-6xl ">
        <span className="bg-gradient-to-b from-[#E8EBF1] to-[#B7B7B7] bg-clip-text text-transparent">
          All services you need
        </span>
        <br />
        <span className="headerGradient relative z-30">in one place</span>{" "}
      </h2>
      <div className="flex w-full flex-col">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="flex lg:w-5/12 justify-center items-center lg:justify-end">
            <div className="flex lg:max-w-[500px] flex-col gap-10">
              <h3 className="text-5xl font-bold text-white">Graphic design</h3>
              <p className="text-2xl font-medium text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur temporibus eius beatae culpa, molestiae voluptatem
                nam aliquam optio fugiat vitae blanditiis voluptas soluta itaque
                vero dignissimos voluptatum corporis nesciunt facilis asperiores
                sapiente sit tempore illo. Deserunt, non quos
              </p>
              <div className="flex flex-wrap gap-5">
                <CheckboxWithText text="Logo design" color="#0043FF" />
                <CheckboxWithText text="Logo design" color="#0043FF" />
                <CheckboxWithText text="Logo design" color="#0043FF" />
                <CheckboxWithText text="Logo design" color="#0043FF" />
              </div>
            </div>
          </div>
          <div className="hidden lg:flex w-2/12 flex-col items-center justify-center">
            <div className="my-4 aspect-square w-5 rounded-full bg-white"></div>
            <div className="h-full w-1 rounded-3xl bg-white"></div>
          </div>
          <div className="lg:w-5/12 py-20 lg:pr-20">
            <div className=" aspect-video w-full rounded-3xl bg-blue"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
