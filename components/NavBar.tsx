import Link from "next/link";

export function NavBar() {
  return (
    <nav className="fixed backdrop-brightness-75 backdrop-blur-md w-full z-10">
      <div className="container mx-auto px-4 flex justify-between h-20">
        <Link className="hover:scale-105 active:scale-110 transition ease-in-out" href={"/"}>
          <div className="flex flex-col py-2 text-center my-auto">
            <span className="font-mono text-2xl font-bold tracking-wider">
              Likecat
            </span>
            <span className="font-serif font-bold text-sm">Bojun Zhang</span>
          </div>
        </Link>
        <div className="flex space-x-4 text-xl py-4 my-auto">
          <Link href={"/"}>
            <button className="p-2 rounded-md text-blue-200 hover:text-white hover:bg-white/10 active:bg-white/20 transition ease-in-out">
              Home
            </button>
          </Link>
          <Link href={"about"}>
            <button className="p-2 rounded-md text-blue-200 hover:text-white hover:bg-white/10 active:bg-white/20 transition ease-in-out">
              About
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
