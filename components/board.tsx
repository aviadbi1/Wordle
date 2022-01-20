import { useState } from "react";
import GuessList from "./guess-list";

const Board = () => {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currGuess, setCurrGuess] = useState("");

  const clearCurrGuess = () => {
    setCurrGuess("");
  };

  const guessThatWord = () => {
    setGuesses([...guesses, currGuess]);
  };

  return (
    <div>
      <input
        name="guess"
        type="text"
        value={currGuess}
        onChange={(e) => setCurrGuess(e.target.value.trim().substring(0, 5))}
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
      <p>{currGuess}</p>
    </div>
  );
};

export default Board;
