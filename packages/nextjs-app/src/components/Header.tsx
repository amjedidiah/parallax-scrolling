import useTransparentHeader from "@/hooks/use-transparent-header";
import { bebas, lato } from "@/utils/font.util";
import Image from "next/image";
import { Link } from "react-scroll";

const navItems = [
  { to: "history", title: "01. HISTORY" },
  { to: "team", title: "02. TEAM" },
];

export default function Header() {
  const isTransparent = useTransparentHeader();

  return (
    <header className={`${isTransparent ? "" : "bg-white"} fixed w-full z-10`}>
      <nav className="container py-4 flex items-center">
        <Link to="top" smooth className="flex items-center ms-4 cursor-pointer">
          <Image
            src="/images/logo.webp"
            alt="logo"
            width={43}
            height={43}
            className="mx-2"
            quality={100}
          />
          <span
            className={`${
              bebas.variable
            } font-bebas text-dark-100 text-xl leading-[1.079] hidden ${
              isTransparent ? "" : "sm:block"
            }`}
          >
            LOSANGELES
            <br />
            MOUNTAINS
          </span>
        </Link>
        <ul
          className={`${
            lato.variable
          } font-lato inline-flex flex-1 justify-end text-xs ${
            isTransparent ? "text-white" : " text-blue-100"
          } italic leading-[1.667] gap-8 font-bold`}
        >
          {navItems.map(({ title, to }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                className={`active:font-black active:border-b hover:font-black hover:border-b-2 border-b ${
                  isTransparent ? "border-b-white" : "border-b-blue-100"
                } cursor-pointer p-1`}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
