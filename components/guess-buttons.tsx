interface Props {
  action: any;
  clear: any;
  restart: any;
}

const GuessButtons = (props: Props) => {
  return (
    <div className="flex space-x-4 mb-6 text-sm font-medium">
      <div className="flex flex-auto justify-center space-x-4">
        <button
          className="h-10 px-6 font-semibold rounded-md bg-black text-white"
          type="submit"
          onClick={props.action}
        >
          Guess
        </button>
        <button
          className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
          type="button"
          onClick={props.clear}
        >
          Clear Guess
        </button>
      </div>
      <div className="flex flex-auto justify-center space-x-4">
        <button
          className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
          type="button"
          onClick={props.restart}
        >
          New CodeWord
        </button>
      </div>
    </div>
  );
};

export default GuessButtons;
