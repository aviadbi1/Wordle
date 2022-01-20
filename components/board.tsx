import { useEffect, useState } from "react";
import { checkGuess, getRandomWord } from "../lib/api";
import GuessResponseType from "../types/guessResponse";
import GuessList from "./guess-list";

const Board = () => {
  const [guesses, setGuesses] = useState<GuessResponseType[]>([]);
  const [currGuess, setCurrGuess] = useState("");

  useEffect(() => {
    getRandomWord();
  }, []);

  const clearCurrGuess = () => {
    setCurrGuess("");
  };

  const guessThatWord = () => {
    let a = checkGuess(currGuess);
    console.log(a);
    setGuesses([...guesses, a]);
  };

  return (
    <div>
      <input
        className="focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4 text-base leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
        type="text"
        placeholder="Guess..."
        value={currGuess}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            guessThatWord();
          }
        }}
        onChange={(e) =>
          setCurrGuess(e.target.value.trim().substring(0, 5).toUpperCase())
        }
      />
      <GuessList guesses={guesses} />

      <div className="flex space-x-4 mb-6 text-sm font-medium">
        <div className="flex-auto flex space-x-4">
          <button
            className="h-10 px-6 font-semibold rounded-md bg-black text-white"
            type="submit"
            onClick={guessThatWord}
          >
            Guess
          </button>
          <button
            className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
            type="button"
            onClick={clearCurrGuess}
          >
            Clear Guess
          </button>
        </div>
      </div>
    </div>
  );
};

export default Board;
