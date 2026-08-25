import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useMemo } from "react";
import reelsData from "../../constants/reelsData";
import ReelCard from "./ReelCard";
import ScrollWavyUnderline from "../common/ScrollWavyUnderline";

const autoplay = Autoplay({
  delay: 4000,
  stopOnInteraction: false,
  stopOnMouseEnter: true,
});

const ReelsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: false,
      skipSnaps: false,
      duration: 30,
    },
    [autoplay]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
const sectionRef = useRef(null);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

const stopAutoplay = useCallback(() => {
  autoplay.stop();
}, []);

const startAutoplay = useCallback(() => {
  autoplay.play();
}, []);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsSectionVisible(entry.isIntersecting);
    },
    {
      threshold: 0.5,
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);

 return (
   <section
  ref={sectionRef}
  className="relative overflow-hidden bg-[#f5ebda] py-8"
>


      {/* Decorative Background */}

      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#810c26]/10 blur-[130px]" />

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#08376c]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-[1500px] px-4">

        {/* Heading */}

        <div className="mb-8 flex items-center justify-between">

          <div>

            <span className="rounded-full font-manrope font-medium bg-[#810c26]/10 px-5 py-2 text-sm font-semibold text-[#810c26]">
              Watch Our Reels
            </span>

            <h2 className="mt-4 text-2xl font-cormorant font-bold font-black text-[#552b12] lg:text-3xl">
              Discover Healthy
              <span className="text-[#810c26]">
                {" "}
                Snack Stories
              </span>
              <ScrollWavyUnderline/>
            </h2>

            <p className="mt-4 font-manrope font-normal max-w-2xl text-[#6b4b35]">
              Explore delicious moments, customer experiences and behind the
              scenes from We Make Sweets.
            </p>

          </div>

          {/* Desktop Controls */}

          <div className="hidden gap-3 md:flex">

            <button
              onClick={scrollPrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#810c26]/20 bg-white text-[#810c26] shadow transition hover:bg-[#810c26] hover:text-white"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={scrollNext}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#810c26] text-white shadow-lg transition hover:scale-105"
            >
              <ChevronRight size={22} />
            </button>

          </div>

        </div>

        {/* Embla */}

        <div
  ref={emblaRef}
  className="overflow-hidden"
  onMouseEnter={stopAutoplay}
  onMouseLeave={startAutoplay}
>

          <div className="flex">

            {reelsData.map((reel, index) => (
              <div
                key={reel.id}
                // className="min-w-0 flex-[0_0_78%] px-3 sm:flex-[0_0_50%] lg:flex-[0_0_24%] xl:flex-[0_0_20%]"
                className="min-w-0 flex-[0_0_72%] px-3 sm:flex-[0_0_48%] lg:flex-[0_0_24%] xl:flex-[0_0_20%]"
              >
                {/* <ReelCard
  reel={reel}
  active={selectedIndex === index}
  visible={isSectionVisible}
/> */}
<ReelCard
  reel={reel}
  active={selectedIndex === index}
  visible={isSectionVisible}
  onClick={() => emblaApi?.scrollTo(index)}
/>
              </div>
            ))}

          </div>
<div className="mt-10 flex justify-center gap-3">

  {reelsData.map((_, index) => (

    <button
      key={index}
      onClick={() => emblaApi?.scrollTo(index)}
      className={`
        transition-all
        duration-300
        rounded-full

        ${
          selectedIndex === index
            ? "w-10 bg-[#810c26]"
            : "w-3 bg-[#810c26]/30 hover:bg-[#810c26]"
        }

        h-3
      `}
    />

  ))}

</div>



        </div>

      </div>

    </section>
  );
};

export default ReelsSection;