const Button = ({ name }) => {
  return (
    <button className="bg-gray-100 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
      {name}
    </button>
  );
};

export default Button;
