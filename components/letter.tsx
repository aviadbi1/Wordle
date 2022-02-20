import Colors from "../types/colors";

type Props = {
  value: string;
  lettersChosen: any;
  letterClick: any;
};

const Letter = ({ value, lettersChosen, letterClick }: Props) => {
  return (
    <button
      className={`key font-semibold bg-${
        lettersChosen[value] ? lettersChosen[value] : Colors.nothing
      }`}
      onClick={letterClick}
    >
      {value}
    </button>
  );
};

export default Letter;
