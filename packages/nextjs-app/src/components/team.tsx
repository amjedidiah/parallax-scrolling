import { lato, oswald } from "@/utils/font.util";
import ParallaxSection from "./parallax-section";
import SectionHeader from "./section-header";
import { useState } from "react";
import Footer from "./footer";

export default function Team() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <ParallaxSection
      className={activeTab === 0 ? "bg-tab-1" : "bg-tab-2"}
      id="team"
    >
      <div className="flex flex-col min-h-screen">
        <SectionHeader
          className="bg-white pt-12 pb-1 [&_.container]:flex [&_.container]:flex-wrap [&_.container]:items-center [&_h2]:flex [&_h2]:items-end [&_h2]:sm:ps-10 [&_h2]:sm:pe-4 [&_h2_span:nth-of-type(1)]:after:bottom-4 [&_h2_span:nth-of-type(1)]:sm:after:bottom-5 [&_h2_span:nth-of-type(2)]:mb-3 [&_h2_span:nth-of-type(2)]:sm:mb-4 [&_p]:sm:ps-[108px] [&_p]:lg:p-0 [&_p]:mb-3 [&_p]:lg:mt-3 [&_p]:lg:max-w-[612px]"
          number="02"
          title="Climb"
          description={`Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue. `}
        />
        <div className={`bg-blue-100 ${oswald.variable} font-oswald`}>
          <div className="container">
            <ul className="inline-flex">
              {Array(2)
                .fill(0)
                .map((_, i) => (
                  <li
                    key={i}
                    className={`text-xl ${
                      activeTab === i
                        ? "text-blue-100 bg-slate-100 underline"
                        : "text-slate-100"
                    } leading-[1.2] py-3 px-6 cursor-pointer`}
                    onClick={() => setActiveTab(i)}
                  >
                    MOUNTAIN {i + 1}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <div className="container">
            <div className="px-2 sm:px-8 py-20">
              <div className="bg-white opacity-70 py-5 px-10 max-w-[352px]">
                <h4
                  className={`text-blue-100 ${oswald.variable} font-oswald uppercase text-[2rem] leading-[1.2] mb-2`}
                >
                  Schedule
                </h4>
                {activeTab === 0 ? (
                  <div className={`${lato.variable} font-lato`}>
                    <p className="flex justify-between leading-[1.5] gap-x-1 text-black">
                      <span>25 Nov 2016</span>
                      <span>Vestibulum viverra</span>
                    </p>
                    <p className="flex justify-between leading-[1.5] gap-x-1 text-black">
                      <span>28 Nov 2016</span>
                      <span>Vestibulum viverra</span>
                    </p>
                    <p className="flex justify-between leading-[1.5] gap-x-1 text-black my-6">
                      <span>18 Dec 2016</span>
                      <span>Vestibulum viverra</span>
                    </p>
                    <p className="flex justify-between leading-[1.5] gap-x-1 text-black">
                      <span>7 Jan 2017</span>
                      <span>Vestibulum viverra</span>
                    </p>
                  </div>
                ) : (
                  <div className={`${lato.variable} font-lato`}>
                    <p className="flex justify-between leading-[1.5] gap-x-1 text-black mb-6">
                      <span>17 Nov 2016</span>
                      <span>Vestibulum viverra</span>
                    </p>
                    <p className="flex justify-between leading-[1.5] gap-x-1 text-black">
                      <span>13 Dec 2016</span>
                      <span>Vestibulum viverra</span>
                    </p>
                    <p className="flex justify-between leading-[1.5] gap-x-1 text-black mb-6">
                      <span>28 Dec 2016</span>
                      <span>Vestibulum viverra</span>
                    </p>
                    <p className="flex justify-between leading-[1.5] gap-x-1 text-black">
                      <span>9 Feb 2017</span>
                      <span>Vestibulum viverra</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </ParallaxSection>
  );
}
