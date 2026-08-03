import React from "react";

const InspiredByHeritage = () => {
  return (
   <section className="py- px- md:px- lg:px-">
  <div
    className="relative flex min-h-[260px] items-center overflow-hidden rounded-2xl bg-cover bg-center md:min-h-[320px]"
    style={{
      backgroundImage: "url('/inspiredByHeritage.webp')",
    }}
  >
    {/* Optional light overlay */}
    <div className="absolute inset-0 bg-[#f9e4bf]/10"></div>

    <div className="relative z-10 flex max-w-xl flex-col gap-4 px-6 py-8 md:px-40">
      <h2 className="font-serif text-2xl font-bold uppercase leading-tight text-[#164984] md:text-4xl">
        Inspired By
        <br />
        Heritage
      </h2>

      <p className="mt-4 max-w-md text-sm leading-7 text-[#3e5a2c] md:text-base">
        Rooted in India's rich traditions,
        <br />
        we blend timeless flavors and
        <br />
        wholesome ingredients to create
        <br />
        modern snacks for a better you.
      </p>

      <button className="mt-6 rounded-md border border-[#164984] bg-[#E35A7E] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#572340] hover:bg-[#572340]">
        KNOW OUR STORY
      </button>
    </div>
  </div>
</section>
  );
};

export default InspiredByHeritage;