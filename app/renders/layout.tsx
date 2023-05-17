import React from "react";
import Link from "next/link";
import Search, { ToggleSearch } from "../(lib)/Search";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="drawer">
      <input id="game-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Search />
        <Navigation />
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="game-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li>
            <Link href="/renders/dash">Dash</Link>
          </li>
          <li>
            <Link href="/renders/car">Car</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;

const Navigation = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <label
          tabIndex={0}
          htmlFor="game-drawer"
          className="btn btn-ghost btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
      </div>
      <div className="navbar-center">
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl font-mono font-black"
        >
          <span className="badge font-black font-mono badge-primary mr-1">
            KK
          </span>
          Renders
        </Link>
      </div>
      <div className="navbar-end">
        <ToggleSearch />
      </div>
    </div>
  );
};
