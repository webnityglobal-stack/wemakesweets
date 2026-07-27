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
    <div className="space-y-7">
      {/* Badge */}

      {product.isBestSeller && (
        <span className="inline-flex rounded-full bg-[#810c26] px-4 py-2 text-sm font-semibold text-white shadow-lg">
          Bestseller
        </span>
      )}

      {/* Product Name */}

      <div>
        <h1 className="text-4xl font-bold text-[#08376c]">
          {product.name}
        </h1>

        <p className="mt-3 text-lg leading-8 text-gray-600">
          {product.shortDescription}
        </p>
      </div>

      {/* Rating */}

      <div className="flex items-center gap-3">
        <div className="flex items-center rounded-full bg-[#2a4d25] px-4 py-2 text-white">
          ⭐ {product.rating}
        </div>

        <span className="text-gray-500">
          Trusted by hundreds of happy customers
        </span>
      </div>

      {/* Price */}

      <div className="rounded-3xl border border-[#810c2620] bg-[#f9e4bf]/20 p-6">

        <div className="flex flex-wrap items-center gap-4">

          <span className="text-4xl font-bold text-[#810c26]">
            ₹{selectedVariant.price }
          </span>

          <span className="text-2xl text-gray-400 line-through">
            ₹{selectedVariant.mrp}
          </span>

          <span className="rounded-full bg-[#2a4d25] px-4 py-2 text-sm font-semibold text-white">
            {discount}% OFF
          </span>

        </div>

      </div>

{/* selected Weight */}
<div className="mt-6">
  <h4 className="mb-3 font-semibold text-[#08376c]">
    Select Weight
  </h4>

  <div className="flex gap-3 flex-wrap">
    {product.variants.map((variant) => (
      <button
        key={variant._id}
        onClick={() => setSelectedVariant(variant)}
        className={`px-5 py-2 rounded-lg border font-medium transition ${
          selectedVariant._id === variant._id
            ? "bg-[#810c26] text-white border-[#810c26]"
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
              className="bg-gray-100 p-3 transition hover:bg-[#810c26] hover:text-white"
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
              className="bg-gray-100 p-3 transition hover:bg-[#810c26] hover:text-white"
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
          className={`flex h-14 items-center justify-center gap-3 rounded-2xl text-lg font-semibold transition

          ${
            inStock
              ? "bg-[#810c26] text-white hover:bg-[#6b0a20]"
              : "cursor-not-allowed bg-gray-300 text-gray-500"
          }`}
        >
          <ShoppingBag size={20} />
          Add To Cart
        </button>

        <button
          disabled={!inStock}
          className={`flex h-14 items-center justify-center rounded-2xl border-2 text-lg font-semibold transition

          ${
            inStock
              ? "border-[#08376c] text-[#08376c] hover:bg-[#08376c] hover:text-white"
              : "cursor-not-allowed border-gray-300 text-gray-400"
          }`}
        >
          Buy Now
        </button>

      </div>

      {/* Delivery */}

      <div className="space-y-4 rounded-3xl bg-[#f9e4bf]/20 p-6">

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