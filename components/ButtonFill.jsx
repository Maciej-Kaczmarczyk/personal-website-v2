const ButtonFill = ({ children, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex w-[200px] select-none items-center justify-center rounded-lg bg-gradient-to-r from-[#3252ad] to-[#1e4ac3] p-[1px] shadow-button shadow-blue-light ${className}`}
    >
      <div className="flex w-full items-center justify-center rounded-lg bg-black bg-opacity-90 py-2 text-lg text-white duration-200 hover:cursor-pointer hover:bg-blue-light">
        {children}
      </div>
    </div>
  );
};

export default ButtonFill;
