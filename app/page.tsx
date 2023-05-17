/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <div
          id="games"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 p-10"
        >
          <GamesCard
            description="Same game. Single box. 3 lanes. Run as far as you can."
            link="/renders/dash"
            title="Dash!"
            image="https://images.pexels.com/photos/4836510/pexels-photo-4836510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <GamesCard
            description="Render of a corvette car. Added some lights, rings and boxes for fun too."
            link="/renders/dash"
            title="Car"
            image="https://images.pexels.com/photos/4836510/pexels-photo-4836510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </main>
    </>
  );
}

const Navigation = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
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
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Homepage</Link>
            </li>
            <li>
              <Link target="_blank" href="https://klemen-komel.com">
                Portfolio
              </Link>
            </li>
            <li>
              <Link target="_blank" href="https://blog.klemen-komel.com">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl font-mono font-black"
        >
          <span className="badge font-black font-mono badge-primary mr-1">
            KK
          </span>
          Render
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
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
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hi, stranger</h1>
          <p className="pt-6 mb-4">
            Here you can find some renders made by me. All the renders are made
            with three.js, react-three/fiber, react-three/drei,
            react-three/postprocessing and react-three/rapier.
          </p>
          <p className="mb-6">I hope you will enjoy.</p>
          <a href="#games" className="btn btn-primary">
            Lets` GO
          </a>
        </div>
      </div>
    </div>
  );
};

type GamesCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const GamesCard = ({ title, description, image, link }: GamesCardProps) => {
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
};
