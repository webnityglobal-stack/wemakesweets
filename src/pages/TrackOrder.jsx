import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  Clock3,
  Copy,
  MapPin,
  Package,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { useState } from "react";

import mockOrders from "../constants/mockOrders";

const trackingSteps = [
  {
    key: "Confirmed",
    title: "Order Confirmed",
    description: "Your order has been confirmed and payment received.",
    icon: CheckCircle2,
  },
  {
    key: "Packed",
    title: "Order Packed",
    description: "Your sweets have been carefully packed for shipping.",
    icon: Package,
  },
  {
    key: "Shipped",
    title: "Order Shipped",
    description: "Your order is on its way to your delivery address.",
    icon: Truck,
  },
  {
    key: "Out for Delivery",
    title: "Out for Delivery",
    description: "Your order is out for delivery and will arrive soon.",
    icon: MapPin,
  },
  {
    key: "Delivered",
    title: "Delivered",
    description: "Your order has been successfully delivered.",
    icon: CheckCircle2,
  },
];

const TrackOrder = () => {
  const { orderId } = useParams();
  const [copied, setCopied] = useState(false);

  const order = mockOrders.find((item) => item.orderId === orderId);

  if (!order) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fbf8f2] px-5">
        <div className="w-full max-w-lg rounded-3xl border border-[#603917]/10 bg-white px-6 py-16 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#8b183d]/10">
            <Package className="h-7 w-7 text-[#8b183d]" />
          </div>

          <h1 className="mt-5 font-cormorant text-4xl font-bold text-[#572340]">
            Order Not Found
          </h1>

          <p className="mt-3 font-manrope text-sm leading-6 text-[#603917]/60">
            We couldn't find the order you're looking for.
          </p>

          <Link
            to="/my-orders"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-pink-600 px-6 py-3 font-manrope text-sm font-semibold text-white shadow-[2px_3px_0px_#000] transition-all hover:bg-[#60b396] hover:shadow-[3px_4px_0px_#000]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to My Orders
          </Link>
        </div>
      </main>
    );
  }

  const currentStepIndex = trackingSteps.findIndex(
    (step) => step.key === order.status
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(order.trackingNumber);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.error("Unable to copy tracking number", error);
    }
  };

  return (
    <main className="min-h-screen bg-[#f5ebda]">

      {/* ================= HERO ================= */}
      <section className="border-b border-[#603917]/10 bg-[#f4eee3]">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8 md:py-7 lg:px-12">

          <Link
            to="/my-orders"
            className="inline-flex items-center gap-2 font-manrope text-xs font-semibold text-[#603917]/60 transition-colors hover:text-[#8b183d]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to My Orders
          </Link>

          <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8b183d]">
                Order Details
              </p>

              <h1 className="mt-2 font-cormorant text-2xl font-bold leading-none text-[#572340] sm:text-4xl">
                {order.orderId}
              </h1>

              <p className="mt-3 font-manrope text-sm text-[#603917]/60">
                Placed on {order.date}
              </p>
            </div>

            <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">
              <p className="font-manrope text-[10px] font-semibold uppercase tracking-wider text-[#603917]/45">
                Current Status
              </p>

              <p className="mt-1 font-manrope text-sm font-bold text-[#3e5a2c]">
                {order.status}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="mx-auto max-w-7xl px-5 py-6 sm:px-8 md:py-7 lg:px-12">

        <div className="grid gap-7 lg:grid-cols-[1.45fr_0.8fr]">

          {/* ================= LEFT ================= */}
          <div className="space-y-7">

            {/* Tracking */}
            <div className="rounded-3xl border border-[#603917]/10 bg-white p-5 shadow-[0_8px_35px_rgba(96,57,23,0.04)] sm:p-8">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                <div>
                  <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b183d]">
                    Track Your Order
                  </p>

                  <h2 className="mt-1 font-cormorant text-3xl font-semibold text-[#572340]">
                    Where is your order?
                  </h2>
                </div>

                <div className="rounded-2xl bg-[#f9f5ed] px-4 py-3 sm:text-right">
                  <p className="font-manrope text-[10px] uppercase tracking-wider text-[#603917]/45">
                    Expected Delivery
                  </p>

                  <p className="mt-1 font-manrope text-xs font-bold text-[#3e5a2c]">
                    {order.expectedDelivery}
                  </p>
                </div>
              </div>

              {/* Tracking number */}
              <div className="mt-7 flex flex-col gap-3 rounded-2xl border border-[#603917]/10 bg-[#fbf8f2] p-4 sm:flex-row sm:items-center sm:justify-between">

                <div className="min-w-0">
                  <p className="font-manrope text-[10px] font-semibold uppercase tracking-wider text-[#603917]/45">
                    Tracking Number
                  </p>

                  <p className="mt-1 truncate font-manrope text-sm font-bold text-[#572340]">
                    {order.trackingNumber}
                  </p>
                </div>

                <button
                  onClick={handleCopy}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[#603917]/15 bg-white px-4 py-2.5 font-manrope text-xs font-semibold text-[#603917] transition-all hover:border-[#8b183d]/40 hover:text-[#8b183d]"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      Copy
                    </>
                  )}
                </button>
              </div>

              {/* Timeline */}
              <div className="mt-9">

                {trackingSteps.map((step, index) => {
                  const isCompleted = index <= currentStepIndex;
                  const isCurrent = index === currentStepIndex;
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.key}
                      className="relative flex gap-4 sm:gap-5"
                    >

                      {/* Vertical line */}
                      {index !== trackingSteps.length - 1 && (
                        <div
                          className={`absolute left-[19px] top-10 h-[calc(100%-8px)] w-px ${
                            index < currentStepIndex
                              ? "bg-[#3e5a2c]"
                              : "bg-[#603917]/10"
                          }`}
                        />
                      )}

                      {/* Icon */}
                      <div
                        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 ${
                          isCompleted
                            ? "border-[#3e5a2c] bg-[#3e5a2c] text-white"
                            : "border-[#603917]/15 bg-white text-[#603917]/30"
                        } ${
                          isCurrent
                            ? "ring-4 ring-[#3e5a2c]/10"
                            : ""
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>

                      {/* Content */}
                      <div
                        className={`pb-9 ${
                          index === trackingSteps.length - 1
                            ? "pb-0"
                            : ""
                        }`}
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <h3
                            className={`font-manrope text-sm font-bold ${
                              isCompleted
                                ? "text-[#572340]"
                                : "text-[#603917]/35"
                            }`}
                          >
                            {step.title}
                          </h3>

                          {isCurrent && (
                            <span className="rounded-full bg-[#3e5a2c]/10 px-2 py-1 font-manrope text-[9px] font-bold uppercase tracking-wider text-[#3e5a2c]">
                              Current
                            </span>
                          )}
                        </div>

                        <p
                          className={`mt-1 max-w-lg font-manrope text-xs leading-6 ${
                            isCompleted
                              ? "text-[#603917]/60"
                              : "text-[#603917]/30"
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Items */}
            <div className="rounded-3xl border border-[#603917]/10 bg-white p-5 shadow-[0_8px_35px_rgba(96,57,23,0.04)] sm:p-8">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8b183d]/10">
                  <ShoppingBag className="h-4 w-4 text-[#8b183d]" />
                </div>

                <div>
                  <p className="font-manrope text-[10px] font-semibold uppercase tracking-wider text-[#603917]/45">
                    Your Purchase
                  </p>

                  <h2 className="font-cormorant text-3xl font-semibold text-[#572340]">
                    Order Items
                  </h2>
                </div>
              </div>

              <div className="mt-7 divide-y divide-[#603917]/10">

                {order.items.map((item) => (
                  <div
                    key={item._id}
                    className="flex gap-4 py-5 first:pt-0 last:pb-0"
                  >
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-[#f9e4bf]/30 sm:h-24 sm:w-24">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-cormorant text-xl font-semibold text-[#572340]">
                        {item.name}
                      </h3>

                      <p className="mt-1 font-manrope text-xs text-[#603917]/55">
                        Quantity: {item.quantity}
                      </p>

                      <p className="mt-2 font-manrope text-sm font-bold text-[#572340]">
                        ₹
                        {(item.salePrice * item.quantity).toLocaleString(
                          "en-IN"
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="rounded-3xl border border-[#603917]/10 bg-white p-5 shadow-[0_8px_35px_rgba(96,57,23,0.04)] sm:p-8">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#164984]/10">
                  <MapPin className="h-4 w-4 text-[#164984]" />
                </div>

                <div>
                  <p className="font-manrope text-[10px] font-semibold uppercase tracking-wider text-[#603917]/45">
                    Delivery Address
                  </p>

                  <h2 className="font-cormorant text-3xl font-semibold text-[#572340]">
                    Where we're delivering
                  </h2>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-[#f9f5ed] p-5">

                <p className="font-manrope text-sm font-bold text-[#572340]">
                  {order.address.name}
                </p>

                <p className="mt-2 max-w-lg font-manrope text-xs leading-6 text-[#603917]/60">
                  {order.address.address}
                  <br />
                  {order.address.city}, {order.address.state} -{" "}
                  {order.address.pincode}
                </p>

                <p className="mt-3 font-manrope text-xs text-[#603917]/55">
                  Phone: {order.address.phone}
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <aside className="space-y-7 lg:sticky lg:top-6 lg:self-start">

            {/* Summary */}
            <div className="rounded-3xl border border-[#603917]/10 bg-white p-5 shadow-[0_8px_35px_rgba(96,57,23,0.04)] sm:p-7">

              <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b183d]">
                Payment Summary
              </p>

              <h2 className="mt-1 font-cormorant text-3xl font-semibold text-[#572340]">
                Order Total
              </h2>

              <div className="mt-7 space-y-4">

                <div className="flex justify-between gap-4 font-manrope text-sm">
                  <span className="text-[#603917]/60">
                    Subtotal
                  </span>

                  <span className="font-semibold text-[#603917]">
                    ₹{order.subtotal.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between gap-4 font-manrope text-sm">
                  <span className="text-[#603917]/60">
                    Discount
                  </span>

                  <span className="font-semibold text-[#3e5a2c]">
                    -₹{order.discount.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between gap-4 font-manrope text-sm">
                  <span className="text-[#603917]/60">
                    Delivery
                  </span>

                  <span className="font-semibold text-[#603917]">
                    {order.delivery === 0
                      ? "FREE"
                      : `₹${order.delivery.toLocaleString("en-IN")}`}
                  </span>
                </div>

                <div className="border-t border-[#603917]/10 pt-5">
                  <div className="flex items-end justify-between gap-4">
                    <span className="font-manrope text-sm font-semibold text-[#603917]">
                      Total
                    </span>

                    <span className="font-manrope text-2xl font-bold text-[#572340]">
                      ₹{order.total.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-[#3e5a2c]/5 px-4 py-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#3e5a2c]" />

                  <div>
                    <p className="font-manrope text-xs font-bold text-[#3e5a2c]">
                      Payment Successful
                    </p>

                    <p className="mt-0.5 font-manrope text-[10px] text-[#3e5a2c]/65">
                      Paid via {order.paymentMethod}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Help */}
            <div className="rounded-3xl bg-[#572340] p-6 text-white sm:p-7">

              <Clock3 className="h-6 w-6 text-white/80" />

              <h3 className="mt-4 font-cormorant text-3xl font-semibold">
                Need help?
              </h3>

              <p className="mt-2 font-manrope text-xs leading-6 text-white/65">
                Have a question about your order? Our team is happy to help.
              </p>

              <Link
                to="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-pink-600 px-5 py-3 font-manrope text-xs font-semibold text-white shadow-[2px_3px_0px_#000] transition-all hover:bg-[#60b396] hover:shadow-[3px_4px_0px_#000]"
              >
                Contact Us
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default TrackOrder;