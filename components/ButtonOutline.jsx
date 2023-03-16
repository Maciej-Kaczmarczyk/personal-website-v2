const ButtonOutline = ({ children }) => {
  return (
    <button
      className={`w-[200px] rounded-lg border border-white bg-white bg-opacity-0 py-2 text-lg text-white duration-[200ms] ease-in-out hover:cursor-pointer hover:bg-opacity-100 hover:text-blue-light hover:shadow-lg hover:shadow-white dark:border-gray-dark dark:text-gray-dark dark:hover:bg-gray-dark dark:hover:text-white dark:hover:shadow-gray-dark dark:font-medium dark:hover:font-base`}
    >
      {children}
    </button>
  );
};

export default ButtonOutline;
