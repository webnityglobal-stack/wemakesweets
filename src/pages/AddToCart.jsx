import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  Truck,
  ShieldCheck,
  Loader2,
} from "lucide-react";
import useCart from "@/hooks/cart/useCart";
import {
  launchShiprocketCheckout,
  getShiprocketCheckoutToken,
} from "@/services/shiprocketCheckout";
import { authStorage } from "@/utils/authStorage";
import orderService from "@/services/orderService";
import paymentService from "@/services/paymentService";
import addressService from "@/services/addressService";

const AddToCart = () => {
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);



  // for add to cart and show cart api integration 
  const {
    cart,
    loading,
    error,
    refetch,
    removeCartItem,
    updateCartItem,
    clearCart,
    updatingItemId,
  } = useCart();

  const [isClearing, setIsClearing] = useState(false);

  const handleClearCart = async () => {
    if (!cartItems.length || isClearing) return;
    if (window.confirm("Are you sure you want to clear your cart?")) {
      setIsClearing(true);
      try {
        await clearCart();
      } finally {
        setIsClearing(false);
      }
    }
  };


  const increaseQuantity = (item) => {
    const product = item?.product;
    const isObject = product && typeof product === "object";
    const selectedVariant = isObject
      ? product?.variants?.find((v) => v._id === item?.variantId)
      : null;
    const maxStock = selectedVariant?.stock || (isObject ? product?.stock : 0) || 99;
    const nextQuantity = (Number(item?.quantity) || 1) + 1;

    if (nextQuantity > maxStock) {
      toast.warning(`Only ${maxStock} units available in stock.`);
      return;
    }

    updateCartItem(item._id, nextQuantity);
  };


  const decreaseQuantity = (item) => {
    const nextQuantity = (Number(item?.quantity) || 1) - 1;

    if (nextQuantity < 1) {
      return;
    }

    updateCartItem(item._id, nextQuantity);
  };


  const cartItems = Array.isArray(cart?.items) ? cart.items : [];




  if (loading) {
    return (
      <section className="min-h-screen bg-[#f5ebda] flex items-center justify-center">
        <p className="font-manrope text-gray-500">
          Loading cart...
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-[#f5ebda] flex items-center justify-center px-4">
        <div className="text-center">
          <p className="font-manrope text-[#8b183d] mb-4">
            {error}
          </p>
          <button
            type="button"
            onClick={() => refetch?.()}
            className="rounded-xl bg-pink-600 px-5 py-2 text-xs font-semibold uppercase text-white shadow-sm hover:bg-[#60b396] transition-all cursor-pointer font-manrope"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }




  // --------------------------------------------------
  // EMPTY CART
  // --------------------------------------------------
  if (!cartItems.length) {
    return (
      <section className="min-h-screen bg-[#f9f5ec] px-4 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto flex min-h-[65vh] max-w-5xl items-center justify-center">
          <div className="w-full max-w-xl rounded-[28px] border border-[#60391720] bg-[#f2ede1] px-6 py-12 text-center shadow-lg sm:px-12">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md">
              <ShoppingBag
                size={34}
                strokeWidth={1.7}
                className="text-[#8b183d]"
              />
            </div>

            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#8b183d] font-manrope">
              Your Cart
            </p>

            <h1 className="text-4xl font-bold text-[#2d2d2d] font-cormorant sm:text-5xl">
              Your cart is feeling light
            </h1>

            <p className="mx-auto mt-4 max-w-md text-sm font-normal leading-6 text-gray-500 font-manrope sm:text-base">
              Add some delicious treats and make your cart a little sweeter.
            </p>

            {!authStorage.isAuthenticated() && (
              <p className="mt-3 text-xs text-gray-500 font-manrope">
                Already have items saved?{" "}
                <Link
                  to="/login"
                  state={{ from: "/cart" }}
                  className="font-semibold text-[#8b183d] underline hover:text-[#572340]"
                >
                  Log in to your account
                </Link>
              </p>
            )}

            <Link
              to="/products"
              className="
                mt-8 inline-flex h-12 items-center justify-center gap-2
                rounded-xl px-7 text-sm font-semibold uppercase
                font-manrope
                bg-pink-600 hover:bg-[#60b396]
                text-white hover:text-white
                shadow-[2px_3px_0px_#000]
                hover:shadow-[3px_4px_0px_#000]
                transition-all duration-200
              "
            >
              Continue Shopping
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const subtotal = cartItems.reduce((total, item) => {
    const isObject = item?.product && typeof item.product === "object";
    const variant = isObject
      ? item.product?.variants?.find((v) => v._id === item?.variantId)
      : null;

    const mrp =
      variant?.mrp || (isObject ? item.product?.mrp : null) || item?.price || 0;

    return total + mrp * (Number(item?.quantity) || 1);
  }, 0);

  const saleTotal = cartItems.reduce((total, item) => {
    const isObject = item?.product && typeof item.product === "object";
    const variant = isObject
      ? item.product?.variants?.find((v) => v._id === item?.variantId)
      : null;

    const price =
      item?.price ||
      variant?.salePrice ||
      (isObject ? item.product?.salePrice || item.product?.price : 0) ||
      0;

    return total + price * (Number(item?.quantity) || 1);
  }, 0);

  const discount = Math.max(0, subtotal - saleTotal);

  const delivery =
    saleTotal === 0 ? 0 : saleTotal >= 350 ? 0 : 49;

  const total = saleTotal + delivery;

  const handleProceedToCheckout = async (e) => {
    if (!cartItems.length) {
      toast.error("Your cart is empty.");
      return;
    }

    // 1. User authentication check
    if (!authStorage.isAuthenticated()) {
      toast.info("Please login to proceed to checkout.");
      navigate("/login", { state: { from: "/cart" } });
      return;
    }

    setIsCheckingOut(true);
    const toastId = toast.loading("Initiating checkout session...");

    try {
      // 2. Resolve shipping address
      let shippingAddress = null;
      try {
        const addressRes = await addressService.getAddresses();
        const addresses = addressRes?.addresses || [];
        if (addresses.length > 0) {
          shippingAddress = addresses.find((a) => a.isDefault) || addresses[0];
        }
      } catch (addrErr) {
        console.warn("Could not fetch user addresses:", addrErr);
      }

      const user = authStorage.getUser() || {};
      const finalShippingAddress = {
        name: shippingAddress?.name || user?.name || "Valued Customer",
        phone: shippingAddress?.phone || user?.phone || "9999999999",
        email: shippingAddress?.email || user?.email || "",
        address: shippingAddress?.address || "Customer Address",
        address2: shippingAddress?.address2 || "",
        city: shippingAddress?.city || "Meerut",
        state: shippingAddress?.state || "Uttar Pradesh",
        pincode: shippingAddress?.pincode || "250002",
        country: shippingAddress?.country || "India",
      };

      // 3. Format items
      const validItems = cartItems.filter(
        (item) => item && (item.product?._id || item.productId || (typeof item.product === "string" && item.product))
      );

      if (!validItems.length) {
        toast.error("Please add valid items to your cart before proceeding.");
        return;
      }

      const items = validItems.map((item) => {
        const isObject = item.product && typeof item.product === "object";
        const selectedVariant = isObject
          ? item.product?.variants?.find(
              (v) => String(v._id) === String(item.variantId)
            )
          : null;

        const effectivePrice =
          selectedVariant?.salePrice ||
          (isObject ? item.product?.salePrice || item.product?.price : null) ||
          item.price ||
          0;

        return {
          product:
            item.product?._id ||
            item.productId ||
            (typeof item.product === "string" ? item.product : ""),
          variantId: item.variantId || item.variant?._id,
          quantity: Number(item.quantity) || 1,
          price: Number(effectivePrice),
        };
      });

      // 4. Create Order in backend to get orderId (e.g. WMS-...)
      toast.loading("Creating order...", { id: toastId });
      const orderRes = await orderService.createOrder({
        items,
        paymentMethod: "ONLINE",
        shippingAddress: finalShippingAddress,
        shippingCharge: delivery,
        subtotal: saleTotal,
        totalAmount: total,
      });

      const orderId = orderRes?.order?.orderId || orderRes?.order?.id;
      if (!orderId) {
        throw new Error(orderRes?.message || "Could not generate order ID");
      }

      // 5. Call POST /payment/create with orderId
      toast.loading("Getting FastRR checkout token...", { id: toastId });
      const paymentRes = await paymentService.createPayment(orderId);

      const checkoutToken =
        paymentRes?.checkoutToken ||
        paymentRes?.fastrrResponse?.result?.token;

      if (!checkoutToken) {
        throw new Error(
          paymentRes?.message || "Checkout token not returned from payment API"
        );
      }

      toast.success("Opening Shiprocket FastRR Checkout...", { id: toastId });

      // 6. Launch FastRR Headless Checkout with the fresh dynamic token!
      const launched = launchShiprocketCheckout(e, checkoutToken, {
        fallbackUrl: `${window.location.origin}/cart`,
        isInitiatedFromApp: false,
      });

      if (!launched) {
        toast.error("Could not launch checkout popup. Please try again.");
      }
    } catch (err) {
      console.error("Checkout initiation error:", err);
      const msg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Error initiating checkout";
      toast.error(msg, { id: toastId, duration: 5000 });
    } finally {
      setIsCheckingOut(false);
    }
  };


  return (
    <section className="min-h-screen bg-[#f5ebda] px-4 py-5 sm:px-8 sm:py-5  lg:px-16 lg:py-8">
      <div className="mx-auto max-w-7xl">
        {/* ==================================================
            HEADER
        ================================================== */}
        <div className="mb-6 text-center sm:mb-10">
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.25em] text-[#8b183d] font-manrope sm:text-xs">
            Your Sweet Selection
          </p>

          <h1 className="text-3xl font-bold leading-tight text-[#2d2d2d] font-cormorant sm:text-3xl lg:text-4xl">
            Your Shopping Cart
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm font-normal leading-6 text-gray-500 font-manrope sm:text-base">
            Sweetness selected just for you.
          </p>
        </div>

        {/* ==================================================
            MAIN GRID
        ================================================== */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1fr_380px] lg:items-start xl:grid-cols-[1fr_400px] xl:gap-10">
          {/* ==================================================
              LEFT — YOUR CART
          ================================================== */}
          <div>
            {/* Cart top bar */}
            <div className="mb-5 flex items-center justify-between gap-3 flex-wrap">
              <div>
                <h2 className="text-2xl font-semibold text-[#2d2d2d] font-cormorant sm:text-3xl">
                  Your Cart
                </h2>

                <p className="mt-0.5 text-xs font-normal text-gray-500 font-manrope sm:text-sm">
                  {cartItems.length}{" "}
                  {cartItems.length === 1 ? "product" : "products"} in your
                  cart
                </p>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={handleClearCart}
                  disabled={isClearing || !cartItems.length}
                  className="inline-flex items-center gap-1.5 rounded-full border border-red-300 bg-white hover:bg-red-50 text-red-600 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold font-manrope shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-50"
                  title="Clear all items from your cart"
                >
                  <Trash2 size={13} className="text-red-500" />
                  <span>{isClearing ? "Clearing..." : "Clear Cart"}</span>
                </button>

                <div className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm sm:flex">
                  <ShoppingBag size={15} className="text-[#8b183d]" />
                  <span className="text-xs font-medium text-[#603917] font-manrope">
                    {cartItems.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )}{" "}
                    Items
                  </span>
                </div>
              </div>
            </div>

            {/* ==================================================
                CART CARDS
            ================================================== */}
            <div className="space-y-5">
              {cartItems.map((item, index) => {
                const product = item?.product;
                const isObjectProduct = product && typeof product === "object";

                const selectedVariant = isObjectProduct
                  ? product?.variants?.find(
                      (variant) => variant._id === item.variantId
                    )
                  : null;

                const itemPrice =
                  item.price ||
                  selectedVariant?.salePrice ||
                  (isObjectProduct ? product?.salePrice || product?.price : 0) ||
                  0;

                const itemMrp =
                  selectedVariant?.mrp ||
                  (isObjectProduct ? product?.mrp : itemPrice) ||
                  itemPrice;

                const itemStock =
                  selectedVariant?.stock ||
                  (isObjectProduct ? product?.stock : 0) ||
                  0;

                const itemDiscount = Math.max(0, itemMrp - itemPrice);
                const itemKey =
                  item._id ||
                  (isObjectProduct && product._id
                    ? `${product._id}-${item.variantId || index}`
                    : `item-${index}`);

                const productName =
                  (isObjectProduct && product?.name) ||
                  item.productName ||
                  item.name ||
                  "Product";

                const productImage =
                  (isObjectProduct && Array.isArray(product?.images) && product.images[0]) ||
                  (isObjectProduct && typeof product?.image === "string" && product.image) ||
                  (typeof item?.image === "string" && item.image) ||
                  "/product1.webp";

                const isUnavailable = !isObjectProduct && !item.productName && !item.name;

                return (
                  <div
                    key={itemKey}
                    className="
                      group overflow-hidden rounded-2xl
                      border border-[#60391720]
                      bg-[#f2ede1]
                      shadow-sm
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:shadow-lg
                      sm:rounded-[24px]
                    "
                  >
                    <div className="flex flex-col p-3 sm:flex-row sm:p-5">
                      {/* IMAGE */}
                      <div className="relative h-52 w-full shrink-0 overflow-hidden rounded-xl bg-[#f9e4bf]/20 sm:h-44 sm:w-44 lg:h-48 lg:w-48">
                        <img
                          src={productImage}
                          alt={productName}
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          onError={(e) => {
                            if (!e.currentTarget.src.includes("/product1.webp")) {
                              e.currentTarget.src = "/product1.webp";
                            }
                          }}
                          className="
                            h-full w-full object-cover
                            transition-transform duration-500
                            group-hover:scale-105
                          "
                        />

                        {/* Bestseller */}
                        {isObjectProduct && product?.isBestSeller && (
                          <span
                            className="
                              absolute left-2 top-2
                              rounded-md px-2 py-1
                              text-[9px] uppercase
                              font-manrope font-medium
                              bg-pink-600
                              text-white
                              shadow-[1px_2px_0px_#000]
                            "
                          >
                            Bestseller
                          </span>
                        )}
                      </div>

                      {/* CONTENT */}
                      <div className="flex min-w-0 flex-1 flex-col px-1 pt-4 sm:px-5 sm:pt-0">
                        {/* Category / Variant title */}
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <span
                            className="
                              inline-flex max-w-fit rounded-md
                              px-2.5 py-1
                              text-[9px] font-medium uppercase
                              font-manrope
                              bg-pink-600 text-white
                              shadow-[1px_2px_0px_#000]
                              sm:text-[10px]
                            hover:bg-[#60b396] hover:text-white sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000]
                            "
                          >
                            {selectedVariant?.title || "Product"}
                          </span>

                          {/* Remove */}
                          <button
                            type="button"
                            onClick={() => removeCartItem(item._id || item.productId || item.product?._id)}
                            className="
                              flex h-8 w-8 shrink-0 items-center justify-center
                              rounded-full
                              hover:scale-110
                              text-white
                              transition-colors
                              hover:bg-[#60b396]
                              hover:text-white
                              bg-pink-600
                              cursor-pointer
                            "
                            aria-label={`Remove ${productName}`}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>

                        {/* Product Name */}
                        <h3 className="text-xl font-semibold leading-tight text-[#2d2d2d] font-manrope sm:text-2xl">
                          {productName}
                        </h3>

                        {isUnavailable && (
                          <p className="mt-1 text-xs text-red-600 font-manrope font-medium">
                            This item is no longer available. Please remove it from your cart.
                          </p>
                        )}

                        {/* Description */}
                        {isObjectProduct && product?.shortDescription && (
                          <p className="mt-1 line-clamp-2 text-xs font-normal leading-5 text-gray-500 font-manrope sm:text-sm">
                            {product.shortDescription}
                          </p>
                        )}

                        {/* PRICE */}
                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          {itemMrp > itemPrice && (
                            <span className="text-sm font-normal text-gray-400 line-through font-manrope">
                              ₹{itemMrp}
                            </span>
                          )}

                          <span className="text-base font-semibold text-[#572340] font-manrope">
                            ₹{itemPrice}
                          </span>

                          {itemDiscount > 0 && (
                            <span
                              className="
                                rounded-md px-2 py-1
                                text-[9px] font-medium
                                font-manrope
                                bg-pink-600 text-white
                                shadow-[1px_2px_0px_#000]
                                  hover:bg-[#60b396] hover:text-white sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000]
                              "
                            >
                              SAVE ₹{itemDiscount}
                            </span>
                          )}
                        </div>

                        {/* BOTTOM */}
                        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                          {/* Stock */}
                          <span className="hidden text-xs font-medium text-[#3e5a2c] font-manrope sm:block">
                            {isUnavailable ? "Unavailable" : "In Stock"}
                          </span>

                          {/* QUANTITY */}
                          <div
                            className="
                              ml-auto flex h-10 items-center
                              overflow-hidden rounded-lg
                              border border-[#60391730]
                              bg-white
                              shadow-sm
                            "
                          >
                            <button
                              type="button"
                              disabled={updatingItemId === item._id || isUnavailable}
                              onClick={() => decreaseQuantity(item)}
                              className="
                                flex h-full w-10 items-center justify-center
                                text-white
                                transition-colors
                                hover:bg-[#60b396]
                                hover:text-white
                                bg-pink-600
                                disabled:opacity-50
                                cursor-pointer
                              "
                            >
                              <Minus size={14} />
                            </button>

                            <span className="flex h-full min-w-10 items-center justify-center border-x border-[#60391720] text-sm font-semibold text-[#2d2d2d] font-manrope">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              disabled={
                                updatingItemId === item._id ||
                                isUnavailable ||
                                (itemStock > 0 && item.quantity >= itemStock)
                              }
                              onClick={() => increaseQuantity(item)}
                              className="
                                flex h-full w-10 items-center justify-center
                                text-white
                                transition-colors
                                hover:bg-[#60b396]
                                hover:text-white
                                bg-pink-600
                                disabled:opacity-50
                                cursor-pointer
                              "
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ITEM TOTAL */}
                    <div className="flex items-center justify-between border-t border-[#60391715] bg-white/40 px-4 py-3 sm:px-5">
                      <span className="text-[11px] font-medium uppercase tracking-wide text-gray-500 font-manrope">
                        Item Total
                      </span>

                      <span className="text-base font-semibold text-[#572340] font-manrope">
                        ₹{itemPrice * (Number(item.quantity) || 1)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CONTINUE SHOPPING */}
            <Link
              to="/products"
              className="
                mt-6 inline-flex items-center gap-2
                text-sm font-medium
                text-[#603917]
                font-manrope
                transition-colors duration-200
                hover:text-[#8b183d]
              "
            >
              <span className="text-lg">←</span>
              Continue Shopping
            </Link>
          </div>

          {/* ==================================================
              RIGHT — ORDER SUMMARY
          ================================================== */}
          <div className="lg:sticky lg:top-24">
            <div
              className="
                overflow-hidden rounded-2xl
                border border-[#60391725]
                bg-[#f2ede1]
                shadow-lg
                sm:rounded-[26px]
              "
            >
              {/* Summary Header */}
              <div className="border-b border-[#60391720] px-5 py-5 sm:px-7 sm:py-6">
                <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#8b183d] font-manrope">
                  Checkout
                </p>

                <h2 className="text-3xl font-semibold text-[#2d2d2d] font-cormorant sm:text-4xl">
                  Order Summary
                </h2>
              </div>

              {/* SUMMARY */}
              <div className="space-y-4 px-5 py-5 sm:px-7 sm:py-6">
                <div className="flex items-center justify-between text-sm font-manrope">
                  <span className="font-medium text-gray-500">Subtotal</span>
                  <span className="font-semibold text-[#2d2d2d]">
                    ₹{subtotal}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm font-manrope">
                  <span className="font-medium text-gray-500">Discount</span>
                  <span className="font-semibold text-[#3e5a2c]">
                    - ₹{discount}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm font-manrope">
                  <span className="font-medium text-gray-500">Delivery</span>

                  {delivery === 0 ? (
                    <span className="font-semibold text-[#3e5a2c]">
                      FREE
                    </span>
                  ) : (
                    <span className="font-semibold text-[#2d2d2d]">
                      ₹{delivery}
                    </span>
                  )}
                </div>

                {/* Divider */}
                <div className="border-t border-dashed border-[#60391735]" />

                {/* Total */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-base font-medium text-[#2d2d2d] font-manrope">
                      Total
                    </p>
                    <p className="mt-0.5 text-[10px] font-normal text-gray-400 font-manrope">
                      Inclusive of applicable taxes
                    </p>
                  </div>

                  <span className="text-2xl md:text-3xl font-bold text-[#572340] font-manrope">
                    ₹{total}
                  </span>
                </div>

                {/* CHECKOUT BUTTON */}
                <button
                  type="button"
                  onClick={handleProceedToCheckout}
                  disabled={isCheckingOut}
                  className={`
                    mt-2 flex h-13 w-full items-center justify-center gap-2
                    rounded-xl px-5
                    text-sm font-semibold uppercase tracking-wide
                    font-manrope
                    ${
                      isCheckingOut
                        ? "bg-gray-400 cursor-not-allowed text-white"
                        : "bg-pink-600 hover:bg-[#60b396] text-white shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000] hover:-translate-y-0.5 cursor-pointer"
                    }
                    transition-all duration-200
                  `}
                >
                  {isCheckingOut ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Initiating Checkout...
                    </>
                  ) : (
                    <>
                      Proceed to Checkout
                      <ArrowRight size={17} />
                    </>
                  )}
                </button>
              </div>

              {/* BENEFITS */}
              <div className="border-t border-[#60391720] bg-white/35 px-5 py-5 sm:px-7">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                      <Truck
                        size={17}
                        className="text-[#8b183d]"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-[#2d2d2d] font-manrope">
                        Free Delivery
                      </p>
                      <p className="text-[10px] font-normal text-gray-500 font-manrope">
                        On orders above ₹349
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                      <ShieldCheck
                        size={17}
                        className="text-[#3e5a2c]"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-[#2d2d2d] font-manrope">
                        Safe & Secure Checkout
                      </p>
                      <p className="text-[10px] font-normal text-gray-500 font-manrope">
                        Your information is protected
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SMALL NOTE */}
            <p className="mt-4 text-center text-[10px] font-normal leading-4 text-gray-400 font-manrope">
              A little sweetness goes a long way. Thank you for choosing
              We Make Sweets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddToCart;