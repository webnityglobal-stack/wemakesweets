import React from "react";
import {
  Leaf,
  FlaskConical,
  Globe,
  HeartHandshake,
  Play,
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
    <section>
      {/* =====================================================
          MOBILE VIEW
          ===================================================== */}
      <div className="block lg:hidden bg-[#fff7f0] px-0 py-8">
        {/* MOBILE HEADING */}
        <div className="px-2 text-center">
          <h2 className="text-[22px] font-semibold uppercase leading-[1.5] tracking-[-0.5px] text-[#342525]">
            MADE IN THE BETTER KITCHEN
          </h2>

          {/* Orange underline */}
          <div className="mx-auto -mt-[3px] h-[3px] w-[120px] rounded-full bg-[#ff5a00]" />

          <h2 className="mt-0 text-[22px] font-semibold uppercase leading-[1.5] text-[#342525]">
            HEN
          </h2>
        </div>

        {/* MOBILE VIDEO */}
        <div className="relative mx-2 mt-2 overflow-hidden rounded-[18px] border-[3px] border-white shadow-[0_1px_4px_rgba(0,0,0,0.25)]">
          <img
            src="/ourStory1.webp"
            alt="Made in the better kitchen"
            className="block h-[140px] w-full object-cover"
          />

          {/* Play Button */}
          <button
            type="button"
            className="absolute left-1/2 top-1/2 flex h-[42px] w-[42px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[8px] bg-white shadow-md"
          >
            <Play
              size={20}
              fill="#572340"
              className="ml-[2px] text-[#572340]"
            />
          </button>
        </div>

        {/* MOBILE TEXT */}
        <div className="mt-4 px-2">
          <p className="text-[11px] leading-[1.5] text-[#292929]">
            50,000 sq ft. FSSAI • FDA certified. Open for tours.
          </p>

          <p className="mt-2 text-[11px] font-medium leading-[1.5] text-[#292929]">
            This laddoo passed through:
          </p>

          {/* MOBILE PROCESS LIST */}
          <div className="mt-[2px] space-y-[2px]">
            <div className="flex items-center gap-[5px] text-[11px] leading-[1.5] text-[#292929]">
              <span className="text-[10px]">📍</span>
              <span>Mridula’s recipe iteration</span>
            </div>

            <div className="flex items-center gap-[5px] text-[11px] leading-[1.5] text-[#292929]">
              <span className="text-[10px]">📦</span>
              <span>6-layer quality protocol</span>
            </div>

            <div className="flex items-center gap-[5px] text-[11px] leading-[1.5] text-[#292929]">
              <span className="text-[10px]">🧪</span>
              <span>Dual taste + macro testing</span>
            </div>

            <div className="flex items-center gap-[5px] text-[11px] leading-[1.5] text-[#292929]">
              <span className="text-[10px]">🍬</span>
              <span>Zero compromises on flavor or function</span>
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            className="mt-4 h-[32px] w-full rounded-[6px] border border-black bg-[#ff5a00] text-[10px] font-bold text-white shadow-[0_2px_0_#000]"
          >
            BOOK A KITCHEN TOUR
          </button>
        </div>
      </div>

      {/* =====================================================
          DESKTOP VIEW
          NO CHANGE
          ===================================================== */}
      <section className="hidden lg:grid lg:grid-cols-2">
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

            <button className="mt-8 w-fit rounded-full text-white hover:text-white bg-pink-600 hover:bg-[#60b396] hover:scale-105 shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000] px-6 py-2.5 text-sm font-semibold transition-all duration-300 cursor-pointer">
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
    </section>
  );
};

export default OurStory;