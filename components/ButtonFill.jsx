const ButtonFill = ({ children }) => {
  return (
    <button
      className={`w-[200px] rounded-lg bg-[#2542ff] py-2 text-lg text-white duration-[200ms] ease-in-out hover:cursor-pointer hover:bg-[#006aff] hover:shadow-lg hover:shadow-[#006aff] `}
    >
      {children}
    </button>
  );
};

export default ButtonFill;
