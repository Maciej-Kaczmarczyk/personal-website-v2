const ButtonOutline = ({ children, className }) => {
  return (
    <button
      className={`w-[200px] rounded-lg border border-white bg-white bg-opacity-0 py-2 text-lg text-white duration-200 hover:cursor-pointer hover:bg-opacity-100 hover:text-gray-dark dark:text-gray-dark dark:hover:text-whitedark:border-[1px] dark:font-medium hover:shadow-button hover:shadow-white dark:hover:font-base ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonOutline;
