import React, { Children } from "react";

const ButtonFill = ({ children, className }) => {
  return (
    <button className={`${className} w-[200px] rounded-lg bg-[#0043ff] py-2 text-white text-lg duration-[200ms] ease-in-out hover:cursor-pointer hover:bg-[#006aff] hover:shadow-lg hover:shadow-[#006aff]`}>
      {children}
    </button>
  );
};

export default ButtonFill;
