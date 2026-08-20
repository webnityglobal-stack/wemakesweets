import { useEffect, useState } from "react";

const features = [
  {
    image: "/icons/MadeInIndia.webp",
    title: "Made in India",
  },
  {
    image: "/icons/customers.webp",
    title: "Happy Customers",
  },
  {
    image: "/icons/labTested.webp",
    title: "Lab Tested",
  },
  {
    image: "/icons/quality.webp",
    title: "Quality Check",
  },
  {
    image: "/icons/fssai.webp",
    title: "FSSAI Certified",
  },
  {
    image: "/icons/palmTree.webp",
    title: "No Palm Oil",
  },
];

// Mobile mein 2-2 icons
const mobileSlides = [];

for (let i = 0; i < features.length; i += 2) {
  mobileSlides.push(features.slice(i, i + 2));
}

// First slide ko end mein duplicate kar diya
// 1+2 -> 3+4 -> 5+6 -> 1+2
mobileSlides.push(mobileSlides[0]);

const IconPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Duplicate slide (1 + 2) par pahunchne ke baad
    // transition complete hone do, phir silently first slide par reset
    if (currentSlide === mobileSlides.length - 1) {
      const timeout = setTimeout(() => {
        setEnableTransition(false);
        setCurrentSlide(0);

        // Browser ko reset render karne do
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setEnableTransition(true);
          });
        });
      }, 600);

      return () => clearTimeout(timeout);
    }
  }, [currentSlide]);

  return (
    <section className="relative bg-[#f5ebda] py-6">

      <div className="mx-auto max-w-7xl px-6">

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:grid grid-cols-6 gap-y-12">
          {features.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative flex h-32 w-32 items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    absolute h-18 w-18 object-contain
                    transition-all duration-500 ease-out
                    animate-[floatPulse_3s_ease-in-out_infinite]
                    group-hover:scale-125
                    group-hover:-translate-y-4
                    group-hover:rotate-6
                    group-hover:drop-shadow-[0_10px_15px_rgba(0,0,0,0.35)]
                    rounded-full
                  "
                />
              </div>

              <div className="mt-4 h-1 w-10 rounded-full bg-[#8b183d] transition-all duration-300 group-hover:w-16" />

              <h3 className="mt-5 text-[12px] md:text-lg font-bold uppercase leading-7 text-[#2d2d2d]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* ================= MOBILE SLIDER ================= */}
        <div className="lg:hidden overflow-hidden">
          <div
            className="mobile-feature-slider"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: enableTransition
                ? "transform 0.6s ease-in-out"
                : "none",
            }}
          >
            {mobileSlides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="mobile-feature-slide"
              >
                <div className="grid grid-cols-2 gap-4">
                  {slide.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="relative flex h-28 w-28 items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="
                            h-24 w-24 object-contain
                            animate-[floatPulse_3s_ease-in-out_infinite]
                            rounded-full
                          "
                        />
                      </div>

                      <div className="mt-3 h-1 w-10 rounded-full bg-[#8b183d]" />

                      <h3 className="mt-4 text-[11px] font-bold uppercase leading-6 text-[#2d2d2d]">
                        {item.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {mobileSlides.slice(0, 3).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setEnableTransition(true);
                  setCurrentSlide(index);
                }}
                className={`mobile-slider-dot ${
                  currentSlide % 3 === index ? "active" : ""
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default IconPage;