import Link from "next/link";
import RenderCard from "./(lib)/RenderCard";
import { renders } from "./(lib)/renders";
import Search, { ToggleSearch } from "./(lib)/Search";

export default function Home() {
  return (
    <>
      <Search />
      <Navigation />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <div
          id="renders"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 p-10"
        >
          {renders.map((render) => (
            <RenderCard
              key={render.title}
              description={render.description}
              link={render.link}
              title={render.title}
              image={render.image}
            />
          ))}
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
        <ToggleSearch />
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
          <a href="#renders" className="btn btn-primary">
            Lets` GO
          </a>
        </div>
      </div>
    </div>
  );
};
