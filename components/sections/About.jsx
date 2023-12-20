import React, { use, useEffect } from "react";
import avatar from "../../public/avatar.png";
import Image from "next/image";
import ButtonFill from "../ButtonFill";
import CheckboxWithText from "../CheckboxWithText";
import Link from "next/link";
import BgGradient from "../BgGradient";

const About = () => {
  return (
    <div
      id="about"
      className="relative z-30 my-20 flex h-fit w-full justify-center px-4 py-40"
    >
      <div className="flex h-fit w-full max-w-screen-xl flex-col-reverse items-center gap-7 md:max-w-screen-md lg:max-w-screen-lg lg:flex-row-reverse lg:items-center lg:justify-between xl:max-w-screen-xl ">
        <div className="flex h-full flex-col gap-7 text-center lg:w-1/2 lg:text-start">
          <h2 className="bg-gradient-to-b from-[#E8EBF1] to-[#B7B7B7] bg-clip-text text-5xl font-bold text-transparent dark:text-gray-dark">
            About me
          </h2>
          <h1 className="max-w-md text-white opacity-80 dark:text-black lg:max-w-none xl:text-xl xl:leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            temporibus eius beatae culpa, molestiae voluptatem nam aliquam optio
            fugiat vitae blanditiis voluptas soluta itaque vero dignissimos
            voluptatum corporis nesciunt facilis asperiores sapiente sit tempore
            illo. Deserunt, non quos
          </h1>
          <div className="mt-6 flex items-center justify-between gap-4 lg:gap-8 xl:justify-start">
            <ButtonFill className="flex justify-center">
              <Link href="Maciej_Kaczmarczyk_CV_ENG.pdf" target="_blank">
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
              </Link>
            </ButtonFill>
            <CheckboxWithText text="Available for work" color="#2DA539" />
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

        <BgGradient className={"top-40 left-0 -z-10 bg-purple"}></BgGradient>
        <BgGradient className={"bottom-40 right-0 -z-10 bg-blue"}></BgGradient>
      </div>
    </div>
  );
};

export default About;
