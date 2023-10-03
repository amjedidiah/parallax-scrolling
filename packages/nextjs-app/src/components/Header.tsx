import { bebas, lato } from "@/utils/font.util";
import Image from "next/image";
import Link from "next/link";

type Props = {
  isTransparent?: boolean;
};

const navItems = ["01. HISTORY", "02. TEAM"];

export default function Header({ isTransparent }: Props) {
  return (
    <header className={`${isTransparent ? "" : "bg-white"}`}>
      <nav className="container py-4 flex items-center">
        <Link href="/" className="flex items-center ms-4">
          <Image
            src="/logo.png"
            alt="logo"
            width={43}
            height={43}
            className="mx-2"
          />
          <span
            className={`${
              bebas.variable
            } font-bebas text-dark-100 text-xl leading-[1.079]  ${
              isTransparent ? "hidden" : "hidden sm:block"
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
          } italic leading-[1.667] gap-8`}
        >
          {navItems.map((item) => (
            <li
              key={item}
              className={`active:font-black active:border-b hover:font-black hover:border-b-2 border-b ${
                isTransparent ? "border-b-white" : "border-b-blue-100"
              } cursor-pointer px-1`}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
