import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const discount = Math.round(
    ((product.mrp - product.salePrice) / product.mrp) * 100
  );

  const inStock = product.stock > 0;

  return (
  <Link
  to={`/products/${product.slug}`}
  className="group overflow-hidden rounded-3xl border border-[#60391715] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#8b183d] hover:shadow-xl"
>
  {/* Image */}
  <div className="relative aspect-square overflow-hidden bg-[#f9e4bf]/20">
    <img
      src={product.images?.[0]}
      alt={product.name}
      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
    />

    {product.isBestSeller && (
      <span className="absolute left-3 top-3 rounded-full bg-[#8b183d] px-3 py-1 text-xs font-semibold text-white shadow">
        Bestseller
      </span>
    )}

    <span className="absolute right-3 top-3 rounded-full bg-[#164984] px-3 py-1 text-xs font-semibold text-white shadow">
      {discount}% OFF
    </span>

    {!inStock && (
      <span className="absolute bottom-3 left-3 rounded-full bg-[#603917] px-3 py-1 text-xs font-medium text-white">
        Sold Out
      </span>
    )}
  </div>

  {/* Content */}
  <div className="space-y-3 p-5">
    {/* <span className="inline-block rounded-full bg-[#f9e4bf] px-3 py-1 text-xs font-semibold text-[#8b183d]">
      {product.category}
    </span> */}

    <h2 className="line-clamp-2 text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#8b183d]">
      {product.name}
    </h2>

    <p className="line-clamp-2 text-sm leading-6 text-gray-500">
      {product.shortDescription}
    </p>

    {/* Rating + Stock */}
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-1">
        <span className="text-[#F4C02D]">★</span>
        <span className="font-medium text-gray-700">
          {product.rating}
        </span>
      </div>

      {product.stock === 0 ? (
        <span className="font-semibold text-[#8b183d]">
          Sold Out
        </span>
      ) : product.stock <= 10 ? (
        <span className="font-semibold text-[#DE6239]">
          Only {product.stock} Left
        </span>
      ) : (
        <span className="font-semibold text-[#3e5a2c]">
          In Stock
        </span>
      )}
    </div>

    {/* Price */}
    <div className="flex items-end gap-3">
      <span className="text-2xl font-bold text-[#8b183d]">
        ₹{product.salePrice}
      </span>

      <span className="text-sm text-gray-400 line-through">
        ₹{product.mrp}
      </span>
    </div>

    {/* Button */}
    <button
      disabled={!inStock}
      className={`w-full rounded-xl py-3 font-semibold text-white transition-all duration-300 ${
        inStock
          ? "bg-pink-600 hover:bg-[#572340]"
          : "cursor-not-allowed bg-gray-300"
      }`}
    >
      {inStock ? "View Details" : "Sold Out"}
    </button>
  </div>
</Link>
  );
};

export default ProductCard;