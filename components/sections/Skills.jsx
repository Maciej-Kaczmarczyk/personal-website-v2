import React from "react";
import ButtonFill from "../ButtonFill";

const codeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="h-6 w-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
    />
  </svg>
);

const uiIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="h-6 w-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
    />
  </svg>
);

const designIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="h-6 w-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
    />
  </svg>
);

const Skills = () => {
  return (
    <div className="relative z-20 my-20 flex h-fit w-full justify-center overflow-x-clip p-4 md:my-0 lg:my-32">
      <div className="flex h-fit w-full max-w-screen-xl flex-col items-start justify-between gap-4 md:max-w-screen-md lg:max-w-screen-lg lg:flex-col lg:items-center xl:max-w-screen-xl ">
        <div className="flex h-full w-full flex-col items-center gap-4 text-center">
          <h2 className="text-6xl font-black text-white dark:text-gray-dark xl:text-8xl">
            What can I do?
          </h2>
          <h1 className=" max-w-md justify-center text-[#919EC0] dark:text-black lg:max-w-none xl:text-2xl">
            Some of my awsome skills
          </h1>
        </div>

        <div className="mt-20 flex w-full flex-wrap items-center justify-around gap-6 gap-y-20">
          <div className="card from-cyan-500 to-blue-500 relative flex max-w-sm flex-col gap-8 overflow-hidden rounded-3xl bg-gradient-to-r p-8 text-white lg:max-w-sm">
            <div className={`w-fit rounded-xl bg-blue p-4`}>{codeIcon}</div>
            <h2 className=" text-5xl font-bold dark:text-gray">Code</h2>
            <p className="text-lg dark:text-gray">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              assumenda odit eius voluptatem temporibus molestiae incidunt
              quidem libero impedit corporis!
            </p>
            <ButtonFill color="blue" className={"mt-20 w-full"}>
              See more
            </ButtonFill>
            <div
              className={`absolute -top-40 -left-40 -z-10 aspect-square w-full rounded-full bg-blue opacity-50 blur-[100px] dark:opacity-70 lg:blur-[200px]`}
            ></div>
          </div>
          <div className="card from-cyan-500 to-blue-500 relative flex max-w-sm flex-col gap-8 overflow-hidden rounded-3xl bg-gradient-to-r p-8 text-white lg:max-w-sm">
            <div className={`w-fit rounded-xl bg-yellow p-4`}>{uiIcon}</div>
            <h2 className=" text-5xl font-bold dark:text-gray">UI/UX</h2>
            <p className="text-lg dark:text-gray">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              assumenda odit eius voluptatem temporibus molestiae incidunt
              quidem libero impedit corporis!
            </p>
            <ButtonFill
              className={
                "mt-20 w-full bg-yellow hover:bg-yellow-light hover:shadow-yellow-light"
              }
            >
              See more
            </ButtonFill>
            <div
              className={`absolute -top-40 -left-40 -z-10 aspect-square w-full rounded-full bg-yellow opacity-50 blur-[100px] dark:opacity-70 lg:blur-[200px]`}
            ></div>
          </div>
          <div className="card from-cyan-500 to-blue-500 relative flex max-w-sm flex-col gap-8 overflow-hidden rounded-3xl bg-gradient-to-r p-8 text-white lg:max-w-sm">
            <div className={`w-fit rounded-xl bg-purple p-4`}>{designIcon}</div>
            <h2 className=" text-5xl font-bold dark:text-gray">Design</h2>
            <p className="text-lg dark:text-gray">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              assumenda odit eius voluptatem temporibus molestiae incidunt
              quidem libero impedit corporis!
            </p>
            <ButtonFill
              className={
                "mt-20 w-full bg-purple hover:bg-purple-light hover:shadow-purple-light"
              }
            >
              See more
            </ButtonFill>
            <div
              className={`absolute -top-40 -left-40 -z-10 aspect-square w-full rounded-full bg-purple opacity-50 blur-[100px] dark:opacity-70 lg:blur-[200px]`}
            ></div>
          </div>
        </div>

        {/* <div className="absolute top-40 left-0 -z-10 aspect-square w-[20vw] rounded-full bg-purple opacity-50 blur-[100px] dark:opacity-70 lg:blur-[200px]"></div>
        <div className="absolute bottom-40 right-0 -z-10 aspect-square w-[20vw] rounded-full bg-blue opacity-50 blur-[100px] dark:opacity-70 md:top-10 lg:blur-[200px]"></div> */}
      </div>
    </div>
  );
};

export default Skills;
