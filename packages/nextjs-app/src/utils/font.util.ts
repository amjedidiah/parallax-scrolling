import { Lato } from "next/font/google";
import localFont from "next/font/local";

export const bebas = localFont({
  src: [
    {
      path: "../../public/fonts/bebas/Bebas-Regular.otf",
    },
  ],
  variable: "--font-bebas",
  fallback: ["sans-serif"],
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-lato",
  fallback: ["sans-serif"],
});
