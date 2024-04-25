import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBars,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";

export function NavBar() {
  const nav = [
    { name: "Home", icon: faHouse, href: "/" },
    { name: "About", icon: faAddressCard, href: "about" },
  ];
  return (
    <Disclosure
      as="nav"
      className="backdrop-brightness-75 backdrop-blur-md w-full font-mono"
    >
      <div className="container mx-auto px-4 flex justify-between h-20">
        <Link
          className="my-auto hover:scale-105 active:scale-110 transition ease-in-out"
          href="/"
        >
          <div className="flex flex-col">
            <span className="font-dune text-2xl font-bold tracking-wider">
              Likecat
            </span>
            <span className="font-dune font-bold">Bojun Zhang</span>
          </div>
        </Link>
        <div className="flex space-x-4 sm:text-xl my-auto max-md:hidden">
          {nav.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="p-2 rounded-md space-x-1 hover:text-blue-200 hover:bg-white/10 active:bg-white/20 transition ease-in-out"
            >
              <FontAwesomeIcon icon={link.icon} />
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
        <div className="my-auto md:hidden">
          <Disclosure.Button className="p-2 space-x-1 hover:text-blue-200 active:hover:text-blue-400 transition ease-in-out">
            <FontAwesomeIcon icon={faBars} />
          </Disclosure.Button>
        </div>
      </div>
      <Disclosure.Panel className="container mx-auto flex flex-col p-2 space-y-1">
        {nav.map((link) => (
          <Disclosure.Button
            key={link.name}
            as={Link}
            href={link.href}
            className="p-2 rounded-md space-x-1 hover:text-blue-200 hover:bg-white/10 active:bg-white/20 transition ease-in-out"
          >
            <FontAwesomeIcon icon={link.icon} />
            <span>{link.name}</span>
          </Disclosure.Button>
        ))}
      </Disclosure.Panel>
    </Disclosure>
  );
}
