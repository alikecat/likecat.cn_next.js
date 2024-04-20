import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faOrcid } from "@fortawesome/free-brands-svg-icons";

export function FootBar() {
  const nav = [
    { name: "likecat.cn", icon: faHouse, href: "/" },
    { name: "a@likecat.cn", icon: faEnvelope, href: "mailto:a@likecat.cn" },
    { name: "GitHub", icon: faGithub, href: "https://github.com/alikecat" },
    {
      name: "ORCID",
      icon: faOrcid,
      href: "https://orcid.org/0000-0002-1867-0243",
    },
  ];
  return (
    <footer className=" bg-slate-950">
      <div className="container mx-auto px-4 py-8 space-y-4">
        <div className="flex max-sm:flex-col sm:space-x-4 font-bold">
          {nav.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="space-x-1 underline hover:text-blue-200 active:text-blue-400 transition ease-in-out"
            >
              <FontAwesomeIcon icon={link.icon} />
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
        <div className=" font-serif">© 2024 Bojun Zhang</div>
      </div>
    </footer>
  );
}
