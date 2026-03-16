const Button = ({ w, h, content }) => {
  return (
    <button
      className={`w-${w} h-${h} bg-[#46A358] text-white rounded-md text-[16px] font-bold cursor-pointer duration-200 hover:bg-[#4caf60]`}
    >
      {content}
    </button>
  );
};

export default Button;