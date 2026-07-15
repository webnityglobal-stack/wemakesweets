import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = ({
  images = [],
  visibleItems = 4,
  autoPlay = true,
  interval = 3000,
}) => {
  const [current, setCurrent] = useState(0);

  const maxIndex = Math.max(images.length - visibleItems, 0);

  const nextSlide = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(nextSlide, interval);

    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative w-full overflow-hidden">

      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / visibleItems)}%)`,
        }}
      >
        {images.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0
            w-full
            sm:w-1/2
            lg:w-1/4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[240px] object-cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg p-2"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg p-2"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default ImageSlider;