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
    <section className="px-1 md:px-5">

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

      <div className="mt-6 md:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {product.highlights.map((item, index) => (

          <div
            key={index}
            className="group rounded-3xl border border-[#810c2615] bg-white p-4 text-center md:p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#810c26] hover:shadow-xl"
          >

            {/* <div className="mb-5 inline-flex rounded-2xl bg-[#f9e4bf] p-4 text-[#810c26] transition group-hover:bg-[#810c26] group-hover:text-white">

              {icons[index]}

            </div> */}
            <div className="mb-3 inline-flex rounded-xl bg-[#f9e4bf] p-2.5 text-[#810c26] transition group-hover:bg-[#810c26] group-hover:text-white md:mb-5 md:rounded-2xl md:p-4">
  <span className="[&>svg]:h-5 [&>svg]:w-5 md:[&>svg]:h-6 md:[&>svg]:w-6">
    {icons[index]}
  </span>
</div>

            <h3 className="md:text-xl text-[18px]  font-semibold text-[#08376c]">
              {item}
            </h3>

            {/* <p className="mt-3 text-gray-600">
              Carefully selected premium ingredients that make every bite
              healthier, tastier and naturally satisfying.
            </p> */}

          </div>

        ))}

      </div>

    </section>
  );
};

export default ProductHighlights;