import Button from "./Button";

const ButtonList = () => {
  const buttons = [
    "All",
    "Music",
    "Sports",
    "Gaming",
    "News",
    "Movies",
    "Fashion",
    "Learning",
    "Live",
  ];
  return (
    <div className="flex gap-2 p-4 overflow-x-auto">
      {buttons.map((button) => (
        <Button key={button} name={button}></Button>
      ))}
    </div>
  );
};

export default ButtonList;
