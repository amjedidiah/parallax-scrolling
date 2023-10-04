import { Lato, Oswald } from "next/font/google";
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
  weight: ["400", "700", "900"],
  variable: "--font-lato",
  fallback: ["sans-serif"],
});

export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-oswald",
  fallback: ["sans-serif"],
});
