import Image from "next/image";
import Link from "next/link";
import React from "react";

type RenderCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function RenderCard({
  title,
  description,
  image,
  link,
}: RenderCardProps) {
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
          <Link href={link} className="btn btn-primary">
            View Render
          </Link>
        </div>
      </div>
    </div>
  );
}
