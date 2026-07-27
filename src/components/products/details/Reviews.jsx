import { Star, Quote } from "lucide-react";

const Reviews = ({ product }) => {
  const totalReviews = product.reviews.length;

  return (
    <section className="mt-24">

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

      <div className="mt-14 grid gap-8 lg:grid-cols-[350px_1fr]">

        <div className="rounded-3xl bg-[#810c26] p-10 text-center text-white">

          <h2 className="text-6xl font-bold">
            {product.rating}
          </h2>

          <div className="mt-4 flex justify-center gap-1">

            {[1,2,3,4,5].map((star)=>(
              <Star
                key={star}
                size={22}
                fill="white"
                color="white"
              />
            ))}

          </div>

          <p className="mt-5 text-lg">
            Based on {totalReviews} Reviews
          </p>

        </div>

        {/* Rating Breakdown */}

        <div className="rounded-3xl border border-[#810c2610] bg-white p-8 shadow-sm">

          {[
            { star: 5, value: 90 },
            { star: 4, value: 70 },
            { star: 3, value: 25 },
            { star: 2, value: 8 },
            { star: 1, value: 2 },
          ].map((item) => (

            <div
              key={item.star}
              className="mb-6 flex items-center gap-4"
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

      {/* Reviews */}

      <div className="mt-16 grid gap-8 lg:grid-cols-3">

        {product.reviews.map((review) => (

          <div
            key={review.id}
            className="group rounded-3xl border border-[#810c2610] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            <div className="mb-6 flex items-center justify-between">

              <div>

                <h3 className="font-bold text-[#08376c]">
                  {review.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {review.date}
                </p>

              </div>

              <Quote
                size={40}
                className="text-[#810c26]/20"
              />

            </div>

            <div className="mb-5 flex gap-1">

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

            <p className="leading-8 text-gray-600">
              {review.comment}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Reviews;