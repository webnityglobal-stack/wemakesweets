import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import {
  Heart,
  Leaf,
  ShieldCheck,
  Factory,
  Play,
} from "lucide-react";

const features = [
  {
    icon: <Leaf size={20} />,
    title: "Natural Ingredients",
  },
  {
    icon: <Heart size={20} />,
    title: "Made With Love",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "No Preservatives",
  },
];

const OurStoryVideo = () => {
  return (
    <section className="relative overflow-hidden bg-[#f9e4bf] py-24">

      {/* background blur */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#8b183d]/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#164984]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* <div className="grid items-center gap-20 lg:grid-cols-2"> */}
        <div className="grid items-center gap-16 lg:grid-cols-[1.25fr_0.75fr]">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="overflow-hidden rounded-[32px] shadow-2xl">

              <video
                src="/ourStory/OurStory.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />

            </div>

            {/* floating badge */}

            <motion.div

              animate={{
                y: [-6, 6, -6],
              }}

              transition={{
                repeat: Infinity,
                duration: 4,
              }}

              className="absolute -bottom-8 left-8 rounded-2xl bg-white p-5 shadow-xl"

            >

              <div className="flex items-center gap-3">

                <div className="rounded-full bg-[#8b183d]/10 p-3 text-[#8b183d]">
                  <Factory size={26} />
                </div>

                <div>

                  <h4 className="font-bold text-[#572340]">
                    6,000 Sq.ft.
                  </h4>

                  <p className="text-sm text-gray-500">
                    Manufacturing Facility
                  </p>

                </div>

              </div>

            </motion.div>

            {/* Play Button */}

            {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/80 backdrop-blur">

                <Play
                  className="ml-1 text-[#8b183d]"
                  size={34}
                  fill="#8b183d"
                />

              </div>

            </div> */}

          </motion.div>

          {/* RIGHT */}

          <motion.div

            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}

          >

            <span className="rounded-full bg-[#8b183d]/10 px-5 py-2 text-sm font-semibold text-[#8b183d]">

              OUR STORY

            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-[#2d2d2d] lg:text-6xl">

              Crafted with
              <span className="block text-[#8b183d]">
                Passion &
                Tradition
              </span>

            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">

              Every bite tells a story.

              What started from a small home kitchen with
              a dream of creating healthier snacks has now
              become one of India's fastest-growing healthy
              snack brands.

            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">

              We carefully select premium dates, nuts,
              seeds and authentic Indian spices to create
              delicious products without compromising on
              nutrition.

            </p>

            {/* Features */}

            {/* <div className="mt-10 grid gap-5 sm:grid-cols-3">

              {features.map((item) => (

                <div
                  key={item.title}
                  className="rounded-2xl border border-[#8b183d]/10 bg-white p-5 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#8b183d]/10 text-[#8b183d]">

                    {item.icon}

                  </div>

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                </div>

              ))}

            </div> */}
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
  {features.map((item, index) => {
    const themes = [
      {
        bg: "bg-[#8b183d]",
        icon: "bg-white/15",
      },
      {
        bg: "bg-[#3e5a2c]",
        icon: "bg-white/15",
      },
      {
        bg: "bg-[#164984]",
        icon: "bg-white/15",
      },
    ];

    return (
      <div
        key={item.title}
        className={`group relative overflow-hidden rounded-3xl ${themes[index].bg} p-6 text-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
      >
        {/* Background Circle */}
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-xl" />

        {/* Icon */}
        <div
          className={`relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${themes[index].icon}`}
        >
          {item.icon}
        </div>

        {/* Title */}
        <h3 className="relative text-lg font-bold">
          {item.title}
        </h3>

      </div>
    );
  })}
</div>

            {/* Counters */}

            {/* <div className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4 ">

              <AnimatedCounter
                number={10}
                suffix="L+"
                label="Happy Families"
              />

              <AnimatedCounter
                number={3000}
                suffix="+"
                label="Sq.ft Factory"
              />

              <AnimatedCounter
                number={150}
                suffix="+"
                label="Employees"
              />

              <AnimatedCounter
                number={100}
                suffix="%"
                label="Natural"
              />

            </div> */}

{/* <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">

  <AnimatedCounter
    number={10}
    suffix="L+"
    label="Happy Families"
    bgColor="#8b183d"
  />

  <AnimatedCounter
    number={3000}
    suffix="+"
    label="Sq.ft Factory"
    bgColor="#572340"
  />

  <AnimatedCounter
    number={150}
    suffix="+"
    label="Employees"
    bgColor="#3e5a2c"
  />

  <AnimatedCounter
    number={100}
    suffix="%"
    label="Natural"
    bgColor="#164984"
  />

</div> */}


          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default OurStoryVideo;