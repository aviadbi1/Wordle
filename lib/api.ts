import GuessResponseType from "../types/guessResponse";
import Colors from "../types/colors";
import { WORDS_ARRAY } from "./words";
import { WORD_LENGTH } from "./constants";

let codeWord = "";

export function checkGuess(guess: string): GuessResponseType {
  let colors = Array(WORD_LENGTH);
  let correct = true;
  let occurences = countOccurences(codeWord);

  for (let i = 0; i < guess.length; i++) {
    const c = guess[i];
    if (c === codeWord[i]) {
      colors[i] = Colors.green;
      occurences[c]--;
    }
  }

  for (let i = 0; i < guess.length; i++) {
    const c = guess[i];
    if (!colors[i]) {
      correct = false;
      if (codeWord.indexOf(c) >= 0 && occurences[c] > 0) {
        colors[i] = Colors.yellow;
        occurences[c]--;
      } else {
        colors[i] = Colors.gray;
      }
    }
  }
  return { correct, colors, guess };
}

function countOccurences(str: string) {
  let occurences: any = {};
  for (let i = 0; i < str.length; i++) {
    if (!occurences[str[i]]) {
      let count = 0;
      for (let j = 0; j < str.length; j++) {
        if (str[i] === str[j]) {
          count++;
        }
      }
      occurences[str[i]] = count;
    }
  }
  return occurences;
}

export function getTheCodeWord(): string {
  return codeWord;
}
export function getRandomWord(): string {
  const len = WORDS_ARRAY.length;
  codeWord = WORDS_ARRAY[Math.floor(Math.random() * len)];
  console.log(codeWord);
  return codeWord;
}
