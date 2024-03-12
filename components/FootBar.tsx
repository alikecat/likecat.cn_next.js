import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faOrcid } from "@fortawesome/free-brands-svg-icons";

export function FootBar() {
  return (
    <footer className=" bg-slate-950">
      <div className="container mx-auto px-4 py-8 space-y-4">
        <div className="flex max-sm:flex-col sm:space-x-4 font-bold">
          <Link
            href="/"
            className="space-x-1 underline hover:text-blue-200 active:text-blue-400 transition ease-in-out"
          >
            <FontAwesomeIcon icon={faHouse} />
            <span>likecat.cn</span>
          </Link>
          <Link
            href="mailto:a@likecat.cn"
            className="space-x-1 underline hover:text-blue-200 active:text-blue-400 transition ease-in-out"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span>a@likecat.cn</span>
          </Link>
          <Link
            href="https://github.com/alikecat"
            className="space-x-1 underline hover:text-blue-200 active:text-blue-400 transition ease-in-out"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span>GitHub</span>
          </Link>
          <Link
            href="https://orcid.org/0000-0002-1867-0243"
            className="space-x-1 underline hover:text-blue-200 active:text-blue-400 transition ease-in-out"
          >
            <FontAwesomeIcon icon={faOrcid} />
            <span>ORCID</span>
          </Link>
        </div>
        <div className=" font-serif">© 2024 Bojun Zhang</div>
      </div>
    </footer>
  );
}
