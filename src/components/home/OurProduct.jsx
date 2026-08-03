import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Date & Nut Cubes",
    image: "/Date&NutCubesFrontView.webp",
    bg: "#572340", // Date Bite
  },
  {
    name: "Anjeer & Nut Cubes",
    image: "/Anjeer&NutCubesFrontView.webp",
    bg: "#603917", // Anjeer
  },
  {
    name: "Date Elaichi Cubes",
    image: "/DateElaichi&NutCubesFrontView.webp",
    bg: "#3e5a2c", // Date Elaichi
  },
  {
    name: "Multi Seed & Nut Cubes",
    image: "/MultiSeed&NutCubesFrontView.webp",
    bg: "#164984", // Multi Seed
  },
  {
    name: "Rice Crispy & Nut Cubes",
    image: "/RiceCrispy&NutCubesFrontView.webp",
    bg: "#8b183d", // Rice Crispy
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
  {/* <div className="absolute inset-0 bg-[#f9e4bf]/10"></div> */}
  <div className="absolute inset-0 bg-[#f9e4bf]/15"></div>
<div className="relative z-10 mb-6 lg:mb-10 flex items-center justify-center gap-3">
  <div className="h-px w-8 sm:w-12 lg:w-20 bg-[#603917]" />

  <h2 className="font-serif text-xl sm:text-2xl lg:text-4xl font-bold tracking-wide text-[#572340]">
    Our Collection
  </h2>

  <div className="h-px w-8 sm:w-12 lg:w-20 bg-[#603917]" />
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
            className="rounded-2xl border border-[#f9e4bf]/20 p-3 shadow-lg"
            style={{ background: item.bg }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="mx-auto h-24 object-contain lg:h-28 rounded-2xl"
            />

            <h3 className="mt-3 text-center font-serif text-sm text-[#f9e4bf]">
              {item.name}
            </h3>
            <h3 className="mt-3 text-center font-serif text-sm leading-6 text-[#f9e4bf]">
  {/* {item.name.replace(" Cubes", "\nCubes").split("\n").map((line, index) => ( */}
    {/* {item.name.replace(" Cubes", "\nCubes").split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ))} */}
</h3>

           <Link to='/products'>
           <button
  className="
    mx-auto
    mt-4
    flex
    rounded-full
    bg-pink-600
    px-5
    py-2
    text-xs
    font-semibold
    text-white
    shadow-md
    transition-all
    duration-300
    hover:bg-[#572340]
    hover:scale-105
    hover:shadow-lg
  "
>
              SHOP NOW
            </button>
           </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>
  );
}