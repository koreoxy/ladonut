const ButtonSecondary = ({ text }) => {
  return (
    <button className="border-2 px-5 py-2 rounded-md hover:bg-color-third transition-all text-color-dark hover:text-color-accent hover:border-2">
      <h1 className=" text-sm">{text}</h1>
    </button>
  );
};

export default ButtonSecondary;
