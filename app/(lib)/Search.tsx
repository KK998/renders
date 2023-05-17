"use client";

import React, { useEffect, useMemo, useState } from "react";
import { renders } from "./renders";
import RenderCard from "./RenderCard";
import { useAppStore } from "./appStore";

const Search = () => {
  const isSearchOpen = useAppStore((state) => state.isSearchOpen);

  const [query, setQuery] = useState<string>("");
  const items = useMemo(
    () =>
      query.length > 0
        ? renders.filter(
            (render) =>
              render.title.toLowerCase().includes(query.toLowerCase()) ||
              render.description.toLowerCase().includes(query.toLowerCase())
          )
        : [],
    [query]
  );

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSearchOpen]);

  const searchStyles = isSearchOpen
    ? "translate-y-0 opacity-100"
    : "translate-y-full opacity-0";

  return (
    <div
      className={`${searchStyles} fixed top-[64px] left-0 right-0 bottom-0 flex flex-col bg-base-100 z-[500] gap-4 transition-all p-10`}
    >
      <div className="container mx-auto flex flex-col gap-5">
        <input
          autoFocus
          type="text"
          placeholder="Query..."
          className="input input-bordered w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {items.length === 0 && (
          <div className="alert shadow-lg w-full mx-auto flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-info flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>No results found</span>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-[60vh]">
          {items.length > 0 &&
            items.map((render) => (
              <RenderCard key={render.title} replace {...render} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;

export const ToggleSearch = () => {
  const toggleSearch = useAppStore((state) => state.toggleSearch);
  return (
    <button onClick={toggleSearch} className="btn btn-ghost btn-circle">
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
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
  );
};
