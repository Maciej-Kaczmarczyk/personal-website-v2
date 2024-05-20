import React, { useRef } from "react";
import serviceExample1 from "../../public/serviceExample1.png";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { slickNext } from "react-slick";

const settings = {
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3, // Show just a bit more than one slide
  slidesToScroll: 1,
  centerMode: true,
  focusOnSelect: false,
  className: "center relative w-full shadow-xl",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const FeaturedProjects = () => {
  const sliderRef = useRef();
  const goToNext = () => {
    sliderRef.current.slickNext();
  };
  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className="relative z-30 flex w-full">
      <Slider ref={sliderRef} {...settings}>
        <div className="px-2">
          <Image src={serviceExample1} className="rounded-2xl" alt="" />
        </div>
        <div className="px-2">
          <Image src={serviceExample1} className="rounded-2xl" alt="" />
        </div>
        <div className="px-2">
          <Image src={serviceExample1} className="rounded-2xl" alt="" />
        </div>
        <div className="px-2">
          <Image src={serviceExample1} className="rounded-2xl" alt="" />
        </div>
        <div className="px-2">
          <Image src={serviceExample1} className="rounded-2xl" alt="" />
        </div>
        <div className="px-2">
          <Image src={serviceExample1} className="rounded-2xl" alt="" />
        </div>
      </Slider>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        onClick={goToNext}
        className="absolute top-1/2 right-20 hidden aspect-square w-10 -translate-y-1/2 transform text-white duration-300 hover:scale-110 hover:cursor-pointer hover:text-blue-light lg:block"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        onClick={goToPrev}
        className="absolute top-1/2 left-20 hidden aspect-square w-10 -translate-y-1/2 rotate-180 transform text-white duration-300 hover:scale-110 hover:cursor-pointer hover:text-blue-light lg:block"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </div>
  );
};

export default FeaturedProjects;
