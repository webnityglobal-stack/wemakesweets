import {
  Leaf,
  HeartHandshake,
  ShieldCheck,
  Wheat,
  Flag,
  Sparkles,
} from "lucide-react";

const icons = [
  <Leaf size={32} />,
  <HeartHandshake size={32} />,
  <ShieldCheck size={32} />,
  <Wheat size={32} />,
  <Flag size={32} />,
  <Sparkles size={32} />,
];

const ProductHighlights = ({ product }) => {
  return (
    <section className="w-full max-w-full min-w-0 overflow-hidden px-1 md:px-5">

      <div className="text-center">

        <span className="font-semibold uppercase tracking-widest text-[#810c26]">
          Why Choose Us
        </span>

        <h2 className="mt-3 text-4xl font-bold text-[#08376c]">
          Crafted With Goodness
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Every snack is thoughtfully prepared using premium ingredients
          to deliver the perfect balance of taste, health and freshness.
        </p>

      </div>

      {/* Mobile View: Automatic Continuous Infinite Slider */}
      <div className="sm:hidden mt-6 overflow-hidden w-full py-2">
        <div className="flex animate-highlight-slider gap-4 w-max">
          {[...(product.highlights || []), ...(product.highlights || [])].map((item, index) => (
            <div
              key={`mobile-hl-${index}`}
              className="w-[220px] shrink-0 rounded-3xl border border-[#810c2615] bg-white p-5 text-center shadow-sm transition duration-300 flex flex-col items-center justify-center"
            >
              <div className="mb-3 inline-flex rounded-xl bg-[#f9e4bf] p-2.5 text-[#810c26]">
                <span className="[&>svg]:h-5 [&>svg]:w-5">
                  {icons[index % icons.length]}
                </span>
              </div>

              <h3 className="text-[15px] font-semibold text-[#08376c]">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop / Tablet View: Grid */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 mt-6 md:mt-12">
        {product.highlights?.map((item, index) => (
          <div
            key={`desktop-hl-${index}`}
            className="group rounded-3xl border border-[#810c2615] bg-white p-5 text-center md:p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#810c26] hover:shadow-xl flex flex-col items-center justify-center"
          >
            <div className="mb-3 inline-flex rounded-xl bg-[#f9e4bf] p-2.5 text-[#810c26] transition group-hover:bg-[#810c26] group-hover:text-white md:mb-5 md:rounded-2xl md:p-4">
              <span className="[&>svg]:h-5 [&>svg]:w-5 md:[&>svg]:h-6 md:[&>svg]:w-6">
                {icons[index % icons.length]}
              </span>
            </div>

            <h3 className="md:text-xl text-[16px] sm:text-[18px] font-semibold text-[#08376c]">
              {item}
            </h3>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ProductHighlights;