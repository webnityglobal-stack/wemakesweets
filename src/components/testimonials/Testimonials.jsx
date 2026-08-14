import { Star, Quote } from "lucide-react";
import ScrollWavyUnderline from "../common/ScrollWavyUnderline";

const testimonials = [
  {
    id: 1,
    name: "Riya Sharma",
    city: "Delhi",
    rating: 5,
    image: "/customers/customer.png",
    review:
      "Absolutely loved the Date & Nut sweets. Fresh, healthy and beautifully packed. Will definitely order again!",
    color: "#8b183d",
  },
  {
    id: 2,
    name: "Aman Verma",
    city: "Noida",
    rating: 5,
    image: "/customers/customer.png",
    review:
      "The quality is amazing. Every sweet tastes premium and you can actually feel the natural ingredients.",
    color: "#603917",
  },
  {
    id: 3,
    name: "Neha Gupta",
    city: "Jaipur",
    rating: 5,
    image: "/customers/customer.png",
    review:
      "Perfect gifting option. Everyone in my family loved it. Beautiful packaging with incredible taste.",
    color: "#3e5a2c",
  },
  {
    id: 4,
    name: "Rahul Singh",
    city: "Lucknow",
    rating: 5,
    image: "/customers/customer.png",
    review:
      "Healthy snacks finally that actually taste delicious. Worth every rupee.",
    color: "#164984",
  },
];

const data = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-[#f9e4bf] via-[#f2ede1] to-[#f9e4bf] py-20">

      <div className="mb-14 text-center">

        <p className="text-sm font-semibold uppercase tracking-[6px] text-[#E35A7E]">
          Testimonials
        </p>

        <h2 className="cinzel text-2xl font-bold text-[#603917] md:text-3xl">
          Happy Customers
        </h2>

        {/* <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-[#DE6239]" /> */}
        <ScrollWavyUnderline/>

      </div>

      <div className="overflow-hidden">

        <div className="animate-slider flex w-max gap-8">

          {data.map((item, index) => (

            <div
              key={index}
              className="group relative flex h-[310px] w-[330px] md:h-[320px] md:w-[290px] flex-col rounded-[28px] p-8 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl md:w-[380px]"
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
                    className="fill-[#F4C02D] text-[#F4C02D]"
                  />
                ))}

              </div>

              <p className="mt-10 flex-1 text-center text-[14px] md:text-[15px] font-semibold leading-9 text-[#f9e4bf]">
                "{item.review}"
              </p>

              <div className="mt-8 border-t border-white/20 pt-5">

                <div className="flex items-center gap-4">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-14 w-14 rounded-full border-2 border-[#66BC9E] object-cover"
                  />

                  <div>

                    <h4 className="font-semibold text-[#f9e4bf]">
                      {item.name}
                    </h4>

                    <p className="text-sm text-[#f9e4bf]/75">
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