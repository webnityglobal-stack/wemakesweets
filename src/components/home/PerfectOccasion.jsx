import {
  Gift,
  BriefcaseBusiness,
  Flower2,
  GiftIcon,
} from "lucide-react";

const occasions = [
  {
    id: 1,
    title: "Festive\nGifting",
    icon: Gift,
  },
  {
    id: 2,
    title: "Corporate\nGifting",
    icon: BriefcaseBusiness,
  },
  {
    id: 3,
    title: "Wedding\nGifting",
    icon: Flower2,
  },
  {
    id: 4,
    title: "Personal\nGifting",
    icon: GiftIcon,
  },
];

const PerfectOccasion = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#fbf4e8] lg:bg-transparent">

      {/* Desktop Banner */}
      <img
        src="/perfectForOcassion.webp"
        alt="Perfect For Every Occasion"
        className="hidden lg:block w-full h-auto"
      />

      {/* Content */}
      <div className="relative lg:absolute lg:inset-0 flex items-center py-10 lg:py-0">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-10">

          <div className="relative w-full lg:w-[52%] overflow-hidden rounded-2xl p-6 sm:p-8 lg:p-10">

            {/* Background Image */}
            <img
              src="/perfectForOcassion2.webp"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-10 pointer-events-none select-none"
            />

            {/* White Overlay */}
            <div className="absolute inset-0 bg-[#EFC46]/85  backdrop-blur-sm" />

            {/* Content */}
            <div className="relative z-10">

              <h2 className="text-center lg:text-left font-serif text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-[#b43b55]">
                Perfect For Every Occasion
              </h2>

              <p className="mt-5 text-center lg:text-left text-[#6d5145] text-sm sm:text-base leading-7 max-w-xl">
                Delight your loved ones with our handcrafted premium dates and
                nut gift boxes. Whether it's a festival, wedding, corporate
                event or a personal celebration, our thoughtfully curated
                collections make every moment memorable with elegance and
                authentic taste.
              </p>

              {/* Icons */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {occasions.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.id}
                      className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 group-hover:bg-[#b43b55] group-hover:scale-110">
                        <Icon
                          size={28}
                          className="text-[#c43b5d] group-hover:text-white"
                        />
                      </div>

                      <p className="whitespace-pre-line text-center text-sm font-medium text-[#b43b55]">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Button */}
              <div className="mt-8 flex justify-center lg:justify-start">
                <button className="rounded-full bg-[#b43b55] px-8 py-3 text-white font-medium transition-all duration-300 hover:bg-[#912742] hover:shadow-lg">
                  Explore Collection
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default PerfectOccasion;