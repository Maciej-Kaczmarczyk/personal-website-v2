import React from "react";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";

const Navbar = () => {
  const [animate] = useAutoAnimate();

  const [navbar, setNavbar] = useState(false);
  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div ref={animate} className="z-50 ">
      <div className="flex justify-end py-5 md:justify-center bg-[#09091137] border-b-[1px] border-gray-700">
        <div
          className={
            !navbar
              ? "mx-4 flex w-full flex-row-reverse items-center justify-between md:hidden"
              : "hidden"
          }
          onClick={toggleNavbar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="currentColor"
            className="h-fit w-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <p className="text-2xl font-bold text-white">
            <span className=" text-[#0043FF] ">//</span> Maciek
          </p>
        </div>

        <div className="text-md font-md hidden w-full items-center justify-between text-white md:flex md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div>
            <ul className="flex gap-8">
              <li className="duration-[200ms] ease-in-out hover:cursor-pointer hover:text-[#0043FF]">
                <p className="text-3xl font-bold">
                  <Link href="/"><span className=" text-[#0043FF] ">//</span> Maciek</Link>
                </p>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex gap-8">
              <li className="duration-[200ms] ease-in-out hover:cursor-pointer hover:text-[#0043FF]">
              <Link href="/">Home</Link>
              </li>
              <li className="duration-[200ms] ease-in-out hover:cursor-pointer hover:text-[#0043FF]">
                About
              </li>
              <li className="duration-[200ms] ease-in-out hover:cursor-pointer hover:text-[#0043FF]">
                Skills
              </li>
              <li className="duration-[200ms] ease-in-out hover:cursor-pointer hover:text-[#0043FF]">
                <Link href="/works">Works</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex gap-8">
              <li>
                <button className="w-[150px] rounded-lg bg-[#0043ff] py-2 text-white duration-[200ms] ease-in-out hover:cursor-pointer hover:bg-[#006aff] hover:shadow-lg hover:shadow-[#006aff]">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {navbar ? (
        <div className="absolute top-0 z-10 flex h-[100vh] w-full flex-col overflow-hidden bg-[#121120] md:hidden">
          <div className="flex justify-end" onClick={toggleNavbar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="m-5 h-fit w-8 text-white duration-[200ms] ease-in-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="pt-20 ">
            <ul className="flex flex-col items-center gap-6 text-center text-xl text-white">
              <li className="w-fit transition-all hover:cursor-pointer hover:text-[#0043FF]">
                Home
              </li>
              <li className="w-fit transition-all hover:cursor-pointer hover:text-[#0043FF]">
                About
              </li>
              <li className="w-fit transition-all hover:cursor-pointer hover:text-[#0043FF]">
                Portfolio
              </li>
              <li className="w-fit transition-all hover:cursor-pointer hover:text-[#0043FF]">
                Contact
              </li>
            </ul>
            <ul className="flex justify-center gap-8 pt-12 text-xl text-white">
              <li className="w-fit transition-all hover:cursor-pointer hover:text-[#0043FF]">
                <a
                  href="https://www.linkedin.com/in/maciejkaczmarczyk01/"
                  target="blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="h-fit w-8 text-white"
                    viewBox="0 0 30 30"
                  >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"></path>
                  </svg>
                </a>
              </li>
              <li className="w-fit transition-all hover:cursor-pointer hover:text-[#0043FF]">
                <a
                  href="https://www.behance.net/maciej_kaczmarczyk"
                  target="blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="h-fit w-8 text-white"
                    viewBox="0 0 32 32"
                  >
                    <path d="M 1 6.75 L 1 25.25 L 9.9375 25.25 C 10.765625 25.25 16.46875 25.082031 16.46875 19.875 C 16.46875 16.621094 14.230469 15.515625 13.09375 15.1875 C 13.929688 14.792969 15.59375 13.855469 15.59375 11.34375 C 15.59375 9.945313 15.394531 6.75 9.6875 6.75 Z M 21.375 8.46875 L 21.375 10.15625 L 28.28125 10.15625 L 28.28125 8.46875 Z M 5.0625 9.90625 L 8.875 9.90625 C 9.234375 9.90625 11.65625 9.714844 11.65625 12.03125 C 11.65625 14.011719 9.90625 14.21875 9.1875 14.21875 L 5.0625 14.21875 Z M 25 11.6875 C 19.777344 11.6875 18.6875 16.222656 18.6875 18.1875 C 18.6875 24.019531 23.46875 24.6875 25 24.6875 C 29.128906 24.6875 30.300781 22.015625 30.78125 20.53125 L 27.78125 20.53125 C 27.664063 20.914063 26.789063 22.15625 25.125 22.15625 C 22.335938 22.15625 22.09375 19.976563 22.09375 19 L 30.96875 19 C 31.148438 15.625 29.671875 11.6875 25 11.6875 Z M 24.90625 14.21875 C 25.738281 14.21875 26.410156 14.460938 26.8125 14.90625 C 27.214844 15.355469 27.511719 16.011719 27.59375 16.875 L 22.09375 16.875 C 22.109375 16.636719 22.164063 16.363281 22.25 16.0625 C 22.335938 15.753906 22.46875 15.460938 22.6875 15.1875 C 22.90625 14.917969 23.210938 14.683594 23.5625 14.5 C 23.921875 14.3125 24.367188 14.21875 24.90625 14.21875 Z M 5.0625 17 L 9.46875 17 C 10.34375 17 12.40625 17.136719 12.40625 19.65625 C 12.40625 22.097656 9.808594 22.09375 9.40625 22.09375 L 5.0625 22.09375 Z"></path>
                  </svg>
                </a>
              </li>
              <li className="w-fit transition-all hover:cursor-pointer hover:text-[#0043FF]">
                <a href="https://github.com/Maciej-Kaczmarczyk" target="blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="h-fit w-8 text-white"
                    viewBox="0 0 64 64"
                  >
                    <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
