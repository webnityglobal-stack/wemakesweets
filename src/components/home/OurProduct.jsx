import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const products = [
  {
    name: "Multi Seed & Nut Cubes",
    image: "/MultiSeed&NutCubesFrontView.webp",
    bg: "#08376c",
  },
  {
    name: "Rice Crispy & Nut Cubes",
    image: "/RiceCrispy&NutCubesFrontView.webp",
    bg: "#810c26",
  },
  {
    name: "Date & Nut Cubes",
    image: "/Date&NutCubesFrontView.webp",
    bg: "#2a4d25",
  },
  {
    name: "Anjeer & Nut Cubes",
    image: "/Anjeer&NutCubesFrontView.webp",
    bg: "#552b12",
  },
  {
    name: "Date Elaichi Cubes",
    image: "/DateElaichi&NutCubesFrontView.webp",
    bg: "#254a21",
  },
];

export default function OurProduct() {
  return (
<section className="relative overflow-hidden px-12 py-16 sm:px-2 sm:py-8 lg:px-20 lg:py-28 xl:px-24">

  <img
    src="/ourProductBackgroundImage.webp"
    alt=""
    className="absolute inset-0 w-full h-full object-fill"
  />

 

  {/* Optional Overlay */}
  <div className="absolute inset-0 bg-[#f9e4bf]/10"></div>
<div className="relative z-10 mb-6 lg:mb-10 flex items-center justify-center gap-3">
  <div className="h-px w-8 sm:w-12 lg:w-20 bg-[#b88a32]" />

  <h2 className="font-serif text-xl sm:text-2xl lg:text-4xl font-bold tracking-wide text-[#552b12]">
    Our Collection
  </h2>

  <div className="h-px w-8 sm:w-12 lg:w-20 bg-[#b88a32]" />
</div>
  <div className="relative z-10">
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={16}
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
    >
      {products.map((item) => (
        <SwiperSlide key={item.name}>
          <div
            className="rounded-2xl border border-[#d9b15d]/30 p-3 shadow-lg"
            style={{ background: item.bg }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="mx-auto h-24 object-contain lg:h-28 rounded-2xl"
            />

            {/* <h3 className="mt-3 text-center font-serif text-sm text-[#f9e4bf]">
              {item.name}
            </h3> */}
            <h3 className="mt-3 text-center font-serif text-sm leading-6 text-[#f9e4bf]">
  {item.name.replace(" Cubes", "\nCubes").split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ))}
</h3>

            <button className="mx-auto mt-4 flex rounded-full border border-[#d9b15d] px-4 py-2 text-xs text-[#f9e4bf] hover:bg-[#f9e4bf] hover:text-[#552b12]">
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>
  );
}