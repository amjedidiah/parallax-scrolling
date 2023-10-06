import { bebas, lato } from "@/utils/font.util";
import Image from "next/image";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-blue-100">
      <nav className="container py-4 flex items-center">
        <Link to="top" smooth className="flex items-center ms-4 cursor-pointer">
          <Image
            src="/images/logo-blue.webp"
            alt="logo"
            width={43}
            height={43}
            className="mx-2"
            quality={100}
          />
          <span
            className={`${bebas.variable} font-bebas text-blue-400 text-xl leading-[1.079] hidden sm:block`}
          >
            LOSANGELES
            <br />
            MOUNTAINS
          </span>
        </Link>
        <p
          className={`${lato.variable} font-lato inline-flex flex-1 justify-end text-xs text-blue-400 italic leading-[1.667] font-bold`}
        >
          COPYRIGHT 2016. ALL RIGHTS RESERVED.
        </p>
      </nav>
    </footer>
  );
}
