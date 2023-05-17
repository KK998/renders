import React from "react";
import { useDashStore } from "./store";

const GameMenu = () => {
  const { playGame, gameStatus, startNewGame } = useDashStore((state) => ({
    gameStatus: state.gameStatus,
    playGame: state.playTheGame,
    startNewGame: state.startNewGame,
  }));

  return (
    <div
      className={`absolute bg-gray-900 bg-opacity-95 top-0 left-0 bottom-0 right-0 z-[100] flex flex-col items-center justify-center ${
        gameStatus === "playing" ? "hidden" : ""
      }`}
    >
      <div className="flex flex-col gap-4 items-start">
        <h1 className="text-center font-black text-6xl mb-4 text-red-500">
          {gameStatus === "game_over" ? "GAME OVER" : "DASH"}
          <span className="text-white">!</span>
        </h1>
        {gameStatus === "game_over" && (
          <>
            <h4 className="text-left text-white w-full text-xl font-semibold mb-4">
              You have reached{" "}
              <kbd className="kbd kbd-md">
                level {useDashStore.getState().level}
              </kbd>
              <br />
              Your score is{" "}
              <kbd className="kbd kbd-md">{useDashStore.getState().score}</kbd>
            </h4>
          </>
        )}
        <div className="flex items-center justify-center gap-4">
          {gameStatus === "start" && (
            <button className="btn btn-primary" onClick={playGame}>
              Play
            </button>
          )}
          {gameStatus === "paused" && (
            <button className="btn btn-primary" onClick={playGame}>
              Resume
            </button>
          )}
          {gameStatus !== "start" && (
            <button onClick={startNewGame} className="btn btn-outline">
              New Game
            </button>
          )}
        </div>
        <small>Version 1.0 @2023</small>
      </div>
    </div>
  );
};

export default GameMenu;
