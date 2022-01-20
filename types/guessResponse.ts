import Colors from "./colors";

type GuessResponseType = {
  guess: string;
  colors: Colors[];
  correct: boolean;
};

export default GuessResponseType;
