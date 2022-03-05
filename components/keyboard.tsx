import Letter from "./letter";

type Props = {
  onEnter: any;
  lettersChosen: any;
  addLetter: any;
  delLetter: any;
};

const Keyboard = ({ onEnter, lettersChosen, addLetter, delLetter }: Props) => {
  return (
    <div className="flex flex-col w-full pb-3">
      <div className="flex items-center justify-center">
        <Letter value="Q" lettersChosen={lettersChosen} letterClick={addLetter} />
        <Letter value="W" lettersChosen={lettersChosen} letterClick={addLetter} />
        <Letter value="E" lettersChosen={lettersChosen} letterClick={addLetter} />
        <Letter value="R" lettersChosen={lettersChosen} letterClick={addLetter} />
        <Letter value="T" lettersChosen={lettersChosen} letterClick={addLetter} />
        <Letter value="Y" lettersChosen={lettersChosen} letterClick={addLetter} />
        <Letter value="U" lettersChosen={lettersChosen} letterClick={addLetter} />
        <Letter value="I" lettersChosen={lettersChosen} letterClick={addLetter} />
        <Letter value="O" lettersChosen={lettersChosen} letterClick={addLetter} />
        <Letter value="P" lettersChosen={lettersChosen} letterClick={addLetter} />
      </div>
      <div className="space"></div>
      <div className="flex items-center justify-center">
        <Letter value="A" lettersChosen={lettersChosen} letterClick={addLetter} />
        <Letter value="S" lettersChosen={lettersChosen} letterClick={addLetter} />
        <Letter value="D" lettersChosen={lettersChosen} letterClick={addLetter} />
        <Letter value="F" lettersChosen={lettersChosen} letterClick={addLetter} />
        <Letter value="G" lettersChosen={lettersChosen} letterClick={addLetter} />
        <Letter value="H" lettersChosen={lettersChosen} letterClick={addLetter} />
        <Letter value="J" lettersChosen={lettersChosen} letterClick={addLetter} />
        <Letter value="K" lettersChosen={lettersChosen} letterClick={addLetter} />
        <Letter value="L" lettersChosen={lettersChosen} letterClick={addLetter} />
      </div>
      <div className="space"></div>
      <div className="flex items-center justify-center">
        <Letter value="ENTER" lettersChosen={lettersChosen} letterClick={onEnter} />
        <Letter value="Z" lettersChosen={lettersChosen} letterClick={addLetter} />
        <Letter value="X" lettersChosen={lettersChosen} letterClick={addLetter} />
        <Letter value="C" lettersChosen={lettersChosen} letterClick={addLetter} />
        <Letter value="V" lettersChosen={lettersChosen} letterClick={addLetter} />
        <Letter value="B" lettersChosen={lettersChosen} letterClick={addLetter} />
        <Letter value="N" lettersChosen={lettersChosen} letterClick={addLetter} />
        <Letter value="M" lettersChosen={lettersChosen} letterClick={addLetter} />
        <Letter value="DEL" lettersChosen={lettersChosen} letterClick={delLetter} />
      </div>
    </div>
  );
};

export default Keyboard;
