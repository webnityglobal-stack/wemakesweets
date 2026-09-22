import { useState, useEffect } from "react";
import { Star, X, Loader2, CheckCircle2, AlertCircle, ShoppingBag, Edit3 } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import reviewService from "@/services/reviewService";

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

const WriteReviewModal = ({
  isOpen,
  onClose,
  product,
  existingReview = null,
  onReviewSubmitted,
  verifiedPurchase = true,
}) => {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isEditMode = Boolean(existingReview?._id);

  // Initialize form with existingReview values if in edit mode
  useEffect(() => {
    if (isOpen) {
      if (existingReview) {
        setRating(Number(existingReview.rating) || 5);
        setComment(existingReview.comment || "");
      } else {
        setRating(5);
        setComment("");
      }
      setHoverRating(0);
      setErrorMessage("");
    }
  }, [existingReview, isOpen]);

  if (!isOpen) return null;

  const productId =
    product?._id ||
    product?.id ||
    existingReview?.product ||
    existingReview?.productId;
  const productName = product?.name || "Handcrafted Sweet";
  const productImage =
    (Array.isArray(product?.images) && product.images[0]) ||
    product?.image ||
    "/product1.webp";

  const handleSubmit = async (e) => {
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
      setErrorMessage("");

      let res;
      if (isEditMode) {
        // Update review route: PUT /reviews/update/:reviewId
        res = await reviewService.updateReview(existingReview._id, {
          rating,
          comment: comment.trim(),
        });
      } else {
        if (!productId) {
          toast.error("Product ID is missing.");
          setIsSubmitting(false);
          return;
        }
        // Add review route: POST /reviews/add
        res = await reviewService.addReview({
          productId,
          rating,
          comment: comment.trim(),
        });
      }

      if (res?.success) {
        toast.success(
          res.message ||
            (isEditMode
              ? "Review updated successfully!"
              : "Review added successfully!")
        );
        if (typeof onReviewSubmitted === "function") {
          onReviewSubmitted(res.review);
        }
        setComment("");
        setRating(5);
        onClose();
      } else {
        const msg =
          res?.message ||
          (isEditMode
            ? "Failed to update review."
            : "Failed to submit review.");
        setErrorMessage(msg);
        toast.error(msg);
      }
    } catch (err) {
      console.error("Failed to submit/update review:", err);
      const msg =
        err.response?.data?.message ||
        err.message ||
        "Failed to save review. Please try again.";
      setErrorMessage(msg);
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isPurchaseRequiredError =
    errorMessage.toLowerCase().includes("purchas") ||
    errorMessage.toLowerCase().includes("receiv");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-3xl border border-[#810c2620] bg-[#fffdfa] p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={() => !isSubmitting && onClose()}
          disabled={isSubmitting}
          className="absolute right-5 top-5 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition cursor-pointer"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <span className="font-manrope text-[11px] font-semibold uppercase tracking-[3px] text-[#810c26]">
              {isEditMode ? "Update Feedback" : "Customer Review"}
            </span>
            {isEditMode && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800">
                <Edit3 size={10} /> Editing
              </span>
            )}
          </div>
          <h3 className="mt-1 font-cormorant text-2xl sm:text-3xl font-bold text-[#08376c]">
            {isEditMode ? "Update Your Review" : "Rate & Review"}
          </h3>

          {/* Product card snippet */}
          <div className="mt-3 flex items-center gap-3 rounded-2xl border border-[#603917]/10 bg-[#f9e4bf]/20 p-3">
            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-[#603917]/10 bg-white">
              <img
                src={productImage}
                alt={productName}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/product1.webp";
                }}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-cormorant text-base font-bold text-[#572340] truncate">
                {productName}
              </h4>
              {verifiedPurchase && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                  <CheckCircle2 size={12} /> Verified Purchase
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Error message banner */}
        {errorMessage && (
          <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-xs font-medium text-red-800">
            <div className="flex items-start gap-2.5">
              <AlertCircle size={16} className="text-red-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-bold text-red-900">{errorMessage}</p>
                {isPurchaseRequiredError && (
                  <p className="text-red-700/90 text-[11px] leading-4">
                    Reviews can only be written for products you have purchased and received.
                  </p>
                )}
              </div>
            </div>
            {isPurchaseRequiredError && (
              <div className="mt-3 flex items-center gap-2 pt-2 border-t border-red-200/60">
                <Link
                  to="/my-orders"
                  onClick={onClose}
                  className="inline-flex items-center gap-1 font-manrope text-[11px] font-bold text-red-800 hover:underline"
                >
                  <ShoppingBag size={12} /> View My Orders
                </Link>
              </div>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Star Rating selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#08376c] mb-2 font-manrope">
              Your Rating
            </label>
            <div className="flex items-center gap-1.5 sm:gap-2">
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
                htmlFor="review-comment-input"
                className="block text-xs font-bold uppercase tracking-wider text-[#08376c] font-manrope"
              >
                Your Review
              </label>
              <span className="text-xs text-gray-400 font-mono">
                {comment.length}/500
              </span>
            </div>
            <textarea
              id="review-comment-input"
              value={comment}
              onChange={(e) => setComment(e.target.value.slice(0, 500))}
              placeholder="What did you like about this sweet? How was the taste, freshness, and packaging?"
              rows={4}
              required
              disabled={isSubmitting}
              className="w-full rounded-2xl border border-[#810c2625] bg-white p-4 font-manrope text-sm text-gray-800 placeholder-gray-400 shadow-sm focus:border-[#810c26] focus:outline-none focus:ring-2 focus:ring-[#810c26]/20 disabled:opacity-50"
            />
          </div>

          {/* Verified purchase policy notice */}
          <div className="rounded-2xl bg-[#810c26]/5 p-3 flex items-start gap-2.5">
            <CheckCircle2
              size={16}
              className="text-[#810c26] shrink-0 mt-0.5"
            />
            <p className="text-xs text-gray-600 leading-5">
              Only verified purchasers who have received this sweet can publish or update a review.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 transition cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !comment.trim()}
              className="inline-flex items-center gap-2 rounded-full bg-[#810c26] px-6 py-2.5 text-sm font-bold text-white shadow-md hover:bg-[#68091e] transition disabled:opacity-60 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  {isEditMode ? "Updating..." : "Submitting..."}
                </>
              ) : isEditMode ? (
                "Update Review"
              ) : (
                "Submit Review"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WriteReviewModal;
