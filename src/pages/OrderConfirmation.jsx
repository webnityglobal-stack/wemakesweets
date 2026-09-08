import { Link, useLocation } from "react-router-dom";
import {
  Check,
  Package,
  Truck,
  MapPin,
  CreditCard,
  ShoppingBag,
  ArrowRight,
  CalendarDays,
  ChevronRight,
} from "lucide-react";

import products from "../constants/productData";

const OrderConfirmation = () => {
  const location = useLocation();

  /*
   * ------------------------------------------------------
   * TEMPORARY ORDER DATA
   * ------------------------------------------------------
   * Production me ye data backend / Shiprocket response
   * se aayega.
   *
   * location.state?.order ko baad me directly use kar
   * sakte hain.
   */

  const cartProducts = products
    .filter((product) => product.stock > 0)
    .slice(0, 2);

  const order = {
    orderId: "WMS-10001",
    orderDate: "02 September 2026",
    paymentStatus: "Paid",
    orderStatus: "Confirmed",

    customer: {
      name: "Customer Name",
      phone: "+91 98XXXXXX10",
      email: "customer@example.com",
    },

    address: {
      name: "Customer Name",
      address: "123, Your Street, Near Main Market",
      city: "Surat",
      state: "Gujarat",
      pincode: "395001",
      phone: "+91 98XXXXXX10",
    },

    items: cartProducts.map((product) => ({
      ...product,
      quantity: 1,
    })),

    subtotal: cartProducts.reduce(
      (total, product) => total + product.salePrice,
      0
    ),

    discount: cartProducts.reduce(
      (total, product) => total + (product.mrp - product.salePrice),
      0
    ),

    delivery: 49,

    expectedDelivery: "5 - 7 September 2026",
  };

  const total =
    order.subtotal + order.delivery;

  return (
    <section className="min-h-screen bg-[#f5ebda] px-4 py-7 sm:px-8 sm:py-7 lg:px-16 lg:py-10">
      <div className="mx-auto max-w-6xl">

        {/* =====================================================
            SUCCESS HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          {/* Success Icon */}

          <div
            className="
              mx-auto flex h-20 w-20 items-center justify-center
              rounded-full bg-[#3e5a2c]
              shadow-[3px_4px_0px_#000]
              sm:h-24 sm:w-24  bg-pink-600 hover:bg-[#60b396] text-white hover:text-white shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000]
            "
          >
            <Check
              size={42}
              strokeWidth={2.5}
              className="text-white sm:h-12 sm:w-12"
            />
          </div>

          <p
            className="
              mt-7 text-[10px] font-semibold uppercase
              tracking-[0.25em] text-[#8b183d]
              font-manrope sm:text-xs
            "
          >
            Payment Successful
          </p>

          <h1
            className="
              mt-2 text-4xl font-bold leading-tight
              text-[#2d2d2d] font-cormorant
              sm:text-5xl lg:text-6xl
            "
          >
            Your Order is Confirmed!
          </h1>

          <p
            className="
              mx-auto mt-3 max-w-xl
              text-sm leading-6 text-gray-500
              font-manrope sm:text-base
            "
          >
            Thank you for choosing We Make Sweets.
            Your order has been successfully placed
            and we're getting it ready for you.
          </p>
        </div>

        {/* =====================================================
            ORDER META
        ====================================================== */}

        <div
          className="
            mx-auto mt-8 flex max-w-4xl
            flex-col overflow-hidden rounded-2xl
            border border-[#60391720]
            bg-[#f2ede1]
            shadow-sm
            sm:flex-row
          "
        >

          {/* Order ID */}

          <div className="flex flex-1 items-center gap-3 px-5 py-4 sm:px-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
              <Package
                size={18}
                className="text-[#8b183d]"
              />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wide text-gray-400 font-manrope">
                Order Number
              </p>

              <p className="text-sm font-bold text-[#2d2d2d] font-manrope">
                #{order.orderId}
              </p>
            </div>
          </div>

          <div className="hidden w-px bg-[#60391720] sm:block" />

          {/* Date */}

          <div className="flex flex-1 items-center gap-3 border-t border-[#60391720] px-5 py-4 sm:border-t-0 sm:px-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
              <CalendarDays
                size={18}
                className="text-[#572340]"
              />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wide text-gray-400 font-manrope">
                Order Date
              </p>

              <p className="text-sm font-bold text-[#2d2d2d] font-manrope">
                {order.orderDate}
              </p>
            </div>
          </div>

          <div className="hidden w-px bg-[#60391720] sm:block" />

          {/* Payment */}

          <div className="flex flex-1 items-center gap-3 border-t border-[#60391720] px-5 py-4 sm:border-t-0 sm:px-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
              <CreditCard
                size={18}
                className="text-[#3e5a2c]"
              />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wide text-gray-400 font-manrope">
                Payment
              </p>

              <p className="text-sm font-bold text-[#3e5a2c] font-manrope">
                {order.paymentStatus}
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            ORDER STATUS
        ====================================================== */}

        <div
          className="
            mx-auto mt-7 max-w-4xl rounded-2xl
            border border-[#60391720]
            bg-[#f2ede1]
            p-5 shadow-sm
            sm:rounded-[24px] sm:p-7
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b183d] font-manrope">
                Order Status
              </p>

              <h2 className="mt-1 text-2xl font-bold text-[#2d2d2d] font-cormorant sm:text-3xl">
                We're preparing your sweetness
              </h2>
            </div>

            <span
              className="
                hidden rounded-md px-3 py-1.5
                text-[10px] font-bold uppercase
                font-manrope
                sm:block  bg-pink-600 hover:bg-[#60b396] text-white hover:text-white shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000]
              "
            >
              {order.orderStatus}
            </span>
          </div>

          {/* Progress */}

          <div className="mt-8 grid grid-cols-4 gap-2">

            {/* Confirmed */}

            <div className="relative text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#3e5a2c] text-white shadow-[1px_2px_0px_#000]">
                <Check size={17} />
              </div>

              <p className="mt-2 
               text-[9px] font-semibold text-[#2d2d2d] font-manrope sm:text-xs">
                Confirmed
              </p>

              <div className="absolute left-[65%] top-5 hidden h-0.5 w-full bg-[#3e5a2c] sm:block" />
            </div>

            {/* Packed */}

            <div className="relative text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#60391725] bg-white text-gray-400">
                <Package size={17} />
              </div>

              <p className="mt-2 text-[9px] font-medium text-gray-400 font-manrope sm:text-xs">
                Packed
              </p>

              <div className="absolute left-[65%] top-5 hidden h-0.5 w-full bg-[#60391720] sm:block" />
            </div>

            {/* Shipped */}

            <div className="relative text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#60391725] bg-white text-gray-400">
                <Truck size={17} />
              </div>

              <p className="mt-2 text-[9px] font-medium text-gray-400 font-manrope sm:text-xs">
                Shipped
              </p>

              <div className="absolute left-[65%] top-5 hidden h-0.5 w-full bg-[#60391720] sm:block" />
            </div>

            {/* Delivered */}

            <div className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#60391725] bg-white text-gray-400">
                <Check size={17} />
              </div>

              <p className="mt-2 text-[9px] font-medium text-gray-400 font-manrope sm:text-xs">
                Delivered
              </p>
            </div>

          </div>

          {/* Expected Delivery */}

          <div className="mt-7 flex items-center gap-3 rounded-xl bg-white/60 p-4">
            <Truck
              size={20}
              className="shrink-0 text-[#8b183d]"
            />

            <div>
              <p className="text-[10px] uppercase tracking-wide text-gray-400 font-manrope">
                Expected Delivery
              </p>

              <p className="text-sm font-bold text-[#2d2d2d] font-manrope">
                {order.expectedDelivery}
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            ORDER DETAILS GRID
        ====================================================== */}

        <div className="mx-auto mt-7 grid max-w-4xl grid-cols-1 gap-7 lg:grid-cols-[1fr_330px]">

          {/* ===================================================
              ITEMS
          ==================================================== */}

          <div
            className="
              overflow-hidden rounded-2xl
              border border-[#60391720]
              bg-[#f2ede1]
              shadow-sm
              sm:rounded-[24px]
            "
          >
            <div className="border-b border-[#60391720] px-5 py-5 sm:px-6">
              <div className="flex items-center gap-2">
                <ShoppingBag
                  size={18}
                  className="text-[#8b183d]"
                />

                <h2 className="text-2xl font-bold text-[#2d2d2d] font-cormorant sm:text-3xl">
                  Your Items
                </h2>
              </div>
            </div>

            <div className="divide-y divide-[#60391715]">
              {order.items.map((product) => (
                <div
                  key={product._id}
                  className="flex gap-4 p-4 sm:p-5"
                >
                  {/* Image */}

                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-[#f9e4bf]/20 sm:h-28 sm:w-28">
                    <img
                      src={product.images?.[0]}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Info */}

                  <div className="min-w-0 flex-1">
                    <span
                      className="
                        inline-flex rounded-md px-2 py-1
                        text-[8px] font-semibold uppercase
                        font-manrope
                         bg-pink-600 hover:bg-[#60b396] text-white hover:text-white shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000]
                      "
                    >
                      {product.category}
                    </span>

                    <h3 className="mt-2 truncate text-xl font-bold text-[#2d2d2d] font-cormorant sm:text-2xl">
                      {product.name}
                    </h3>

                    <p className="mt-0.5 line-clamp-1 text-[11px] text-gray-500 font-manrope sm:text-xs">
                      {product.shortDescription}
                    </p>

                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-manrope">
                        Qty: {product.quantity}
                      </span>

                      <span className="text-base font-bold text-[#572340] font-manrope">
                        ₹{product.salePrice * product.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===================================================
              RIGHT DETAILS
          ==================================================== */}

          <div className="space-y-7">

            {/* Address */}

            <div
              className="
                rounded-2xl border border-[#60391720]
                bg-[#f2ede1] p-5 shadow-sm
                sm:rounded-[24px] sm:p-6
              "
            >
              <div className="flex items-center gap-2">
                <MapPin
                  size={18}
                  className="text-[#8b183d]"
                />

                <h2 className="text-2xl font-bold text-[#2d2d2d] font-cormorant">
                  Delivery Address
                </h2>
              </div>

              <div className="mt-4 text-xs leading-6 text-gray-500 font-manrope">
                <p className="font-semibold text-[#2d2d2d]">
                  {order.address.name}
                </p>

                <p>{order.address.address}</p>

                <p>
                  {order.address.city}, {order.address.state}
                </p>

                <p>{order.address.pincode}</p>

                <p className="mt-1">
                  {order.address.phone}
                </p>
              </div>
            </div>

            {/* Payment Summary */}

            <div
              className="
                rounded-2xl border border-[#60391720]
                bg-[#f2ede1] p-5 shadow-sm
                sm:rounded-[24px] sm:p-6
              "
            >
              <h2 className="text-2xl font-bold text-[#2d2d2d] font-cormorant">
                Payment Summary
              </h2>

              <div className="mt-5 space-y-3">

                <div className="flex justify-between text-xs font-manrope">
                  <span className="text-gray-500">
                    Subtotal
                  </span>

                  <span className="font-semibold">
                    ₹{order.subtotal}
                  </span>
                </div>

                <div className="flex justify-between text-xs font-manrope">
                  <span className="text-gray-500">
                    Discount
                  </span>

                  <span className="font-semibold text-[#3e5a2c]">
                    - ₹{order.discount}
                  </span>
                </div>

                <div className="flex justify-between text-xs font-manrope">
                  <span className="text-gray-500">
                    Delivery
                  </span>

                  <span className="font-semibold">
                    ₹{order.delivery}
                  </span>
                </div>

                <div className="border-t border-dashed border-[#60391730]" />

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#2d2d2d] font-manrope">
                    Total Paid
                  </span>

                  <span className="text-2xl font-bold text-[#572340] font-manrope">
                    ₹{total}
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2 rounded-lg bg-[#3e5a2c]/10 px-3 py-2">
                  <Check
                    size={14}
                    className="text-[#3e5a2c]"
                  />

                  <span className="text-[10px] font-semibold text-[#3e5a2c] font-manrope">
                    Payment received successfully
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            ACTIONS
        ====================================================== */}

        <div className="mx-auto mt-9 flex max-w-4xl flex-col-reverse gap-4 sm:flex-row sm:justify-center">

          <Link
            to="/products"
            className="
              flex h-12 items-center justify-center gap-2
              rounded-xl px-7
              text-sm font-semibold uppercase
              font-manrope
              border border-[#60391735]
              transition-all duration-200
              sm:h-13
               bg-pink-600 hover:bg-[#60b396] text-white hover:text-white shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000]
            "
          >
            Continue Shopping
          </Link>

          <Link
            to={`/orders/${order.orderId}`}
            className="
              flex h-12 items-center justify-center gap-2
              rounded-xl px-7
              text-sm font-semibold uppercase
              font-manrope
              bg-pink-600 hover:bg-[#60b396]
              text-white hover:text-white
              shadow-[2px_3px_0px_#000]
              hover:shadow-[3px_4px_0px_#000]
              transition-all duration-200
              sm:h-13
            "
          >
            Track My Order
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* =====================================================
            FOOTER MESSAGE
        ====================================================== */}

        <div className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-xs leading-5 text-gray-700 font-manrope">
            We'll keep you updated at every step of your
            order journey through WhatsApp and email.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OrderConfirmation;