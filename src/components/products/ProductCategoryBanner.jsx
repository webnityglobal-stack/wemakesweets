import { motion } from "framer-motion";
import {
  Candy,
  Gift,
  Leaf,
  Wheat,
  Package,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    title: "Sweets",
    subtitle: "Healthy & Delicious",
    icon: Candy,
    color: "#810c26",
  },
  {
    title: "Festivals",
    subtitle: "Premium Sweets",
    icon: Wheat,
    color: "#552b12",
  },
  {
    title: "Nuts",
    subtitle: "Premium Dry Fruits",
    icon: Leaf,
    color: "#2a4d25",
  },
  {
    title: "Gifting",
    subtitle: "Festive Hampers",
    icon: Gift,
    color: "#08376c",
  },
];

const stats = [
  {
    value: "50+",
    label: "Premium Products",
  },
  {
    value: "100%",
    label: "Vegetarian",
  },
  {
    value: "Fresh",
    label: "Everyday",
  },
  {
    value: "Made",
    label: "In India",
  },
];

export default function ProductCategoryBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff8ef] via-[#f9e4bf] to-white py-20">
      {/* Background Blur */}

      <div className="absolute left-0 top-10 h-64 w-64 rounded-full bg-[#810c2610] blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#08376c10] blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <span className="rounded-full bg-[#810c26]/10 px-5 py-2 text-sm font-semibold tracking-widest text-[#810c26] uppercase">
            Explore Categories
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#552b12] md:text-5xl">
            Find Your Favourite
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#552b12]/70">
            Every bite is crafted with love, premium ingredients and authentic
            Indian flavours.
          </p>
        </motion.div>

        {/* Categories */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * .1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-7 shadow-lg backdrop-blur-xl"
              >
                {/* Glow */}

                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-10 transition-all duration-500 group-hover:scale-150"
                  style={{
                    background: item.color,
                  }}
                />

                <div
                  className="mb-6 inline-flex rounded-2xl p-4 text-white shadow-lg"
                  style={{
                    background: item.color,
                  }}
                >
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-bold text-[#552b12]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[#552b12]/70">
                  {item.subtitle}
                </p>

                <button
                  className="mt-8 inline-flex items-center gap-2 font-semibold transition group-hover:gap-4"
                  style={{
                    color: item.color,
                  }}
                >
                  Explore

                  <ArrowRight size={18} />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: .3,
          }}
          className="mt-16 rounded-[32px] bg-[#08376c] p-8 text-white shadow-2xl"
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="text-center"
              >
                <Package
                  className="mx-auto mb-4 text-[#f9e4bf]"
                  size={30}
                />

                <h3 className="text-3xl font-black">
                  {item.value}
                </h3>

                <p className="mt-2 text-white/80">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}