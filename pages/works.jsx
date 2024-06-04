import React from "react";
import Link from "next/link";
import Navbar from "../components/sections/Navbar";
import Blob from "../components/Blob";
import serviceExample1 from "../public/serviceExample1.png";
import ProjectCard from "../components/ProjectCard";

const works = () => {
  return (
    <>
      <Navbar />
      <div className="relative z-30 mt-20 flex w-full flex-col items-center justify-center gap-8 px-4 lg:px-20">
        <h2 className="relative z-20 w-full bg-gradient-to-b from-[#E8EBF1] to-[#B7B7B7] bg-clip-text text-center text-4xl font-extrabold text-transparent drop-shadow-sm lg:py-16 lg:text-6xl">
          <span className="bg-gradient-to-b from-[#E8EBF1] to-[#B7B7B7] bg-clip-text text-transparent">Featured Projects</span>
        </h2>
        <div className="relative z-30 flex w-full flex-wrap justify-center gap-8">
          <ProjectCard title={"Personal Logo"} description={"Logo that I create for myslef. Lorem ipsum dolot mit em let porotra alfscm ajtranet listum djaxl aps jdupa "} tags={["Design", "Development"]} image={serviceExample1} />
          <ProjectCard title={"Interior Design"} description={" Interior design create for myslef. Lorem ipsum dolot mit em let porotra alfscm "} tags={["Design", "3D"]} image={serviceExample1} />
          <ProjectCard title={"CMS System"} description={" Interior design create for myslef. Lorem ipsum dolot mit em let porotra alfscm "} tags={["Web Design", "Code"]} image={serviceExample1} />
        </div>
      </div>
    </>
  );
};

export default works;
