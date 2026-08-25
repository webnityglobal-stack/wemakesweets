import { motion } from "framer-motion";
import {
  ChevronDown,
  Sparkles,
  Leaf,
  Gift,
  Candy,
  Wheat,
} from "lucide-react";

const categories = [
  {
    name: "Sweets",
    color: "#810c26",
    icon: Candy,
  },
  {
    name: "Festivals",
    color: "#552b12",
    icon: Wheat,
  },
  {
    name: "Nuts",
    color: "#2a4d25",
    icon: Leaf,
  },
  {
    name: "Gifting",
    color: "#08376c",
    icon: Gift,
  },
];

export default function ProductHero() {
  return (
    <section className="relative overflow-hidden bg-[#f9e4bf]">
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#fff7ec] via-[#f9e4bf] to-[#fff7ec]" />

      {/* Decorative Circles */}

      <motion.div
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#810c2610] blur-3xl"
      />

      <motion.div
        animate={{
          y: [20, -20, 20],
          rotate: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 9,
        }}
        className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#08376c10] blur-3xl"
      />
 
      {/* Floating Leaves */}

      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute left-10 top-20 text-[#2a4d25]/20"
      >
        <Leaf size={90} />
      </motion.div>

      <motion.div
        animate={{ y: [10, -15, 10] }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute right-16 top-40 text-[#810c26]/20"
      >
        <Leaf size={70} />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 py-8 md:py-8 ">
        {/* Small Label */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#810c26]/20 bg-white/70 px-5 py-2 backdrop-blur">
            <Sparkles
              className="text-[#810c26]"
              size={18}
            />

            <span className="font-medium text-[#552b12]">
              Premium Collection
            </span>
          </div>
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: .2,
            duration: .6,
          }}
          className="mt-4 md:mt-8 text-center text-3xl font-black tracking-tight text-[#552b12] md:text-5xl"
        >
          SHOP OUR
          <br />

          <span className="text-[#810c26]">
            COLLECTION
          </span>
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: .4,
          }}
          className="mx-auto mt-4 md:mt-8 max-w-3xl text-center text-[15px] md:text-lg leading-8 text-[#552b12]/80"
        >
          Crafted with premium ingredients and inspired by Indian traditions,
          explore our delicious sweets, healthy snacks and gifting hampers.
        </motion.p>

        {/* Features */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: .6,
          }}
          className="mt-5 flex flex-wrap justify-center gap-4"
        >
          {[
            "Made In India",
            "Premium Ingredients",
            "Healthy Choices",
            "Fresh Everyday",
          ].map((item) => (
            <div
              key={item}
              className="rounded-full bg-white px-5 py-3 shadow"
            >
              <span className="font-semibold text-[#552b12]">
                ✓ {item}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Categories */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: .8,
          }}
          // className="mt-4 flex flex-wrap justify-center gap-3 md:gap-5"
          className="mt-4 grid grid-cols-2 justify-items-center gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-5"
        >
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <motion.button
                whileHover={{
                  y: -6,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: .95,
                }}
                key={item.name}
                className="group flex w-full max-w-[180px]  items-center gap-3 rounded-full bg-white px-4 md:px-7 py-4 shadow-xl transition"
              >
                <div
                  className="rounded-full p-1 md:p-3 text-white transition group-hover:rotate-12"
                  style={{
                    background: item.color,
                  }}
                >
                  <Icon size={20} className=""/>
                </div>

                <span className="font-bold text-[#552b12]">
                  {item.name}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Scroll */}

        {/* <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mt-20 flex flex-col items-center"
        >
          <span className="mb-3 text-sm font-semibold tracking-widest text-[#810c26] uppercase">
            Explore Products
          </span>

          <ChevronDown
            className="text-[#810c26]"
            size={34}
          />
        </motion.div> */}
      </div>
    </section>
  );
}