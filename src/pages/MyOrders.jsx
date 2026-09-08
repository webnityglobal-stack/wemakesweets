import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Package,
  ChevronRight,
  CalendarDays,
  ShoppingBag,
  Truck,
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

import mockOrders from "../constants/mockOrders";

const statusConfig = {
  Confirmed: {
    icon: CheckCircle2,
    text: "Confirmed",
    className: "bg-[#3e5a2c]/10 text-[#3e5a2c]",
  },
  Packed: {
    icon: Package,
    text: "Packed",
    className: "bg-[#603917]/10 text-[#603917]",
  },
  Shipped: {
    icon: Truck,
    text: "Shipped",
    className: "bg-[#164984]/10 text-[#164984]",
  },
  "Out for Delivery": {
    icon: Truck,
    text: "Out for Delivery",
    className: "bg-[#DE6239]/10 text-[#DE6239]",
  },
  Delivered: {
    icon: CheckCircle2,
    text: "Delivered",
    className: "bg-[#3e5a2c]/10 text-[#3e5a2c]",
  },
  Cancelled: {
    icon: XCircle,
    text: "Cancelled",
    className: "bg-red-100 text-red-700",
  },
};

const MyOrders = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Confirmed",
    "Shipped",
    "Delivered",
    "Cancelled",
  ];

  const filteredOrders = useMemo(() => {
    if (activeFilter === "All") return mockOrders;

    return mockOrders.filter((order) => order.status === activeFilter);
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-[#f5ebda]">

      {/* ================= HEADER ================= */}
      <section className="relative overflow-hidden border-b border-[#603917]/10 bg-[#f4eee3]">
        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#8b183d]/5 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-52 w-52 rounded-full bg-[#3e5a2c]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-4 sm:px-8 md:py-5 lg:px-12">
          <div className="max-w-2xl">

            <p className="mb-3 font-manrope text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8b183d]">
              Your Account
            </p>

            <h1 className="font-cormorant text-3xl font-bold leading-[0.95] text-[#572340] sm:text-4xl">
              My Orders
            </h1>

            <p className="mt-3 max-w-xl font-manrope text-sm leading-7 text-[#603917]/70 sm:text-base">
              Keep track of your sweet moments, from the moment your order
              is confirmed until it reaches your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="mx-auto max-w-7xl px-5 py-5 sm:px-8 md:py-7 lg:px-12">

        {/* Filter */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 rounded-full border px-5 py-2.5 font-manrope text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "border-[#8b183d] bg-[#8b183d] text-white"
                    : "border-[#603 917]/15 bg-white text-[#603917] hover:border-[#8b183d]/40 hover:text-[#8b183d]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Orders */}
        {filteredOrders.length === 0 ? (
          <div className="rounded-3xl border border-[#603917]/10 bg-white px-6 py-20 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#8b183d]/10">
              <ShoppingBag className="h-7 w-7 text-[#8b183d]" />
            </div>

            <h2 className="mt-5 font-cormorant text-3xl font-semibold text-[#572340]">
              No Orders Found
            </h2>

            <p className="mx-auto mt-2 max-w-md font-manrope text-sm text-[#603917]/60">
              You don't have any orders in this category yet.
            </p>

            <Link
              to="/products"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-pink-600 px-6 py-3 font-manrope text-sm font-semibold text-white shadow-[2px_3px_0px_#000] transition-all hover:bg-[#60b396] hover:shadow-[3px_4px_0px_#000]"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">

            {filteredOrders.map((order) => {
              const status = statusConfig[order.status] || statusConfig.Confirmed;
              const StatusIcon = status.icon;

              const totalItems = order.items.reduce(
                (total, item) => total + item.quantity,
                0
              );

              return (
                <article
                  key={order.orderId}
                  className="overflow-hidden rounded-3xl border border-[#603917]/10 bg-white shadow-[0_8px_35px_rgba(96,57,23,0.04)]"
                >

                  {/* Order Header */}
                  <div className="border-b border-[#603917]/10 px-5 py-5 sm:px-7">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                      <div>
                        <div className="flex flex-wrap items-center gap-3">

                          <span className="font-manrope text-xs font-semibold uppercase tracking-[0.12em] text-[#603917]/50">
                            Order
                          </span>

                          <span className="font-manrope text-sm font-bold text-[#572340]">
                            #{order.orderId}
                          </span>

                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-manrope text-[11px] font-semibold ${status.className}`}
                          >
                            <StatusIcon className="h-3.5 w-3.5" />
                            {status.text}
                          </span>
                        </div>

                        <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-[#603917]/55">
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDays className="h-3.5 w-3.5" />
                            {order.date}
                          </span>

                          <span className="inline-flex items-center gap-1.5">
                            <ShoppingBag className="h-3.5 w-3.5" />
                            {totalItems}{" "}
                            {totalItems === 1 ? "item" : "items"}
                          </span>
                        </div>
                      </div>

                      <div className="md:text-right">
                        <p className="font-manrope text-[11px] uppercase tracking-wider text-[#603917]/45">
                          Order Total
                        </p>

                        <p className="mt-1 font-manrope text-xl font-bold text-[#572340]">
                          ₹{order.total.toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Products */}
                  <div className="px-5 py-6 sm:px-7">

                    <div className="space-y-4">
                      {order.items.map((item) => (
                        <div
                          key={item._id}
                          className="flex items-center gap-4"
                        >
                          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-[#f9e4bf]/30">
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

                            <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 font-manrope text-xs text-[#603917]/55">
                              <span>
                                Qty: {item.quantity}
                              </span>

                              <span>
                                ₹{item.salePrice.toLocaleString("en-IN")} each
                              </span>
                            </div>
                          </div>

                          <p className="hidden font-manrope text-sm font-bold text-[#572340] sm:block">
                            ₹
                            {(item.salePrice * item.quantity).toLocaleString(
                              "en-IN"
                            )}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Delivery */}
                    <div className="mt-6 rounded-2xl bg-[#f9f5ed] px-4 py-4 sm:px-5">
                      <div className="flex items-start gap-3">
                        <Truck className="mt-0.5 h-4 w-4 shrink-0 text-[#8b183d]" />

                        <div>
                          <p className="font-manrope text-xs font-semibold text-[#603917]">
                            Expected Delivery
                          </p>

                          <p className="mt-1 font-manrope text-xs text-[#603917]/60">
                            {order.expectedDelivery}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                      <p className="font-manrope text-xs text-[#603917]/50">
                        Paid via {order.paymentMethod}
                      </p>

                      <Link
                        to={`/orders/${order.orderId}`}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-pink-600 px-5 py-3 font-manrope text-xs font-semibold text-white shadow-[2px_3px_0px_#000] transition-all hover:bg-[#60b396] hover:shadow-[3px_4px_0px_#000]"
                      >
                        View Order
                        <ChevronRight className="h-4 w-4" />
                      </Link>

                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
};

export default MyOrders;