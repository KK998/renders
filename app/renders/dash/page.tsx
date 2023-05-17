import Game from "./(game)/Game";

export default function Dash() {
  return (
    <>
      <GameInfo />
      <div className="container mx-auto p-10">
        <div className="mockup-code h-[45vh] min-h-[500px]">
          <Game />
        </div>
      </div>
      <GameInstructions />
    </>
  );
}

const GameInfo = () => {
  return (
    <div className="container mx-auto p-10">
      <h1 className="card-title">Dash</h1>
      <p>Sane game. Single box. 3 lanes. Run as far as you can.</p>
    </div>
  );
};

const GameInstructions = () => {
  return (
    <div className="container mx-auto p-10">
      <div className="divider" />
      <h1 className="text-center text-white font-bold mb-2">Instructions</h1>
      <div className="flex justify-center gap-12 w-full">
        <div className="tooltip" data-tip="Switch to left lane">
          <kbd className="kbd">◀︎</kbd>
          <kbd className="kbd">a</kbd>
          <kbd className="kbd">A</kbd>
        </div>
        <div className="tooltip" data-tip="Switch to right lane">
          <kbd className="kbd">▶︎</kbd>
          <kbd className="kbd">d</kbd>
          <kbd className="kbd">D</kbd>
        </div>
        <div className="tooltip" data-tip="Booost!">
          <kbd className="kbd mt-1">SPACE</kbd>
        </div>
        <div className="tooltip" data-tip="Open/Close Menu">
          <kbd className="kbd mt-1">ESC</kbd>
        </div>
      </div>
    </div>
  );
};
