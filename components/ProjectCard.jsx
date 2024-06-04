import Image from "next/image";
import React from "react";
import serviceExample1 from "../public/serviceExample1.png";
import BgGradient from "./BgGradient";

function ProjectCard({ title, description, image, tags }) {
  return (
    <div id="featuredProjects" className="card relative flex max-w-lg flex-col h-fit items-start justify-between overflow-hidden rounded-3xl p-8 gap-6">
      <div className="h-2/3">
        <Image src={image} className=" aspect-[4/3] w-full rounded-2xl bg-blue-light" />
      </div>
      <div className="h-1/3 flex flex-col gap-4">
        <h2 className="text-4xl font-bold text-white">{title}</h2>
        <p className="text-sm text-white opacity-80">{description}</p>
        <div className=" flex justify-start mt-4 gap-4 text-xs text-white">
          {tags?.map((tag, index) => (
            <p key={index} className=" rounded-full px-4 py-1 ring-1 ring-white">
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
