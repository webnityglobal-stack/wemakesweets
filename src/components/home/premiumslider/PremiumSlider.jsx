import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "./sliderData";
import { Link } from "react-router-dom";
import { TextRoll } from "@/components/ui/skiper-ui/skiper58";

const PremiumSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[230px] md:h-[380px] lg:h-[480px]">

        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              current === index ? "opacity-100 z-10" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#572340]/25 via-[#603917]/15 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="max-w-3xl px-6 text-center">

                <h2 className="text md:text-4xl lg:text-5xl font-serif font-semibold text-[#572340] leading-tight">
                {slide.title}
                </h2>

                <h3 className="mt-2  sm:text-xl md:text-4xl font-serif text-[#603917]">
                  {slide.subtitle}
                </h3>

                <p className="mt-4 text-[#3e5a2c] text-[12px] sm:text-lg  md:text-2xl">
                  {slide.description}
                </p>

                {/* Standard Project Button */}
              <Link to='/products'>
                <button
                
                  className="
                    mt-8
                    rounded-full
                    bg-pink-600
                    px-8
                    py-3
                    text-white
                    font-semibold
                    shadow-md
                    transition-all
                    duration-300
                    hover:bg-[#572340]
                    hover:scale-105
                    hover:shadow-lg
                  "
                >
                  {slide.button}
                </button>
              </Link>

              </div>
            </div>
          </div>
        ))}

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-30 rounded-full bg-[#f9e4bf] p-2 shadow-lg transition-all duration-300 hover:bg-[#572340] hover:text-white"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-30 rounded-full bg-[#f9e4bf] p-2 shadow-lg transition-all duration-300 hover:bg-[#572340] hover:text-white"
        >
          <ChevronRight size={22} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 h-2 bg-[#8b183d]"
                  : "w-2 h-2 bg-[#f9e4bf]"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default PremiumSlider;