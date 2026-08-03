import React from "react";
import {
  Leaf,
  FlaskConical,
  Globe,
  HeartHandshake,
} from "lucide-react";

const commitments = [
  {
    id: 1,
    icon: Leaf,
    title: "Clean Ingredients",
    desc: "We use only natural and premium ingredients.",
  },
  {
    id: 2,
    icon: FlaskConical,
    title: "No Compromises",
    desc: "No added preservatives or artificial flavors.",
  },
  {
    id: 3,
    icon: Globe,
    title: "Sustainably Made",
    desc: "Thoughtful choices for a better tomorrow.",
  },
  {
    id: 4,
    icon: HeartHandshake,
    title: "Made in India",
    desc: "Proudly made with love and care in India.",
  },
];

const OurStory = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 flex ">
      {/* Left Section */}
     <div
  className="relative min-h-[340px] bg-cover bg-center"
  style={{
    backgroundImage: "url('/ourStory1.webp')",
  }}
>
  <div className="absolute inset-0 bg-[#572340]/45"></div>

  <div className="relative z-10 flex h-full flex-col justify-center px-10 py-12 text-white">
    <p className="text-xs uppercase tracking-[3px] text-[#F4C02D]">
      Our Story
    </p>

    <h2 className="mt-2 font-serif text-4xl font-semibold leading-tight text-[#f9e4bf]">
      Good Food,
      <br />
      Made with Purpose
    </h2>

    <p className="mt-5 max-w-md text-sm leading-7 text-[#f9e4bf]/90">
      At WeMake, we believe food should be natural, wholesome,
      and made with love. Our Date & Nut Cubes are crafted
      with the finest ingredients to fuel your body and
      delight your taste buds.
    </p>

    <button className="mt-8 w-fit rounded-md bg-[#E35A7E] px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-[#572340] hover:shadow-lg">
      READ MORE
    </button>
  </div>
</div>

      {/* Right Section */}
     <div
  className="relative min-h-[340px] bg-cover bg-center"
  style={{
    backgroundImage: "url('/ourStory2.webp')",
  }}
>
  <div className="absolute inset-0 bg-[#164984]/45"></div>

  <div className="relative z-10 h-full px-10 py-12 text-white">
    <p className="text-xs uppercase tracking-[3px] text-[#F4C02D]">
      Our Commitment
    </p>

    <div className="mt-8 grid grid-cols-2 gap-8">
      {commitments.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="flex items-start gap-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#66BC9E]/70 bg-white/10 backdrop-blur-sm">
              <Icon
                size={22}
                className="text-[#F4C02D]"
              />
            </div>

            <div>
              <h3 className="text-lg font-medium text-[#f9e4bf]">
                {item.title}
              </h3>

              <p className="mt-1 text-sm leading-6 text-[#f9e4bf]/90">
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</div>
    </section>
  );
};

export default OurStory;