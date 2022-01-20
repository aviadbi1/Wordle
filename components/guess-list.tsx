import { WORD_LENGTH } from "../lib/constants";
import GuessResponseType from "../types/guessResponse";

type props = {
  guesses: GuessResponseType[];
};

const GuessList = ({ guesses }: props) => {
  const placeChars = (guessRes: GuessResponseType) => {
    if (!guessRes) {
      guessRes = { guess: "", correct: false, colors: [] };
    }
    let guess = guessRes.guess;
    let colors = guessRes.colors;
    let chars = [];
    for (let i = 0; i < WORD_LENGTH; i++) {
      let color = colors && colors[i] ? colors[i] : "gunsmoke";
      chars.push(
        <li key={i}>
          <label>
            {guess && guess[i] ? (
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-semibold bg-${color}-500`}
              >
                {guess[i].toUpperCase()}
              </div>
            ) : (
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-semibold bg-gunsmoke-900`}
              >
                {""}
              </div>
            )}
          </label>
        </li>
      );
    }
    return chars;
  };

  return (
    <div>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <ul key={i} className="w-60 flex space-x-4 mb-6 text-base font-medium">
          {placeChars(guesses[i])}
        </ul>
      ))}
    </div>
  );
};

export default GuessList;
