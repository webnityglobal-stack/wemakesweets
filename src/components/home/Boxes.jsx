import { ArrowRight } from "lucide-react";
import FlipCard from "../FlipCard";

const categories = [
  {
    title: "Date Cubes",
    image: "/boxes/Date&NutCubesFrontViewbox1.png",
    color: "#572340",
    ingredients: [
      "Premium Dates",
      "Almonds",
      "Cashews",
      "Pistachios",
      "Pumpkin Seeds",
    ],
  },

  {
    title: "Anjeer Cubes",
    image: "/boxes/Anjeer&NutCubesFrontViewbox2.png",
    color: "#603917",
    ingredients: [
      "Premium Anjeer",
      "Almonds",
      "Cashews",
      "Pistachios",
      "Dates",
    ],
  },

  {
    title: "Date Elaichi Cubes",
    image: "/boxes/DateElaichi&NutCubesFrontViewbox3.png",
    color: "#3e5a2c",
    ingredients: [
      "Premium Dates",
      "Almonds",
      "Cashews",
      "Cardamom",
      "Pistachios",
    ],
  },

  {
    title: "Multi Seed Cubes",
    image: "/boxes/MultiSeed&NutCubesFrontViewbox4.png",
    color: "#164984",
    ingredients: [
      "Dates",
      "Pumpkin Seeds",
      "Sunflower Seeds",
      "Almonds",
      "Flax Seeds",
    ],
  },

  {
    title: "Rice Crispy Cubes",
    image: "/boxes/RiceCrispy&NutCubesFrontViewbox5.png",
    color: "#8b183d",
    ingredients: [
      "Rice Crisps",
      "Dates",
      "Almonds",
      "Cashews",
      "Seeds",
    ],
  },
];

export default function Boxes() {
  return (
    <section className="relative overflow-hidden py-4 md:py-4 bg-[#f5ebda]">

      {/* Fireworks */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* <FireworksBackground
          population={1}
          color={["#E8B357", "#810c26", "#572340"]}
          fireworkSpeed={{ min: 5, max: 8 }}
          fireworkSize={{ min: 2, max: 3 }}
          particleSpeed={{ min: 2, max: 5 }}
          particleSize={{ min: 1, max: 2 }}
          className="h-full w-full"
        /> */}
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-4 md:px-6">

        {/* Cards */}
        <div
          className="
            flex
            overflow-x-auto
            gap-5
            py-4
            px-1
            snap-x
            snap-mandatory
            scrollbar-hide
            md:grid
            md:grid-cols-5
            md:gap-5
            md:overflow-visible
          "
        >
          {categories.map((item) => (
            <div
              key={item.title}
              className="
                flex-shrink-0
                w-[85%]
                sm:w-[55%]
                md:w-auto
                snap-center
              "
            >
              <FlipCard data={item} />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-2 md:mt-4">
          <button
            className="
              flex
              items-center
              gap-2
              bg-pink-600
              hover:bg-[#60b396]
              text-white
              px-4
              md:px-10
              py-2
              md:py-4
              rounded-full
              font-semibold
              text-sm
              md:text-base
              transition-all
              duration-300
              hover:scale-105
              shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] border-black hover:shadow-[3px_4px_0px_#000] 
            "
          >
            View All
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}