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
  CreditCard,
  Banknote,
} from "lucide-react";

import useCart from "@/hooks/cart/useCart";

import {
  launchShiprocketCheckout,
} from "@/services/shiprocketCheckout";

import { authStorage } from "@/utils/authStorage";
import orderService from "@/services/orderService";
import paymentService from "@/services/paymentService";
import addressService from "@/services/addressService";

const AddToCart = () => {
  const navigate = useNavigate();

  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // =====================================================
  // PAYMENT METHOD
  // =====================================================
  const [paymentMethod, setPaymentMethod] = useState("ONLINE");

  // =====================================================
  // CART
  // =====================================================
  const {
    cart,
    loading,
    error,
    removeCartItem,
    updateCartItem,
    updatingItemId,
  } = useCart();

  // =====================================================
  // INCREASE QUANTITY
  // =====================================================
  const increaseQuantity = (item) => {
    const selectedVariant = item.product?.variants?.find(
      (variant) => variant._id === item.variantId
    );

    const stock =
      selectedVariant?.stock ??
      item.product?.stock ??
      0;

    const nextQuantity = item.quantity + 1;

    if (nextQuantity > stock) {
      toast.warning(
        `Only ${stock} units available in stock.`
      );
      return;
    }

    updateCartItem(item._id, nextQuantity);
  };

  // =====================================================
  // DECREASE QUANTITY
  // =====================================================
  const decreaseQuantity = (item) => {
    const nextQuantity = item.quantity - 1;

    if (nextQuantity < 1) {
      return;
    }

    updateCartItem(item._id, nextQuantity);
  };

  const cartItems = cart?.items || [];

  // =====================================================
  // LOADING
  // =====================================================
  if (loading) {
    return (
      <section className="min-h-screen bg-[#f5ebda] flex items-center justify-center">
        <p className="font-manrope text-gray-500">
          Loading cart...
        </p>
      </section>
    );
  }

  // =====================================================
  // ERROR
  // =====================================================
  if (error) {
    return (
      <section className="min-h-screen bg-[#f5ebda] flex items-center justify-center px-4">
        <p className="font-manrope text-[#8b183d]">
          {error}
        </p>
      </section>
    );
  }

  // =====================================================
  // EMPTY CART
  // =====================================================
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

  // =====================================================
  // PRICE CALCULATIONS
  // =====================================================

  const subtotal = cartItems.reduce((total, item) => {
    const variant = item.product?.variants?.find(
      (v) => v._id === item.variantId
    );

    const mrp =
      variant?.mrp ||
      item.product?.mrp ||
      0;

    return total + mrp * item.quantity;
  }, 0);

  const saleTotal = cartItems.reduce(
    (total, item) =>
      total +
      (item.price || 0) *
        item.quantity,
    0
  );

  const discount = Math.max(
    subtotal - saleTotal,
    0
  );

  const delivery =
    saleTotal === 0
      ? 0
      : saleTotal >= 350
      ? 0
      : 49;

  const total =
    saleTotal + delivery;

  // =====================================================
  // CHECKOUT
  // =====================================================

  const handleProceedToCheckout = async (e) => {
    if (!cartItems.length) {
      toast.error(
        "Your cart is empty."
      );
      return;
    }

    // ===================================================
    // AUTH CHECK
    // ===================================================

    if (!authStorage.isAuthenticated()) {
      toast.info(
        "Please login to proceed to checkout."
      );

      navigate("/login", {
        state: {
          from: "/cart",
        },
      });

      return;
    }

    setIsCheckingOut(true);

    const toastId =
      toast.loading(
        "Preparing your order..."
      );

    try {
      // =================================================
      // 1. GET SHIPPING ADDRESS
      // =================================================

      let shippingAddress = null;

      try {
        const addressRes =
          await addressService.getAddresses();

        const addresses =
          addressRes?.addresses || [];

        if (addresses.length > 0) {
          shippingAddress =
            addresses.find(
              (a) => a.isDefault
            ) || addresses[0];
        }
      } catch (addrErr) {
        console.warn(
          "Could not fetch user addresses:",
          addrErr
        );
      }

      // =================================================
      // 2. USER
      // =================================================

      const user =
        authStorage.getUser() || {};

      // =================================================
      // IMPORTANT
      // Don't silently use fake shipping information
      // =================================================

      if (
        !shippingAddress &&
        !user?.phone
      ) {
        toast.error(
          "Please add a shipping address before placing your order.",
          {
            id: toastId,
          }
        );

        navigate("/addresses");

        return;
      }

      const finalShippingAddress = {
        name:
          shippingAddress?.name ||
          user?.name ||
          "",

        phone:
          shippingAddress?.phone ||
          user?.phone ||
          "",

        email:
          shippingAddress?.email ||
          user?.email ||
          "",

        address:
          shippingAddress?.address ||
          "",

        address2:
          shippingAddress?.address2 ||
          "",

        city:
          shippingAddress?.city ||
          "",

        state:
          shippingAddress?.state ||
          "",

        pincode:
          shippingAddress?.pincode ||
          "",

        country:
          shippingAddress?.country ||
          "India",
      };

      // =================================================
      // VALIDATE ADDRESS
      // =================================================

      const requiredAddressFields = [
        "name",
        "phone",
        "address",
        "city",
        "state",
        "pincode",
      ];

      for (const field of requiredAddressFields) {
        if (
          !finalShippingAddress[field]
        ) {
          toast.error(
            `Please complete your shipping address (${field}).`,
            {
              id: toastId,
            }
          );

          navigate("/addresses");

          return;
        }
      }

      // =================================================
      // 3. FORMAT ITEMS
      // =================================================

      const items = cartItems.map(
        (item) => ({
          product:
            item.product?._id ||
            item.productId,

          variantId:
            item.variantId ||
            item.variant?._id ||
            null,

          quantity:
            item.quantity,

          price:
            item.price ||
            item.product?.salePrice ||
            item.product?.price ||
            0,
        })
      );

      // =================================================
      // DEBUG
      // =================================================

      console.log(
        "===================================="
      );

      console.log(
        "CHECKOUT PAYMENT METHOD:",
        paymentMethod
      );

      console.log(
        "ORDER ITEMS:",
        items
      );

      console.log(
        "SHIPPING ADDRESS:",
        finalShippingAddress
      );

      console.log(
        "===================================="
      );

      // =================================================
      // 4. CREATE ORDER
      // =================================================

      toast.loading(
        "Creating order...",
        {
          id: toastId,
        }
      );

      const orderRes =
        await orderService.createOrder({
          items,

          // =============================================
          // THIS IS THE IMPORTANT FIX
          // =============================================
          paymentMethod,

          shippingAddress:
            finalShippingAddress,
        });

      console.log(
        "CREATE ORDER RESPONSE:",
        orderRes
      );

      const orderId =
        orderRes?.order?.orderId ||
        orderRes?.order?.id;

      if (!orderId) {
        throw new Error(
          orderRes?.message ||
            "Could not generate order ID"
        );
      }

      // =================================================
      // 5. COD FLOW
      // =================================================

      if (
        paymentMethod === "COD"
      ) {
        toast.success(
          "COD order placed successfully!",
          {
            id: toastId,
            duration: 4000,
          }
        );

        console.log(
          "COD ORDER CREATED:",
          orderRes
        );

        // -----------------------------------------------
        // Navigate to order confirmation/details
        // -----------------------------------------------

        navigate(
          `/orders/${orderId}`,
          {
            state: {
              orderPlaced: true,
              paymentMethod: "COD",
            },
          }
        );

        return;
      }

      // =================================================
      // 6. ONLINE PAYMENT FLOW
      // =================================================

      if (
        paymentMethod === "ONLINE"
      ) {
        toast.loading(
          "Getting FastRR checkout token...",
          {
            id: toastId,
          }
        );

        const paymentRes =
          await paymentService.createPayment(
            orderId
          );

        console.log(
          "PAYMENT RESPONSE:",
          paymentRes
        );

        const checkoutToken =
          paymentRes?.checkoutToken ||
          paymentRes?.fastrrResponse
            ?.result?.token;

        if (!checkoutToken) {
          throw new Error(
            paymentRes?.message ||
              "Checkout token not returned from payment API"
          );
        }

        toast.success(
          "Opening secure payment checkout...",
          {
            id: toastId,
          }
        );

        // ===============================================
        // FASTRR CHECKOUT
        // ===============================================

        const launched =
          launchShiprocketCheckout(
            e,
            checkoutToken,
            {
              fallbackUrl:
                `${window.location.origin}/cart`,

              isInitiatedFromApp:
                false,
            }
          );

        if (!launched) {
          throw new Error(
            "Could not launch payment checkout."
          );
        }

        return;
      }

      // =================================================
      // INVALID PAYMENT METHOD
      // =================================================

      throw new Error(
        "Invalid payment method."
      );

    } catch (err) {
      console.error(
        "Checkout initiation error:",
        err
      );

      const msg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Error initiating checkout";

      toast.error(
        msg,
        {
          id: toastId,
          duration: 5000,
        }
      );
    } finally {
      setIsCheckingOut(false);
    }
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <section className="min-h-screen bg-[#f5ebda] px-4 py-5 sm:px-8 sm:py-5 lg:px-16 lg:py-8">
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
              LEFT — CART
          ================================================== */}

          <div>

            {/* CART TOP BAR */}

            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-[#2d2d2d] font-cormorant sm:text-3xl">
                  Your Cart
                </h2>

                <p className="mt-0.5 text-xs font-normal text-gray-500 font-manrope sm:text-sm">
                  {cartItems.length}{" "}
                  {cartItems.length === 1
                    ? "product"
                    : "products"}{" "}
                  in your cart
                </p>
              </div>

              <div className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm sm:flex">
                <ShoppingBag
                  size={15}
                  className="text-[#8b183d]"
                />

                <span className="text-xs font-medium text-[#603917] font-manrope">
                  {cartItems.reduce(
                    (total, item) =>
                      total +
                      item.quantity,
                    0
                  )}{" "}
                  Items
                </span>
              </div>
            </div>

            {/* ==================================================
                CART CARDS
            ================================================== */}

            <div className="space-y-5">
              {cartItems.map(
                (item) => {
                  const product =
                    item.product;

                  const selectedVariant =
                    product?.variants?.find(
                      (variant) =>
                        variant._id ===
                        item.variantId
                    );

                  const itemPrice =
                    item.price ||
                    selectedVariant?.salePrice ||
                    product?.salePrice ||
                    0;

                  const itemMrp =
                    selectedVariant?.mrp ||
                    product?.mrp ||
                    0;

                  const itemStock =
                    selectedVariant?.stock ??
                    product?.stock ??
                    0;

                  const itemDiscount =
                    Math.max(
                      itemMrp -
                        itemPrice,
                      0
                    );

                  return (
                    <div
                      key={item._id}
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
                            src={
                              product.images?.[0] ||
                              "/product1.webp"
                            }
                            alt={
                              product.name
                            }
                            onError={(
                              e
                            ) => {
                              e.currentTarget.onerror =
                                null;

                              e.currentTarget.src =
                                "/product1.webp";
                            }}
                            className="
                              h-full w-full object-cover
                              transition-transform duration-500
                              group-hover:scale-105
                            "
                          />

                          {product.isBestSeller && (
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
                              "
                            >
                              {selectedVariant?.title ||
                                "Product"}
                            </span>

                            {/* REMOVE */}

                            <button
                              type="button"
                              onClick={() =>
                                removeCartItem(
                                  item._id
                                )
                              }
                              className="
                                flex h-8 w-8 shrink-0 items-center justify-center
                                rounded-full
                                hover:scale-110
                                text-white
                                transition-colors
                                hover:bg-[#60b396]
                                bg-pink-600
                              "
                              aria-label={`Remove ${product.name}`}
                            >
                              <Trash2
                                size={14}
                              />
                            </button>
                          </div>

                          {/* NAME */}

                          <h3 className="text-xl font-semibold leading-tight text-[#2d2d2d] font-manrope sm:text-2xl">
                            {product.name}
                          </h3>

                          {/* DESCRIPTION */}

                          <p className="mt-1 line-clamp-2 text-xs font-normal leading-5 text-gray-500 font-manrope sm:text-sm">
                            {
                              product.shortDescription
                            }
                          </p>

                          {/* PRICE */}

                          <div className="mt-3 flex flex-wrap items-center gap-2">

                            <span className="text-sm font-normal text-gray-400 line-through font-manrope">
                              ₹{itemMrp}
                            </span>

                            {itemDiscount >
                              0 && (
                              <span
                                className="
                                  rounded-md px-2 py-1
                                  text-[9px] font-medium
                                  font-manrope
                                  bg-pink-600 text-white
                                  shadow-[1px_2px_0px_#000]
                                "
                              >
                                SAVE ₹
                                {itemDiscount}
                              </span>
                            )}
                          </div>

                          {/* BOTTOM */}

                          <div className="mt-auto flex items-center justify-between gap-3 pt-4">

                            <span className="hidden text-xs font-medium text-[#3e5a2c] font-manrope sm:block">
                              {itemStock >
                              0
                                ? "In Stock"
                                : "Out of Stock"}
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
                                disabled={
                                  updatingItemId ===
                                  item._id
                                }
                                onClick={() =>
                                  decreaseQuantity(
                                    item
                                  )
                                }
                                className="
                                  flex h-full w-10 items-center justify-center
                                  text-white
                                  transition-colors
                                  hover:bg-[#60b396]
                                  bg-pink-600
                                "
                              >
                                <Minus
                                  size={14}
                                />
                              </button>

                              <span className="flex h-full min-w-10 items-center justify-center border-x border-[#60391720] text-sm font-semibold text-[#2d2d2d] font-manrope">
                                {
                                  item.quantity
                                }
                              </span>

                              <button
                                type="button"
                                disabled={
                                  updatingItemId ===
                                    item._id ||
                                  item.quantity >=
                                    itemStock
                                }
                                onClick={() =>
                                  increaseQuantity(
                                    item
                                  )
                                }
                                className="
                                  flex h-full w-10 items-center justify-center
                                  text-white
                                  transition-colors
                                  hover:bg-[#60b396]
                                  bg-pink-600
                                "
                              >
                                <Plus
                                  size={14}
                                />
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
                          ₹
                          {itemPrice *
                            item.quantity}
                        </span>
                      </div>
                    </div>
                  );
                }
              )}
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
              <span className="text-lg">
                ←
              </span>
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

              {/* HEADER */}

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
                  <span className="font-medium text-gray-500">
                    Subtotal
                  </span>

                  <span className="font-semibold text-[#2d2d2d]">
                    ₹{subtotal}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm font-manrope">
                  <span className="font-medium text-gray-500">
                    Discount
                  </span>

                  <span className="font-semibold text-[#3e5a2c]">
                    - ₹{discount}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm font-manrope">
                  <span className="font-medium text-gray-500">
                    Delivery
                  </span>

                  {delivery ===
                  0 ? (
                    <span className="font-semibold text-[#3e5a2c]">
                      FREE
                    </span>
                  ) : (
                    <span className="font-semibold text-[#2d2d2d]">
                      ₹{delivery}
                    </span>
                  )}
                </div>

                <div className="border-t border-dashed border-[#60391735]" />

                {/* TOTAL */}

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

                {/* =================================================
                    PAYMENT METHOD
                ================================================= */}

                <div className="pt-2">

                  <p className="mb-3 text-sm font-semibold text-[#2d2d2d] font-manrope">
                    Select Payment Method
                  </p>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                    {/* ONLINE */}

                    <button
                      type="button"
                      disabled={
                        isCheckingOut
                      }
                      onClick={() =>
                        setPaymentMethod(
                          "ONLINE"
                        )
                      }
                      className={`
                        flex items-center gap-3 rounded-xl border p-4 text-left transition-all
                        ${
                          paymentMethod ===
                          "ONLINE"
                            ? "border-pink-600 bg-pink-50 ring-2 ring-pink-200"
                            : "border-[#60391725] bg-white hover:border-pink-400"
                        }
                      `}
                    >
                      <div
                        className={`
                          flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                          ${
                            paymentMethod ===
                            "ONLINE"
                              ? "bg-pink-600 text-white"
                              : "bg-[#f5ebda] text-[#603917]"
                          }
                        `}
                      >
                        <CreditCard
                          size={18}
                        />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-[#2d2d2d] font-manrope">
                          Online Payment
                        </p>

                        <p className="text-[10px] text-gray-500 font-manrope">
                          UPI / Card / Net Banking
                        </p>
                      </div>
                    </button>

                    {/* COD */}

                    <button
                      type="button"
                      disabled={
                        isCheckingOut
                      }
                      onClick={() =>
                        setPaymentMethod(
                          "COD"
                        )
                      }
                      className={`
                        flex items-center gap-3 rounded-xl border p-4 text-left transition-all
                        ${
                          paymentMethod ===
                          "COD"
                            ? "border-pink-600 bg-pink-50 ring-2 ring-pink-200"
                            : "border-[#60391725] bg-white hover:border-pink-400"
                        }
                      `}
                    >
                      <div
                        className={`
                          flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                          ${
                            paymentMethod ===
                            "COD"
                              ? "bg-pink-600 text-white"
                              : "bg-[#f5ebda] text-[#603917]"
                          }
                        `}
                      >
                        <Banknote
                          size={18}
                        />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-[#2d2d2d] font-manrope">
                          Cash on Delivery
                        </p>

                        <p className="text-[10px] text-gray-500 font-manrope">
                          Pay when your order arrives
                        </p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* =================================================
                    CHECKOUT BUTTON
                ================================================= */}

                <button
                  type="button"
                  onClick={
                    handleProceedToCheckout
                  }
                  disabled={
                    isCheckingOut
                  }
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
                      <Loader2
                        size={18}
                        className="animate-spin"
                      />

                      Processing...
                    </>
                  ) : (
                    <>
                      {paymentMethod ===
                      "COD"
                        ? "Place COD Order"
                        : "Proceed to Payment"}

                      <ArrowRight
                        size={17}
                      />
                    </>
                  )}
                </button>
              </div>

              {/* =================================================
                  BENEFITS
              ================================================= */}

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

            {/* NOTE */}

            <p className="mt-4 text-center text-[10px] font-normal leading-4 text-gray-400 font-manrope">
              A little sweetness goes a long way.
              Thank you for choosing We Make Sweets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddToCart;