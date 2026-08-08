import { ArrowRight } from "lucide-react";
import { LayoutTextFlip } from "../ui/layout-text-flip";

const categories = [
  {
    title: "Date & Nut Cubes",
    image: "/boxes/Date&NutCubesFrontViewbox1.png",
  },
  {
    title: "Anjeer & Nut Cubes",
    image: "/boxes/Anjeer&NutCubesFrontViewbox2.png",
  },
  {
    title: "Date Elaichi Cubes",
    image: "/boxes/DateElaichi&NutCubesFrontViewbox3.png",
  },
  {
    title: "Multi Seed Cubes",
    image: "/boxes/MultiSeed&NutCubesFrontViewbox4.png",
  },
  {
    title: "Rice Crispy Cubes",
    image: "/boxes/RiceCrispy&NutCubesFrontViewbox5.png",
  },
];
export default function Boxes() {
  return (
 <section className="flex flex-col gap-8 items-center  bg-[#f9e4bf] pt-12 md:pt-20">

 
   <LayoutTextFlip 
  text="Discover"
  words={[
    "Date & Nut Cubes",
    "Anjeer & Nut Cubes",
    "Date Elaichi Cubes",
    "Multi Seed Cubes",
    "Rice Crispy Cubes",
    // "Healthy Gift Boxes",
    // "Premium Collections",
  ]}/>

 
      <div className="max-w-[1500px] mx-auto px-4 md:px-6">


        {/* Cards */}
        <div
          className="
          flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory
          md:grid md:grid-cols-5 md:gap-5 md:overflow-visible
          scrollbar-hide
        "
        >
          {categories.map((item) => (
            <div
              key={item.title}
              className="
              group cursor-pointer
              flex-shrink-0 w-[260px]
              md:w-auto
              snap-start
            "
            >
              <div className="overflow-hidden rounded-[22px] md:rounded-[26px] shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                  w-full
                  h-[230px]
                  sm:h-[260px]
                  md:h-[300px]
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
                />
              </div>

              <h3
                className="
                mt-4
                text-center
                text-xl
                sm:text-2xl
                lg:text-[28px]
                font-semibold
                text-[#552b12]
              "
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10 md:mt-14">
          <button
            className="
            bg-pink-600
            hover:bg-[#810c26]
            text-white
            px-8 md:px-10
            py-3 md:py-4
            rounded-full
            font-semibold
            text-sm md:text-base
            transition-all
            duration-300
            hover:scale-105
          "
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
}