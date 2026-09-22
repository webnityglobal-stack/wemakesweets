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
  MapPin,
  CreditCard,
  ExternalLink,
  Loader2,
  AlertCircle,
  RotateCw,
  Copy,
  Check,
  Star,
} from "lucide-react";
import { toast } from "sonner";
import useMyOrders from "@/hooks/orders/useMyOrders";
import CancelOrderModal from "@/components/orders/CancelOrderModal";
import WriteReviewModal from "@/components/reviews/WriteReviewModal";

// Status configuration helper
const getOrderStatusBadge = (rawStatus) => {
  const status = (rawStatus || "").toUpperCase();
  switch (status) {
    case "CONFIRMED":
      return {
        label: "Confirmed",
        icon: CheckCircle2,
        badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
      };
    case "PENDING":
      return {
        label: "Pending",
        icon: Clock3,
        badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
      };
    case "PROCESSING":
    case "ORDER_CREATED":
    case "PACKED":
      return {
        label: "Processing",
        icon: Package,
        badgeClass: "bg-orange-50 text-orange-700 border-orange-200",
      };
    case "SHIPPED":
    case "IN_TRANSIT":
      return {
        label: "Shipped",
        icon: Truck,
        badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
      };
    case "DELIVERED":
      return {
        label: "Delivered",
        icon: CheckCircle2,
        badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
      };
    case "CANCELLED":
      return {
        label: "Cancelled",
        icon: XCircle,
        badgeClass: "bg-red-50 text-red-700 border-red-200",
      };
    default:
      return {
        label: rawStatus || "Order Placed",
        icon: Package,
        badgeClass: "bg-[#603917]/10 text-[#603917] border-[#603917]/20",
      };
  }
};

const getPaymentStatusBadge = (paymentStatus) => {
  const status = (paymentStatus || "").toUpperCase();
  switch (status) {
    case "PAID":
      return {
        label: "Paid",
        badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
      };
    case "PENDING":
      return {
        label: "Payment Pending",
        badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
      };
    case "FAILED":
      return {
        label: "Payment Failed",
        badgeClass: "bg-red-50 text-red-700 border-red-200",
      };
    default:
      return {
        label: status || "Pending",
        badgeClass: "bg-gray-50 text-gray-700 border-gray-200",
      };
  }
};

const formatOrderDate = (isoString) => {
  if (!isoString) return "N/A";
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return isoString;
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return isoString;
  }
};

const getProductImage = (item) => {
  if (item?.product?.images && item.product.images.length > 0) {
    return item.product.images[0];
  }
  if (item?.image) {
    return item.image;
  }
  return "/product1.webp";
};

const MyOrders = () => {
  const { orders, loading, error, refetch } = useMyOrders();
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [copiedOrderId, setCopiedOrderId] = useState(null);
  const [reviewingProduct, setReviewingProduct] = useState(null);

  const filterOptions = [
    { id: "ALL", label: "All Orders" },
    { id: "CONFIRMED", label: "Confirmed" },
    { id: "PENDING", label: "Pending" },
    { id: "SHIPPED", label: "Shipped" },
    { id: "DELIVERED", label: "Delivered" },
    { id: "CANCELLED", label: "Cancelled" },
  ];

  // Calculate counts for each filter
  const filterCounts = useMemo(() => {
    const counts = {
      ALL: orders.length,
      CONFIRMED: 0,
      PENDING: 0,
      SHIPPED: 0,
      DELIVERED: 0,
      CANCELLED: 0,
    };

    orders.forEach((order) => {
      const status = (order.orderStatus || "").toUpperCase();
      if (counts[status] !== undefined) {
        counts[status]++;
      }
    });

    return counts;
  }, [orders]);

  // Filter orders
  const filteredOrders = useMemo(() => {
    if (activeFilter === "ALL") return orders;
    return orders.filter(
      (order) => (order.orderStatus || "").toUpperCase() === activeFilter
    );
  }, [orders, activeFilter]);

  const handleCopyOrderId = async (orderId) => {
    try {
      await navigator.clipboard.writeText(orderId);
      setCopiedOrderId(orderId);
      toast.success("Order ID copied to clipboard!");
      setTimeout(() => {
        setCopiedOrderId(null);
      }, 2000);
    } catch {
      toast.error("Failed to copy Order ID");
    }
  };

  const [cancellingOrder, setCancellingOrder] = useState(null);
  const [cancelLoading, setCancelLoading] = useState(false);

  const canCancelOrder = (order) => {
    if (!order) return false;
    const status = (order.orderStatus || "").toUpperCase();
    return status !== "CANCELLED" && status !== "DELIVERED";
  };

  const handleConfirmCancel = async () => {
    if (!cancellingOrder) return;
    try {
      setCancelLoading(true);
      const res = await orderService.cancelShiprocketOrder(
        cancellingOrder.orderId,
        cancellingOrder._id
      );
      toast.success(res?.message || "Order cancelled successfully!");
      setCancellingOrder(null);
      await refetch();
    } catch (err) {
      console.error("Failed to cancel order:", err);
      toast.error(
        err.response?.data?.message ||
          "Unable to cancel order at this time. Please try again or contact support."
      );
    } finally {
      setCancelLoading(false);
    }
  };

  return (

    <main className="min-h-screen bg-[#f5ebda]">
      {/* ================= HEADER ================= */}
      <section className="relative overflow-hidden border-b border-[#603917]/10 bg-[#f4eee3]">
        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#8b183d]/5 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-52 w-52 rounded-full bg-[#3e5a2c]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-5 sm:px-8 md:py-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="mb-2 font-manrope text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8b183d]">
              Your Account
            </p>

            <h1 className="font-cormorant text-3xl font-bold leading-[0.95] text-[#572340] sm:text-4xl">
              My Orders
            </h1>

            <p className="mt-2.5 max-w-xl font-manrope text-sm leading-6 text-[#603917]/70 sm:text-base">
              Keep track of your sweet moments, from the moment your order is
              confirmed until it reaches your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="mx-auto max-w-7xl px-5 py-6 sm:px-8 md:py-8 lg:px-12">
        {/* Filter Pills */}
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter.id;
            const count = filterCounts[filter.id] ?? 0;

            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 font-manrope text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "border-pink-600 bg-pink-600 text-white shadow-sm"
                    : "border-[#603917]/15 bg-white text-[#603917]/75 hover:border-pink-600/40 hover:text-pink-600"
                }`}
              >
                <span>{filter.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 font-mono text-[10px] ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-[#603917]/10 text-[#603917]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="rounded-3xl border border-[#603917]/10 bg-white px-6 py-20 text-center shadow-sm">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-pink-600" />
            <p className="mt-4 font-manrope text-sm font-semibold text-[#572340]">
              Loading your orders...
            </p>
            <p className="mt-1 font-manrope text-xs text-[#603917]/60">
              Please wait while we fetch your order history.
            </p>
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="rounded-3xl border border-red-200 bg-red-50/60 p-8 text-center shadow-sm">
            <AlertCircle className="mx-auto h-8 w-8 text-red-600" />
            <h2 className="mt-3 font-cormorant text-2xl font-bold text-red-900">
              Unable to Load Orders
            </h2>
            <p className="mt-1 font-manrope text-xs text-red-700/80">
              {error}
            </p>
            <button
              type="button"
              onClick={refetch}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-pink-600 px-5 py-2.5 font-manrope text-xs font-semibold text-white shadow-[2px_3px_0px_#000] hover:bg-[#60b396] cursor-pointer"
            >
              <RotateCw className="h-3.5 w-3.5" />
              Try Again
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredOrders.length === 0 && (
          <div className="rounded-3xl border border-[#603917]/10 bg-white px-6 py-20 text-center shadow-[0_8px_35px_rgba(96,57,23,0.04)]">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#8b183d]/10">
              <ShoppingBag className="h-7 w-7 text-[#8b183d]" />
            </div>

            <h2 className="mt-5 font-cormorant text-3xl font-semibold text-[#572340]">
              No Orders Found
            </h2>

            <p className="mx-auto mt-2 max-w-md font-manrope text-sm text-[#603917]/60">
              {activeFilter === "ALL"
                ? "You haven't placed any orders yet. Treat yourself to our authentic handcrafted sweets!"
                : `You don't have any orders with status "${filterOptions.find((f) => f.id === activeFilter)?.label}".`}
            </p>

            <Link
              to="/products"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-pink-600 px-6 py-3 font-manrope text-sm font-semibold text-white shadow-[2px_3px_0px_#000] transition-all hover:bg-[#60b396] hover:shadow-[3px_4px_0px_#000]"
            >
              Start Shopping
            </Link>
          </div>
        )}

        {/* Orders List */}
        {!loading && !error && filteredOrders.length > 0 && (
          <div className="space-y-6">
            {filteredOrders.map((order) => {
              const status = getOrderStatusBadge(order.orderStatus);
              const StatusIcon = status.icon;
              const payment = getPaymentStatusBadge(order.paymentStatus);

              const totalQuantity = (order.items || []).reduce(
                (total, item) => total + (item.quantity || 1),
                0
              );

              return (
                <article
                  key={order._id || order.orderId}
                  className="overflow-hidden rounded-3xl border border-[#603917]/10 bg-white shadow-[0_8px_35px_rgba(96,57,23,0.04)] transition-all hover:shadow-[0_12px_45px_rgba(96,57,23,0.08)]"
                >
                  {/* Order Header */}
                  <div className="border-b border-[#603917]/10 bg-[#fdfcf9] px-5 py-4 sm:px-7">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                          <span className="font-manrope text-xs font-semibold uppercase tracking-[0.12em] text-[#603917]/50">
                            Order
                          </span>

                          <span className="font-mono text-sm font-bold text-[#572340]">
                            #{order.orderId}
                          </span>

                          <button
                            type="button"
                            onClick={() => handleCopyOrderId(order.orderId)}
                            title="Copy Order ID"
                            className="rounded-full p-1 text-[#603917]/40 hover:bg-[#603917]/10 hover:text-[#572340] transition-colors cursor-pointer"
                          >
                            {copiedOrderId === order.orderId ? (
                              <Check className="h-3.5 w-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="h-3.5 w-3.5" />
                            )}
                          </button>

                          {/* Order Status Badge */}
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-manrope text-[11px] font-semibold ${status.badgeClass}`}
                          >
                            <StatusIcon className="h-3.5 w-3.5" />
                            {status.label}
                          </span>

                          {/* Payment Status Badge */}
                          <span
                            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-manrope text-[10px] font-semibold uppercase tracking-wider ${payment.badgeClass}`}
                          >
                            {payment.label}
                          </span>
                        </div>

                        <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-[#603917]/60">
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDays className="h-3.5 w-3.5 text-[#8b183d]" />
                            {formatOrderDate(order.createdAt)}
                          </span>

                          <span className="inline-flex items-center gap-1.5">
                            <ShoppingBag className="h-3.5 w-3.5 text-[#8b183d]" />
                            {totalQuantity}{" "}
                            {totalQuantity === 1 ? "item" : "items"}
                          </span>
                        </div>
                      </div>

                      {/* Total Amount & Payment Info */}
                      <div className="sm:text-right">
                        <p className="font-manrope text-[10px] font-semibold uppercase tracking-wider text-[#603917]/45">
                          Total Amount
                        </p>

                        <p className="mt-0.5 font-manrope text-xl font-extrabold text-[#572340]">
                          ₹{(order.totalAmount || 0).toLocaleString("en-IN")}
                        </p>

                        <p className="mt-0.5 font-manrope text-[11px] text-[#603917]/60">
                          Via {order.paymentMethod || "ONLINE"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Order Items List */}
                  <div className="px-5 py-5 sm:px-7">
                    <div className="divide-y divide-[#603917]/10">
                      {(order.items || []).map((item, idx) => {
                        const itemName =
                          item.name ||
                          item.product?.name ||
                          "Handcrafted Sweet Item";
                        const itemImg = getProductImage(item);
                        const itemQty = item.quantity || 1;
                        const itemPrice = item.price || item.salePrice || 0;
                        const itemTotal = item.total || itemPrice * itemQty;

                        return (
                          <div
                            key={item._id || item.variantId || idx}
                            className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                          >
                            {/* Item Thumbnail */}
                            <div className="h-18 w-18 shrink-0 overflow-hidden rounded-2xl border border-[#603917]/10 bg-[#f9e4bf]/20">
                              <img
                                src={itemImg}
                                alt={itemName}
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = "/product1.webp";
                                }}
                                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                              />
                            </div>

                            {/* Item Info */}
                            <div className="min-w-0 flex-1">
                              <h3 className="font-cormorant text-lg sm:text-xl font-bold leading-tight text-[#572340]">
                                {itemName}
                              </h3>

                              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-manrope text-xs text-[#603917]/65">
                                <span>Qty: {itemQty}</span>
                                <span>•</span>
                                <span>₹{itemPrice.toLocaleString("en-IN")} each</span>
                                {item.sku && (
                                  <>
                                    <span>•</span>
                                    <span className="font-mono text-[11px] text-[#603917]/50">
                                      SKU: {item.sku}
                                    </span>
                                  </>
                                )}
                              </div>

                              {order.orderStatus?.toUpperCase() === "DELIVERED" && (
                                <div className="mt-2 flex flex-wrap items-center gap-2.5">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setReviewingProduct({
                                        _id:
                                          item.product?._id ||
                                          item.product?.id ||
                                          item.product ||
                                          item.productId,
                                        name: itemName,
                                        image: itemImg,
                                      })
                                    }
                                    className="inline-flex items-center gap-1 rounded-full bg-[#8b183d] px-3 py-1 font-manrope text-xs font-bold text-white shadow-sm hover:bg-[#572340] transition cursor-pointer"
                                  >
                                    <Star size={12} fill="white" />
                                    Rate & Review
                                  </button>
                                  <Link
                                    to={`/products/${item.product?._id || item.product?.id || item.product || item.productId}#reviews`}
                                    className="font-manrope text-xs text-[#603917]/60 hover:text-[#8b183d] hover:underline transition"
                                  >
                                    All Reviews
                                  </Link>
                                </div>
                              )}
                            </div>

                            {/* Item Subtotal */}
                            <div className="text-right">
                              <p className="font-manrope text-sm font-bold text-[#572340]">
                                ₹{itemTotal.toLocaleString("en-IN")}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Order Details Grid: Shipping Address & Shipment Status */}
                    <div className="mt-6 grid gap-4 rounded-2xl border border-[#603917]/10 bg-[#fbf8f2] p-4 sm:grid-cols-2">
                      {/* Shipping Address */}
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#8b183d]" />
                        <div className="min-w-0 flex-1">
                          <p className="font-manrope text-[10px] font-bold uppercase tracking-wider text-[#603917]/60">
                            Delivery Address
                          </p>
                          {order.shippingAddress ? (
                            <div className="mt-1 font-manrope text-xs text-[#572340]">
                              <p className="font-semibold">
                                {order.shippingAddress.name}
                              </p>
                              <p className="text-[#603917]/70">
                                {order.shippingAddress.address},{" "}
                                {order.shippingAddress.city},{" "}
                                {order.shippingAddress.state} -{" "}
                                {order.shippingAddress.pincode}
                              </p>
                              {order.shippingAddress.phone && (
                                <p className="mt-0.5 text-[#603917]/50">
                                  Ph: {order.shippingAddress.phone}
                                </p>
                              )}
                            </div>
                          ) : (
                            <p className="mt-1 font-manrope text-xs text-[#603917]/50">
                              No address details available
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Shipment / Courier Details */}
                      <div className="flex items-start gap-3 border-t border-[#603917]/10 pt-3 sm:border-t-0 sm:border-l sm:pl-4 sm:pt-0">
                        <Truck className="mt-0.5 h-4 w-4 shrink-0 text-[#8b183d]" />
                        <div className="min-w-0 flex-1">
                          <p className="font-manrope text-[10px] font-bold uppercase tracking-wider text-[#603917]/60">
                            Shipment & Tracking
                          </p>
                          <div className="mt-1 font-manrope text-xs text-[#572340]">
                            {order.shiprocket?.courierName ? (
                              <p className="font-semibold">
                                {order.shiprocket.courierName}
                              </p>
                            ) : (
                              <p className="font-semibold">Standard Shipping</p>
                            )}

                            {order.shiprocket?.awbCode ? (
                              <p className="font-mono text-[11px] text-[#603917]/70">
                                AWB: {order.shiprocket.awbCode}
                              </p>
                            ) : (
                              <p className="text-[11px] text-[#603917]/50">
                                Tracking number will be assigned once dispatched
                              </p>
                            )}

                            {order.shiprocket?.status && (
                              <p className="mt-0.5 text-[11px] text-[#603917]/60">
                                Status: {order.shiprocket.status}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Order Footer Actions */}
                    <div className="mt-6 flex flex-col gap-3 border-t border-[#603917]/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-2 text-xs text-[#603917]/60">
                        <CreditCard className="h-3.5 w-3.5 text-[#8b183d]" />
                        <span>
                          Payment:{" "}
                          <strong className="text-[#572340]">
                            {order.paymentMethod || "ONLINE"}
                          </strong>{" "}
                          ({order.paymentStatus || "PENDING"})
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2.5">
                        {/* Courier External Tracking Link */}
                        {order.shiprocket?.trackingUrl && (
                          <a
                            href={order.shiprocket.trackingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full border border-[#603917]/20 bg-white px-4 py-2 font-manrope text-xs font-semibold text-[#603917] hover:bg-[#603917]/5 transition-colors"
                          >
                            Track Shipment
                            <ExternalLink className="h-3.5 w-3.5 text-[#8b183d]" />
                          </a>
                        )}

                        {/* Cancel Order Button */}
                        {canCancelOrder(order) && (
                          <button
                            type="button"
                            onClick={() => setCancellingOrder(order)}
                            className="inline-flex items-center gap-1.5 rounded-full border border-red-300 bg-red-50/70 px-4 py-2 font-manrope text-xs font-semibold text-red-600 hover:bg-red-100 hover:border-red-400 transition-colors cursor-pointer"
                          >
                            <XCircle className="h-3.5 w-3.5 text-red-500" />
                            Cancel Order
                          </button>
                        )}

                        {/* View Order / Details Link */}
                        <Link
                          to={`/orders/${order.orderId}`}
                          state={{ order }}
                          className="inline-flex items-center justify-center gap-1.5 rounded-full bg-pink-600 px-5 py-2.5 font-manrope text-xs font-semibold text-white shadow-[2px_3px_0px_#000] transition-all hover:bg-[#60b396] hover:shadow-[3px_4px_0px_#000]"
                        >
                          View Order Details
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* Cancel Order Confirmation Modal */}
      <CancelOrderModal
        isOpen={Boolean(cancellingOrder)}
        onClose={() => !cancelLoading && setCancellingOrder(null)}
        onConfirm={handleConfirmCancel}
        orderId={cancellingOrder?.orderId}
        loading={cancelLoading}
      />

      {/* Write Product Review Modal */}
      <WriteReviewModal
        isOpen={Boolean(reviewingProduct)}
        onClose={() => setReviewingProduct(null)}
        product={reviewingProduct}
        onReviewSubmitted={() => {
          setReviewingProduct(null);
        }}
        verifiedPurchase={true}
      />
    </main>

  );
};

export default MyOrders;