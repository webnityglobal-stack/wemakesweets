import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import reelService, { resolveReelVideoUrl } from "../../services/reelService";
import ReelCard from "./ReelCard";
import ScrollWavyUnderline from "../common/ScrollWavyUnderline";

const ReelsSection = () => {
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const sectionRef = useRef(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: false,
    skipSnaps: false,
    duration: 25,
  });

  // Fetch dynamic reels from backend API
  useEffect(() => {
    let isMounted = true;

    const fetchReels = async () => {
      try {
        setLoading(true);
        const data = await reelService.getReels();
        if (
          isMounted &&
          data?.success &&
          Array.isArray(data.reels) &&
          data.reels.length > 0
        ) {
          const mapped = data.reels.map((item, index) => ({
            id: item._id || item.id || item.filename || `reel-${index}`,
            videoUrl: resolveReelVideoUrl(item.url || item.videoUrl),
            url: resolveReelVideoUrl(item.url || item.videoUrl),
            filename: item.filename,
            size: item.size,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
          }));
          setReels(mapped);
        } else if (isMounted) {
          setReels([]);
        }
      } catch (error) {
        console.error("Failed to load reels from API:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchReels();

    return () => {
      isMounted = false;
    };
  }, []);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  // When a reel finishes playing completely, auto-advance to next reel
  const handleVideoEnded = useCallback(
    (index) => {
      if (!emblaApi) return;
      if (index === selectedIndex) {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else {
          // Loop back to the first reel smoothly
          emblaApi.scrollTo(0);
        }
      }
    },
    [emblaApi, selectedIndex]
  );

  // Re-init carousel when reels state updates
  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.reInit({
      loop: reels.length > 2,
      align: "start",
      dragFree: false,
      skipSnaps: false,
      duration: 25,
    });
  }, [emblaApi, reels]);

  // Track active slide index
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

  // Pause playback when section is out of viewport, resume when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      {
        threshold: 0.25,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // If loading finished and no reels exist in backend, hide section
  if (!loading && reels.length === 0) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f5ebda] py-8"
    >
      {/* Decorative Background */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#810c26]/10 blur-[130px] pointer-events-none" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#08376c]/10 blur-[130px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1500px] px-4">
        {/* Heading */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <span className="rounded-full font-manrope font-medium bg-[#810c26]/10 px-5 py-2 text-sm font-semibold text-[#810c26]">
              Watch Our Reels
            </span>

            <h2 className="mt-4 text-2xl font-cormorant font-bold font-black text-[#552b12] lg:text-3xl">
              Discover Healthy
              <span className="text-[#810c26]"> Snack Stories</span>
              <ScrollWavyUnderline className="pr-50" />
            </h2>

            <p className="mt-4 font-manrope font-normal max-w-2xl text-[#6b4b35]">
              Explore delicious moments, customer experiences and behind the
              scenes from We Make Sweets.
            </p>
          </div>

          {/* Desktop Navigation Arrows */}
          <div className="hidden gap-3 md:flex">
            <button
              onClick={scrollPrev}
              aria-label="Previous reel"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-600 text-white hover:text-white shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000] transition-all duration-300 hover:bg-[#60b396] hover:scale-105 cursor-pointer"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={scrollNext}
              aria-label="Next reel"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-600 text-white hover:text-white shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000] transition-all duration-300 hover:bg-[#60b396] hover:scale-105 cursor-pointer"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Carousel or Loading Skeleton */}
        {loading ? (
          <div className="flex gap-3 overflow-hidden">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="min-w-0 flex-[0_0_72%] px-3 sm:flex-[0_0_48%] lg:flex-[0_0_24%] xl:flex-[0_0_20%]"
              >
                <div className="aspect-[9/16] w-full rounded-[32px] bg-[#810c26]/10 animate-pulse" />
              </div>
            ))}
          </div>
        ) : (
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {reels.map((reel, index) => {
                const isCurrentOrNext =
                  index === selectedIndex ||
                  index === (selectedIndex + 1) % reels.length;

                return (
                  <div
                    key={reel.id}
                    className="min-w-0 flex-[0_0_72%] px-3 sm:flex-[0_0_48%] lg:flex-[0_0_24%] xl:flex-[0_0_20%]"
                  >
                    <ReelCard
                      reel={reel}
                      index={index}
                      active={selectedIndex === index}
                      visible={isSectionVisible}
                      isMuted={isMuted}
                      onToggleMute={toggleMute}
                      onEnded={() => handleVideoEnded(index)}
                      onClick={() => emblaApi?.scrollTo(index)}
                      preload={isCurrentOrNext ? "auto" : "metadata"}
                    />
                  </div>
                );
              })}
            </div>

            {/* Indicator Dots */}
            <div className="mt-8 flex justify-center gap-2.5">
              {reels.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  aria-label={`Go to reel ${index + 1}`}
                  className={`
                    transition-all
                    duration-300
                    rounded-full
                    cursor-pointer
                    ${
                      selectedIndex === index
                        ? "w-8 bg-[#810c26]"
                        : "w-2.5 bg-[#810c26]/30 hover:bg-[#810c26]/60"
                    }
                    h-2.5
                  `}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReelsSection;