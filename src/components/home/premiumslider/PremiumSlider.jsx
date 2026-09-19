import { useEffect, useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { defaultSlides } from "./sliderData";
import heroBannerService, { resolveBannerImageUrl } from "@/services/heroBannerService";

const PremiumSlider = () => {
  const [banners, setBanners] = useState([]);
  const [failedSlots, setFailedSlots] = useState({});
  const [current, setCurrent] = useState(0);

  // Fetch dynamic hero banner slots from backend
  useEffect(() => {
    let isMounted = true;
    const fetchBanners = async () => {
      try {
        const data = await heroBannerService.getHeroBanners();
        if (isMounted && data?.success && Array.isArray(data.banners)) {
          setBanners(data.banners);
        }
      } catch (error) {
        console.warn(
          "Unable to load dynamic hero banners, using default slides.",
          error
        );
      }
    };

    fetchBanners();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleImageError = (slotNumber) => {
    setFailedSlots((prev) => ({ ...prev, [slotNumber]: true }));
  };

  // Merge dynamic banners with default slides for exactly 3 slots
  const displaySlides = useMemo(() => {
    return [1, 2, 3].map((slotNumber) => {
      const defaultSlide =
        defaultSlides.find((s) => s.slot === slotNumber) ||
        defaultSlides[slotNumber - 1] ||
        defaultSlides[0];

      const apiBanner = banners.find(
        (b) => Number(b.slot) === slotNumber && b.isActive !== false
      );

      const hasValidCustomImage = Boolean(
        apiBanner &&
          apiBanner.image &&
          typeof apiBanner.image === "string" &&
          apiBanner.image.trim() !== "" &&
          !failedSlots[slotNumber]
      );

      if (hasValidCustomImage) {
        return {
          ...defaultSlide,
          id: apiBanner._id || `custom-slot-${slotNumber}`,
          slot: slotNumber,
          image: resolveBannerImageUrl(apiBanner.image),
          isCustom: true,
        };
      }

      return {
        ...defaultSlide,
        slot: slotNumber,
        isCustom: false,
      };
    });
  }, [banners, failedSlots]);

  // Autoplay interval
  useEffect(() => {
    if (displaySlides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % displaySlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [displaySlides.length]);

  // Adjust current slide index if out of bounds
  useEffect(() => {
    if (current >= displaySlides.length) {
      setCurrent(0);
    }
  }, [displaySlides.length, current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % displaySlides.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + displaySlides.length) % displaySlides.length
    );
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[230px] md:h-[380px] lg:h-[480px]">
        {displaySlides.map((slide, index) => (
          <div
            key={slide.id || slide.slot || index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              current === index ? "opacity-100 z-10" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title || `Hero banner slot ${slide.slot}`}
              onError={() => {
                if (slide.isCustom) {
                  handleImageError(slide.slot);
                }
              }}
              className="w-full h-full object-cover"
            />

            {/* Overlay and Text ONLY shown for default static images, NOT for custom uploaded slot images */}
            {!slide.isCustom && (
              <>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#572340]/25 via-[#603917]/15 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="max-w-3xl px-6 text-center">
                    <h2 className="text font-cormorant font-bold md:text-4xl lg:text-5xl text-[#572340] leading-tight">
                      {slide.title}
                    </h2>

                    <h3 className="mt-2 font--manrope font-semibold sm:text-xl md:text-4xl text-[#603917]">
                      {slide.subtitle}
                    </h3>

                    <p className="mt-4 font-manrope font-normal text-[#3e5a2c] text-[12px] sm:text-lg md:text-2xl">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-5 top-1/2 -translate-y-1/2 z-30 rounded-full bg-pink-600 text-white hover:text-white p-2 shadow-lg transition-all duration-300 hover:bg-[#60b396] hover:scale-105 shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000] cursor-pointer"
        >
          <ChevronLeft size={22} className="hover:text-white" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-5 top-1/2 -translate-y-1/2 z-30 rounded-full bg-pink-600 text-white hover:text-white p-2 shadow-lg transition-all duration-300 hover:bg-[#60b396] hover:scale-105 shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000] cursor-pointer"
        >
          <ChevronRight size={22} className="hover:text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {displaySlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
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