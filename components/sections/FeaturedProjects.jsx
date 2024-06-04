import React, { useRef } from "react";
import serviceExample1 from "../../public/serviceExample1.png";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "../ProjectCard";

const FeaturedProjects = () => {
  return (
    <div className="relative z-30 flex w-full flex-col items-center justify-center gap-8 px-4 md:my-0 lg:px-20">
      <h2 className="relative z-20 w-full bg-gradient-to-b from-[#E8EBF1] to-[#B7B7B7] bg-clip-text text-center text-4xl font-extrabold text-transparent drop-shadow-sm lg:py-16 lg:text-6xl">
        <span className="bg-gradient-to-b from-[#E8EBF1] to-[#B7B7B7] bg-clip-text text-transparent">Featured Projects</span>
      </h2>
      <div className="relative z-30 flex w-full flex-wrap justify-center gap-8">
        <ProjectCard title={"Personal Logo"} description={"Logo that I create for myslef. Lorem ipsum dolot mit em let porotra alfscm ajtranet listum djaxl aps jdupa "} tags={["Design", "Development"]} image={serviceExample1} />
        <ProjectCard title={"Interior Design"} description={" Interior design create for myslef. Lorem ipsum dolot mit em let porotra alfscm "} tags={["Design", "3D"]} image={serviceExample1} />
        <ProjectCard title={"CMS System"} description={" Interior design create for myslef. Lorem ipsum dolot mit em let porotra alfscm "} tags={["Web Design", "Code"]} image={serviceExample1} />
      </div>
      <div className="flex w-full justify-end">
        <p className="text-xl font-semibold text-white underline">all projects →</p>
      </div>
    </div>
  );
};

export default FeaturedProjects;
