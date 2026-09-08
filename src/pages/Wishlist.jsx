import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  ShoppingBag,
  Trash2,
  ArrowRight,
  PackageOpen,
} from "lucide-react";

import products from "../constants/productData";

const WISHLIST_KEY = "wms_wishlist";

const Wishlist = () => {
  const [wishlistIds, setWishlistIds] = useState([]);

  /* ============================================================
     LOAD WISHLIST
  ============================================================ */

  useEffect(() => {
    try {
      const savedWishlist = JSON.parse(
        localStorage.getItem(WISHLIST_KEY) || "[]"
      );

      setWishlistIds(savedWishlist);
    } catch (error) {
      console.error("Unable to load wishlist", error);
      setWishlistIds([]);
    }
  }, []);

  /* ============================================================
     LISTEN FOR WISHLIST UPDATES
  ============================================================ */

  useEffect(() => {
    const handleWishlistUpdate = () => {
      try {
        const savedWishlist = JSON.parse(
          localStorage.getItem(WISHLIST_KEY) || "[]"
        );

        setWishlistIds(savedWishlist);
      } catch (error) {
        console.error("Unable to update wishlist", error);
      }
    };

    window.addEventListener("wishlistUpdated", handleWishlistUpdate);

    return () => {
      window.removeEventListener(
        "wishlistUpdated",
        handleWishlistUpdate
      );
    };
  }, []);

  /* ============================================================
     GET PRODUCTS
  ============================================================ */

  const wishlistProducts = useMemo(() => {
    return products.filter((product) =>
      wishlistIds.includes(product._id)
    );
  }, [wishlistIds]);

  /* ============================================================
     REMOVE
  ============================================================ */

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlistIds.filter(
      (id) => id !== productId
    );

    localStorage.setItem(
      WISHLIST_KEY,
      JSON.stringify(updatedWishlist)
    );

    setWishlistIds(updatedWishlist);

    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  /* ============================================================
     CLEAR ALL
  ============================================================ */

  const clearWishlist = () => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify([]));

    setWishlistIds([]);

    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  return (
    <main className="md:min-h-screen bg-[#f5ebda]">

      {/* ========================================================
          HERO
      ======================================================== */}

      <section className="relative overflow-hidden border-b border-[#603917]/10 bg-[#f5ebda]">

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#8b183d]/5 blur-3xl" />

        <div className="absolute -bottom-24] -left-20 h-64 w-64 rounded-full bg-[#3e5a2c]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-5 sm:px-8 md:py-8 lg:px-12">

          <div className="flex items-center gap-3">

            <div className="flex h-4 w-4 md:h-11 md:w-11 items-center justify-center rounded-full bg-[#8b183d]/10">
              <Heart
                className="h-3 h-3 md:h-5 md:w-5 text-[#8b183d]"
                fill="currentColor"
              />
            </div>

            <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8b183d]">
              Your Favourites
            </p>

          </div>

          <h1 className="mt-4 font-cormorant text-2xl font-bold leading-none text-[#572340] sm:text-4xl">
            My Wishlist
          </h1>

          <p className="mt-4 max-w-xl font-manrope text-sm leading-7 text-[#603917]/65 sm:text-base">
            Keep the treats you love close. Your favourite sweets and
            snacks are saved here for whenever you're ready.
          </p>

        </div>
      </section>

      {/* ========================================================
          CONTENT
      ======================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-4 sm:px-8 md:py-8 lg:px-12">

        {wishlistProducts.length === 0 ? (

          /* ======================================================
             EMPTY STATE
          ====================================================== */

          <div className="rounded-3xl border border-[#603917]/10 bg-white px-6 py-6 text-center shadow-[0_8px_35px_rgba(96,57,23,0.04)]">

            <div className="mx-auto flex md:h-16 md:w-16 h-10 w-10 items-center justify-center rounded-full bg-[#8b183d]/10">

              <Heart
                className="md:h-6 md:w-6 h-5 w-5 text-[#8b183d]"
                strokeWidth={1.5}
              />

            </div>

            <h2 className="mt-6 font-cormorant text-xl md:text-4xl font-semibold text-[#572340]">
              Your Wishlist is Empty
            </h2>

            <p className="mx-auto mt-3 max-w-md font-manrope text-[10px] md:text-sm leading-6 text-[#603917]/55">
              Save your favourite products here and come back to them
              whenever you're ready to indulge.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-pink-600 px-6 py-3.5 font-manrope text-sm font-semibold text-white shadow-[2px_3px_0px_#000] transition-all hover:bg-[#60b396] hover:shadow-[3px_4px_0px_#000]"
            >
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>

        ) : (

          <>
            {/* ==================================================
                TOP BAR
            ================================================== */}

            <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="font-manrope text-xs text-[#603917]/50">
                  {wishlistProducts.length}{" "}
                  {wishlistProducts.length === 1
                    ? "product"
                    : "products"}{" "}
                  saved
                </p>
              </div>

              <button
                type="button"
                onClick={clearWishlist}
                className="inline-flex items-center gap-2 self-start rounded-full border border-[#603917]/15 bg-white px-4 py-2.5 font-manrope text-xs font-semibold text-[#603917]/70 transition-colors hover:border-[#8b183d]/30 hover:text-[#8b183d]"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Clear Wishlist
              </button>

            </div>

            {/* ==================================================
                PRODUCTS
            ================================================== */}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {wishlistProducts.map((product) => {

                const discount =
                  product.mrp > product.salePrice
                    ? Math.round(
                        ((product.mrp - product.salePrice) /
                          product.mrp) *
                          100
                      )
                    : 0;

                const isOutOfStock = product.stock <= 0;

                return (
                  <article
                    key={product._id}
                    className="group overflow-hidden rounded-3xl border border-[#603917]/10 bg-white shadow-[0_8px_35px_rgba(96,57,23,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(96,57,23,0.08)]"
                  >

                    {/* ================= IMAGE ================= */}

                    <div className="relative overflow-hidden bg-[#f9e4bf]/20">

                      <Link to={`/products/${product.slug}`}>
                        <div className="aspect-[1.15/1] overflow-hidden">

                          <img
                            src={product.images?.[0]}
                            alt={product.name}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />

                        </div>
                      </Link>

                      {/* Discount */}

                      {discount > 0 && (
                        <span className="absolute left-4 top-4 rounded-full bg-[#8b183d] px-3 py-1.5 font-manrope text-[10px] font-bold text-white">
                          {discount}% OFF
                        </span>
                      )}

                      {/* Stock */}

                      {isOutOfStock && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/25">

                          <span className="rounded-full bg-white px-4 py-2 font-manrope text-xs font-bold text-[#572340]">
                            SOLD OUT
                          </span>

                        </div>
                      )}

                      {/* Remove */}

                      <button
                        type="button"
                        onClick={() =>
                          removeFromWishlist(product._id)
                        }
                        aria-label={`Remove ${product.name} from wishlist`}
                        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#8b183d] shadow-sm transition-all hover:bg-[#8b183d] hover:text-white"
                      >
                        <Heart
                          className="h-4 w-4"
                          fill="currentColor"
                        />
                      </button>

                    </div>

                    {/* ================= DETAILS ================= */}

                    <div className="p-5">

                      <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8b183d]">
                        {product.category}
                      </p>

                      <Link
                        to={`/products/${product.slug}`}
                        className="block"
                      >
                        <h2 className="mt-1 font-cormorant text-2xl font-semibold leading-tight text-[#572340] transition-colors group-hover:text-[#8b183d]">
                          {product.name}
                        </h2>
                      </Link>

                      <p className="mt-2 line-clamp-2 font-manrope text-xs leading-5 text-[#603917]/55">
                        {product.shortDescription}
                      </p>

                      {/* Price */}

                      <div className="mt-4 flex items-end gap-2">

                        <span className="font-manrope text-lg font-bold text-[#572340]">
                          ₹{product.salePrice.toLocaleString("en-IN")}
                        </span>

                        {product.mrp > product.salePrice && (
                          <span className="font-manrope text-xs text-[#603917]/40 line-through">
                            ₹{product.mrp.toLocaleString("en-IN")}
                          </span>
                        )}

                      </div>

                      {/* Action */}

                      <div className="mt-5 flex gap-2">

                        <Link
                          to={`/products/${product.slug}`}
                          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-pink-600 px-4 py-3 font-manrope text-xs font-semibold text-white shadow-[2px_3px_0px_#000] transition-all hover:bg-[#60b396] hover:shadow-[3px_4px_0px_#000]"
                        >
                          <ShoppingBag className="h-3.5 w-3.5" />
                          {isOutOfStock
                            ? "View Product"
                            : "Add to Cart"}
                        </Link>

                        <button
                          type="button"
                          onClick={() =>
                            removeFromWishlist(product._id)
                          }
                          aria-label="Remove from wishlist"
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#603917]/15 bg-white text-[#603917]/60 transition-colors hover:border-[#8b183d]/30 hover:text-[#8b183d]"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>

                      </div>

                    </div>
                  </article>
                );
              })}

            </div>
          </>
        )}
      </section>

      {/* ========================================================
          BOTTOM TRUST STRIP
      ======================================================== */}

      <section className=" bg-[#f5ebda]">

        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[#603917]/10 px-5 py-3 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-12">

          <TrustItem
            icon={PackageOpen}
            title="Carefully Packed"
            text="Every order packed with care"
          />

          <TrustItem
            icon={ShoppingBag}
            title="Fresh & Premium"
            text="Quality ingredients, always"
          />

          <TrustItem
            icon={Heart}
            title="Made With Love"
            text="Good food, made better"
          />

        </div>

      </section>

    </main>
  );
};

/* ==============================================================
   TRUST ITEM
============================================================== */

const TrustItem = ({ icon: Icon, title, text }) => {
  return (
    <div className="flex items-center gap-4 px-3 py-5 sm:justify-center sm:px-6 sm:py-2 bg-[#fbf8f2] ">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
        <Icon className="h-4 w-4 text-[#8b183d]" />
      </div>

      <div>
        <h3 className="font-manrope text-xs font-bold text-[#572340]">
          {title}
        </h3>

        <p className="mt-1 font-manrope text-[10px] text-[#603917]/50">
          {text}
        </p>
      </div>

    </div>
  );
};

export default Wishlist;