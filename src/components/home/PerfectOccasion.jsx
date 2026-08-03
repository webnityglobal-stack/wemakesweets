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
    <section className="relative w-full overflow-hidden bg-[#f9e4bf] lg:min-h-[650px]">

      {/* Desktop Banner */}
      <img
        src="/perfectForOcassion.webp"
        alt="Perfect For Every Occasion"
        className="absolute inset-0 hidden h-full w-full object-cover object-right lg:block"
      />

      {/* Content */}
      <div className="relative flex items-center py-10 lg:absolute lg:inset-0 lg:py-0">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-10">

          <div className="relative w-full overflow-hidden rounded-2xl p-6 sm:p-8 lg:w-[52%] lg:p-10">

            {/* Background Image */}
            <img
              src="/perfectForOcassion2.webp"
              alt=""
              className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover opacity-10"
            />

            {/* Cream Overlay */}
            <div className="absolute inset-0 bg-[#f9e4bf]/85 backdrop-blur-sm" />

            {/* Content */}
            <div className="relative z-10">

              <h2 className="text-center font-serif text-2xl font-bold uppercase text-[#E35A7E] sm:text-3xl lg:text-left lg:text-4xl">
                Perfect For Every Occasion
              </h2>

              <p className="mt-5 max-w-xl text-center text-sm leading-7 text-[#3e5a2c] sm:text-base lg:text-left">
                Delight your loved ones with our handcrafted premium dates and
                nut gift boxes. Whether it's a festival, wedding, corporate
                event or a personal celebration, our thoughtfully curated
                collections make every moment memorable with elegance and
                authentic taste.
              </p>

              {/* Icons */}
              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {occasions.map((item, idx) => {
                  const Icon = item.icon;

                  return (
                    <>
                      <div
                        key={item.id}
                        className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-2"
                      >
                        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 group-hover:bg-[#E35A7E] group-hover:scale-110">
                          <Icon
                            size={28}
                            className="text-[#603917] group-hover:text-white"
                          />
                        </div>

                        <p className="whitespace-pre-line text-center text-sm font-medium text-[#603917]">
                          {item.title}
                        </p>
                      </div>

                      {/* Mobile-only image between the two icon rows */}
                      {idx === 1 && (
                        <div
                          key="mobile-boxes-image"
                          className="col-span-2 flex justify-center py-2 sm:hidden"
                        >
                          <img
                            src="/perfectForOcassionMobile.webp"
                            alt="Date and Anjeer Nut Cubes Gift Boxes"
                            className="w-full max-w-[280px]"
                          />
                        </div>
                      )}
                    </>
                  );
                })}
              </div>

              {/* Button */}
              <div className="mt-8 flex justify-center lg:justify-start">
                <button className="rounded-full bg-[#E35A7E] px-8 py-3 font-medium text-white transition-all duration-300 hover:bg-[#572340] hover:shadow-lg">
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