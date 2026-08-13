import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  const discount =
    product.mrp && product.salePrice
      ? Math.round(((product.mrp - product.salePrice) / product.mrp) * 100)
      : 0;

  const inStock = product.stock > 0;

  return (
    <Link
      to={`/products/${product.slug}`}
      className="
        group block overflow-hidden rounded-lg border border-[#60391720] bg-white
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        sm:rounded-[28px]
      "
    >
      {/* ================= IMAGE ================= */}
      <div className="relative aspect-square overflow-hidden bg-[#f9e4bf]/20">
        {/* First Image */}
        <img
          src={product.images?.[0]}
          alt={product.name}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
            product.images?.[1]
              ? "group-hover:scale-105 group-hover:opacity-0"
              : "group-hover:scale-105"
          }`}
        />

        {/* Second Image */}
        {product.images?.[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className="
              absolute inset-0 h-full w-full scale-105 object-cover
              opacity-0 transition-all duration-700
              group-hover:scale-100 group-hover:opacity-100
            "
          />
        )}

        {/* Bestseller */}
        {product.isBestSeller && (
          <span
            className="
              absolute left-1 top-1 rounded-sm bg-[#FFD633]
              px-1 py-0.5 text-[6px] font-bold uppercase text-black shadow
              sm:left-4 sm:top-4 sm:rounded-md sm:px-3 sm:py-1 sm:text-xs
            "
          >
            Bestseller
          </span>
        )}

        {/* Discount */}
        {discount > 0 && (
          <span
            className="
              absolute right-1 top-1 rounded-sm bg-[#8b183d]
              px-1.5 py-0.5 text-[6px] font-bold text-white shadow
              sm:right-4 sm:top-4 sm:rounded-md sm:px-3 sm:py-1 sm:text-xs
            "
          >
            {discount}% OFF
          </span>
        )}

        {/* Wishlist */}
        <button
          type="button"
          onClick={(e) => e.preventDefault()}
          className="
            absolute bottom-1 right-1 hidden h-7 w-7 items-center justify-center
            rounded-full bg-white shadow-md transition-all duration-300
            hover:scale-110
            sm:flex sm:bottom-4 sm:right-4 sm:h-11 sm:w-11 sm:shadow-lg
          "
        >
          <Heart
            size={15}
            className="text-[#8b183d] sm:h-5 sm:w-5"
            strokeWidth={2}
          />
        </button>

        {/* Rating */}
        <div
          className="
            absolute bottom-1 left-1 flex items-center gap-0.5
            rounded-sm bg-white px-1.5 py-0.5 shadow-md
            sm:bottom-4 sm:left-4 sm:gap-1 sm:rounded-md sm:px-3 sm:py-2
          "
        >
          <Star
            size={9}
            fill="#F4C430"
            stroke="#F4C430"
            className="sm:h-4 sm:w-4"
          />

          <span className="text-[7px] font-semibold sm:text-sm">
            {product.rating}
          </span>
        </div>

        {/* Sold Out */}
        {!inStock && (
          <span
            className="
              absolute inset-0 flex items-center justify-center
              bg-black/50 text-[10px] font-bold text-white backdrop-blur-sm
              sm:text-xl
            "
          >
            SOLD OUT
          </span>
        )}
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className="
          space-y-1 p-1.5
          sm:space-y-4 sm:p-5
        "
      >
        {/* Category */}
        <span
          className="
            inline-flex max-w-full truncate rounded-sm
            bg-[#572340] px-1.5 py-0.5
            text-[6px] font-medium text-white
            sm:rounded-md sm:px-3 sm:py-1 sm:text-xs
          "
        >
          {product.category}
        </span>

        {/* Name */}
        <h2
          className="
            line-clamp-2 min-h-[26px]
            text-[8px] font-bold uppercase leading-[1.15] 
            text-[#2d2d2d] transition duration-300
            group-hover:text-[#8b183d]
            sm:min-h-[60px] sm:text-xl sm:leading-tight
            lg:text-[18px] lg:min-h-[8px]
          "
        >
          {product.name}
        </h2>

        {/* Description */}
        <p
          className="
            line-clamp- min-h-[24px]
            text-[8px] leading-[1.3] text-gray-500
            sm:min-h-[48px] sm:text-[15px] sm:leading-6
            lg:min-h-[8px]
          "
        >
          {product.shortDescription}
        </p>

        {/* Stock */}
        <div className="hidden text-[10px] font-semibold sm:block sm:text-sm">
          {product.stock === 0 ? (
            <span className="text-[#8b183d]">Sold Out</span>
          ) : product.stock <= 10 ? (
            <span className="text-[#DE6239]">
              Only {product.stock} Left
            </span>
          ) : (
            <span className="text-[#3e5a2c]">In Stock</span>
          )}
        </div>

        {/* Price */}
        <div
          className="
            flex flex-wrap items-center gap-1
            sm:gap-2
          "
        >
          <span
            className="
              text-[15px] font-bold text-[#572340]
              sm:text-3xl md:text-xl
            "
          >
            ₹{product.salePrice}
          </span>

          <span
            className="
              text-[8px] text-gray-400 line-through
              sm:text-lg
            "
          >
            ₹{product.mrp}
          </span>

          {discount > 0 && (
            <span
              className="
                rounded-sm bg-[#FFD633]
                px-1 py-0.5 text-[6px] font-bold text-black
                sm:rounded sm:px-2 sm:py-1 sm:text-xs
              "
            >
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Button */}
        <button
          type="button"
          disabled={!inStock}
          onClick={(e) => e.preventDefault()}
          className={`
            h-7 w-full rounded-md border border-black
            text-[8px] font-bold uppercase tracking-normal
            sm:h-14 sm:rounded-xl sm:text-base

            ${
              inStock
                ? `
                  bg-[#ff5a00] text-white
                  shadow-[1px_2px_0px_#000]
                  transition-all duration-200
                  hover:translate-x-[-1px]
                  hover:translate-y-[-1px]
                  hover:bg-[#572340]
                  hover:shadow-[3px_4px_0px_#000]
                  active:translate-x-[1px]
                  active:translate-y-[2px]
                  active:shadow-[1px_1px_0px_#000]

                  sm:bg-pink-600
                  sm:shadow-[2px_3px_0px_#000]
                `
                : `
                  cursor-not-allowed
                  border-black
                  bg-gray-300
                  text-white
                  shadow-[1px_2px_0px_#000]

                  sm:shadow-[2px_3px_0px_#000]
                `
            }
          `}
        >
          {inStock ? "QUICK ADD" : "SOLD OUT"}
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;