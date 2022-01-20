import { CODE_WORD } from "./constants";
import GuessResponseType from "../types/guessResponse";
import Colors from "../types/colors";
import { WORDS_ARRAY } from "./words";

let codeWord = "";

export function checkGuess(guess: string): GuessResponseType {
  let colors = [];
  let correct = true;

  for (let i = 0; i < guess.length; i++) {
    const c = guess[i];
    if (c === codeWord[i]) {
      colors.push(Colors.green);
    } else if (codeWord.indexOf(c) >= 0) {
      colors.push(Colors.yellow);
      correct = false;
    } else {
      colors.push(Colors.gray);
      correct = false;
    }
  }
  return { correct, colors, guess };
}

export function getRandomWord(): string {
  const len = WORDS_ARRAY.length;
  codeWord = WORDS_ARRAY[Math.floor(Math.random() * len)];
  console.log(codeWord);
  return codeWord;
}
