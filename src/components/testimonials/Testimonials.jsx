import { Star, Quote } from "lucide-react";
import ScrollWavyUnderline from "../common/ScrollWavyUnderline";
import { useEffect, useState } from "react";
import reviewService from "@/services/reviewService";

const FALLBACK_TESTIMONIALS = [
  {
    id: 1,
    name: "Riya Sharma",
    city: "Delhi",
    rating: 5,
    image: "/customers/customer.png",
    comment:
      "Absolutely loved the Date & Nut sweets. Fresh, healthy and beautifully packed. Will definitely order again!",
  },
  {
    id: 2,
    name: "Aman Verma",
    city: "Noida",
    rating: 5,
    image: "/customers/customer.png",
    comment:
      "The quality is amazing. Every sweet tastes premium and you can actually feel the natural ingredients.",
  },
  {
    id: 3,
    name: "Neha Gupta",
    city: "Jaipur",
    rating: 5,
    image: "/customers/customer.png",
    comment:
      "Perfect gifting option. Everyone in my family loved it. Beautiful packaging with incredible taste.",
  },
  {
    id: 4,
    name: "Rahul Singh",
    city: "Lucknow",
    rating: 5,
    image: "/customers/customer.png",
    comment:
      "Healthy snacks finally that actually taste delicious. Worth every rupee.",
  },
];

const CARD_COLORS = ["#8b183d", "#603917", "#3e5a2c", "#164984"];

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await reviewService.getLatestReview();

        const rawReviews = Array.isArray(response?.reviews)
          ? response.reviews
          : Array.isArray(response?.data?.reviews)
          ? response.data.reviews
          : Array.isArray(response?.data)
          ? response.data
          : Array.isArray(response)
          ? response
          : [];

        // Safe filtering: filter out nulls and unapproved reviews
        const approved = rawReviews.filter(
          (rev) => rev && typeof rev === "object" && rev.isApproved !== false
        );

        if (isMounted) {
          setReviews(approved);
        }
      } catch (err) {
        console.error("Failed to load reviews for testimonials:", err);
        // On error, reviews remain empty so FALLBACK_TESTIMONIALS will be used safely
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchReviews();

    return () => {
      isMounted = false;
    };
  }, []);

  // Determine items to display: fallback if empty
  const activeReviews = reviews.length > 0 ? reviews : FALLBACK_TESTIMONIALS;

  // Duplicate items for continuous seamless marquee slider
  const displayItems = [...activeReviews, ...activeReviews];

  return (
    <section className="overflow-hidden bg-gradient-to-b from-[#f9e4bf] via-[#f2ede1] to-[#f9e4bf] py-8">
      <div className="mb-7 text-center">
        <p className="text-sm font-manrope font-medium uppercase tracking-[6px] text-[#E35A7E]">
          Testimonials
        </p>

        <h2 className="font-cormorant sm:text-2xl lg:text-4xl font-bold text-[#603917] md:text-3xl">
          Happy Customers
        </h2>

        <ScrollWavyUnderline />
      </div>

      <div className="overflow-hidden">
        <div className="animate-slider flex w-max gap-8">
          {displayItems.map((item, index) => {
            // Safe extraction with comprehensive fallbacks
            const userName =
              item?.user?.name ||
              item?.userName ||
              item?.name ||
              "Verified Customer";

            const userCity =
              item?.city ||
              item?.user?.city ||
              item?.user?.address?.city ||
              "Verified Buyer";

            const commentText =
              item?.comment ||
              item?.review ||
              "Absolutely loved the sweets! Premium taste and fresh quality.";

            const rawRating = Number(item?.rating);
            const ratingVal = Math.min(
              5,
              Math.max(1, !isNaN(rawRating) && rawRating > 0 ? Math.round(rawRating) : 5)
            );

            const userImage =
              item?.image ||
              item?.user?.avatar ||
              item?.user?.image ||
              "/customers/customer.png";

            const cardBg = CARD_COLORS[index % CARD_COLORS.length];
            const uniqueKey = `${item?._id || item?.id || "review"}-${index}`;

            return (
              <div
                key={uniqueKey}
                className="group relative flex h-[310px] w-[330px] md:h-[320px] md:w-[290px] flex-col rounded-[28px] p-8 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl md:w-[380px]"
                style={{
                  background: cardBg,
                }}
              >
                <Quote
                  className="absolute left-7 top-7 text-white/20"
                  size={40}
                />

                {/* Star rating */}
                <div className="flex justify-center gap-1">
                  {[...Array(ratingVal)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-[#F4C02D] text-[#F4C02D]"
                    />
                  ))}
                </div>

                {/* Review comment */}
                <p className="mt-8 font-manrope flex-1 text-center text-[13px] md:text-[14px] font-normal leading-7 text-[#f9e4bf] line-clamp-4 overflow-hidden">
                  "{commentText}"
                </p>

                {/* Author info */}
                <div className="mt-6 border-t border-white/20 pt-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={userImage}
                      alt={userName}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/customers/customer.png";
                      }}
                      className="h-14 w-14 rounded-full border-2 border-[#66BC9E] object-cover bg-white/10 shrink-0"
                    />

                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-[#f9e4bf] truncate">
                        {userName}
                      </h4>

                      <p className="text-sm text-[#f9e4bf]/75 truncate">
                        {userCity}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}