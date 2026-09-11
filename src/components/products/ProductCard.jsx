import { Link, useNavigate } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import useAddToCart from "../../hooks/cart/useAddToCart";
import useAddToWishlist from "../../hooks/wishlist/useAddToWishlist";
import useRemoveFromWishlist from "../../hooks/wishlist/useRemoveFromWishlist";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

const WISHLIST_KEY = "wms_wishlist";

const [isWishlisted, setIsWishlisted] = useState(false);

useEffect(() => {
  try {
    const savedWishlist = JSON.parse(
      localStorage.getItem(WISHLIST_KEY) || "[]"
    );

    setIsWishlisted(savedWishlist.includes(product._id));
  } catch (error) {
    console.error("Unable to load wishlist", error);
  }
}, [product._id]);

// for wishlist api integration
const { addToWishlist, loading: addLoading } = useAddToWishlist();
const { removeFromWishlist, loading: removeLoading } = useRemoveFromWishlist();
const wishlistLoading = addLoading || removeLoading;

const handleWishlistClick = async (e) => {
  e.preventDefault();
  e.stopPropagation();

  const variantId = product.variants?.[0]?._id;

  if (!variantId) {
    console.error("Variant ID is missing.");
    toast.error("Product variant not available.");
    return;
  }

  if (isWishlisted) {
    const result = await removeFromWishlist({
      productId: product._id,
      variantId,
      productName: product.name,
    });

    if (result.requiresAuth) {
      navigate("/login");
      return;
    }

    if (result.success) {
      setIsWishlisted(false);
      try {
        const savedWishlist = JSON.parse(
          localStorage.getItem(WISHLIST_KEY) || "[]"
        );
        const updated = savedWishlist.filter((id) => id !== product._id);
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(updated));
      } catch (err) {
        console.error("Unable to update local wishlist", err);
      }
    }
  } else {
    const result = await addToWishlist({
      productId: product._id,
      variantId,
      productName: product.name,
    });

    if (result.requiresAuth) {
      navigate("/login");
      return;
    }

    if (result.success) {
      setIsWishlisted(true);
      try {
        const savedWishlist = JSON.parse(
          localStorage.getItem(WISHLIST_KEY) || "[]"
        );
        if (!savedWishlist.includes(product._id)) {
          localStorage.setItem(
            WISHLIST_KEY,
            JSON.stringify([...savedWishlist, product._id])
          );
        }
      } catch (err) {
        console.error("Unable to update local wishlist", err);
      }
    }
  }
};


  const discount = product.mrp && product.salePrice
      ? Math.round(((product.mrp - product.salePrice) / product.mrp) * 100)
      : 0;

  const inStock = product.stock > 0;


// for add to cart api inegration 
const { addToCart, loading } = useAddToCart();
const handleQuickAdd = async (e) => {
  e.preventDefault();
  e.stopPropagation();

  if (!inStock) {
    toast.error("Sorry, this item is out of stock.");
    return;
  }

  const variantId = product.variants?.[0]?._id;

  if (!variantId) {
    console.error("Variant ID is missing.");
    toast.error("Product variant not available.");
    return;
  }

  const result = await addToCart({
    productId: product._id,
    variantId,
    quantity: 1,
    productName: product.name,
  });

  if (result.requiresAuth) {
    navigate("/login");
  }
};



  return (
   <Link
  to={`/products/${product._id}`}
      className="
        group block overflow-hidden rounded-lg border border-[#60391720] bg-[#f2ede1]
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        sm:rounded-[28px]
      "
    >
      {/* ================= IMAGE ================= */}
      <div className="relative aspect-square overflow-hidden bg-[#f9e4bf]/20 ">
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
              absolute left-1 top-1 rounded-sm
              px-1 py-0.5 text-[6px] uppercase 
              sm:left-4 sm:top-4 sm:rounded-md sm:px-3 sm:py-1 sm:text-xs font-manrope font-medium   bg-pink-600
              hover:bg-[#60b396]
              text-white
              hover:text-white
              shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000]
              cursor-pointer
            "
          >
            Bestseller
          </span>
        )}

        {/* Discount */}
        {discount > 0 && (
          <span
            className="
              absolute right-1 top-1 rounded-sm
              px-1.5 py-0.5 text-[6px] font-semibold font-manrope 
              sm:right-4 sm:top-4 sm:rounded-md sm:px-3 sm:py-1 sm:text-xs bg-pink-600
              hover:bg-[#60b396]
              text-white
              hover:text-white
              shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000]
              cursor-pointer
            "
          >
            {discount}% OFF
          </span>
        )}

        {/* Wishlist */}
        <button
          type="button"
          disabled={wishlistLoading}
          onClick={handleWishlistClick}
          aria-label={
            isWishlisted
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
          className="
            absolute bottom-1 right-1 hidden h-7 w-7 items-center justify-center
            rounded-full bg-white shadow-md transition-all duration-300
            hover:scale-110
            sm:flex sm:bottom-4 sm:right-4 sm:h-11 sm:w-11 sm:shadow-lg font-manrope font-semibold
          "
        >
          <Heart
            size={15}
            className="text-[#8b183d] sm:h-5 sm:w-5"
            strokeWidth={2}
            fill={isWishlisted ? "#8b183d" : "none"}

          />
        </button>

        {/* Rating */}
        <div
          className="
            absolute bottom-1 left-1 flex items-center gap-0.5
            rounded-sm px-1.5 py-0.5
            sm:bottom-4 sm:left-4 sm:gap-1 sm:rounded-md sm:px-3 sm:py-2 font-manrope font-medium   bg-pink-600
              hover:bg-[#60b396]
              text-white
              hover:text-white
              shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000]
              cursor-pointer
          "
        >
          <Star
            size={9}
            fill="#F4C430"
            stroke="#F4C430"
            className="sm:h-4 sm:w-4"
          />

          <span className="text-[7px] font-semibold font-manrope sm:text-sm">
            {product.rating}
          </span>
        </div>

        {/* Sold Out */}
        {!inStock && (
          <span
            className="
              absolute inset-0 flex items-center justify-center
              bg-black/50 text-[10px] fontmanope font-bold text-white backdrop-blur-sm
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
          sm:space-y-2 sm:p-5
        "
      >
        {/* Name */}
        <h2
          className="
            truncate whitespace-nowrap
            text-[10px] uppercase leading-[1.15] 
            text-[#2d2d2d] transition duration-300
            group-hover:text-[#8b183d]
            sm:min-h-[60px] sm:text-xl sm:leading-tight
            font-cormorant font-bold
            lg:text-[18px] lg:min-h-[4px]
            
          "
        >
          {product.name}
        </h2>

        {/* Stock */}
        <div className="hidden text-[10px] font-semibold font-manrope sm:block sm:text-sm">
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
              text-[15px] font-bold font-manrope text-[#572340]
              sm:text-3xl md:text-xl
            "
          >
            ₹{product.salePrice}
          </span>

          <span
            className="
              text-[8px] text-gray-400 line-through
              sm:text-lg font-manrope
            "
          >
            ₹{product.mrp}
          </span>

          {discount > 0 && (
            <span
              className="
                rounded-sm bg-[#FFD633]
                px-1 py-0.5 text-[6px] font-bold text-black font-manrope
                sm:rounded sm:px-2 sm:py-1 sm:text-xs    bg-pink-600
              hover:bg-[#60b396]
              text-white
              hover:text-white
              shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000]
              cursor-pointer
              "
            >
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Button */}
        <button
          type="button"
          disabled={!inStock || loading}
  onClick={handleQuickAdd}
          className={`
            h-7 w-full rounded-md
            text-[8px] font-bold uppercase tracking-normal
            sm:h-14 sm:rounded-xl sm:text-base
            font-manrope 
            ${
              inStock
                ? `
                  bg-pink-600 text-white
                  hover:text-white
                  shadow-[1px_2px_0px_#000]
                  transition-all duration-200
                  hover:scale-105
                  hover:bg-[#60b396]
                  hover:shadow-[3px_4px_0px_#000]
                  active:translate-x-[1px]
                  active:translate-y-[2px]
                  active:shadow-[1px_1px_0px_#000]
                  font-manrope
                  sm:bg-pink-600
                  sm:shadow-[2px_3px_0px_#000]
                  cursor-pointer
                `
                : `
                  cursor-not-allowed
                  bg-gray-300
                  text-white
                  hover:text-white
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