const ButtonOutline = ({ children, className }) => {
  return (
    <button
      className={`dark:hover:text-whitedark:border-[1px] dark:hover:font-base w-[200px] select-none rounded-lg border border-white bg-white bg-opacity-0 py-2 text-lg text-white duration-200 hover:cursor-pointer hover:bg-opacity-100 hover:text-gray-dark hover:shadow-button hover:shadow-white dark:font-medium dark:text-gray-dark ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonOutline;
