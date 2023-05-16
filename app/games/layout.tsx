import React from "react";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="drawer">
      <input id="game-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label htmlFor="game-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li>
            <Link href="/games/game1">Game 1</Link>
          </li>
          <li>
            <Link href="/games/game2">Game 2</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
