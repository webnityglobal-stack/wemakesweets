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

            <h2 className="mt-6 text-4xl font-black leading-tight text-[#2d2d2d] lg:text-5xl">

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
  className={`group relative flex h-36 w-36 flex-col items-center justify-center overflow-hidden rounded-full ${themes[index].bg} p-4 text-center text-white shadow-lg ring-1 ring-white/10 transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-110 hover:shadow-2xl`}
>
  {/* Animated Outer Ring */}
  <div className="absolute inset-[-4px] rounded-full border border-white/20 opacity-60 transition-all duration-700 group-hover:rotate-180 group-hover:border-white/50" />

  {/* Pulsing Glow */}
  <div className="absolute inset-2 rounded-full bg-white/10 blur-xl opacity-0 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />

  {/* Top Right Glow */}
  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/20 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-80" />

  {/* Bottom Left Glow */}
  <div className="absolute -bottom-8 -left-8 h-20 w-20 rounded-full bg-white/10 blur-2xl transition-all duration-700 group-hover:scale-150" />

  {/* Shine Sweep */}
  <div className="absolute inset-0 -translate-x-[150%] skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-[150%]" />

  {/* Hover Ripple */}
  <div className="absolute inset-5 rounded-full border border-white/0 transition-all duration-500 group-hover:scale-125 group-hover:border-white/20" />

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center">

    {/* Icon */}
    <div
      className={`mb-2 flex h-11 w-11 items-center justify-center rounded-full ${themes[index].icon} shadow-lg ring-1 ring-white/30 transition-all duration-500 ease-out
      group-hover:scale-125
      group-hover:rotate-12
      group-hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]
      group-hover:-translate-y-1`}
    >
      {/* Icon Glow */}
      <div className="absolute h-10 w-10 rounded-full bg-white/20 blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative transition-transform duration-700 group-hover:scale-110">
        {item.icon}
      </div>
    </div>

    {/* Title */}
    <h3 className="text-sm font-bold leading-tight transition-all duration-500 group-hover:scale-105 group-hover:tracking-wide">
      {item.title}
    </h3>
  </div>

  {/* Bottom Highlight */}
  <div className="absolute bottom-2 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-white/20 blur-sm transition-all duration-500 group-hover:w-16 group-hover:bg-white/50" />
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