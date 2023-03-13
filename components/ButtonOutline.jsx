import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="w-[200px] rounded-lg border border-white bg-white text-lg bg-opacity-0 py-2 text-white duration-[200ms] ease-in-out hover:cursor-pointer hover:bg-opacity-100 hover:text-[#006aff] hover:shadow-lg hover:shadow-white">
      {children}
    </button>
  );
};

export default ButtonOutline;
