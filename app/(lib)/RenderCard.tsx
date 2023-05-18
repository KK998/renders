"use client";

import Image from "next/image";
import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAppStore } from "./appStore";

type RenderCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  replace?: boolean;
};

export default function RenderCard({
  title,
  description,
  image,
  link,
  replace = false,
}: RenderCardProps) {
  const toggleSearch = useAppStore((state) => state.toggleSearch);
  const router = useRouter();

  const handleButtonClick = useCallback(() => {
    if (replace) {
      toggleSearch();
    }
    router.push(link);
  }, [replace, link, toggleSearch, router]);

  return (
    <div className="card flex-grow bg-base-100 shadow-xl">
      <div className="flex flex-col relative w-full h-60 overflow-hidden rounded-xl">
        <Image
          width={400}
          height={200}
          className="object-cover object-center w-full h-full"
          alt="render"
          src={image}
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end mt-5">
          <button onClick={handleButtonClick} className="btn btn-primary">
            View Render
          </button>
        </div>
      </div>
    </div>
  );
}
