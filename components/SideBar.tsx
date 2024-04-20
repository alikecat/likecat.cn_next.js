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
  const nav = [
    { name: "XJTU", icon: faSchool },
    { name: "Xi'an, China", icon: faLocationDot },
    { name: "a@likecat.cn", icon: faEnvelope, href: "mailto:a@likecat.cn" },
    { name: "alikecat", icon: faGithub, href: "https://github.com/alikecat" },
    {
      name: "0000-0002-1867-0243",
      icon: faOrcid,
      href: "https://orcid.org/0000-0002-1867-0243",
    },
  ];
  return (
    <div className="w-72 shrink-0 max-md:hidden">
      <div className="sticky top-28 flex flex-col py-4 space-y-4 font-sans">
        <Image
          src="/Profile.jpg"
          alt="Profile Photo"
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
          {nav.map((link) =>
            link.href ? (
              <Link
                key={link.name}
                href={link.href}
                className="underline hover:text-blue-200 active:text-blue-400 transition ease-in-out table-row"
              >
                <FontAwesomeIcon
                  icon={link.icon}
                  className="table-cell m-auto"
                />
                <span className="table-cell">{link.name}</span>
              </Link>
            ) : (
              <div key={link.name} className="table-row">
                <FontAwesomeIcon
                  icon={link.icon}
                  className="table-cell m-auto"
                />
                <span className="table-cell">{link.name}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
