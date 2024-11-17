import React, { useState } from "react";
import Image from "next/image";
import serviceExample1 from "../../public/serviceExample1.png";

const services = [
  {
    title: "Design",
    description: "UI/UX design, web design, mobile app design, and more.",
    image: serviceExample1,
  },
  {
    title: "Development",
    description: "Development services include web development, mobile app development, and more.",
    image: serviceExample1,
  },
  {
    title: "Marketing",
    description: "Marketing services include SEO, social media marketing, and more.",
    image: serviceExample1,
  },
];

const Skills = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <div id="services" className=" relative z-40 flex h-fit w-full flex-col items-center justify-center overflow-x-clip px-4 md:my-0 lg:px-20">
      <div className="flex flex-col items-center rounded-xl border-[1px] border-[#4A4A4A] bg-opacity-20 py-4 px-4 lg:border-none lg:bg-none">
        <div className="flex w-full justify-center py-10 lg:max-w-none lg:px-0 xl:max-w-3xl">
          <h2 className="relative z-20 w-full bg-gradient-to-b from-[#E8EBF1] to-[#B7B7B7] bg-clip-text text-center text-4xl font-extrabold text-transparent drop-shadow-sm lg:py-16 lg:text-6xl">All services you need in one place</h2>
        </div>
        <div className=" flex w-full flex-col items-center justify-center gap-8 xl:flex-row">
          <ul className="flex w-full max-w-xl flex-row items-center justify-around lg:max-w-max lg:justify-between xl:w-1/3 xl:flex-col xl:justify-center">
            {services.map((service, index) => (
              <li
                key={index}
                className={`flex cursor-pointer flex-col gap-4 rounded-2xl border-r-0 border-[#4A4A4A] border-opacity-0 hover:opacity-100 lg:border-[1px] xl:rounded-l-2xl ${
                  service.title === activeService.title ? "cursor-default border-opacity-100 bg-black" : "opacity-70 hover:bg-black hover:bg-opacity-20 hover:opacity-100"
                } bg-opacity-20 duration-300 lg:p-8`}
                onClick={() => setActiveService(service)}
              >
                <h2 className={`text-sm font-semibold text-white lg:text-3xl ${service.title === activeService.title ? "rounded-lg border-[1px] border-[#4A4A4A]  p-2 lg:border-none xl:p-0" : "p-2 xl:p-0"}`}>{service.title}</h2>
                <p className="hidden text-xs text-white opacity-80 lg:block lg:text-sm">{service.description}</p>
              </li>
            ))}
          </ul>
          <p className="block max-w-xl text-center text-white opacity-80 lg:hidden lg:text-sm">{activeService.description}</p>
          <Image className="aspect-video w-full rounded-lg xl:w-2/3" src={activeService.image} alt="service example" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
