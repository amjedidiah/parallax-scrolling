import ParallaxSection from "@/components/parallax-section";
import SectionHeader from "@/components/section-header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../public/images/slide-1.webp";
import slide2 from "../../public/images/slide-2.webp";
import Image from "next/image";

const breakpoints = {
  10: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  992: {
    slidesPerView: 3,
  },
  1199: {
    slidesPerView: 4,
  },
};

const slides = [slide1, slide2, slide1, slide2];

export default function History() {
  return (
    <ParallaxSection className="bg-peak">
      <div
        className="flex flex-col justify-between min-h-screen pt-[135px] z-10 bg-blue-300 [&_*]:text-white [&_span:after]:bg-white sm:bg-transparent sm:[&_h2_span:nth-of-type(1)]:text-blue-200 sm:[&_h2_span:nth-of-type(2)]:text-blue-100 sm:[&_span:after]:bg-blue-200 sm:[&_p]:text-black"
        id="peakContainer"
      >
        <div className="container mb-10">
          <SectionHeader
            number="01"
            title="History"
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue. `}
          />
        </div>

        <div className="bg-blue-300">
          <div className="container [&_.swiper-pagination-bullet]:w-[6px] [&_.swiper-pagination-bullet]:h-[6px] [&_.swiper-pagination-bullet]:bg-white [&_.swiper]:overflow-y-visible [&_.swiper-pagination]:-mb-7">
            <div className="p-5 pb-9">
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                }}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                scrollbar={{ draggable: true }}
                spaceBetween={16}
                slidesPerView="auto"
                breakpoints={breakpoints}
                centeredSlides
                centeredSlidesBounds
                centerInsufficientSlides
              >
                {slides.map((slide, i) => (
                  <SwiperSlide key={i}>
                    <div>
                      <Image src={slide} alt="slide" className="mx-auto" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}
