import Render from "./(game)/Render";

export default function Car() {
  return (
    <>
      <GameInfo />
      <div className="container mx-auto p-10">
        <div className="mockup-code h-[70vh] min-h-[500px]">
          <Render />
        </div>
      </div>
    </>
  );
}

const GameInfo = () => {
  return (
    <div className="container mx-auto p-10">
      <h1 className="card-title">Car</h1>
      <p>
        Render of a corvette car. Added some lights, rings and boxes for fun
        too.
      </p>
      <p>
        Please keep in mind that this render will demand some CPU resources 🥵
      </p>
    </div>
  );
};
