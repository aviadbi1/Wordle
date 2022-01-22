import { useEffect, useState } from "react";
import { checkGuess, getRandomWord, getTheCodeWord } from "../lib/api";
import { NUM_OF_GUESSES } from "../lib/constants";
import GuessResponseType from "../types/guessResponse";
import GuessButtons from "./guess-buttons";
import GuessList from "./guess-list";
import Modal from "./popup";

const Board = () => {
  const [guesses, setGuesses] = useState<GuessResponseType[]>([]);
  const [currGuess, setCurrGuess] = useState("");
  const [showModal, setOpen] = useState(false);
  const [alert, setAlert] = useState({ title: "", text: "", cb: () => {} });

  useEffect(() => {
    getRandomWord();
  }, []);

  const closeModal = () => setOpen(false);

  function onShowAlert(title: string, text: string, cb: any) {
    setAlert({ title, text, cb });
    setOpen(true);
  }

  const clearCurrGuess = () => {
    setCurrGuess("");
  };

  const newCodeWord = () => {
    setGuesses([]);
    clearCurrGuess();
    getRandomWord();
  };

  const guessThatWord = () => {
    if (guesses.length > NUM_OF_GUESSES) {
      onShowAlert(
        "Nevermind",
        `Can't guess no more :( \nThat word was "${getTheCodeWord()}"`,
        () => {
          clearCurrGuess();
        }
      );
    } else {
      let response = checkGuess(currGuess);
      setGuesses([...guesses, response]);

      if (response.correct) {
        onShowAlert(
          "WooHoo",
          `You managed to it in ${guesses.length + 1} guesses`,
          () => {
            clearCurrGuess();
          }
        );
      } else if (guesses.length == NUM_OF_GUESSES) {
        onShowAlert(
          "Nevermind",
          `Try next time... \nThat word was "${getTheCodeWord()}"`,
          () => {
            clearCurrGuess();
          }
        );
      }
    }
  };

  return (
    <div className="text-center">
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

      <GuessButtons action={guessThatWord} clear={clearCurrGuess} restart={newCodeWord} />

      <Modal
        showModal={showModal}
        title={alert.title}
        text={alert.text}
        cb={alert.cb}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Board;
