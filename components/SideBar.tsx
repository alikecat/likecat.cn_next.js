import { faGithub, faOrcid } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export function SideBar() {
  return (
    <div className="w-72 shrink-0 max-md:hidden">
      <div className="sticky top-28 flex flex-col py-4 space-y-4 font-sans">
        <Image
          src="/Avatar.jpg"
          alt=""
          width={256}
          height={256}
          quality={100}
          className="mx-auto rounded-full outline outline-1 outline-offset-8 outline-white/20"
        />
        <h2 className="font-serif font-bold text-2xl text-center">
          Bojun Zhang
        </h2>
        <p className="font-mono">
          Mechanical PhD candidate, tackling gears by day, moonlighting as a
          code wizard and UI designer by night. 🚀💻✨
        </p>
        <div className="table leading-loose border-t border-white/20 py-4">
          <div className="table-row">
            <FontAwesomeIcon icon={faSchool} className="table-cell m-auto" />
            <span className="table-cell">XJTU</span>
          </div>
          <div className="table-row">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="table-cell m-auto"
            />
            <span className="table-cell">{"Xi'an, China"}</span>
          </div>
          <Link
            href={"mailto:a@likecat.cn"}
            className="underline hover:text-blue-200 active:text-blue-400 transition ease-in-out table-row"
          >
            <FontAwesomeIcon icon={faEnvelope} className="table-cell m-auto" />
            <span className="table-cell">a@likecat.cn</span>
          </Link>
          <Link
            href={"https://github.com/zbj178016760"}
            className="underline hover:text-blue-200 active:text-blue-400 transition ease-in-out table-row"
          >
            <FontAwesomeIcon icon={faGithub} className="table-cell m-auto" />
            <span className="table-cell">zbj178016760</span>
          </Link>
          <Link
            href={"https://orcid.org/0000-0002-1867-0243"}
            className="underline hover:text-blue-200 active:text-blue-400 transition ease-in-out table-row"
          >
            <FontAwesomeIcon icon={faOrcid} className="table-cell m-auto" />
            <span className="table-cell">0000-0002-1867-0243</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
