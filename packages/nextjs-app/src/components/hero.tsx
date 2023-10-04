import ParallaxSection from "@/components/parallax-section";
import { bebas } from "@/utils/font.util";

export default function Hero() {
  return (
    <ParallaxSection className="bg-hero mobile:bg-hero-main">
      <div className="flex mobile:hidden min-h-screen pt-[21vh] justify-center ">
        <h1
          className={`${bebas.variable} font-bebas text-dark-100 leading-[0.85] text-[2.5rem] relative -left-5 `}
        >
          Losangeles
          <br />
          <span className="text-blue-100">mountains</span>
        </h1>
      </div>
    </ParallaxSection>
  );
}
