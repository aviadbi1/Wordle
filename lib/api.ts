import { CODE_WORD } from "./constants";
import GuessResponseType from "../types/guessResponse";
import Colors from "../types/colors";

export function checkGuess(guess: string): GuessResponseType {
  let colors = [];
  let correct = true;
  for (let i = 0; i < guess.length; i++) {
    const c = guess[i];
    if (c === CODE_WORD[i]) {
      colors.push(Colors.green);
    } else if (CODE_WORD.indexOf(c) >= 0) {
      colors.push(Colors.yellow);
      correct = false;
    } else {
      colors.push(Colors.gray);
      correct = false;
    }
  }
  return { correct, colors, guess };
}
