const ButtonFill = ({ children, className }) => {
  return (
    <button
      className={`w-[200px] rounded-lg bg-blue py-2 text-lg text-white duration-[100ms] ease-in-out hover:cursor-pointer hover:bg-blue-light hover:shadow-lg hover:shadow-blue-light ${className} `}
    >
      {children}
    </button>
  );
};

export default ButtonFill;
