import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// const AnimatedCounter = ({ number, suffix = "", label }) => {
    const AnimatedCounter = ({
  number,
  suffix = "",
  label,
  bgColor = "#8b183d",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, number, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });

    return () => controls.stop();
  }, [isInView, number]);

  return (
    // <motion.div
    //   ref={ref}
    //   whileHover={{
    //     y: -8,
    //     scale: 1.03,
    //   }}
    //   transition={{
    //     duration: 0.3,
    //   }}
    //   className="rounded-3xl border border-[#8b183d]/10 bg-white p-6 text-center shadow-sm transition hover:shadow-xl"
    // >
    //   <h3 className="text-xl font-black text-[#8b183d]">
    //     {count.toLocaleString()}
    //     {suffix}
    //   </h3>

    //   <p className="mt-2 text-sm font-medium text-gray-600">
    //     {label}
    //   </p>
    // </motion.div>
    <motion.div
  ref={ref}
  whileHover={{
    y: -8,
    scale: 1.04,
  }}
  transition={{ duration: 0.3 }}
  className="group relative overflow-hidden rounded-3xl p-6 text-center text-white shadow-xl"
  style={{ backgroundColor: bgColor }}
>
  {/* Glow */}
  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

  <h3 className="relative text-xl font-black">
    {count.toLocaleString()}
    {suffix}
  </h3>

  <p className="relative mt-2 text-sm font-medium text-white/85">
    {label}
  </p>
</motion.div>
  );
};

export default AnimatedCounter;