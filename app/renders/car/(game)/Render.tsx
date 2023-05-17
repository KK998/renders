"use client";

import { useState } from "react";
import Game from "./Game";

export default function Render() {
  const [showRender, setShowRender] = useState(false);
  return showRender ? (
    <Game />
  ) : (
    <RenderStart onClick={() => setShowRender(true)} />
  );
}

const RenderStart = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <button onClick={onClick} className="btn btn-primary btn-circle btn-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
          />
        </svg>
      </button>
    </div>
  );
};
