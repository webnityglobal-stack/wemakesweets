import { Minus, Plus, ShieldCheck, ShoppingBag, Truck } from "lucide-react";
import { useMemo, useState } from "react";

const ProductInfo = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants[0]
);
  const [qty, setQty] = useState(1);

  const discount = useMemo(() => {
    return Math.round(
      ((selectedVariant.mrp - selectedVariant.price) / selectedVariant.mrp) * 100
    );
  }, [product]);

  const inStock = selectedVariant.stock > 0;

  return (
    <div className="md:space-y-7 space-y-3">
      {/* Badge */}

      {product.isBestSeller && (
        <span className="inline-flex rounded-full  px-4 py-2 text-sm font-semibold hover:scale-105
                bg-pink-600
              hover:bg-[#60b396]
              text-white
              hover:text-white
              shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000]
              cursor-pointer ">
          Bestseller
        </span>
      )}

      {/* Product Name */}

      <div>
        <h1 className="md:text-4xl text-2xl font-bold text-[#08376c]">
          {product.name}
        </h1>

        <p className="mt-3 md:text-lg text-[15px] text-gray-600">
          {product.shortDescription}
        </p>
      </div>

      {/* Rating */}

      <div className="flex items-center gap-3">
        <div className="flex items-center rounded-full bg-[#2a4d25] pl-3 py-1 md:px-4 lg:px-4 lg:py-2 xl:px-4 xl:py-2 md:py-2 text-white   bg-pink-600
              hover:bg-[#60b396]
              text-white
              hover:text-white
              shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000]
              cursor-pointer">
          ⭐ {product.rating}
        </div>

        <span className="text-gray-500">
          Trusted by hundreds of happy customers
        </span>
      </div>

      {/* Price */}

      <div className=" w-fit rounded-3xl border border-[#810c2620] bg-[#f9e4bf]/20 p-3 md:p-6">

        <div className="flex flex-wrap items-center gap-4">

          <span className="text-4xl font-bold text-[#810c26]">
            ₹{selectedVariant.price } 
          </span>

          <span className="text-2xl text-gray-400 line-through">
            ₹{selectedVariant.mrp}
          </span>

          <span className="rounded-full bg-[#2a4d25] px-4 py-2 text-sm font-semibold text-white   bg-pink-600
              hover:bg-[#60b396]
              text-white
              hover:text-white
              shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000]
              cursor-pointer">
            {discount}% OFF
          </span>

        </div>

      </div>

{/* selected Weight */}
<div className="mt-6">
  <h4 className="mb-3 font-semibold text-[#08376c]">
    Select Weight
  </h4>

  <div className="flex gap-3 flex-wrap ">
    {product.variants.map((variant) => (
      <button
        key={variant._id}
        onClick={() => setSelectedVariant(variant)}
        className={`px-5 py-2 rounded-lg border font-medium transition   bg-pink-600
              hover:bg-[#60b396]
              text-black
              hover:text-white
              shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000]
              cursor-pointer  ${
          selectedVariant._id === variant._id
            ? "bg-pink-600 hover:bg-[#60b396]  text-white  hover:text-white shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000]  cursor-pointer "
            : "bg-white text-[#08376c] border-gray-300"
        }`}
      >
        {variant.title}
      </button>
    ))}
  </div>
</div>


      {/* Stock */}

      {inStock ? (
        <div className="font-semibold text-[#2a4d25]">
          ● In Stock ({selectedVariant.stock} Available)
        </div>
      ) : (
        <div className="font-semibold text-red-600">
          ● Currently Out Of Stock
        </div>
      )}

      {/* Quantity */}

      {inStock && (
        <div className="flex items-center gap-5">

          <span className="font-semibold text-[#08376c]">
            Quantity
          </span>

          <div className="flex items-center overflow-hidden rounded-xl border">

            <button
              onClick={() => setQty((prev) => Math.max(1, prev - 1))}
              className="bg-gray-100 p-3 transition hover:text-white bg-pink-600
              hover:bg-[#60b396]
              text-white
              hover:text-white
              cursor-pointer "
            >
              <Minus size={18} />
            </button>

            <div className="w-16 text-center font-bold">
              {qty}
            </div>

            <button
              onClick={() =>
                setQty((prev) =>
                  Math.min(selectedVariant.stock, prev + 1)
                )
              }
              className="bg-gray-100 p-3 transition hover:text-white   bg-pink-600
              hover:bg-[#60b396]
              text-white
              hover:text-white
              cursor-pointer"
            >
              <Plus size={18} />
            </button>

          </div>

        </div>
      )}

      {/* Buttons */}

      <div className="grid gap-4 sm:grid-cols-2">

        <button
          disabled={!inStock}
          className={`flex h-14 items-center justify-center gap-3 rounded-2xl text-lg font-semibold transition-all duration-300

          ${
            inStock
              ? "text-white hover:text-white bg-pink-600 hover:bg-[#60b396] hover:scale-105 shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000] cursor-pointer"
              : "cursor-not-allowed bg-gray-300 text-gray-500"
          }`}
        >
          <ShoppingBag size={20} />
          Add To Cart
        </button>

        <button
          disabled={!inStock}
          className={`flex h-14 items-center justify-center rounded-2xl text-lg font-semibold transition-all duration-300

          ${
            inStock
              ? "text-white hover:text-white bg-pink-600 hover:bg-[#60b396] hover:scale-105 shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000] cursor-pointer"
              : "cursor-not-allowed bg-gray-300 text-gray-400"
          }`}
        >
          Buy Now
        </button>

      </div>

      {/* Delivery */}

      <div className="space-y-2 md:space-y-4 rounded-3xl bg-[#f9e4bf]/20 p-2 md:p-6">

        <div className="flex items-center gap-3 text-[#552b12]">
          <Truck size={22} />
          <span>Free Delivery on Orders Above ₹499</span>
        </div>

        <div className="flex items-center gap-3 text-[#552b12]">
          <ShieldCheck size={22} />
          <span>100% Secure Payments</span>
        </div>

      </div>
    </div>
  );
};

export default ProductInfo;