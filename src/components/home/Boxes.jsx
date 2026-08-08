// import { ArrowRight } from "lucide-react";
// import { LayoutTextFlip } from "../ui/layout-text-flip";
// import { FireworksBackground } from "../animate-ui/components/backgrounds/fireworks";

// const categories = [
//   {
//     title: "Date & Nut Cubes",
//     image: "/boxes/Date&NutCubesFrontViewbox1.png",
//   },
//   {
//     title: "Anjeer & Nut Cubes",
//     image: "/boxes/Anjeer&NutCubesFrontViewbox2.png",
//   },
//   {
//     title: "Date Elaichi Cubes",
//     image: "/boxes/DateElaichi&NutCubesFrontViewbox3.png",
//   },
//   {
//     title: "Multi Seed Cubes",
//     image: "/boxes/MultiSeed&NutCubesFrontViewbox4.png",
//   },
//   {
//     title: "Rice Crispy Cubes",
//     image: "/boxes/RiceCrispy&NutCubesFrontViewbox5.png",
//   },
// ];

// export default function Boxes() {
//   return (
//     <section className="relative overflow-hidden py-8 md:pt-16">

//   {/* Fireworks Background */}
//   <div className="absolute inset-0 z-0 pointer-events-none">
//     <FireworksBackground
//       population={1}
//       color={["#E8B357", "#810c26", "#572340"]}
//       fireworkSpeed={{ min: 4, max: 7 }}
//       fireworkSize={{ min: 2, max: 4 }}
//       particleSpeed={{ min: 2, max: 6 }}
//       particleSize={{ min: 1, max: 3 }}
//       className="h-full w-full"
//     />
//   </div>
//     <div className="flex justify-center items-center w-full mb-12">
//   <LayoutTextFlip
//     text="Discover"
//     words={[
//       "Date & Nut Cubes",
//       "Anjeer & Nut Cubes",
//       "Date Elaichi Cubes",
//       "Multi Seed Cubes",
//       "Rice Crispy Cubes",
//     ]}
//   />
// </div>

//       <div className="max-w-[1500px] mx-auto px-4 md:px-6">

//         {/* Cards */}
//         <div
//           className="
//             flex
//             overflow-x-auto
//             gap-5
//             py-4
//             px-1
//             snap-x
//             snap-mandatory
//             scrollbar-hide
//             md:grid
//             md:grid-cols-5
//             md:gap-5
//             md:overflow-visible
//           "
//         >
//           {categories.map((item) => (
//             <div
//               key={item.title}
//               className="
//                 group
//                 cursor-pointer
//                 flex-shrink-0
//                 w-[85%]
//                 sm:w-[55%]
//                 md:w-auto
//                 snap-center
//               "
//             >
//               <div className="overflow-hidden rounded-[22px] md:rounded-[26px] shadow-sm">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="
//                     w-full
//                     h-[300px]
//                     sm:h-[340px]
//                     md:h-[300px]
//                     object-cover
//                     transition-all
//                     duration-700
//                     group-hover:scale-110
//                   "
//                 />
//               </div>

//               <h3
//                 className="
//                   mt-4
//                   text-center
//                   text-xl
//                   sm:text-2xl
//                   lg:text-[28px]
//                   font-semibold
//                   text-[#552b12]
//                 "
//               >
//                 {item.title}
//               </h3>
//             </div>
//           ))}
//         </div>

//         {/* Button */}
//         <div className="flex justify-center mt-10 md:mt-14">
//           <button
//             className="
//               flex
//               items-center
//               gap-2
//               bg-pink-600
//               hover:bg-[#810c26]
//               text-white
//               px-8
//               md:px-10
//               py-3
//               md:py-4
//               rounded-full
//               font-semibold
//               text-sm
//               md:text-base
//               transition-all
//               duration-300
//               hover:scale-105
//             "
//           >
//             View All
//             <ArrowRight size={18} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
import { ArrowRight } from "lucide-react";
import { LayoutTextFlip } from "../ui/layout-text-flip";
import { FireworksBackground } from "../animate-ui/components/backgrounds/fireworks";
import FlipCard from "../FlipCard";

const categories = [
  {
    title: "Date & Nut Cubes",
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
    title: "Anjeer & Nut Cubes",
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
    <section className="relative overflow-hidden py-4 md:py-4">

      {/* Fireworks */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FireworksBackground
          population={1}
          color={["#E8B357", "#810c26", "#572340"]}
          fireworkSpeed={{ min: 5, max: 8 }}
          fireworkSize={{ min: 2, max: 3 }}
          particleSpeed={{ min: 2, max: 5 }}
          particleSize={{ min: 1, max: 2 }}
          className="h-full w-full"
        />
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
        <div className="flex justify-center mt-10 md:mt-14">
          <button
            className="
              flex
              items-center
              gap-2
              bg-pink-600
              hover:bg-[#810c26]
              text-white
              px-8
              md:px-10
              py-3
              md:py-4
              rounded-full
              font-semibold
              text-sm
              md:text-base
              transition-all
              duration-300
              hover:scale-105
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