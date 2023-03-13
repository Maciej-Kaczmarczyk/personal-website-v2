import React, { Children } from "react";

const ButtonFill = ({children}) => {
  return (
    <button className="w-[150px] rounded-lg bg-[#0043ff] py-2 text-white duration-[200ms] ease-in-out hover:cursor-pointer hover:bg-[#006aff] hover:shadow-lg hover:shadow-[#006aff]">
    {children}
    </button>
  );
};

export default ButtonFill;
