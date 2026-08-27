// import { motion, useScroll, useTransform } from "motion/react";

// const ScrollWavyUnderline = ({
//   color = "#810c26",
//   minWidth = 70,
//   maxWidth = 280,
// }) => {
//   const { scrollYProgress } = useScroll();

//   const width = useTransform(
//     scrollYProgress,
//     [0, 0.5, 1],
//     [minWidth, maxWidth * 0.7, maxWidth]
//   );

//   return (
//     <div className="flex justify-center mt-3">
//       <motion.svg
//         width={maxWidth}
//         height="18"
//         viewBox="0 0 280 18"
//         fill="none"
//         className="overflow-visible"
//       >
//         <motion.path
//           d="M4 10
//              C35 5, 55 15, 85 9
//              C115 3, 135 14, 165 9
//              C195 4, 220 14, 245 8
//              C258 6, 268 8, 276 6"
//           stroke={color}
//           strokeWidth="3"
//           strokeLinecap="round"
//           style={{
//             pathLength: 1,
//           }}
//         />
//       </motion.svg>
//     </div>
//   );
// };

// export default ScrollWavyUnderline;  

// import { motion, useScroll, useTransform } from "motion/react";

// const ScrollWavyUnderline = ({
//   color = "#810c26",
// }) => {
//   const { scrollYProgress } = useScroll();

//   const scaleX = useTransform(
//     scrollYProgress,
//     [0, 0.5, 1],
//     [0.3, 0.65, 1]
//   );

//   return (
//     <div className="flex justify-center mt-3">
//       <motion.svg
//         viewBox="0 0 280 20"
//         className="w-[180px] sm:w-[220px] md:w-[280px] h-auto origin-center"
//         style={{
//           scaleX,
//         }}
//         fill="none"
//       >
//         <path
//           d="
//             M5 10
//             C25 4, 45 16, 65 9
//             C85 3, 105 15, 125 9
//             C145 3, 165 15, 185 9
//             C205 3, 225 15, 245 9
//             C258 6, 270 10, 275 7
//           "
//           stroke={color}
//           strokeWidth="3"
//           strokeLinecap="round"
//         />
//       </motion.svg>
//     </div>
//   );
// };

// export default ScrollWavyUnderline;

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

const ScrollWavyUnderline = ({
  color = "#810c26",
   className = "",
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 20%"],
  });

  const scaleX = useTransform(
    scrollYProgress,
    [0, 1],
    [0.15, 1]
  );

  return (
    <div
      ref={ref}
      className={`flex justify-center mt-3 ${className}`}
    >
      <motion.svg
        viewBox="0 0 300 24"
        className="
          w-[160px]
          sm:w-[210px]
          md:w-[260px]
          lg:w-[300px]
          h-auto
          origin-center
        "
        style={{
          scaleX,
        }}
      >
        <path
          d="
            M5 12
            C25 5, 45 19, 65 11
            C85 3, 105 20, 125 11
            C145 4, 165 19, 185 11
            C205 4, 225 19, 245 10
            C265 5, 280 15, 295 8
          "
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </motion.svg>
    </div>
  );
};

export default ScrollWavyUnderline;