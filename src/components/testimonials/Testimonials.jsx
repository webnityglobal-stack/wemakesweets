import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Riya Sharma",
    city: "Delhi",
    rating: 5,
    image: "/customers/customer.png",
    review:
      "Absolutely loved the Date & Nut sweets. Fresh, healthy and beautifully packed. Will definitely order again!",
    color: "#810c26",
  },
  {
    id: 2,
    name: "Aman Verma",
    city: "Noida",
    rating: 5,
    image: "/customers/customer.png",
    review:
      "The quality is amazing. Every sweet tastes premium and you can actually feel the natural ingredients.",
    color: "#552b12",
  },
  {
    id: 3,
    name: "Neha Gupta",
    city: "Jaipur",
    rating: 5,
    image: "/customers/customer.png",
    review:
      "Perfect gifting option. Everyone in my family loved it. Beautiful packaging with incredible taste.",
    color: "#2a4d25",
  },
  {
    id: 4,
    name: "Rahul Singh",
    city: "Lucknow",
    rating: 5,
    image: "/customers/customer.png",
    review:
      "Healthy snacks finally that actually taste delicious. Worth every rupee.",
    color: "#08376c",
  },
];

const data = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="bg-[#f9e4bf] py-20 overflow-hidden">

      <div className="text-center mb-14">

        <p className="uppercase tracking-[6px] text-[#810c26] text-sm font-semibold">
          Testimonials
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-[#552b12] cinzel">
          Happy Customers
        </h2>

        <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-[#d47a1f]" />

      </div>

      <div className="overflow-hidden">

        <div className="animate-slider flex w-max gap-8">

          {data.map((item, index) => (

            <div
              key={index}
              className="group relative flex h-[390px] w-[330px] md:w-[380px] flex-col rounded-[28px] p-8 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              style={{
                background: item.color,
              }}
            >
              <Quote
                className="absolute left-7 top-7 text-white/20"
                size={60}
              />

              <div className="flex justify-center gap-1">

                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <p className="mt-10 flex-1 text-center text-xl leading-9 text-[#f9e4bf] font-semibold">
                "{item.review}"
              </p>

              <div className="mt-8 border-t border-white/20 pt-5">

                <div className="flex items-center gap-4">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-14 w-14 rounded-full object-cover border-2 border-[#f9e4bf]"
                  />

                  <div>

                    <h4 className="font-semibold text-[#f9e4bf]">
                      {item.name}
                    </h4>

                    <p className="text-sm text-white/70">
                      {item.city}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}