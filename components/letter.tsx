import Colors from "../types/colors";

const Letter = ({ value, lettersChosen, letterClick }) => {
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
