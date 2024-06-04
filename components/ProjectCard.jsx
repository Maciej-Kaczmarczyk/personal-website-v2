import Image from "next/image";
import React from "react";
import serviceExample1 from "../public/serviceExample1.png";
import BgGradient from "./BgGradient";

function ProjectCard({ title, description, image, tags }) {
  return (
    <div className="card relative flex h-fit max-w-lg flex-col items-start justify-between gap-6 rounded-3xl p-8">
      <div className="h-2/3 overflow-hidden rounded-2xl">
        <Image src={image} className=" aspect-[4/3] w-full transform rounded-2xl bg-blue-light object-cover transition-transform duration-500 hover:scale-125 hover:cursor-pointer" />
      </div>
      <div className="flex h-1/3 flex-col gap-4">
        <h2 className="text-4xl font-bold text-white">{title}</h2>
        <p className="text-sm text-white opacity-80">{description}</p>
        <div className=" mt-4 flex justify-start gap-4 text-xs text-white">
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
