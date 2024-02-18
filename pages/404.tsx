import { NavBar } from "@/components/NavBar";
import "/app/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHouse } from "@fortawesome/free-solid-svg-icons";
import router from "next/router";
import Link from "next/link";
export default function Custom404() {
  return (
    <div>
      <NavBar />
      <main className="flex min-h-screen bg-gradient-radial from-sky-800">
        <div className="container m-auto px-4 py-24 font-mono xl:text-2xl md:text-xl xl:leading-loose md:leading-relaxed space-y-4">
          <h1 className="mb-8 font-serif xl:text-9xl lg:text-8xl md:text-7xl text-5xl font-bold tracking-widest">
            404
          </h1>
          <h2 className="flex flex-col space-y-2 font-serif xl:text-6xl lg:text-5xl md:text-4xl text-2xl font-bold">
            <span>Oopsie-doodle!</span>
            <span>Page Not Found!</span>
          </h2>
          <p>
            Hey there, stargazer! Looks like you stumbled upon a digital black
            hole – the page you were attempting to warp into doesn
            {"'"}t exist in this cosmic playground. 🌌🚀
          </p>
          <p>
            No worries, though! It could be that I{"'"}m currently on a coffee
            break in the server room or maybe the code elves are playing
            hide-and-seek. Either way, your desired destination seems to be
            taking a cosmic siesta.
          </p>
          <p>
            Why not boomerang back to the homepage and explore other
            intergalactic wonders? 🌠✨ If this feels like a galactic glitch or
            you have questions as profound as the mysteries of the universe,
            shoot me an email at{" "}
            <Link
              href="mailto:a@likecat.cn"
              className="underline hover:text-blue-200 active:text-blue-400 transition ease-in-out"
            >
              a@likecat.cn
            </Link>
            . I{"'"}ll be there faster than the Millennium Falcon making the
            Kessel Run!
          </p>
          <p>Thanks a gazillion for your patience and stellar vibes! 🌌👾</p>
          <div className="space-x-4 pt-8">
            <button
              type="button"
              className="border rounded-md font-sans font-semibold px-4 py-2 hover:bg-white/10 active:bg-white/20 hover:scale-105 active:scale-110 transition ease-in-out"
              onClick={() => router.back()}
            >
              <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> Go Back
            </button>
            <button
              type="button"
              className="border rounded-md font-sans font-semibold px-4 py-2 hover:bg-white/10 active:bg-white/20 hover:scale-105 active:scale-110 transition ease-in-out"
              onClick={() => router.push("/")}
            >
              <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> Go Home
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
