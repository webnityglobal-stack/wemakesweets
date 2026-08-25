// import { motion } from "framer-motion";
// import {
//   Factory,
// } from "lucide-react";
 

// const OurStoryVideo = () => {
//   return (
//     <section className="relative overflow-hidden bg-[#f9e4bf] py-14">

//       {/* background blur */}
//       <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#8b183d]/10 blur-[120px]" />
//       <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#164984]/10 blur-[120px]" />

//       <div className="relative mx-auto max-w-7xl px-6">

//         <div className="grid items-center gap-16 lg:grid-cols-[1.25fr_0.75fr]">

//           {/* LEFT */}

//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: .8 }}
//             viewport={{ once: true }}
//             className="relative"
//           >

//             <div className="overflow-hidden rounded-[32px] shadow-2xl">

//               <video
//                 src="/ourStory/OurStory.mp4"
//                 autoPlay
//                 loop
//                 playsInline
//                 className="h-full w-full object-cover"
//               />

//             </div>

//             {/* floating badge */}

//             <motion.div

//               animate={{
//                 y: [-6, 6, -6],
//               }}

//               transition={{
//                 repeat: Infinity,
//                 duration: 4,
//               }}

//               className="absolute md:-bottom-8 md:left-8 -bottom-16 left-4 rounded-2xl bg-white  md:p-5 p-2 shadow-xl"

//             >

//               <div className="flex items-center gap-3">

//                 <div className="rounded-full bg-[#8b183d]/10 p-3  text-[#8b183d]">
//                   <Factory size={26}  />
//                 </div>

//                 <div className="w-[120px] sm:w-[180px] " >

//                   <h4 className="text-[#572340]">
//                     6,000 Sq.ft.
//                   </h4>

//                   <p className="md:text-sm text-[9px] text-gray-500"> 
//                     Manufacturing Facility
//                   </p>

//                 </div>

//               </div>

//             </motion.div>

//           </motion.div>

//           {/* RIGHT */}

//           <motion.div

//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: .8 }}
//             viewport={{ once: true }}

//           >

//             <span className="rounded-full bg-[#8b183d]/10 px-5 py-2 text-sm font-semibold text-[#8b183d]">

//               OUR STORY

//             </span>

//             <h2 className="mt-6 text-4xl font-black leading-tight text-[#2d2d2d] lg:text-4xl">

//               Crafted with
//               <span className="block text-[#8b183d]">
//                 Passion &
//                 Tradition
//               </span>

//             </h2>

//             <p className="mt-8 text-[14px] leading-8 text-gray-600">

//               Every bite tells a story.

//               What started from a small home kitchen with
//               a dream of creating healthier snacks has now
//               become one of India's fastest-growing healthy
//               snack brands.

//             </p>

//             <p className="mt-5 text-[14px] leading-8 text-gray-600">

//               We carefully select premium dates, nuts,
//               seeds and authentic Indian spices to create
//               delicious products without compromising on
//               nutrition.

//             </p>

//           </motion.div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default OurStoryVideo;

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Factory,
} from "lucide-react";

const OurStoryVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Video viewport me hai → play
          video.play().catch(() => {});
        } else {
          // Video viewport se bahar → pause
          video.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f5ebda] py-14">

      {/* Background blur */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#8b183d]/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#164984]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-[1.25fr_0.75fr]">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="overflow-hidden rounded-[32px] shadow-2xl">

              <video
                ref={videoRef}
                src="/ourStory/OurStory.mp4"
                loop
                playsInline
                controls
                className="h-full w-full object-cover"
              />

            </div>

            {/* Floating badge */}
            {/* <motion.div
              animate={{
                y: [-6, 6, -6],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute md:-bottom-8 md:left-8 -bottom-16 left-4 rounded-2xl bg-white md:p-5 p-2 shadow-xl"
            >

              <div className="flex items-center gap-3">

                <div className="rounded-full bg-[#8b183d]/10 p-3 text-[#8b183d]">
                  <Factory size={26} />
                </div>

                <div className="w-[120px] sm:w-[180px]">
                  <h4 className="text-[#572340]">
                    6,000 Sq.ft.
                  </h4>

                  <p className="md:text-sm text-[9px] text-gray-500">
                    Manufacturing Facility
                  </p>
                </div>

              </div>

            </motion.div> */}

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <span className="rounded-full font-manrope bg-[#8b183d]/10 px-5 py-2 text-sm font-semibold text-[#8b183d]">
              OUR STORY
            </span>

            <h2 className="mt-6 text-4xl font-cormorant font-black leading-tight text-[#2d2d2d] lg:text-4xl">
              Crafted with
              <span className="block text-[#8b183d]">
                Passion & Tradition
              </span>
            </h2>

            <p className="mt-8 text-[14px] font-manrope leading-8 text-gray-600">
              Every bite tells a story.

              What started from a small home kitchen with
              a dream of creating healthier snacks has now
              become one of India's fastest-growing healthy
              snack brands.
            </p>

            <p className="mt-5 text-[14px] leading-8 text-gray-600">
              We carefully select premium dates, nuts,
              seeds and authentic Indian spices to create
              delicious products without compromising on
              nutrition.
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default OurStoryVideo;