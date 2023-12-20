const ButtonPrimary = ({ text }) => {
  return (
    <button className="bg-color-accent px-5 py-2 rounded-md hover:bg-color-third transition-all text-color-primary hover:text-color-accent hover:border-2">
      <h1 className=" text-sm">{text}</h1>
    </button>
  );
};

export default ButtonPrimary;
