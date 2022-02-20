import { useEffect, useState } from "react";
import { checkGuess, getRandomWord, getTheCodeWord } from "../lib/api";
import { NUM_OF_GUESSES, WORD_LENGTH } from "../lib/constants";
import Colors from "../types/colors";
import GuessResponseType from "../types/guessResponse";
import GuessButtons from "./guess-buttons";
import GuessList from "./guess-list";
import Keyboard from "./keyboard";
import Modal from "./popup";

const Board = () => {
  const [guesses, setGuesses] = useState<GuessResponseType[]>([]);
  const [lettersChosen, setLetters] = useState<any>({});
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
    setLetters({});
  };

  const newCodeWord = () => {
    setGuesses([]);
    clearCurrGuess();
    getRandomWord();
  };

  const addLetter = (event: any) => {
    if (currGuess.length < WORD_LENGTH) {
      setCurrGuess(currGuess.concat(event.target.innerText));
    }
  };

  const delLetter = () => {
    if (currGuess.length > 0) {
      setCurrGuess(currGuess.substring(0, currGuess.length - 1));
    }
  };

  const updateKeyboardColors = (colors: string[]) => {
    let updatedLetters: any = {};
    for (let i = 0; i < colors.length; i++) {
      const letter = currGuess.charAt(i);
      let newColor = colors[i];
      let oldColor = updatedLetters[letter]
        ? updatedLetters[letter]
        : lettersChosen[letter];
      if (
        oldColor != Colors.green &&
        (oldColor != Colors.yellow || newColor != Colors.gray)
      ) {
        updatedLetters = {
          ...updatedLetters,
          [letter]: newColor,
        };
      }
    }

    setLetters({ ...lettersChosen, ...updatedLetters });
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
    } else if (currGuess.length == WORD_LENGTH) {
      let response = checkGuess(currGuess);
      updateKeyboardColors(response.colors);
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
      setCurrGuess("");
    }
  };

  return (
    <div className="text-center h-screen">
      <GuessList currGuess={currGuess} guesses={guesses} />
      <Keyboard
        onEnter={guessThatWord}
        lettersChosen={lettersChosen}
        addLetter={addLetter}
        delLetter={delLetter}
      />
      <GuessButtons restart={newCodeWord} />

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
