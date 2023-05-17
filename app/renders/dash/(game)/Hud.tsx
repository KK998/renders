import React, { ReactNode } from "react";
import { useDashStore } from "./store";
import GameMenu from "./GameMenu";

const Hud = ({ children }: { children: ReactNode }) => {
  const level = useDashStore((state) => state.level);
  return (
    <>
      {children}
      <GameMenu />
      <div className="absolute top-[4px] w-full text-center justify-center items-center flex flex-col">
        <h1 className="text-3xl font-black text-center text-white flex items-center">
          Level <kbd className="kbd kbd-md ml-2">{level}</kbd>
        </h1>
      </div>
    </>
  );
};

export default Hud;
