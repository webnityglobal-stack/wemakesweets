import { Minus, Plus, ShieldCheck, ShoppingBag, Truck } from "lucide-react";
import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAddToCart from "../../../hooks/cart/useAddToCart";

const ProductInfo = ({ product }) => {
  const navigate = useNavigate();

  const variants = useMemo(() => {
    return Array.isArray(product?.variants) && product.variants.length > 0
      ? product.variants
      : [];
  }, [product?.variants]);

  const [selectedVariant, setSelectedVariant] = useState(
    variants[0] || null
  );
  const [qty, setQty] = useState(1);

  // Sync selected variant when product or variants change
  useEffect(() => {
    if (variants.length > 0) {
      setSelectedVariant((prev) => {
        const match = prev ? variants.find((v) => v._id === prev._id) : null;
        return match || variants[0];
      });
    } else {
      setSelectedVariant(null);
    }
    setQty(1);
  }, [variants]);

  // Robust price, MRP, and stock calculation (Variant first, fallback to product root)
  const currentSalePrice = selectedVariant?.salePrice ?? product?.salePrice ?? 0;
  const currentMrp = selectedVariant?.mrp ?? product?.mrp ?? 0;
  const currentStock = selectedVariant?.stock ?? product?.stock ?? 0;
  const inStock = currentStock > 0;

  const discount = useMemo(() => {
    if (!currentMrp || !currentSalePrice || currentMrp <= currentSalePrice) {
      return 0;
    }
    return Math.round(((currentMrp - currentSalePrice) / currentMrp) * 100);
  }, [currentMrp, currentSalePrice]);

  // for add to cart api integration
  const { addToCart, loading, error } = useAddToCart();

  const handleAddToCart = async () => {
    if (!inStock) {
      return;
    }

    const prodId = product?._id || product?.id;
    if (!prodId) return;

    const variantId = selectedVariant?._id || variants[0]?._id;
    const variantTitle = selectedVariant?.title ? ` (${selectedVariant.title})` : "";

    const result = await addToCart({
      productId: prodId,
      variantId,
      quantity: qty,
      productName: `${product?.name || "Product"}${variantTitle}`,
    });

    if (result.requiresAuth) {
      navigate("/login");
    }
  };

  const handleBuyNow = async () => {
    if (!inStock) {
      return;
    }

    const prodId = product?._id || product?.id;
    if (!prodId) return;

    const variantId = selectedVariant?._id || variants[0]?._id;
    const variantTitle = selectedVariant?.title ? ` (${selectedVariant.title})` : "";

    const result = await addToCart({
      productId: prodId,
      variantId,
      quantity: qty,
      productName: `${product?.name || "Product"}${variantTitle}`,
    });

    if (result.success) {
      navigate("/cart");
    } else if (result.requiresAuth) {
      navigate("/login");
    }
  };

  const isBestseller = Boolean(product?.isBestSeller ?? product?.isBestseller);

  return (
    <div className="md:space-y-7 space-y-3">
      {/* Badge */}
      {isBestseller && (
        <span
          className="inline-flex rounded-full px-4 py-2 text-sm font-semibold hover:scale-105
            bg-pink-600 hover:bg-[#60b396] text-white shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000]
            cursor-pointer"
        >
          Bestseller
        </span>
      )}

      {/* Product Name */}
      <div>
        <h1 className="md:text-4xl text-2xl font-bold text-[#08376c]">
          {product?.name}
        </h1>

        <p className="mt-3 md:text-lg text-[15px] text-gray-600">
          {product?.shortDescription}
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        <div className="shrink-0 whitespace-nowrap inline-flex items-center justify-center gap-1 rounded-full px-3.5 py-1 md:px-4 md:py-2 text-sm md:text-base font-semibold text-white bg-pink-600 hover:bg-[#60b396] shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000] cursor-pointer">
          ⭐ {product?.rating ?? "4.5"}
        </div>

        <span className="text-xs sm:text-sm md:text-base text-gray-500">
          Trusted by hundreds of happy customers
        </span>
      </div>

      {/* Price */}
      <div className="w-fit rounded-3xl border border-[#810c2620] bg-[#f9e4bf]/20 p-3 md:p-6">
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-4xl font-bold text-[#810c26]">
            ₹{currentSalePrice}
          </span>

          {currentMrp > 0 && (
            <span className="text-2xl text-gray-400 line-through">
              ₹{currentMrp}
            </span>
          )}

          {discount > 0 && (
            <span
              className="rounded-full px-4 py-2 text-sm font-semibold text-white bg-pink-600
                hover:bg-[#60b396] shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000]
                cursor-pointer"
            >
              {discount}% OFF
            </span>
          )}
        </div>
      </div>

      {/* Selected Weight (Variants) */}
      {variants.length > 0 && (
        <div className="mt-6">
          <h4 className="mb-3 font-semibold text-[#08376c]">
            Select Weight
          </h4>

          <div className="flex gap-3 flex-wrap">
            {variants.map((variant) => {
              const isSelected = selectedVariant?._id === variant._id;
              return (
                <button
                  key={variant._id}
                  type="button"
                  onClick={() => {
                    setSelectedVariant(variant);
                    setQty(1);
                  }}
                  className={`px-5 py-2 rounded-lg border font-medium transition cursor-pointer ${
                    isSelected
                      ? "bg-pink-600 hover:bg-[#60b396] text-white shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000]"
                      : "bg-white text-[#08376c] border-gray-300 hover:border-pink-600 hover:bg-gray-50"
                  }`}
                >
                  {variant.title}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Stock */}
      {inStock ? (
        <div className="font-semibold text-[#2a4d25]">
          ● In Stock ({currentStock} Available)
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
              type="button"
              onClick={() => setQty((prev) => Math.max(1, prev - 1))}
              className="p-3 transition bg-pink-600 hover:bg-[#60b396] text-white cursor-pointer"
            >
              <Minus size={18} />
            </button>

            <div className="w-16 text-center font-bold">
              {qty}
            </div>

            <button
              type="button"
              onClick={() =>
                setQty((prev) =>
                  Math.min(currentStock, prev + 1)
                )
              }
              className="p-3 transition bg-pink-600 hover:bg-[#60b396] text-white cursor-pointer"
            >
              <Plus size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="grid gap-4 sm:grid-cols-2">
        <button
          type="button"
          disabled={!inStock || loading}
          onClick={handleAddToCart}
          className={`flex h-14 items-center justify-center gap-3 rounded-2xl text-lg font-semibold transition-all duration-300 ${
            inStock
              ? "text-white bg-pink-600 hover:bg-[#60b396] hover:scale-105 shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000] cursor-pointer"
              : "cursor-not-allowed bg-gray-300 text-gray-500"
          }`}
        >
          <ShoppingBag size={20} />
          {loading ? "Adding..." : "Add To Cart"}
        </button>

        <button
          type="button"
          disabled={!inStock || loading}
          onClick={handleBuyNow}
          className={`flex h-14 items-center justify-center rounded-2xl text-lg font-semibold transition-all duration-300 ${
            inStock
              ? "text-white bg-pink-600 hover:bg-[#60b396] hover:scale-105 shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000] cursor-pointer"
              : "cursor-not-allowed bg-gray-300 text-gray-400"
          }`}
        >
          Buy Now
        </button>
      </div>

      {error && (
        <p className="mt-2 font-manrope text-sm text-[#8b183d]">
          {error}
        </p>
      )}

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