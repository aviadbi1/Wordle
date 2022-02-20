import { WORD_LENGTH, NUM_OF_GUESSES } from "../lib/constants";
import Colors from "../types/colors";
import GuessResponseType from "../types/guessResponse";

type Props = {
  guesses: GuessResponseType[];
  currGuess: string;
};

const GuessList = ({ currGuess, guesses }: Props) => {
  const placeChars = (guessRes: GuessResponseType) => {
    if (!guessRes) {
      guessRes = { guess: "", correct: false, colors: [] };
    }
    let guess = guessRes.guess;
    let colors = guessRes.colors;
    let chars = [];
    for (let i = 0; i < WORD_LENGTH; i++) {
      let color = colors && colors[i] ? colors[i] : Colors.nothing;
      chars.push(
        <li key={i} className="">
          <label>
            {guess && guess[i] ? (
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-semibold bg-${color}`}
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

  const generateGuessesPlaceHolder = () => {
    let placeholders = [];
    for (let i = 0; i < NUM_OF_GUESSES; i++) {
      let guessResponse: GuessResponseType = { guess: "", correct: false, colors: [] };
      if (i < guesses.length) {
        guessResponse = guesses[i];
      } else if (i == guesses.length) {
        guessResponse.guess = currGuess;
      }
      placeholders.push(
        <ul key={i} className="w-60 m-auto flex space-x-4 mb-6 text-base font-medium">
          {placeChars(guessResponse)}
        </ul>
      );
    }
    return placeholders;
  };

  return <div>{generateGuessesPlaceHolder()}</div>;
};

export default GuessList;
