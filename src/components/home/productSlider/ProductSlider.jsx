import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const images = [
  "/dates&NutCubes.webp",
  "/anjeerAndNutCubes.webp",
  "/DateElaichi&NutCubes.webp",
  "/ProteinCubes.webp",
  "/RiceCrispyCubes.webp",
];

export default function ProductSlider() {
  return (
    <section className="w-full bg-[#f9e4bf]">
      <div className="max-w-7xl mx-auto">

        <Swiper
          modules={[Autoplay]}
          loop
          speed={900}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-3xl shadow-xl">

                <img
                  src={image}
                  alt=""
                  className="w-full h-auto object-cover hover:scale-105 duration-500"
                />

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}