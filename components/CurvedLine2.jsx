import React from "react";

const CurvedLine = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2038"
      height="311"
      viewBox="0 0 2038 311"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_d_505_577)">
        <path
          d="M20.5 290C117.167 243.167 392.8 169.8 722 251C1051.2 332.2 1396.5 160 1562 96.5C1727.5 33.0001 1963 4.50004 2017.5 33"
          stroke="#265FFF"
          strokeWidth="2"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_505_577"
          x="0.0639648"
          y="0.941193"
          width="2037.9"
          height="309.959"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            values="0 0 0 0 0.14902 0 0 0 0 0.372549 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_505_577"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_505_577"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CurvedLine;
