import React from "react";

const InspiredByHeritage = () => {
  return (
    <section className="py- px- md:px- lg:px-">
      <div
        className="relative overflow-hidden rounded-2xl bg-cover bg-center min-h-[260px] md:min-h-[320px] flex items-center"
        style={{
          backgroundImage: "url('/inspiredByHeritage.webp')",
        }}
      >
        {/* Optional light overlay */}
        <div className="absolute inset-0 bg-white/5"></div>

        <div className="flex flex-col gap-4 relative z-10 max-w-xl px-6 md:px-40 py-8">
          <h2 className="text-[#244a86] uppercase font-serif font-bold leading-tight text-2xl md:text-4xl">
            Inspired By
            <br />
            Heritage
          </h2>

          <p className="mt-4 text-gray-700 text-sm md:text-base leading-7 max-w-md">
            Rooted in India's rich traditions, <br/> we blend timeless flavors and<br/>
            wholesome ingredients to create<br/> modern snacks for a better you.
          </p>

          <button className="mt-6 border border-[#244a86] text-[#244a86] px-6 py-3 rounded-md font-semibold text-sm hover:bg-[#244a86] hover:text-white transition-all duration-300">
            KNOW OUR STORY
          </button>
        </div>
      </div>
    </section>
  );
};

export default InspiredByHeritage;