import React, { useRef } from "react";
import serviceExample1 from "../../public/serviceExample1.png";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { slickNext } from "react-slick";

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3, // Show just a bit more than one slide
  slidesToScroll: 1,
  centerMode: true,
  focusOnSelect: true,
  className: "center relative w-full shadow-xl",
  responsive: [
    {
      breakpoint: 1080,
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
      <div
        onClick={goToNext}
        className="absolute right-0 h-[20px] w-[20px] bg-green-light"
      ></div>
      <div
        onClick={goToPrev}
        className="absolute left-0 h-[20px] w-[20px] bg-green-light"
      ></div>
    </div>
  );
};

export default FeaturedProjects;
