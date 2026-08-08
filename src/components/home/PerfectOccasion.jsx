import {
  Gift,
  BriefcaseBusiness,
  Flower2,
  GiftIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { SquigglyText } from "../ui/squiggly-text";
import { FireworksBackground } from "../animate-ui/components/backgrounds/fireworks";

const occasions = [
  {
    id: 1,
    title: "Festive\nGifting",
    icon: Gift,
  },
  {
    id: 2,
    title: "Corporate\nGifting",
    icon: BriefcaseBusiness,
  },
  {
    id: 3,
    title: "Wedding\nGifting",
    icon: Flower2,
  },
  // {
  //   id: 4,
  //   title: "Personal\nGifting",
  //   icon: GiftIcon,
  // },
];

const PerfectOccasion = () => {
const word1 =
 "Delight your loved ones with our handcrafted premium dates and nut gift boxes. Whether it's a festival, wedding, corporate event or a personal celebration, our thoughtfully curated collections make every moment memorable with elegance";

const word2 = "and authentic taste.";

  return (
    // <section className="relative w-full overflow-hidden bg-[#f9e4bf] lg:min-h-[650px]">
  <section className="relative w-full overflow-hidden bg-[#f9e4bf] lg:min-h-[650px]">

  {/* Fireworks */}
  <div className="absolute inset-0 z-20 pointer-events-none">
    <FireworksBackground
      population={1}
      color={["#E8B357", "#810c26", "#572340"]}
      fireworkSpeed={{ min: 4, max: 7 }}
      fireworkSize={{ min: 2, max: 4 }}
      particleSpeed={{ min: 2, max: 6 }}
      particleSize={{ min: 1, max: 3 }}
      className="h-full w-full"
    />
  </div>

{/* Desktop Banner */}
      {/* <img
        src="/perfectForOcassion.png"
        alt="Perfect For Every Occasion"
        className="absolute inset-0 hidden h-full w-full object-cover object-right lg:block"
      /> */}
     <img
    src="/perfectForOcassion.png"
    alt="Perfect For Every Occasion"
    className="absolute inset-0 z-10 hidden h-full w-full object-cover object-right lg:block"
  />

      {/* Content */}
      <div className="relative flex items-center py-10 lg:absolute lg:inset-0 lg:py-0">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-10">

          <div className="relative w-full overflow-hidden rounded-2xl p-6 sm:p-8 lg:w-[52%] lg:p-10">

            {/* Background Image */}
            {/* <img
              src="/perfectForOcassion2.webp"
              alt=""
              className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover opacity-10"
            /> */}

            {/* Cream Overlay */}
            <div className="absolute inset-0  " />

            {/* Content */}
            <div className="relative z-10">

              <h2 className="text-center font-serif text-2xl font-bold uppercase text-[#E35A7E] sm:text-3xl lg:text-left lg:text-4xl">
                Perfect For Every <SquigglyText
                          stepDuration={70}
                          scale={[6, 9]}
                          className="text-[#E35A7E]">Occasions</SquigglyText>
              </h2>

              <p className="mt-5 max-w-xl text-center text-sm leading-7 text-[#3e5a2c] sm:text-base lg:text-left">
                <TextGenerateEffect className="mt-5 max-w-xl text-center text-sm leading-7 text-[#3e5a2c] sm:text-base lg:text-left" words={word1}/>
              </p>

              {/* Icons */}
              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {occasions.map((item, idx) => {
                  const Icon = item.icon;

                  return (
                    <>
                      <div
                        key={item.id}
                        className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-2"
                      >
                        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 group-hover:bg-[#E35A7E] group-hover:scale-110">
                          <Icon
                            size={28}
                            className="text-[#603917] group-hover:text-white"
                          />
                        </div>

                        <p className="whitespace-pre-line text-center text-sm font-medium text-[#603917]">
                          {item.title}
                        </p>
                      </div>

                      {/* Mobile-only image between the two icon rows */}
                      {idx === 1 && (
                        <div
                          key="mobile-boxes-image"
                          className="col-span-2 flex justify-center py-2 sm:hidden"
                        >
                          <img
                            src="/perfectForOcassionMobile.webp"
                            alt="Date and Anjeer Nut Cubes Gift Boxes"
                            className="w-full max-w-[280px]"
                          />
                        </div>
                      )}
                    </>
                  );
                })}
              </div>

              {/* Button */}
              <div className="mt-8 flex justify-center lg:justify-start">
               <Link to='/products' >
                <button className="rounded-full bg-pink-600 px-8 py-3 font-medium text-white transition-all duration-300 hover:bg-[#572340] hover:shadow-lg">
                  Explore Collection
                </button>
               </Link>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default PerfectOccasion;