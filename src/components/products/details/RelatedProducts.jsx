import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";

const RelatedProducts = ({ products }) => {
  return (
    <section className="mt-24">

      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

        <div>

          <span className="font-semibold uppercase tracking-[4px] text-[#810c26]">
            You May Also Like
          </span>

          <h2 className="mt-3 text-4xl font-bold text-[#08376c]">
            Discover More Healthy Treats
          </h2>

          <p className="mt-4 max-w-2xl text-gray-600">
            Explore more handcrafted sweets and snacks made with
            premium ingredients and natural goodness.
          </p>

        </div>

        <Link
          to="/products"
          className="inline-flex items-center gap-2 rounded-full border-2 border-[#810c26] px-6 py-3 font-semibold text-[#810c26] transition hover:bg-[#810c26] hover:text-white"
        >
          View All Products

          <ArrowRight size={18} />
        </Link>

      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
};

export default RelatedProducts;