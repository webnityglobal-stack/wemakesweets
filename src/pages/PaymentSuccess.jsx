import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import {
  Check,
  Package,
  Truck,
  MapPin,
  CreditCard,
  ShoppingBag,
  ArrowRight,
  CalendarDays,
  AlertCircle,
  RotateCcw,
  Copy,
  CheckCheck,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import orderService from "@/services/orderService";

const PaymentSuccess = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Read params sent by Shiprocket FastRR checkout redirect
  // e.g. /payment/success?orderId=WMS-1789707185162&oid=6aacc3b4a454ee38ef6cec16&ost=SUCCESS
  const orderIdFromQuery =
    searchParams.get("orderId") ||
    searchParams.get("order_id") ||
    searchParams.get("oid") ||
    location.state?.orderId;
  const oid = searchParams.get("oid");
  const ost = (searchParams.get("ost") || searchParams.get("status") || "").toUpperCase();

  const isFailed = ost === "FAILED" || ost === "FAILURE";

  const [order, setOrder] = useState(location.state?.order || null);
  const [loading, setLoading] = useState(Boolean(orderIdFromQuery && !location.state?.order));
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!orderIdFromQuery) {
      setLoading(false);
      return;
    }

    // If order already passed in navigation state, skip initial fetch
    if (location.state?.order && (location.state.order.orderId === orderIdFromQuery)) {
      setOrder(location.state.order);
      setLoading(false);
      return;
    }

    const fetchOrder = async () => {
      setLoading(true);
      setError(null);
      try {
        // Primary: fetch by order ID endpoint /orders/:orderId
        const data = await orderService.getOrderById(orderIdFromQuery);
        if (data?.success && data?.order) {
          setOrder(data.order);
        } else {
          throw new Error(data?.message || "Order not found");
        }
      } catch (err) {
        console.warn("Could not fetch order by ID, trying fallback to /orders/my-orders:", err);
        try {
          // Fallback: search in user's order list
          const myOrdersData = await orderService.getMyOrders();
          const matched = myOrdersData?.orders?.find(
            (o) => o.orderId === orderIdFromQuery || o._id === orderIdFromQuery
          );
          if (matched) {
            setOrder(matched);
          } else {
            setError(err?.response?.data?.message || err?.message || "Order not found");
          }
        } catch (fallbackErr) {
          setError(
            err?.response?.data?.message ||
              err?.message ||
              "Unable to load order details. Please check My Orders."
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderIdFromQuery, location.state]);

  const handleCopyOrderId = () => {
    const idToCopy = order?.orderId || orderIdFromQuery;
    if (!idToCopy) return;
    navigator.clipboard.writeText(idToCopy);
    setCopied(true);
    toast.success("Order ID copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  // Format order date
  const orderDateFormatted = order?.createdAt
    ? new Date(order.createdAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date());

  // Expected delivery calculation (4 to 6 days from order date)
  const orderDateObj = order?.createdAt ? new Date(order.createdAt) : new Date();
  const deliveryStart = new Date(orderDateObj.getTime() + 4 * 86400000);
  const deliveryEnd = new Date(orderDateObj.getTime() + 6 * 86400000);
  const expectedDeliveryFormatted = `${deliveryStart.getDate()} - ${deliveryEnd.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })}`;

  const items = order?.items || [];
  const itemsSubtotal = items.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );
  const totalAmount = order?.totalAmount ?? itemsSubtotal;
  const deliveryCharge = totalAmount > itemsSubtotal ? totalAmount - itemsSubtotal : 0;

  const displayOrderId = order?.orderId || orderIdFromQuery || "N/A";
  const displayPaymentStatus = isFailed
    ? "Failed"
    : order?.paymentStatus || "Paid";
  const displayOrderStatus = isFailed
    ? "Failed"
    : order?.orderStatus || "Confirmed";

  // 1. LOADING SKELETON
  if (loading) {
    return (
      <section className="min-h-screen bg-[#f5ebda] px-4 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-pink-600/10 text-[#8b183d] sm:h-24 sm:w-24">
            <Loader2 size={40} className="animate-spin text-[#8b183d]" />
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#8b183d] font-manrope">
            Confirming Payment
          </p>
          <h1 className="mt-2 text-3xl font-bold text-[#2d2d2d] font-cormorant sm:text-4xl">
            Fetching Order Details...
          </h1>
          <p className="mt-2 text-sm text-gray-500 font-manrope">
            Please wait while we verify your order #{orderIdFromQuery}
          </p>
        </div>
      </section>
    );
  }

  // 2. ERROR STATE
  if (error && !order && !isFailed) {
    return (
      <section className="min-h-screen bg-[#f5ebda] px-4 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-2xl rounded-2xl border border-[#60391720] bg-[#f2ede1] p-8 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10 text-amber-600">
            <AlertCircle size={36} />
          </div>
          <h1 className="mt-4 text-3xl font-bold text-[#2d2d2d] font-cormorant">
            Order Confirmation
          </h1>
          <p className="mt-2 text-sm text-gray-600 font-manrope">
            {error}
          </p>
          {orderIdFromQuery && (
            <p className="mt-2 text-xs font-semibold text-[#8b183d] font-manrope">
              Order ID: #{orderIdFromQuery}
            </p>
          )}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/my-orders"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-pink-600 px-6 text-sm font-semibold uppercase text-white shadow-[2px_3px_0px_#000] hover:bg-[#60b396] font-manrope transition-all"
            >
              Check My Orders
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/products"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#60391735] bg-white px-6 text-sm font-semibold uppercase text-[#572340] shadow-[1px_2px_0px_#000] hover:bg-gray-50 font-manrope transition-all"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // 3. MAIN ORDER VIEW
  return (
    <section className="min-h-screen bg-[#f5ebda] px-4 py-7 sm:px-8 sm:py-7 lg:px-16 lg:py-10">
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`
              mx-auto flex h-20 w-20 items-center justify-center
              rounded-full text-white
              sm:h-24 sm:w-24 shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000]
              ${isFailed ? "bg-red-600" : "bg-[#3e5a2c]"}
            `}
          >
            {isFailed ? (
              <AlertCircle
                size={42}
                strokeWidth={2.5}
                className="text-white sm:h-12 sm:w-12"
              />
            ) : (
              <Check
                size={42}
                strokeWidth={2.5}
                className="text-white sm:h-12 sm:w-12"
              />
            )}
          </div>

          <p
            className={`
              mt-7 text-[10px] font-semibold uppercase
              tracking-[0.25em] font-manrope sm:text-xs
              ${isFailed ? "text-red-700" : "text-[#3e5a2c]"}
            `}
          >
            {isFailed ? "Payment Incomplete" : "Payment & Order Confirmed"}
          </p>

          <h1 className="mt-2 text-4xl font-bold leading-tight text-[#2d2d2d] font-cormorant sm:text-5xl lg:text-6xl">
            {isFailed
              ? "Payment Could Not Be Completed"
              : "Sweet! Your Order is Placed"}
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500 font-manrope sm:text-base">
            {isFailed
              ? "Your payment was not completed or was cancelled. You can return to your cart to retry."
              : "Thank you for shopping with We Make Sweets. We have received your order and our sweetmakers are preparing your package with love and care."}
          </p>
        </div>

        {/* ORDER META BAR */}
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
          <div className="flex flex-1 items-center justify-between px-5 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                <Package size={18} className="text-[#8b183d]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wide text-gray-400 font-manrope">
                  Order Number
                </p>
                <p className="text-sm font-bold text-[#2d2d2d] font-manrope">
                  #{displayOrderId}
                </p>
              </div>
            </div>
            {displayOrderId !== "N/A" && (
              <button
                type="button"
                onClick={handleCopyOrderId}
                className="flex items-center gap-1 rounded-lg border border-[#60391725] bg-white px-2.5 py-1.5 text-xs font-semibold text-[#8b183d] transition-all hover:bg-gray-50"
                title="Copy Order ID"
              >
                {copied ? (
                  <>
                    <CheckCheck size={14} className="text-green-600" />
                    <span className="text-[10px] text-green-600 font-manrope">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span className="text-[10px] font-manrope">Copy</span>
                  </>
                )}
              </button>
            )}
          </div>

          <div className="hidden w-px bg-[#60391720] sm:block" />

          {/* Order Date */}
          <div className="flex flex-1 items-center gap-3 border-t border-[#60391720] px-5 py-4 sm:border-t-0 sm:px-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
              <CalendarDays size={18} className="text-[#572340]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wide text-gray-400 font-manrope">
                Order Date
              </p>
              <p className="text-sm font-bold text-[#2d2d2d] font-manrope">
                {orderDateFormatted}
              </p>
            </div>
          </div>

          <div className="hidden w-px bg-[#60391720] sm:block" />

          {/* Payment Status */}
          <div className="flex flex-1 items-center gap-3 border-t border-[#60391720] px-5 py-4 sm:border-t-0 sm:px-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
              <CreditCard size={18} className="text-[#3e5a2c]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wide text-gray-400 font-manrope">
                Payment Status
              </p>
              <p
                className={`text-sm font-bold font-manrope ${
                  isFailed ? "text-red-600" : "text-[#3e5a2c]"
                }`}
              >
                {displayPaymentStatus}
              </p>
            </div>
          </div>
        </div>

        {/* ORDER STATUS & TIMELINE */}
        {!isFailed && (
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
                  Preparing your fresh sweets
                </h2>
              </div>

              <span className="hidden rounded-md bg-pink-600 px-3 py-1.5 text-[10px] font-bold uppercase text-white shadow-[1px_2px_0px_#000] font-manrope sm:block">
                {displayOrderStatus}
              </span>
            </div>

            {/* Tracking Progress */}
            <div className="mt-8 grid grid-cols-4 gap-2">
              <div className="relative text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#3e5a2c] text-white shadow-[1px_2px_0px_#000]">
                  <Check size={17} />
                </div>
                <p className="mt-2 text-[9px] font-semibold text-[#2d2d2d] font-manrope sm:text-xs">
                  Confirmed
                </p>
                <div className="absolute left-[65%] top-5 hidden h-0.5 w-full bg-[#3e5a2c] sm:block" />
              </div>

              <div className="relative text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#60391725] bg-white text-gray-400">
                  <Package size={17} />
                </div>
                <p className="mt-2 text-[9px] font-medium text-gray-400 font-manrope sm:text-xs">
                  Packed
                </p>
                <div className="absolute left-[65%] top-5 hidden h-0.5 w-full bg-[#60391720] sm:block" />
              </div>

              <div className="relative text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#60391725] bg-white text-gray-400">
                  <Truck size={17} />
                </div>
                <p className="mt-2 text-[9px] font-medium text-gray-400 font-manrope sm:text-xs">
                  Shipped
                </p>
                <div className="absolute left-[65%] top-5 hidden h-0.5 w-full bg-[#60391720] sm:block" />
              </div>

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
            <div className="mt-7 flex items-center justify-between rounded-xl bg-white/60 p-4">
              <div className="flex items-center gap-3">
                <Truck size={20} className="shrink-0 text-[#8b183d]" />
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-gray-400 font-manrope">
                    Estimated Delivery
                  </p>
                  <p className="text-sm font-bold text-[#2d2d2d] font-manrope">
                    {expectedDeliveryFormatted}
                  </p>
                </div>
              </div>
              {order?.shiprocket?.awbCode && (
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-wide text-gray-400 font-manrope">
                    AWB Tracking ({order.shiprocket.courierName || "Shiprocket"})
                  </p>
                  <p className="text-xs font-bold text-[#8b183d] font-manrope">
                    {order.shiprocket.awbCode}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ORDER DETAILS (ITEMS + SUMMARY + ADDRESS) */}
        <div className="mx-auto mt-7 grid max-w-4xl grid-cols-1 gap-7 lg:grid-cols-[1fr_330px]">
          {/* ITEMS LIST */}
          <div className="overflow-hidden rounded-2xl border border-[#60391720] bg-[#f2ede1] shadow-sm sm:rounded-[24px]">
            <div className="border-b border-[#60391720] px-5 py-5 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag size={18} className="text-[#8b183d]" />
                  <h2 className="text-2xl font-bold text-[#2d2d2d] font-cormorant sm:text-3xl">
                    Ordered Sweets
                  </h2>
                </div>
                <span className="text-xs font-semibold text-[#8b183d] font-manrope">
                  {items.length} {items.length === 1 ? "Item" : "Items"}
                </span>
              </div>
            </div>

            <div className="divide-y divide-[#60391715]">
              {items.length > 0 ? (
                items.map((item, idx) => {
                  const imageUrl =
                    item.product?.images?.[0] ||
                    item.image ||
                    item.product?.image ||
                    "/product1.webp";

                  const itemName =
                    item.name ||
                    item.product?.name ||
                    "Artisanal Sweet";

                  return (
                    <div key={item._id || item.variantId || idx} className="flex gap-4 p-4 sm:p-5">
                      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-[#60391720] bg-white sm:h-24 sm:w-24">
                        <img
                          src={imageUrl}
                          alt={itemName}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = "/product1.webp";
                          }}
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        {item.sku && (
                          <span className="inline-flex rounded-md bg-pink-600/10 px-2 py-0.5 text-[9px] font-semibold text-[#8b183d] font-manrope">
                            SKU: {item.sku}
                          </span>
                        )}

                        <h3 className="mt-1 truncate text-lg font-bold text-[#2d2d2d] font-cormorant sm:text-xl">
                          {itemName}
                        </h3>

                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-xs text-gray-500 font-manrope">
                            Qty: <strong className="text-gray-800">{item.quantity}</strong> × ₹{item.price}
                          </span>

                          <span className="text-base font-bold text-[#572340] font-manrope">
                            ₹{item.total || item.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="p-6 text-center text-xs text-gray-500 font-manrope">
                  Order items details are being updated.
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-7">
            {/* Delivery Address */}
            <div className="rounded-2xl border border-[#60391720] bg-[#f2ede1] p-5 shadow-sm sm:rounded-[24px] sm:p-6">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[#8b183d]" />
                <h2 className="text-2xl font-bold text-[#2d2d2d] font-cormorant">
                  Delivery Address
                </h2>
              </div>

              {order?.shippingAddress ? (
                <div className="mt-4 text-xs leading-6 text-gray-600 font-manrope">
                  <p className="font-bold text-[#2d2d2d]">
                    {order.shippingAddress.name}
                  </p>
                  <p>{order.shippingAddress.address}</p>
                  {order.shippingAddress.address2 && (
                    <p>{order.shippingAddress.address2}</p>
                  )}
                  <p>
                    {order.shippingAddress.city}, {order.shippingAddress.state} -{" "}
                    {order.shippingAddress.pincode}
                  </p>
                  <p>{order.shippingAddress.country || "India"}</p>
                  {order.shippingAddress.phone && (
                    <p className="mt-2 font-medium text-[#8b183d]">
                      📞 {order.shippingAddress.phone}
                    </p>
                  )}
                </div>
              ) : (
                <p className="mt-4 text-xs text-gray-500 font-manrope">
                  Address details saved with order.
                </p>
              )}
            </div>

            {/* Payment Summary */}
            <div className="rounded-2xl border border-[#60391720] bg-[#f2ede1] p-5 shadow-sm sm:rounded-[24px] sm:p-6">
              <h2 className="text-2xl font-bold text-[#2d2d2d] font-cormorant">
                Payment Summary
              </h2>

              <div className="mt-5 space-y-3">
                <div className="flex justify-between text-xs font-manrope">
                  <span className="text-gray-500">Items Subtotal</span>
                  <span className="font-semibold text-[#2d2d2d]">
                    ₹{itemsSubtotal || totalAmount}
                  </span>
                </div>

                <div className="flex justify-between text-xs font-manrope">
                  <span className="text-gray-500">Delivery Fee</span>
                  <span className="font-semibold text-[#3e5a2c]">
                    {deliveryCharge > 0 ? `₹${deliveryCharge}` : "FREE"}
                  </span>
                </div>

                <div className="border-t border-dashed border-[#60391730] pt-2" />

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#2d2d2d] font-manrope">
                    Total Amount
                  </span>
                  <span className="text-2xl font-bold text-[#572340] font-manrope">
                    ₹{totalAmount}
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2 rounded-lg bg-[#3e5a2c]/10 px-3 py-2">
                  <Check size={14} className="text-[#3e5a2c]" />
                  <span className="text-[10px] font-semibold text-[#3e5a2c] font-manrope">
                    Payment Gateway: {order?.paymentId?.gateway || "FastRR"} (Verified)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mx-auto mt-9 flex max-w-4xl flex-col-reverse gap-4 sm:flex-row sm:justify-center">
          {isFailed ? (
            <>
              <Link
                to="/products"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-[#60391735] bg-white px-7 text-sm font-semibold uppercase text-[#572340] shadow-[1px_2px_0px_#000] hover:bg-gray-50 font-manrope transition-all sm:h-13"
              >
                Continue Shopping
              </Link>
              <Link
                to="/cart"
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-pink-600 px-7 text-sm font-semibold uppercase text-white shadow-[2px_3px_0px_#000] hover:bg-[#60b396] hover:shadow-[3px_4px_0px_#000] font-manrope transition-all sm:h-13"
              >
                <RotateCcw size={17} />
                Return to Cart & Retry
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/products"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-[#60391735] bg-white px-7 text-sm font-semibold uppercase text-[#572340] shadow-[1px_2px_0px_#000] hover:bg-gray-50 font-manrope transition-all sm:h-13"
              >
                Continue Shopping
              </Link>

              <Link
                to="/my-orders"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-[#60391735] bg-[#f2ede1] px-7 text-sm font-semibold uppercase text-[#572340] shadow-[1px_2px_0px_#000] hover:bg-white font-manrope transition-all sm:h-13"
              >
                View All Orders
              </Link>

              {displayOrderId !== "N/A" && (
                <Link
                  to={`/orders/${displayOrderId}`}
                  state={{ order }}
                  className="flex h-12 items-center justify-center gap-2 rounded-xl bg-pink-600 px-7 text-sm font-semibold uppercase text-white shadow-[2px_3px_0px_#000] hover:bg-[#60b396] hover:shadow-[3px_4px_0px_#000] font-manrope transition-all sm:h-13"
                >
                  Track Order
                  <ArrowRight size={17} />
                </Link>
              )}
            </>
          )}
        </div>

        {/* FOOTER */}
        <div className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-xs leading-5 text-gray-600 font-manrope">
            We will keep you updated at every step of your sweet journey via SMS and WhatsApp.
            For any queries, feel free to reach out to our customer care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuccess;
