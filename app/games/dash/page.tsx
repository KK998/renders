import Game from "./(game)/Game";

export default function Dash() {
  return (
    <>
      <GameInfo />
      <Game />
      <GameInstructions />
    </>
  );
}

const GameInfo = () => {
  return (
    <div className="container mx-auto p-10">
      <h1 className="card-title">Dash</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos qui, quia
        consequatur reiciendis obcaecati molestias numquam sed fugit laborum
        fugiat?
      </p>
    </div>
  );
};

const GameInstructions = () => {
  return (
    <div className="container mx-auto p-10">
      <div className="divider" />
      <div className="flex justify-center">
        <div className="tooltip" data-tip="Jump">
          <kbd className="kbd mt-1">▲</kbd>
        </div>
      </div>
      <div className="flex justify-center gap-12 w-full">
        <div className="tooltip" data-tip="Go back">
          <kbd className="kbd">◀︎</kbd>
        </div>
        <div className="tooltip" data-tip="Go forward">
          <kbd className="kbd">▶︎</kbd>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="tooltip" data-tip="Go down">
          <kbd className="kbd">▼</kbd>
        </div>
      </div>
    </div>
  );
};
