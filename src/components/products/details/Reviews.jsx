import { useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Reviews = ({ product }) => {
  const scrollRef = useRef(null);
  const totalReviews = product.reviews?.length || 0;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full max-w-full min-w-0 overflow-hidden">

      {/* Heading */}

      <div className="text-center">

        <span className="font-semibold uppercase tracking-[4px] text-[#810c26]">
          Customer Reviews
        </span>

        <h2 className="mt-4 text-4xl font-bold text-[#08376c]">
          Loved By Our Customers
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600 leading-8">
          Thousands of customers trust our products for their taste,
          freshness and premium quality.
        </p>

      </div>

      {/* Rating Summary */}

      <div className=" mt-5 grid gap-8 lg:grid-cols-[350px_1fr]">

        <div className="rounded-3xl bg-[#810c26] p-10 text-center text-white">

          <h2 className="text-2xl font-bold">
            {product.rating}
          </h2>

          <div className="mt-4 flex justify-center gap-1">

            {[1,2,3,4,5].map((star)=>(
              <Star
                key={star}
                size={18}
                fill="white"
                color="white"
              />
            ))}

          </div>

          <p className="mt-5 text-[14px]">
            Based on {totalReviews} Reviews
          </p>

        </div>

        {/* Rating Breakdown */}

        <div className="h-fit rounded-3xl border border-[#810c2610] bg-white p-4 shadow-sm">

          {[
            { star: 5, value: 90 },
            { star: 4, value: 70 },
            { star: 3, value: 25 },
            { star: 2, value: 8 },
            { star: 1, value: 2 },
          ].map((item) => (

            <div
              key={item.star}
              className="mb-2 flex items-center gap-1"
            >

              <span className="w-12 font-semibold text-[#08376c]">
                {item.star} ★
              </span>

              <div className="h-3 flex-1 overflow-hidden rounded-full bg-gray-200">

                <div
                  className="h-full rounded-full bg-[#2a4d25]"
                  style={{ width: `${item.value}%` }}
                />

              </div>

              <span className="w-10 text-gray-500">
                {item.value}%
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* Reviews Controls Header */}
      <div className="mt-8 flex items-center justify-between">
        <h3 className="text-xl font-bold text-[#08376c]">
          Customer Experiences ({totalReviews})
        </h3>

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

      {/* Reviews (Horizontal Slider on Both Desktop and Mobile) */}

      <div
        ref={scrollRef}
        className="mt-4 flex w-full max-w-full min-w-0 overflow-x-auto gap-5 pb-4 pt-1 px-1 snap-x snap-mandatory scrollbar-hide scroll-smooth"
      >

        {product.reviews?.map((review) => (

          <div
            key={review.id}
            className="group shrink-0 w-[85%] xs:w-[75%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-14px)] snap-start rounded-3xl border border-[#810c2610] bg-white p-6 sm:p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between"
          >

            <div>
              <div className="mb-4 sm:mb-6 flex items-center justify-between">

                <div>

                  <h3 className="font-bold text-[#08376c]">
                    {review.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {review.date}
                  </p>

                </div>

                <Quote
                  size={36}
                  className="text-[#810c26]/20"
                />

              </div>

              <div className="mb-4 sm:mb-5 flex gap-1">

                {[1,2,3,4,5].map((star)=>(
                  <Star
                    key={star}
                    size={18}
                    fill={
                      star <= review.rating
                        ? "#810c26"
                        : "transparent"
                    }
                    color="#810c26"
                  />
                ))}

              </div>

              <p className="md:max-h-32 md:overflow-y-auto md:pr-1 leading-7 sm:leading-8 text-gray-600 text-sm sm:text-base">
                {review.comment}
              </p>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Reviews;