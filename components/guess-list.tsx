import { WORD_LENGTH } from "../lib/constants";

type props = {
  guesses: string[];
};

const GuessList = ({ guesses }: props) => {
  const placeChars = (guess: string) => {
    let chars = [];
    for (let index = 0; index < WORD_LENGTH; index++) {
      chars.push(
        <li key={index}>
          <label>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-semibold bg-slate-900 ">
              {guess && guess[index] ? guess[index].toUpperCase() : ""}
            </div>
          </label>
        </li>
      );
    }
    return chars;
  };

  return (
    <div>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <ul className="w-60 flex space-x-4 mb-6 text-base font-medium">
          {placeChars(guesses[i])}
        </ul>
      ))}
    </div>
  );
};

export default GuessList;
