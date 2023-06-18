import React from "react";
import avatar from "../../public/avatar.png";
import Image from "next/image";
import ButtonFill from "../ButtonFill";

const About = () => {
  return (
    <div className="relative z-20 my-20 flex h-fit w-full justify-center overflow-x-clip p-4 md:my-0 lg:my-32">
      <div className="flex h-fit w-full max-w-screen-xl flex-col-reverse items-center gap-4 md:max-w-screen-md lg:max-w-screen-lg lg:flex-row-reverse lg:items-center lg:justify-between xl:max-w-screen-xl ">
        <div className="flex h-full flex-col gap-4 text-center lg:w-1/2 lg:text-start">
          <h2 className="text-6xl font-bold text-white dark:text-gray-dark xl:text-8xl">
            About me
          </h2>
          <h1 className="max-w-md text-[#919EC0] dark:text-black lg:max-w-none xl:text-2xl">
            My name is Maciek Kaczmarczyk and I&apos;m a creative person based in
            Poland. My main goal is just to create awesome things. Now I&apos;m 21
            years old but since 14 I have already tried graphic design, video
            editing, and 3D modeling. Since last year I have been mainly focused
            on UI/UX designing and fronted development. My greatest asset is
            that I love to learn new things and technologies.
          </h1>
          <div className="mt-2 flex items-center gap-8 xl:justify-start">
            <ButtonFill className="flex justify-center">
              <div className="flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <p>Resume</p>
              </div>
            </ButtonFill>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#1ec993"
                class="h-7 w-7"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className="text-left text-lg leading-5 text-white dark:text-gray-dark">
                avilable for work
              </p>
            </div>
          </div>
        </div>

        <div className="card relative flex aspect-auto max-w-lg items-center justify-center overflow-hidden rounded-3xl p-8 lg:h-fit lg:w-fit">
          <Image
            src={avatar}
            alt=""
            className=" aspect-square w-[400px] rounded-2xl"
          />
          <div
            className={`absolute -bottom-40 -right-40 -z-10 aspect-square w-full rounded-full bg-blue opacity-20 blur-[100px] dark:opacity-70 lg:blur-[200px]`}
          ></div>
          <div
            className={`absolute -top-40 -left-40 -z-10 aspect-square w-full rounded-full bg-purple opacity-20 blur-[100px] dark:opacity-70 lg:blur-[200px]`}
          ></div>
        </div>

        <div className="absolute top-40 left-0 -z-10 aspect-square w-[20vw] rounded-full bg-purple opacity-50 blur-[100px] dark:opacity-70 lg:blur-[200px]"></div>
        <div className="absolute bottom-40 right-0 -z-10 aspect-square w-[20vw] rounded-full bg-blue opacity-50 blur-[100px] dark:opacity-70 md:top-10 lg:blur-[200px]"></div>
        <div className="bg-yellow bottom-40 right-0 -z-10 hidden aspect-square w-[20vw] rounded-full opacity-50 blur-[100px] dark:opacity-70 md:top-10 lg:blur-[200px]"></div>
      </div>
    </div>
  );
};

export default About;
