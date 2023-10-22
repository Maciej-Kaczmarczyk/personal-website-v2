import React from "react";
import avatar from "../../public/avatar.png";
import Image from "next/image";
import ButtonFill from "../ButtonFill";
import CheckboxWithText from "../CheckboxWithText";

const About = () => {
  return (
    <div
      id="about"
      className="relative z-30 my-20 flex h-fit w-full justify-center md:my-0 lg:pt-60"
    >
      <div className="flex h-fit w-full max-w-screen-xl flex-col-reverse items-center gap-4 md:max-w-screen-md lg:max-w-screen-lg lg:flex-row-reverse lg:items-center lg:justify-between xl:max-w-screen-xl ">
        <div className="flex h-full flex-col gap-7 text-center lg:w-1/2 lg:text-start">
          <h2 className="bg-gradient-to-b from-[#E8EBF1] to-[#B7B7B7] bg-clip-text text-7xl font-bold text-transparent dark:text-gray-dark">
            About me
          </h2>
          <h1 className="max-w-md text-white opacity-80 dark:text-black lg:max-w-none xl:text-xl xl:leading-relaxed">
            My name is Maciek Kaczmarczyk and I&apos;m a creative person based
            in Poland. My main goal is just to create awesome things. Now
            I&apos;m 21 years old but since 14 I have already tried graphic
            design, video editing, and 3D modeling. Since last year I have been
            mainly focused on UI/UX designing and fronted development. My
            greatest asset is that I love to learn new things and technologies.
          </h1>
          <div className="mt-6 flex items-center gap-8 xl:justify-start">
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
            <CheckboxWithText text="Available for freelance" color="#2DA539" />
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
