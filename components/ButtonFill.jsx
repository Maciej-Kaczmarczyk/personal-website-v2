const ButtonFill = ({ children, className }) => {
  return (
    // <button
    //   className={`relative w-[200px] rounded-lg bg-blue py-2 text-lg text-white duration-[100ms] ease-in-out hover:cursor-pointer hover:bg-blue-light hover:shadow-lg hover:shadow-blue-light ${className} `}
    // >
    //   {children}
    // </button>

    <div
      className={`flex w-[200px] items-center justify-center rounded-lg bg-gradient-to-r from-[#5A86FF] to-[#265FFF] p-[1px] shadow-button shadow-blue-light ${className}`}
    >
      <div className="flex w-full items-center justify-center rounded-lg bg-[#090911] bg-opacity-90 py-2 text-lg text-white duration-200 hover:cursor-pointer hover:bg-blue-light">
        {children}
      </div>
    </div>
  );
};

export default ButtonFill;
