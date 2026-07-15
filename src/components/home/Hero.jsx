import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  Sparkles,
  Heart,
} from "lucide-react";

const features = [
  {
    icon: <Leaf size={22} />,
    title: "Rich in",
    subtitle: "Natural Energy",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "No Added",
    subtitle: "Preservatives",
  },
  {
    icon: <Sparkles size={22} />,
    title: "Made with",
    subtitle: "Premium Ingredients",
  },
  {
    icon: <Heart size={22} />,
    title: "Wholesome",
    subtitle: "& Delicious",
  },
];

function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[820px] lg:h-[700px]">
        {/* Responsive Image */}
        <picture>
          {/* Mobile */}
          <source media="(max-width:1023px)" srcSet="/image2.webp" />

          {/* Desktop */}
          <img
            src="/image1.webp"
            alt="Hero"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </picture>

        {/* Overlay */}
        <div className="absolute inset-0 flex items-start lg:items-center">
          <div className="w-full lg:w-1/2 px-5 sm:px-7 lg:px-20 pt-24 sm:pt-28 lg:pt-0">
            <div className="max-w-[205px] sm:max-w-[240px] lg:max-w-xl text-[#EFC46B]">
              {/* Heading */}
              <h1 className="font-serif font-bold leading-[1.08] text-[2rem] sm:text-[2.3rem] lg:text-6xl">
                Delight<br/> in
                <br />
                Nature's Finest
              </h1>

              {/* Paragraph */}
              <p className="mt-4 max-w-[190px] sm:max-w-[230px] lg:max-w-xl text-white/90 text-[14px] sm:text-[15px] lg:text-lg leading-7 lg:leading-8">
                Premium Date & Nut Cubes made from the finest ingredients for a
                healthy lifestyle.
              </p>

              {/* Button */}
              <button className="mt-6 flex w-fit items-center gap-2 rounded-lg bg-[#E8B357] px-5 py-3 text-sm font-semibold text-[#3C2148] transition hover:bg-[#d9a044] lg:mt-7 lg:px-6 lg:py-3 lg:text-base">
                SHOP NOW
                {/* <ArrowRight size={18} /> */}
              </button>

              {/* Mobile Features */}
              <div className="mt-8 flex max-w-[190px] sm:max-w-[220px] flex-col gap-6 lg:hidden">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 border-b border-[#c59b3f]/40 pb-4"
                  >
                    <div className="mt-1 text-[#E8B357]">{item.icon}</div>

                    <div>
                      <p className="text-[15px] font-medium leading-5 text-[#EFC46B]">
                        {item.title}
                      </p>

                      <p className="text-xs leading-5 text-gray-300">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Features */}
              <div className="mt-14 hidden lg:grid grid-cols-4 gap-8">
                {features.map((item, index) => (
                  <div key={index}>
                    <div className="mb-2 text-[#E8B357]">{item.icon}</div>

                    <p className="text-sm font-medium text-[#EFC46B]">
                      {item.title}
                    </p>

                    <p className="text-xs text-gray-300">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;