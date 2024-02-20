import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faHouse } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export function NavBar() {
  return (
    <nav className="backdrop-brightness-75 backdrop-blur-md w-full">
      <div className="container mx-auto px-4 flex justify-between h-20">
        <Link
          className="my-auto hover:scale-105 active:scale-110 transition ease-in-out"
          href="/"
        >
          <div className="flex flex-col">
            <span className="font-mono text-2xl font-bold tracking-wider">
              Likecat
            </span>
            <span className="font-mono font-bold">Bojun Zhang</span>
          </div>
        </Link>
        <div className="flex space-x-4 sm:text-xl py-4 my-auto">
          <Link
            href="/"
            className="p-2 rounded-md space-x-1 hover:text-blue-200 hover:bg-white/10 active:bg-white/20 transition ease-in-out"
          >
            <FontAwesomeIcon icon={faHouse} />
            <span className="max-md:hidden">Home</span>
          </Link>
          <Link
            href="about"
            className="p-2 rounded-md space-x-1 hover:text-blue-200 hover:bg-white/10 active:bg-white/20 transition ease-in-out"
          >
            <FontAwesomeIcon icon={faAddressCard} />
            <span className="max-md:hidden">About</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
