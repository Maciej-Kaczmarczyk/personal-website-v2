import React from "react";

const CurvedLine = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1920"
      height="597"
      viewBox="0 0 1920 597"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_d_501_575)">
        <path
          d="M-38.5 575.5C138.5 462.167 573.6 268.1 898 398.5C1222.4 528.9 1746.17 201.167 1967.5 21"
          stroke="#8526FF"
          stroke-width="2"
          stroke-miterlimit="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_501_575"
          x="-59.5001"
          y="-3.05176e-05"
          width="2048"
          height="596.5"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.521569 0 0 0 0 0.14902 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_501_575"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_501_575"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CurvedLine;
