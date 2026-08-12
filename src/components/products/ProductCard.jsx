// import { Link } from "react-router-dom";

// const ProductCard = ({ product }) => {
//   const discount = Math.round(
//     ((product.mrp - product.salePrice) / product.mrp) * 100
//   );

//   const inStock = product.stock > 0;

//   return (
//   <Link
//   to={`/products/${product.slug}`}
//   className="group overflow-hidden rounded-3xl border border-[#60391715] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#8b183d] hover:shadow-xl"
// >
//   {/* Image */}
//   <div className="relative aspect-square overflow-hidden bg-[#f9e4bf]/20">
//     <img
//       src={product.images?.[0]}
//       alt={product.name}
//       className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//     />

//     {product.isBestSeller && (
//       <span className="absolute left-3 top-3 rounded-full bg-[#8b183d] px-3 py-1 text-xs font-semibold text-white shadow">
//         Bestseller
//       </span>
//     )}

//     <span className="absolute right-3 top-3 rounded-full bg-[#164984] px-3 py-1 text-xs font-semibold text-white shadow">
//       {discount}% OFF
//     </span>

//     {!inStock && (
//       <span className="absolute bottom-3 left-3 rounded-full bg-[#603917] px-3 py-1 text-xs font-medium text-white">
//         Sold Out
//       </span>
//     )}
//   </div>

//   {/* Content */}
//   <div className="space-y-3 p-5">
//     {/* <span className="inline-block rounded-full bg-[#f9e4bf] px-3 py-1 text-xs font-semibold text-[#8b183d]">
//       {product.category}
//     </span> */}

//     <h2 className="line-clamp-2 text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#8b183d]">
//       {product.name}
//     </h2>

//     <p className="line-clamp-2 text-sm leading-6 text-gray-500">
//       {product.shortDescription}
//     </p>

//     {/* Rating + Stock */}
//     <div className="flex items-center justify-between text-sm">
//       <div className="flex items-center gap-1">
//         <span className="text-[#F4C02D]">★</span>
//         <span className="font-medium text-gray-700">
//           {product.rating}
//         </span>
//       </div>

//       {product.stock === 0 ? (
//         <span className="font-semibold text-[#8b183d]">
//           Sold Out
//         </span>
//       ) : product.stock <= 10 ? (
//         <span className="font-semibold text-[#DE6239]">
//           Only {product.stock} Left
//         </span>
//       ) : (
//         <span className="font-semibold text-[#3e5a2c]">
//           In Stock
//         </span>
//       )}
//     </div>

//     {/* Price */}
//     <div className="flex items-end gap-3">
//       <span className="text-2xl font-bold text-[#8b183d]">
//         ₹{product.salePrice}
//       </span>

//       <span className="text-sm text-gray-400 line-through">
//         ₹{product.mrp}
//       </span>
//     </div>

//     {/* Button */}
//     <button
//       disabled={!inStock}
//       className={`w-full rounded-xl py-3 font-semibold text-white transition-all duration-300 ${
//         inStock
//           ? "bg-pink-600 hover:bg-[#572340]"
//           : "cursor-not-allowed bg-gray-300"
//       }`}
//     >
//       {inStock ? "View Details" : "Sold Out"}
//     </button>
//   </div>
// </Link>
//   );
// };

// export default ProductCard;

// import { Link } from "react-router-dom";
// import { Heart, Star } from "lucide-react";

// const ProductCard = ({ product }) => {
//   const discount = Math.round(
//     ((product.mrp - product.salePrice) / product.mrp) * 100
//   );

//   const inStock = product.stock > 0;

//   return (
//     <Link
//       to={`/products/${product.slug}`}
//       className="group overflow-hidden rounded-[28px] border border-[#60391720] bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
//     >
//       {/* IMAGE */}
//       <div className="relative aspect-square overflow-hidden bg-[#f9e4bf]/20">

//         {/* First Image */}
//         <img
//           src={product.images?.[0]}
//           alt={product.name}
//           className={`absolute inset-0 h-full w-full object-cover transition-all duration-700
//           ${product.images?.[1]
//               ? "group-hover:scale-105 group-hover:opacity-0"
//               : "group-hover:scale-105"
//             }`}
//         />

//         {/* Second Image */}
//         {product.images?.[1] && (
//           <img
//             src={product.images[1]}
//             alt={product.name}
//             className="absolute inset-0 h-full w-full object-cover opacity-0 scale-105 transition-all duration-700 group-hover:scale-100 group-hover:opacity-100"
//           />
//         )}

//         {/* Bestseller */}
//         {product.isBestSeller && (
//           <span className="absolute left-4 top-4 rounded-md bg-[#FFD633] px-3 py-1 text-xs font-bold uppercase text-black shadow">
//             Bestseller
//           </span>
//         )}

//         {/* Discount */}
//         {discount > 0 && (
//           <span className="absolute right-4 top-4 rounded-md bg-[#8b183d] px-3 py-1 text-xs font-bold text-white shadow">
//             {discount}% OFF
//           </span>
//         )}

//         {/* Wishlist */}
//         <button
//           onClick={(e) => e.preventDefault()}
//           className="absolute right-4 bottom-4 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110"
//         >
//           <Heart
//             size={20}
//             className="text-[#8b183d]"
//             strokeWidth={2}
//           />
//         </button>

//         {/* Rating */}
//         <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-md bg-white px-3 py-2 shadow-md">
//           <Star
//             size={16}
//             fill="#F4C430"
//             stroke="#F4C430"
//           />
//           <span className="text-sm font-semibold">
//             {product.rating}
//           </span>
//         </div>

//         {!inStock && (
//           <span className="absolute inset-0 flex items-center justify-center bg-black/50 text-xl font-bold text-white backdrop-blur-sm">
//             SOLD OUT
//           </span>
//         )}
//       </div>

//       {/* CONTENT */}
//       <div className="space-y-4 p-5">

//         {/* Category */}
//         <span className="inline-flex rounded-md bg-[#572340] px-3 py-1 text-xs font-medium text-white">
//           {product.category}
//         </span>

//         {/* Name */}
//         <h2 className="line-clamp-2 min-h-[60px] text-xl font-bold uppercase leading-tight text-[#2d2d2d] transition duration-300 group-hover:text-[#8b183d]">
//           {product.name}
//         </h2>

//         {/* Description */}
//         <p className="line-clamp-2 min-h-[48px] text-[15px] leading-6 text-gray-500">
//           {product.shortDescription}
//         </p>

//         {/* Stock */}
//         <div className="text-sm font-semibold">
//           {product.stock === 0 ? (
//             <span className="text-[#8b183d]">
//               Sold Out
//             </span>
//           ) : product.stock <= 10 ? (
//             <span className="text-[#DE6239]">
//               Only {product.stock} Left
//             </span>
//           ) : (
//             <span className="text-[#3e5a2c]">
//               In Stock
//             </span>
//           )}
//         </div>

//         {/* Price */}
//         <div className="flex flex-wrap items-center gap-2">

//           <span className="text-3xl font-bold text-[#572340]">
//             ₹{product.salePrice}
//           </span>

//           <span className="text-lg text-gray-400 line-through">
//             ₹{product.mrp}
//           </span>

//           {discount > 0 && (
//             <span className="rounded bg-[#FFD633] px-2 py-1 text-xs font-bold text-black">
//               {discount}% OFF
//             </span>
//           )}

//         </div>

//         {/* Button */}
//         <button
//           disabled={!inStock}
//           onClick={(e) => e.preventDefault()}
//           className={`h-14 w-full rounded-xl border border-black text-base font-bold uppercase tracking-normal
//     ${inStock
//               ? "bg-pink-600 text-white shadow-[2px_3px_0px_#000] transition-all duration-200 hover:bg-[#572340] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_4px_0px_#000] active:translate-x-[1px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000]"
//               : "cursor-not-allowed bg-gray-300 text-white border-black shadow-[2px_3px_0px_#000]"
//             }`}
//         >
//           {inStock ? "QUICK ADD" : "SOLD OUT"}
//         </button>

//       </div>
//     </Link>
//   );
// };

// export default ProductCard;

// import { Link } from "react-router-dom";
// import { Heart, Star } from "lucide-react";

// const ProductCard = ({ product }) => {
//   const discount =
//     product.mrp && product.salePrice
//       ? Math.round(((product.mrp - product.salePrice) / product.mrp) * 100)
//       : 0;

//   const inStock = product.stock > 0;

//   return (
//     <Link
//       to={`/products/${product.slug}`}
//       className="group block overflow-hidden rounded-2xl border border-[#60391720] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-[28px]"
//     >
//       {/* IMAGE */}
//       <div className="relative aspect-square overflow-hidden bg-[#f9e4bf]/20">
//         {/* First Image */}
//         <img
//           src={product.images?.[0]}
//           alt={product.name}
//           className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
//             product.images?.[1]
//               ? "group-hover:scale-105 group-hover:opacity-0"
//               : "group-hover:scale-105"
//           }`}
//         />

//         {/* Second Image */}
//         {product.images?.[1] && (
//           <img
//             src={product.images[1]}
//             alt={product.name}
//             className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-700 group-hover:scale-100 group-hover:opacity-100"
//           />
//         )}

//         {/* Bestseller */}
//         {product.isBestSeller && (
//           <span className="absolute left-2 top-2 rounded bg-[#FFD633] px-2 py-1 text-[9px] font-bold uppercase text-black shadow sm:left-4 sm:top-4 sm:rounded-md sm:px-3 sm:text-xs">
//             Bestseller
//           </span>
//         )}

//         {/* Discount */}
//         {discount > 0 && (
//           <span className="absolute right-2 top-2 rounded bg-[#8b183d] px-2 py-1 text-[9px] font-bold text-white shadow sm:right-4 sm:top-4 sm:rounded-md sm:px-3 sm:text-xs">
//             {discount}% OFF
//           </span>
//         )}

//         {/* Wishlist */}
//         <button
//           type="button"
//           onClick={(e) => e.preventDefault()}
//           className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 hover:scale-110 sm:bottom-4 sm:right-4 sm:h-11 sm:w-11 sm:shadow-lg"
//         >
//           <Heart
//             size={15}
//             className="text-[#8b183d] sm:h-5 sm:w-5"
//             strokeWidth={2}
//           />
//         </button>

//         {/* Rating */}
//         <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded bg-white px-2 py-1 shadow-md sm:bottom-4 sm:left-4 sm:rounded-md sm:px-3 sm:py-2">
//           <Star
//             size={12}
//             fill="#F4C430"
//             stroke="#F4C430"
//             className="sm:h-4 sm:w-4"
//           />

//           <span className="text-[10px] font-semibold sm:text-sm">
//             {product.rating}
//           </span>
//         </div>

//         {/* Sold Out Overlay */}
//         {!inStock && (
//           <span className="absolute inset-0 flex items-center justify-center bg-black/50 text-sm font-bold text-white backdrop-blur-sm sm:text-xl">
//             SOLD OUT
//           </span>
//         )}
//       </div>

//       {/* CONTENT */}
//       <div className="space-y-2 p-2.5 sm:space-y-4 sm:p-5">
//         {/* Category */}
//         <span className="inline-flex max-w-full truncate rounded bg-[#572340] px-2 py-1 text-[9px] font-medium text-white sm:rounded-md sm:px-3 sm:text-xs">
//           {product.category}
//         </span>

//         {/* Name */}
//         <h2 className="line-clamp-2 min-h-[38px] text-sm font-bold uppercase leading-tight text-[#2d2d2d] transition duration-300 group-hover:text-[#8b183d] sm:min-h-[60px] sm:text-xl">
//           {product.name}
//         </h2>

//         {/* Description */}
//         <p className="line-clamp-2 min-h-[32px] text-[11px] leading-4 text-gray-500 sm:min-h-[48px] sm:text-[15px] sm:leading-6">
//           {product.shortDescription}
//         </p>

//         {/* Stock */}
//         <div className="text-[10px] font-semibold sm:text-sm">
//           {product.stock === 0 ? (
//             <span className="text-[#8b183d]">Sold Out</span>
//           ) : product.stock <= 10 ? (
//             <span className="text-[#DE6239]">
//               Only {product.stock} Left
//             </span>
//           ) : (
//             <span className="text-[#3e5a2c]">In Stock</span>
//           )}
//         </div>

//         {/* Price */}
//         <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
//           <span className="text-xl font-bold text-[#572340] sm:text-3xl">
//             ₹{product.salePrice}
//           </span>

//           <span className="text-xs text-gray-400 line-through sm:text-lg">
//             ₹{product.mrp}
//           </span>

//           {discount > 0 && (
//             <span className="rounded bg-[#FFD633] px-1.5 py-0.5 text-[8px] font-bold text-black sm:px-2 sm:py-1 sm:text-xs">
//               {discount}% OFF
//             </span>
//           )}
//         </div>

//         {/* Button */}
//         <button
//           type="button"
//           disabled={!inStock}
//           onClick={(e) => e.preventDefault()}
//           className={`h-10 w-full rounded-lg border border-black text-[11px] font-bold uppercase tracking-normal sm:h-14 sm:rounded-xl sm:text-base ${
//             inStock
//               ? "bg-pink-600 text-white shadow-[2px_3px_0px_#000] transition-all duration-200 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:bg-[#572340] hover:shadow-[3px_4px_0px_#000] active:translate-x-[1px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000]"
//               : "cursor-not-allowed border-black bg-gray-300 text-white shadow-[2px_3px_0px_#000]"
//           }`}
//         >
//           {inStock ? "QUICK ADD" : "SOLD OUT"}
//         </button>
//       </div>
//     </Link>
//   );
// };

// export default ProductCard; 


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
            text-[10px] font-bold uppercase leading-[1.15]
            text-[#2d2d2d] transition duration-300
            group-hover:text-[#8b183d]
            sm:min-h-[60px] sm:text-xl sm:leading-tight
          "
        >
          {product.name}
        </h2>

        {/* Description */}
        <p
          className="
            line-clamp-2 min-h-[24px]
            text-[8px] leading-[1.3] text-gray-500
            sm:min-h-[48px] sm:text-[15px] sm:leading-6
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
              sm:text-3xl
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