import Letter from "./letter";

const Keyboard = ({ onEnter, lettersChosen, addLetter, delLetter }) => {
  return (
    <div>
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
      <div className="space"></div>
      <Letter value="A" lettersChosen={lettersChosen} letterClick={addLetter} />
      <Letter value="S" lettersChosen={lettersChosen} letterClick={addLetter} />
      <Letter value="D" lettersChosen={lettersChosen} letterClick={addLetter} />
      <Letter value="F" lettersChosen={lettersChosen} letterClick={addLetter} />
      <Letter value="G" lettersChosen={lettersChosen} letterClick={addLetter} />
      <Letter value="H" lettersChosen={lettersChosen} letterClick={addLetter} />
      <Letter value="J" lettersChosen={lettersChosen} letterClick={addLetter} />
      <Letter value="K" lettersChosen={lettersChosen} letterClick={addLetter} />
      <Letter value="L" lettersChosen={lettersChosen} letterClick={addLetter} />
      <div className="space"></div>
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
  );
};

export default Keyboard;
