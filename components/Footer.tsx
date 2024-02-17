import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faOrcid } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer className=" bg-slate-950 mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="flex max-sm:flex-col my-4 sm:space-x-4 font-bold">
          <Link
            href={"/"}
            className="hover:text-blue-200 active:text-blue-400 transition ease-in-out"
          >
            <FontAwesomeIcon icon={faHouse}/> likecat.cn{" "}
          </Link>
          <Link
            href={"mailto:a@likecat.cn"}
            className="hover:text-blue-200 active:text-blue-400 transition ease-in-out"
          >
            <FontAwesomeIcon icon={faEnvelope}/> a@likecat.cn
          </Link>
          <Link
            href={"https://github.com/zbj178016760"}
            className="hover:text-blue-200 active:text-blue-400 transition ease-in-out"
          >
            <FontAwesomeIcon icon={faGithub}/> GitHub
          </Link>
          <Link
            href={"https://orcid.org/0000-0002-1867-0243"}
            className="hover:text-blue-200 active:text-blue-400 transition ease-in-out"
          >
            <FontAwesomeIcon icon={faOrcid}/> ORCID
          </Link>
        </div>
        <div className=" font-serif">© 2024 Bojun Zhang</div>
      </div>
    </footer>
  );
}
