import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "./sliderData";

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

      {/* Height */}
      <div className="relative h-[230px] md:h-[380px] lg:h-[480px]">

        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              current === index
                ? "opacity-100 z-10"
                : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">

              {/* <div className="max-w-7xl mx-auto px-6 lg:px-14 w-full">

                <div className="max-w-xl">

                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-semibold text-gray-800 leading-tight">
                    {slide.title}
                  </h2>

                  <h3 className="text-xl md:text-4xl font-serif mt-2 text-gray-800">
                    {slide.subtitle}
                  </h3>

                  <p className="mt-3 text-pink-700 text-lg md:text-2xl">
                    {slide.description}
                  </p>

                  <button className="mt-8 bg-pink-600 hover:bg-pink-700 transition px-8 py-3 rounded-md text-white font-medium">
                    {slide.button}
                  </button>

                </div>

              </div> */}
              {/* Content */}
<div className="absolute inset-0 flex items-center justify-center z-20">
  <div className="text-center max-w-3xl px-6">

    <h2 className="text md:text-4xl lg:text-5xl font-serif font-semibold text-gray-800 leading-tight">
      {slide.title}
    </h2>

    <h3 className="mt-2 text-xl md:text-4xl font-serif text-gray-800">
      {slide.subtitle}
    </h3>

    <p className="mt-4 text-pink-700 text-lg md:text-2xl">
      {slide.description}
    </p>

    <button className="mt-8 bg-pink-600 hover:bg-pink-700 transition px-8 py-3 rounded-md text-white font-medium">
      {slide.button}
    </button>

  </div>
</div>

            </div>
          </div>
        ))}

        {/* Left */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Right */}
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
        >
          <ChevronRight size={22} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 rounded-full ${
                current === index
                  ? "w-8 h-2 bg-pink-600"
                  : "w-2 h-2 bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumSlider;