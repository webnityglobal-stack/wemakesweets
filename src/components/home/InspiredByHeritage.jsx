import React from "react";
import { Link } from "react-router-dom";

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

      <Link to='/our-story' >
      <button className="mt-6 rounded-full text-white hover:text-white bg-pink-600 hover:bg-[#60b396] hover:scale-105 shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000] px-6 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer">
        KNOW OUR STORY
      </button>
      </Link>
    </div>
  </div>
</section>
  );
};

export default InspiredByHeritage;