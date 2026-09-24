import { useState, useEffect, useRef, useMemo } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  PenLine,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ShoppingBag,
  Lock,
  X,
  Trash2,
} from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { toast } from "sonner";
import reviewService from "../../../services/reviewService";
import orderService from "../../../services/orderService";
import { authStorage } from "../../../utils/authStorage";
import WriteReviewModal from "../../reviews/WriteReviewModal";

const formatDate = (d) => {
  if (!d) return "";
  try {
    return new Date(d).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return String(d);
  }
};

const Reviews = ({ product }) => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const [reviews, setReviews] = useState(
    Array.isArray(product?.reviews) ? product.reviews : []
  );
  const [loadingReviews, setLoadingReviews] = useState(false);

  // Review Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingReview, setEditingReview] = useState(null);

  // Review Delete state
  const [reviewToDelete, setReviewToDelete] = useState(null);
  const [isDeletingReview, setIsDeletingReview] = useState(false);
  const [deletedReviewIds, setDeletedReviewIds] = useState(new Set());

  // Purchase verification state
  const [purchaseStatus, setPurchaseStatus] = useState({
    checked: false,
    hasPurchased: false,
    hasDelivered: false,
    loading: false,
  });
  const [notEligibleModalOpen, setNotEligibleModalOpen] = useState(false);
  const [notEligibleMessage, setNotEligibleMessage] = useState("");

  const productId = product?._id || product?.id;

  // Sync reviews when product prop updates
  useEffect(() => {
    if (Array.isArray(product?.reviews) && product.reviews.length > 0) {
      setReviews(product.reviews);
    }
  }, [product?.reviews]);

  // Fetch real reviews from API
  const fetchReviews = async () => {
    if (!productId) return;
    try {
      setLoadingReviews(true);
      const res = await reviewService.getProductReviews(productId);
      if (res?.success && Array.isArray(res.reviews)) {
        setReviews(res.reviews);
      }
    } catch (err) {
      console.error("Failed to fetch product reviews:", err);
    } finally {
      setLoadingReviews(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [productId]);

  // Check if current logged-in user has purchased & received this product
  useEffect(() => {
    const verifyPurchase = async () => {
      if (!authStorage.isAuthenticated() || !productId) {
        setPurchaseStatus({
          checked: true,
          hasPurchased: false,
          hasDelivered: false,
          loading: false,
        });
        return;
      }

      try {
        setPurchaseStatus((prev) => ({ ...prev, loading: true }));
        const res = await orderService.getMyOrders();

        if (res?.success && Array.isArray(res.orders)) {
          let purchased = false;
          let delivered = false;

          for (const order of res.orders) {
            const status = (order.orderStatus || "").toUpperCase();
            if (status === "CANCELLED") continue;

            const hasItem = (order.items || []).some((item) => {
              const pId =
                item.product?._id ||
                item.product?.id ||
                item.product ||
                item.productId;
              return String(pId) === String(productId);
            });

            if (hasItem) {
              purchased = true;
              if (status === "DELIVERED") {
                delivered = true;
              }
            }
          }

          setPurchaseStatus({
            checked: true,
            hasPurchased: purchased,
            hasDelivered: delivered,
            loading: false,
          });
        } else {
          setPurchaseStatus({
            checked: true,
            hasPurchased: false,
            hasDelivered: false,
            loading: false,
          });
        }
      } catch (err) {
        console.error("Purchase verification check failed:", err);
        setPurchaseStatus({
          checked: true,
          hasPurchased: false,
          hasDelivered: false,
          loading: false,
        });
      }
    };

    verifyPurchase();
  }, [productId]);

  // Handle URL deep link (?writeReview=true or #reviews)
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const shouldOpen = searchParams.get("writeReview") === "true";
    const hasHash = window.location.hash === "#reviews";

    if (hasHash || shouldOpen) {
      const el = document.getElementById("reviews");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (shouldOpen && purchaseStatus.checked) {
      if (authStorage.isAuthenticated()) {
        if (purchaseStatus.hasDelivered) {
          setIsModalOpen(true);
        } else {
          setNotEligibleMessage(
            "You can only review a product after purchasing and receiving it."
          );
          setNotEligibleModalOpen(true);
        }
      } else {
        toast.error("Please login to write a review.", {
          action: {
            label: "Login",
            onClick: () =>
              navigate("/login", {
                state: {
                  from: window.location.pathname + window.location.search,
                },
              }),
          },
        });
      }
    }
  }, [location.search, purchaseStatus.checked, purchaseStatus.hasDelivered]);

  // Combine all reviews from product?.reviews (from getProductById) and reviews state
  const allReviews = useMemo(() => {
    const map = new Map();
    // 1. Add product?.reviews from getProductById API
    if (Array.isArray(product?.reviews)) {
      product.reviews.forEach((r) => {
        const id = r?._id || r?.id;
        if (id && !deletedReviewIds.has(String(id))) {
          map.set(String(id), r);
        }
      });
    }
    // 2. Add reviews from fetchReviews or newly added/updated reviews
    if (Array.isArray(reviews)) {
      reviews.forEach((r) => {
        const id = r?._id || r?.id;
        if (id && !deletedReviewIds.has(String(id))) {
          map.set(String(id), r);
        }
      });
    }
    return Array.from(map.values());
  }, [product?.reviews, reviews, deletedReviewIds]);

  // Sort by newest first and limit to max 6 latest reviews for the slider
  const displayReviews = useMemo(() => {
    return [...allReviews]
      .sort((a, b) => {
        const dateA = new Date(a.createdAt || a.date || 0).getTime();
        const dateB = new Date(b.createdAt || b.date || 0).getTime();
        return dateB - dateA;
      })
      .slice(0, 6);
  }, [allReviews]);

  const totalReviews = allReviews.length;

  const averageRating =
    totalReviews > 0
      ? (
          allReviews.reduce((acc, r) => acc + (Number(r.rating) || 5), 0) /
          totalReviews
        ).toFixed(1)
      : product?.rating
      ? Number(product.rating).toFixed(1)
      : "5.0";

  const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  allReviews.forEach((r) => {
    const star = Math.min(5, Math.max(1, Math.round(Number(r.rating) || 5)));
    ratingCounts[star] = (ratingCounts[star] || 0) + 1;
  });

  const getPercentage = (count) =>
    totalReviews > 0 ? Math.round((count / totalReviews) * 100) : 0;

  const breakdown = [
    { star: 5, value: totalReviews > 0 ? getPercentage(ratingCounts[5]) : 90 },
    { star: 4, value: totalReviews > 0 ? getPercentage(ratingCounts[4]) : 70 },
    { star: 3, value: totalReviews > 0 ? getPercentage(ratingCounts[3]) : 25 },
    { star: 2, value: totalReviews > 0 ? getPercentage(ratingCounts[2]) : 8 },
    { star: 1, value: totalReviews > 0 ? getPercentage(ratingCounts[1]) : 2 },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Check if current user already submitted a review
  const currentUser = authStorage.getUser();
  const currentUserId = currentUser?._id || currentUser?.id;
  const userExistingReview = allReviews.find((r) => {
    const rUserId = r.user?._id || r.user;
    return currentUserId && String(rUserId) === String(currentUserId);
  });

  // Handle open review modal with verified purchase check
  const handleOpenReviewModal = () => {
    if (!authStorage.isAuthenticated()) {
      toast.error("Please login to write a review.", {
        action: {
          label: "Login",
          onClick: () =>
            navigate("/login", {
              state: { from: window.location.pathname + window.location.search },
            }),
        },
      });
      return;
    }

    // Purchase & delivery verification check
    if (purchaseStatus.checked) {
      if (!purchaseStatus.hasPurchased) {
        setNotEligibleMessage(
          "You can only review a product after purchasing and receiving it."
        );
        setNotEligibleModalOpen(true);
        return;
      }
      if (!purchaseStatus.hasDelivered) {
        setNotEligibleMessage(
          "You have ordered this product, but reviews can only be submitted once the order has been delivered to you."
        );
        setNotEligibleModalOpen(true);
        return;
      }
    }

    if (userExistingReview) {
      setEditingReview(userExistingReview);
    } else {
      setEditingReview(null);
    }
    setIsModalOpen(true);
  };

  const handleReviewSubmitted = (savedReview) => {
    if (savedReview) {
      const savedId = String(savedReview._id || savedReview.id);
      setDeletedReviewIds((prev) => {
        const next = new Set(prev);
        next.delete(savedId);
        return next;
      });
      setReviews((prev) => {
        const exists = prev.some((r) => String(r._id || r.id) === savedId);
        if (exists) {
          return prev.map((r) =>
            String(r._id || r.id) === savedId ? savedReview : r
          );
        }
        return [savedReview, ...prev];
      });
    }
    setEditingReview(null);
    fetchReviews();
  };

  const handleDeleteReview = async (reviewId) => {
    const cleanId =
      typeof reviewId === "object"
        ? reviewId?._id || reviewId?.id
        : reviewId;

    if (!cleanId) return;

    try {
      setIsDeletingReview(true);
      const res = await reviewService.deleteReview(cleanId);
      if (res?.success) {
        toast.success(res.message || "Review deleted successfully!");
        setDeletedReviewIds((prev) => new Set([...prev, String(cleanId)]));
        setReviews((prev) =>
          prev.filter((r) => String(r._id || r.id) !== String(cleanId))
        );
        setReviewToDelete(null);
        if (
          editingReview &&
          String(editingReview._id || editingReview.id) === String(cleanId)
        ) {
          setEditingReview(null);
          setIsModalOpen(false);
        }
        fetchReviews();
      } else {
        toast.error(res?.message || "Failed to delete review.");
      }
    } catch (err) {
      console.error("Delete review error:", err);
      const msg =
        err.response?.data?.message ||
        err.message ||
        "Failed to delete review. Please try again.";
      toast.error(msg);
    } finally {
      setIsDeletingReview(false);
    }
  };

  return (
    <section
      id="reviews"
      className="w-full max-w-full min-w-0 overflow-hidden flex flex-col justify-between"
    >
      {/* Heading */}
      <div className="text-center">
        <span className="font-semibold uppercase tracking-[4px] text-[#810c26]">
          Customer Reviews
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#08376c]">
          Loved By Our Customers
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-gray-600 leading-8 text-sm sm:text-base">
          Authentic feedback from real sweet lovers who ordered and enjoyed our
          handcrafted sweets.
        </p>
      </div>

      {/* Verified User Banner (if eligible or already reviewed) */}
      {authStorage.isAuthenticated() && (
        <div className="mt-5">
          {userExistingReview ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-3.5 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-emerald-900">
                    You reviewed this sweet on{" "}
                    {formatDate(
                      userExistingReview.createdAt || userExistingReview.date
                    )}
                  </p>
                  <div className="flex items-center gap-1 my-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={12}
                        fill={
                          s <= userExistingReview.rating
                            ? "#810c26"
                            : "transparent"
                        }
                        color="#810c26"
                      />
                    ))}
                    <span className="font-bold text-xs text-emerald-900 ml-1">
                      {userExistingReview.rating}.0
                    </span>
                  </div>
                  <p className="text-xs text-emerald-800 italic line-clamp-1">
                    "{userExistingReview.comment}"
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setEditingReview(userExistingReview);
                    setIsModalOpen(true);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#810c26] px-3.5 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-[#68091e] transition cursor-pointer"
                >
                  <PenLine size={12} />
                  Edit My Review
                </button>
                <button
                  type="button"
                  onClick={() => setReviewToDelete(userExistingReview)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600 shadow-sm hover:bg-red-100 hover:border-red-300 transition cursor-pointer"
                  title="Delete review"
                >
                  <Trash2 size={12} />
                  Delete
                </button>
              </div>
            </div>
          ) : purchaseStatus.checked && purchaseStatus.hasDelivered ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-3 flex items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-1.5 text-emerald-900 font-medium">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>
                  <strong>Verified Purchase:</strong> You can review this sweet!
                </span>
              </div>
              <button
                type="button"
                onClick={handleOpenReviewModal}
                className="shrink-0 font-bold text-emerald-800 hover:underline cursor-pointer"
              >
                Review Now →
              </button>
            </div>
          ) : null}
        </div>
      )}

      {/* Rating Summary & Breakdown Card */}
      <div className="mt-5 grid gap-3 sm:grid-cols-[180px_1fr] items-stretch">
        <div className="rounded-3xl bg-[#810c26] p-5 sm:p-6 text-center text-white flex flex-col justify-between items-center shadow-md">
        
          <div>
            <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight">
              {averageRating}
            </h2>

            <div className="mt-2.5 flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  fill={
                    star <= Math.round(Number(averageRating))
                      ? "white"
                      : "transparent"
                  }
                  color="white"
                />
              ))}
            </div>

            <p className="mt-2 text-xs opacity-90">
              Based on {totalReviews} {totalReviews === 1 ? "Review" : "Reviews"}
            </p>
          </div>

          <button
            type="button"
            onClick={handleOpenReviewModal}
            className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 font-manrope text-[8px] font-bold text-[#810c26] shadow-md transition-all duration-300 hover:bg-[#f9e4bf] hover:scale-105 active:scale-95 cursor-pointer"
          >
            <PenLine size={13} />
            Write a Review
          </button>
        </div>

        {/* Rating Breakdown Bars */}
        <div className="rounded-3xl border border-[#810c2610] bg-white p-4 sm:p-5 shadow-sm flex flex-col justify-center">
          {breakdown.map((item) => (
            <div key={item.star} className="mb-2 last:mb-0 flex items-center gap-2">
              <span className="w-9 font-semibold text-xs text-[#08376c]">
                {item.star} ★
              </span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-[#2a4d25] transition-all duration-500"
                  style={{ width: `${item.value}%` }}
                />
              </div>
              <span className="w-9 text-right text-xs font-medium text-gray-500">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Controls Header */}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-lg sm:text-xl font-bold text-[#08376c]">
            Customer Experiences ({totalReviews})
          </h3>
          {loadingReviews && (
            <Loader2 size={16} className="animate-spin text-[#810c26]" />
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleOpenReviewModal}
            className="inline-flex items-center gap-1 rounded-full border border-[#810c26]/20 bg-white px-3 py-1.5 font-manrope text-xs font-bold text-[#810c26] shadow-sm transition hover:bg-[#810c26] hover:text-white cursor-pointer"
          >
            <PenLine size={10} />
            Write Review
          </button>

          {/* Navigation Arrows for Desktop/Tablet */}
          <div className="hidden sm:flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous Reviews"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#810c2620] bg-white text-[#810c26] shadow-sm transition hover:bg-[#810c26] hover:text-white cursor-pointer active:scale-95 disabled:opacity-40"
              disabled={displayReviews.length <= 1}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next Reviews"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#810c2620] bg-white text-[#810c26] shadow-sm transition hover:bg-[#810c26] hover:text-white cursor-pointer active:scale-95 disabled:opacity-40"
              disabled={displayReviews.length <= 1}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Empty State when no reviews exist */}
      {displayReviews.length === 0 && !loadingReviews && (
        <div className="mt-4 rounded-3xl border border-dashed border-[#810c2620] bg-white p-7 text-center">
          <Quote size={32} className="mx-auto text-[#810c26]/20 mb-2" />
          <h4 className="font-bold text-base text-[#08376c]">
            No reviews yet for this product
          </h4>
          <p className="mt-1 text-xs text-gray-500 max-w-sm mx-auto">
            Have you tasted this sweet? Share your authentic review once your order arrives!
          </p>
          <button
            type="button"
            onClick={handleOpenReviewModal}
            className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#810c26] px-5 py-2 font-manrope text-xs font-bold text-white shadow-md transition hover:bg-[#68091e] cursor-pointer"
          >
            <PenLine size={14} />
            Write a Review
          </button>
        </div>
      )}

      {/* Reviews (Mobile View: Continuous Slider) */}
      {displayReviews.length > 0 && (
        <div className="sm:hidden overflow-hidden w-full py-3">
          <div className="flex animate-review-slider gap-3 w-max">
            {[...displayReviews, ...displayReviews].map((review, index) => {
              const revId = review._id || review.id || `mobile-${index}`;
              const revName =
                review.user?.name || review.name || "Verified Customer";
              const revDate = formatDate(review.createdAt || review.date);

              return (
                <div
                  key={`mobile-${revId}-${index}`}
                  className="w-[260px] shrink-0 rounded-3xl border border-[#810c2610] bg-white p-4 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-2.5 flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-bold text-xs text-[#08376c]">
                          {revName}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-[10px] text-gray-400">
                            {revDate}
                          </span>
                          {review.verifiedPurchase && (
                            <span className="inline-flex items-center gap-0.5 text-[9px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded">
                              <CheckCircle2 size={9} /> Verified
                            </span>
                          )}
                          {currentUserId &&
                            (review.user?._id === currentUserId ||
                              review.user === currentUserId ||
                              String(review.user) === String(currentUserId)) && (
                              <div className="flex items-center gap-1.5 ml-1">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setEditingReview(review);
                                    setIsModalOpen(true);
                                  }}
                                  className="inline-flex items-center gap-0.5 text-[9px] font-bold text-[#810c26] hover:underline cursor-pointer"
                                >
                                  <PenLine size={9} /> Edit
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setReviewToDelete(review)}
                                  className="inline-flex items-center gap-0.5 text-[9px] font-bold text-red-600 hover:underline cursor-pointer"
                                  title="Delete review"
                                >
                                  <Trash2 size={9} /> Delete
                                </button>
                              </div>
                            )}
                        </div>
                      </div>
                      <Quote size={20} className="text-[#810c26]/20 shrink-0" />
                    </div>

                    <div className="mb-2 flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={13}
                          fill={
                            star <= review.rating ? "#810c26" : "transparent"
                          }
                          color="#810c26"
                        />
                      ))}
                    </div>

                    <p className="leading-5 text-gray-600 text-xs line-clamp-3">
                      {review.comment}
                    </p>
                  </div>

                  {review.adminReply && (
                    <div className="mt-2 rounded-xl bg-[#810c26]/5 p-2 text-[10px] text-gray-600">
                      <span className="font-bold text-[#810c26]">Reply: </span>
                      {review.adminReply}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Reviews (Desktop / Tablet View) */}
      {displayReviews.length > 0 && (
        <div
          ref={scrollRef}
          className="hidden sm:flex mt-3 w-full max-w-full min-w-0 overflow-x-auto gap-3.5 pb-2 pt-1 px-1 snap-x snap-mandatory scrollbar-hide scroll-smooth"
        >
          {displayReviews.map((review, idx) => {
            const revId = review._id || review.id || `desk-${idx}`;
            const revName =
              review.user?.name || review.name || "Verified Customer";
            const revDate = formatDate(review.createdAt || review.date);

            return (
              <div
                key={revId}
                className="group w-[280px] sm:w-[300px] shrink-0 snap-start rounded-3xl border border-[#810c2610] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="mb-1 flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-[8px] sm:text-base text-[#08376c]">
                        {revName}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-400">{revDate}</span>
                        {review.verifiedPurchase && (
                          <span className="inline-flex items-center gap-1 text-[6px] sm:text-[6px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                            <CheckCircle2 size={11} /> Verified Buyer
                          </span>
                        )}
                        {currentUserId &&
                          (review.user?._id === currentUserId ||
                            review.user === currentUserId ||
                            String(review.user) === String(currentUserId)) && (
                            <div className="flex items-center gap-1.5">
                              <button
                                type="button"
                                onClick={() => {
                                  setEditingReview(review);
                                  setIsModalOpen(true);
                                }}
                                className="inline-flex items-center gap-1 rounded-full border border-[#810c26]/20 bg-white px-2 py-0.5 text-[10px] font-bold text-[#810c26] hover:bg-[#810c26] hover:text-white transition cursor-pointer"
                              >
                                <PenLine size={10} /> Edit
                              </button>
                              <button
                                type="button"
                                onClick={() => setReviewToDelete(review)}
                                className="inline-flex items-center gap-1 rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-600 hover:bg-red-600 hover:text-white transition cursor-pointer"
                                title="Delete this review"
                              >
                                <Trash2 size={10} /> Delete
                              </button>
                            </div>
                          )}
                      </div>
                    </div>
                    <Quote size={20} className="text-[#810c26]/20 shrink-0" />
                  </div>

                  <div className="mb-1 flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={15}
                        fill={star <= review.rating ? "#810c26" : "transparent"}
                        color="#810c26"
                      />
                    ))}
                  </div>

                  <p className="max-h-28 overflow-y-auto pr-1 leading-7 text-gray-600 text-xs sm:text-sm">
                    {review.comment}
                  </p>
                </div>

                {review.adminReply && (
                  <div className="mt-3 rounded-2xl bg-[#f9e4bf]/30 border-l-4 border-[#810c26] p-2.5 text-xs text-gray-700">
                    <span className="font-bold text-[#810c26]">
                      Store Response:{" "}
                    </span>
                    {review.adminReply}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ================= WRITE REVIEW MODAL ================= */}
      <WriteReviewModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingReview(null);
        }}
        product={product}
        existingReview={editingReview}
        onReviewSubmitted={handleReviewSubmitted}
        onReviewDeleted={(deletedId) => {
          setDeletedReviewIds((prev) => new Set([...prev, String(deletedId)]));
          setReviews((prev) =>
            prev.filter((r) => String(r._id || r.id) !== String(deletedId))
          );
          fetchReviews();
        }}
        verifiedPurchase={purchaseStatus.hasDelivered}
      />

      {/* ================= DELETE CONFIRMATION MODAL ================= */}
      {reviewToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm rounded-3xl border border-red-100 bg-[#fffdfa] p-6 shadow-2xl text-center">
            <button
              type="button"
              onClick={() => setReviewToDelete(null)}
              disabled={isDeletingReview}
              className="absolute right-4 top-4 rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="mx-auto flex h-13 w-13 items-center justify-center rounded-full bg-red-50 text-red-600 mb-3 border border-red-200">
              <Trash2 size={24} />
            </div>

            <h3 className="text-lg font-bold text-gray-900 font-manrope">
              Delete Review?
            </h3>

            <p className="mt-2 text-xs text-gray-600 leading-relaxed">
              Are you sure you want to permanently delete your review for{" "}
              <strong className="text-gray-900">
                {product?.name || "this sweet"}
              </strong>
              ? This action cannot be undone.
            </p>

            <div className="mt-5 flex items-center justify-center gap-2.5">
              <button
                type="button"
                onClick={() => setReviewToDelete(null)}
                disabled={isDeletingReview}
                className="w-full rounded-full border border-gray-300 px-4 py-2 font-manrope text-xs font-semibold text-gray-700 hover:bg-gray-100 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() =>
                  handleDeleteReview(reviewToDelete._id || reviewToDelete.id)
                }
                disabled={isDeletingReview}
                className="w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-red-600 px-4 py-2 font-manrope text-xs font-bold text-white shadow-md hover:bg-red-700 transition cursor-pointer disabled:opacity-50"
              >
                {isDeletingReview ? (
                  <>
                    <Loader2 size={13} className="animate-spin" />
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 size={13} />
                    Yes, Delete
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= NOT ELIGIBLE NOTICE MODAL ================= */}
      {notEligibleModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-3xl border border-[#603917]/15 bg-[#fffdfa] p-6 sm:p-7 shadow-2xl text-center">
            <button
              type="button"
              onClick={() => setNotEligibleModalOpen(false)}
              className="absolute right-5 top-5 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 text-amber-600 mb-4 border border-amber-200">
              <Lock size={24} />
            </div>

            <h3 className="font-cormorant text-2xl font-bold text-[#572340]">
              Verified Purchase Required
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-6">
              {notEligibleMessage ||
                "You can only review a product after purchasing and receiving it."}
            </p>

            <div className="mt-4 rounded-2xl bg-[#f9e4bf]/30 p-3 text-left flex items-start gap-2 border border-[#603917]/10">
              <AlertCircle size={15} className="text-[#8b183d] shrink-0 mt-0.5" />
              <p className="text-[11px] text-gray-600 leading-4">
                To guarantee 100% authenticity for all customers, reviews are
                restricted to verified buyers whose orders have been successfully
                delivered.
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <Link
                to="/my-orders"
                onClick={() => setNotEligibleModalOpen(false)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#8b183d] px-5 py-2.5 font-manrope text-xs font-bold text-white shadow-md hover:bg-[#68091e] transition cursor-pointer"
              >
                <ShoppingBag size={14} />
                Check My Orders
              </Link>
              <button
                type="button"
                onClick={() => setNotEligibleModalOpen(false)}
                className="w-full sm:w-auto rounded-full border border-gray-300 px-5 py-2.5 font-manrope text-xs font-semibold text-gray-600 hover:bg-gray-100 transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reviews;