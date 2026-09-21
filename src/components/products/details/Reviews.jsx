import { useState, useEffect, useRef } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  PenLine,
  X,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import reviewService from "../../../services/reviewService";
import { authStorage } from "../../../utils/authStorage";

const ratingLabel = (num) => {
  switch (num) {
    case 5:
      return "5.0 - Excellent";
    case 4:
      return "4.0 - Very Good";
    case 3:
      return "3.0 - Good";
    case 2:
      return "2.0 - Fair";
    case 1:
      return "1.0 - Poor";
    default:
      return "";
  }
};

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

  const [reviews, setReviews] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(false);

  // Review Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const productId = product?._id || product?.id;

  // Fetch real product reviews
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

  // Fallback to static mockup if no real reviews yet
  const hasRealReviews = reviews.length > 0;
  const displayReviews = hasRealReviews
    ? reviews
    : Array.isArray(product?.reviews)
    ? product.reviews
    : [];

  const totalReviews = hasRealReviews
    ? reviews.length
    : Array.isArray(product?.reviews)
    ? product.reviews.length
    : 0;

  // Compute average rating
  const averageRating = hasRealReviews
    ? (
        reviews.reduce((acc, r) => acc + (Number(r.rating) || 5), 0) /
        reviews.length
      ).toFixed(1)
    : product?.rating
    ? Number(product.rating).toFixed(1)
    : "5.0";

  // Compute percentage breakdown for 5, 4, 3, 2, 1 stars
  const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  if (hasRealReviews) {
    reviews.forEach((r) => {
      const star = Math.min(5, Math.max(1, Math.round(Number(r.rating) || 5)));
      ratingCounts[star] = (ratingCounts[star] || 0) + 1;
    });
  }

  const breakdown = [
    {
      star: 5,
      value: hasRealReviews
        ? Math.round((ratingCounts[5] / totalReviews) * 100)
        : 90,
    },
    {
      star: 4,
      value: hasRealReviews
        ? Math.round((ratingCounts[4] / totalReviews) * 100)
        : 70,
    },
    {
      star: 3,
      value: hasRealReviews
        ? Math.round((ratingCounts[3] / totalReviews) * 100)
        : 25,
    },
    {
      star: 2,
      value: hasRealReviews
        ? Math.round((ratingCounts[2] / totalReviews) * 100)
        : 8,
    },
    {
      star: 1,
      value: hasRealReviews
        ? Math.round((ratingCounts[1] / totalReviews) * 100)
        : 2,
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleOpenReviewModal = () => {
    if (!authStorage.isAuthenticated()) {
      toast.error("Please login to write a review.", {
        action: {
          label: "Login",
          onClick: () =>
            navigate("/login", { state: { from: window.location.pathname } }),
        },
      });
      return;
    }
    setSubmitError("");
    setIsModalOpen(true);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!comment.trim()) {
      toast.error("Please enter your review comment.");
      return;
    }
    if (rating < 1 || rating > 5) {
      toast.error("Please select a rating between 1 and 5 stars.");
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitError("");

      const res = await reviewService.addReview({
        productId,
        rating,
        comment: comment.trim(),
      });

      if (res?.success) {
        toast.success(res.message || "Review added successfully!");
        setIsModalOpen(false);
        setComment("");
        setRating(5);
        await fetchReviews();
      } else {
        const msg = res?.message || "Failed to add review.";
        setSubmitError(msg);
        toast.error(msg);
      }
    } catch (err) {
      console.error("Submit review error:", err);
      const msg =
        err.response?.data?.message ||
        "Failed to submit review. Please try again.";
      setSubmitError(msg);
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reviews" className="w-full max-w-full min-w-0 overflow-hidden">
      {/* Heading */}
      <div className="text-center">
        <span className="font-semibold uppercase tracking-[4px] text-[#810c26]">
          Customer Reviews
        </span>
        <h2 className="mt-4 text-4xl font-bold text-[#08376c]">
          Loved By Our Customers
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 leading-8">
          Thousands of customers trust our products for their taste, freshness
          and premium quality.
        </p>
      </div>

      {/* Rating Summary & Breakdown Card */}
      <div className="mt-5 grid gap-8 lg:grid-cols-[350px_1fr]">
        <div className="rounded-3xl bg-[#810c26] p-8 sm:p-10 text-center text-white flex flex-col justify-between items-center shadow-md">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              {averageRating}
            </h2>

            <div className="mt-4 flex justify-center gap-1.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={20}
                  fill={star <= Math.round(Number(averageRating)) ? "white" : "transparent"}
                  color="white"
                />
              ))}
            </div>

            <p className="mt-3 text-sm opacity-90">
              Based on {totalReviews} {totalReviews === 1 ? "Review" : "Reviews"}
            </p>
          </div>

          <button
            type="button"
            onClick={handleOpenReviewModal}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-manrope text-sm font-bold text-[#810c26] shadow-lg transition-all duration-300 hover:bg-[#f9e4bf] hover:scale-105 active:scale-95 cursor-pointer"
          >
            <PenLine size={16} />
            Write a Review
          </button>
        </div>

        {/* Rating Breakdown Bars */}
        <div className="h-fit rounded-3xl border border-[#810c2610] bg-white p-6 shadow-sm">
          {breakdown.map((item) => (
            <div key={item.star} className="mb-3 flex items-center gap-2">
              <span className="w-12 font-semibold text-sm text-[#08376c]">
                {item.star} ★
              </span>
              <div className="h-3 flex-1 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-[#2a4d25] transition-all duration-500"
                  style={{ width: `${item.value}%` }}
                />
              </div>
              <span className="w-12 text-right text-xs font-medium text-gray-500">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Controls Header */}
      <div className="mt-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-bold text-[#08376c]">
            Customer Experiences ({totalReviews})
          </h3>
          {loadingReviews && (
            <Loader2 size={16} className="animate-spin text-[#810c26]" />
          )}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleOpenReviewModal}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#810c26]/20 bg-white px-4 py-2 font-manrope text-xs font-bold text-[#810c26] shadow-sm transition hover:bg-[#810c26] hover:text-white cursor-pointer"
          >
            <PenLine size={14} />
            Write Review
          </button>

          {/* Navigation Arrows for Desktop/Tablet */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous Reviews"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#810c2620] bg-white text-[#810c26] shadow-sm transition hover:bg-[#810c26] hover:text-white cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next Reviews"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#810c2620] bg-white text-[#810c26] shadow-sm transition hover:bg-[#810c26] hover:text-white cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Empty State when no reviews exist */}
      {displayReviews.length === 0 && !loadingReviews && (
        <div className="mt-6 rounded-3xl border border-dashed border-[#810c2620] bg-white p-10 text-center">
          <Quote size={40} className="mx-auto text-[#810c26]/20 mb-3" />
          <h4 className="font-bold text-lg text-[#08376c]">
            No reviews yet for this product
          </h4>
          <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
            Have you tasted this sweet? Share your authentic review to help others!
          </p>
          <button
            type="button"
            onClick={handleOpenReviewModal}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#810c26] px-6 py-2.5 font-manrope text-sm font-bold text-white shadow-md transition hover:bg-[#68091e] cursor-pointer"
          >
            <PenLine size={16} />
            Be the First to Review
          </button>
        </div>
      )}

      {/* Reviews (Mobile View: Continuous Slider) */}
      {displayReviews.length > 0 && (
        <div className="sm:hidden overflow-hidden w-full py-4">
          <div className="flex animate-review-slider gap-4 w-max">
            {[...displayReviews, ...displayReviews].map((review, index) => {
              const revId = review._id || review.id || `rev-${index}`;
              const revName =
                review.name || review.user?.name || "Customer";
              const revDate = formatDate(review.createdAt || review.date);

              return (
                <div
                  key={`mobile-${revId}-${index}`}
                  className="w-[280px] shrink-0 rounded-3xl border border-[#810c2610] bg-white p-5 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-3 flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-bold text-sm text-[#08376c]">
                          {revName}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-[11px] text-gray-400">
                            {revDate}
                          </span>
                          {review.verifiedPurchase && (
                            <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded">
                              <CheckCircle2 size={10} /> Verified
                            </span>
                          )}
                        </div>
                      </div>
                      <Quote size={24} className="text-[#810c26]/20 shrink-0" />
                    </div>

                    <div className="mb-3 flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          fill={star <= review.rating ? "#810c26" : "transparent"}
                          color="#810c26"
                        />
                      ))}
                    </div>

                    <p className="leading-6 text-gray-600 text-xs line-clamp-4">
                      {review.comment}
                    </p>
                  </div>

                  {review.adminReply && (
                    <div className="mt-3 rounded-xl bg-[#810c26]/5 p-2 text-[11px] text-gray-600">
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

      {/* Reviews (Desktop / Tablet View: Interactive with scroll buttons) */}
      {displayReviews.length > 0 && (
        <div
          ref={scrollRef}
          className="hidden sm:flex mt-4 w-full max-w-full min-w-0 overflow-x-auto gap-5 pb-4 pt-1 px-1 snap-x snap-mandatory scrollbar-hide scroll-smooth"
        >
          {displayReviews.map((review, idx) => {
            const revId = review._id || review.id || `desk-${idx}`;
            const revName =
              review.name || review.user?.name || "Customer";
            const revDate = formatDate(review.createdAt || review.date);

            return (
              <div
                key={revId}
                className="group shrink-0 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-14px)] snap-start rounded-3xl border border-[#810c2610] bg-white p-6 sm:p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-bold text-base text-[#08376c]">
                        {revName}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-400">
                          {revDate}
                        </span>
                        {review.verifiedPurchase && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                            <CheckCircle2 size={11} /> Verified Buyer
                          </span>
                        )}
                      </div>
                    </div>
                    <Quote size={32} className="text-[#810c26]/20 shrink-0" />
                  </div>

                  <div className="mb-4 flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        fill={star <= review.rating ? "#810c26" : "transparent"}
                        color="#810c26"
                      />
                    ))}
                  </div>

                  <p className="max-h-32 overflow-y-auto pr-1 leading-7 text-gray-600 text-sm">
                    {review.comment}
                  </p>
                </div>

                {review.adminReply && (
                  <div className="mt-4 rounded-2xl bg-[#f9e4bf]/30 border-l-4 border-[#810c26] p-3 text-xs text-gray-700">
                    <span className="font-bold text-[#810c26]">Store Response: </span>
                    {review.adminReply}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ================= WRITE REVIEW MODAL ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl border border-[#810c2620] bg-[#fffdfa] p-6 sm:p-8 shadow-2xl">
            {/* Close button */}
            <button
              type="button"
              onClick={() => !isSubmitting && setIsModalOpen(false)}
              disabled={isSubmitting}
              className="absolute right-5 top-5 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition cursor-pointer"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="mb-6">
              <span className="font-semibold text-xs uppercase tracking-[3px] text-[#810c26]">
                Share Your Feedback
              </span>
              <h3 className="mt-1 text-2xl font-bold text-[#08376c]">
                Write a Review
              </h3>
              <p className="mt-1 text-sm text-gray-600 line-clamp-1 font-medium">
                {product?.name}
              </p>
            </div>

            {/* Error banner if any */}
            {submitError && (
              <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-xs font-medium text-red-700">
                ⚠️ {submitError}
              </div>
            )}

            <form onSubmit={handleSubmitReview} className="space-y-5">
              {/* Star Rating selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#08376c] mb-2">
                  Your Rating
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const activeStar = hoverRating || rating;
                    return (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 transition-transform hover:scale-125 focus:outline-none cursor-pointer"
                        aria-label={`${star} star`}
                      >
                        <Star
                          size={32}
                          fill={star <= activeStar ? "#810c26" : "transparent"}
                          color="#810c26"
                          className="transition-colors duration-150"
                        />
                      </button>
                    );
                  })}
                  <span className="ml-2 font-manrope text-sm font-semibold text-[#810c26]">
                    {ratingLabel(hoverRating || rating)}
                  </span>
                </div>
              </div>

              {/* Comment field */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="review-comment"
                    className="block text-xs font-bold uppercase tracking-wider text-[#08376c]"
                  >
                    Your Review
                  </label>
                  <span className="text-xs text-gray-400">
                    {comment.length}/500
                  </span>
                </div>
                <textarea
                  id="review-comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value.slice(0, 500))}
                  placeholder="What did you like about this sweet? How was the taste, freshness, and packaging?"
                  rows={4}
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-2xl border border-[#810c2625] bg-white p-4 font-manrope text-sm text-gray-800 placeholder-gray-400 shadow-sm focus:border-[#810c26] focus:outline-none focus:ring-2 focus:ring-[#810c26]/20 disabled:opacity-50"
                />
              </div>

              {/* Verified purchase notice */}
              <div className="rounded-2xl bg-[#810c26]/5 p-3 flex items-start gap-2.5">
                <CheckCircle2
                  size={16}
                  className="text-[#810c26] shrink-0 mt-0.5"
                />
                <p className="text-xs text-gray-600 leading-5">
                  Reviews can be submitted by verified purchasers of this item once delivered.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  disabled={isSubmitting}
                  className="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-full bg-[#810c26] px-6 py-2.5 text-sm font-bold text-white shadow-md hover:bg-[#68091e] transition disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Review"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reviews;