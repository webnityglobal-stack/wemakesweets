// import { useEffect, useState } from "react";

// const features = [
//   {
//     image: "/quickMarket/amazon.png",
//     title: "Amazon",
//   },
//   {
//     image: "/quickMarket/blinkit.png",
//     title: "Blinkit",
//   },
//   {
//     image: "/quickMarket/flipkart.webp",
//     title: "Flipkart",
//   },
//   {
//     image: "/quickMarket/instamart.png",
//     title: "Instamart",
//   },
//   {
//     image: "/quickMarket/zepto.png",
//     title: "Zepto",
//   },
//   // {
//   //   image: "/quickMarket/jioMart.png",
//   //   title: "Jio Mart",
//   // },
// ];

// // Mobile mein 2-2 icons
// const mobileSlides = [];

// for (let i = 0; i < features.length; i += 2) {
//   mobileSlides.push(features.slice(i, i + 2));
// }

// // First slide ko end mein duplicate kar diya
// // 1+2 -> 3+4 -> 5+6 -> 1+2
// mobileSlides.push(mobileSlides[0]);

// const QucikMarket = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [enableTransition, setEnableTransition] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => prev + 1);
//     }, 2500);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     // Duplicate slide (1 + 2) par pahunchne ke baad
//     // transition complete hone do, phir silently first slide par reset
//     if (currentSlide === mobileSlides.length - 1) {
//       const timeout = setTimeout(() => {
//         setEnableTransition(false);
//         setCurrentSlide(0);

//         // Browser ko reset render karne do
//         requestAnimationFrame(() => {
//           requestAnimationFrame(() => {
//             setEnableTransition(true);
//           });
//         });
//       }, 600);

//       return () => clearTimeout(timeout);
//     }
//   }, [currentSlide]);

//   return (
//     <section className=" text-center  relative bg-[#f5ebda] py-2 ">

// {/* <div className=" font-bold text-[#603917] text-center text-2xl p-4">
//     Available On
// </div> */}


//             <div
//               className="
//               text-center

//                 inline-block
//                 rounded-full
//                 px-5
//                 py-4
//                 text-xs
//                 font-semibold
//                 uppercase
//                 tracking-[4px]
//                 font-manrope
//                 text-white
//                   bg-pink-600
//               hover:bg-[#66BC9E]
//               hover:scale-105
//                   hover:text-white
//               shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] border-black hover:shadow-[3px_4px_0px_#000]
//               "
//             >
//               Available On
//             </div>

//       {/* <div className="mx-auto max-w-7xl px-6"> */}

// <div className="mx-auto mt-5 max-w-7xl px-6 py-2">
//         {/* ================= DESKTOP ================= */}
//         {/* <div className="hidden lg:grid grid-cols-6 gap-y-12"> */}
//         <div className="hidden lg:flex flex-wrap justify-center gap-x-16 gap-y-12">
             
//           {features.map((item, index) => (
//             <div
//               key={index}
//               className="group flex flex-col items-center text-center"
//             >
//               <div className="relative flex h-32 w-32 items-center justify-center">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="
//                     absolute h-18 w-18 object-contain
//                     transition-all duration-500 ease-out
//                     animate-[floatPulse_3s_ease-in-out_infinite]
//                     group-hover:scale-100
//                     group-hover:-translate-y-4
//                     group-hover:rotate-6
//                     group-hover:drop-shadow-[0_10px_15px_rgba(0,0,0,0.35)]
//                     rounded-full
//                   "
//                 />
//               </div>

//               <div className="mt-4 h-1 w-10 rounded-full bg-[#8b183d] transition-all duration-300 group-hover:w-16" />

//               <h3 className="mt-1 text-[12px] md:text-[14px] font-cormorant font-semibold uppercase leading-7 text-[#2d2d2d]">
//                 {item.title}
//               </h3>
//             </div>
//           ))}
//         </div>

//         {/* ================= MOBILE SLIDER ================= */}
//         <div className="lg:hidden overflow-hidden">
//           <div
//             className="mobile-feature-slider"
//             style={{
//               transform: `translateX(-${currentSlide * 100}%)`,
//               transition: enableTransition
//                 ? "transform 0.6s ease-in-out"
//                 : "none",
//             }}
//           >
//             {mobileSlides.map((slide, slideIndex) => (
//               <div
//                 key={slideIndex}
//                 className="mobile-feature-slide"
//               >
//                 <div className="grid grid-cols-2 gap-4">
//                   {slide.map((item, index) => (
//                     // <div
//                     //   key={index}
//                     //   className="flex flex-col items-center text-center"
//                     // >
//                     <div
//   key={index}
//   className={`flex flex-col items-center text-center ${
//     slide.length === 1 ? "col-span-2" : ""
//   }`}
// >
//                       <div className="relative flex h-28 w-28 items-center justify-center">
//                         <img
//                           src={item.image}
//                           alt={item.title}
//                           className="
//                             h-18 w-18 object-contain
//                             animate-[floatPulse_3s_ease-in-out_infinite]
//                             rounded-full
//                           "
//                         />
//                       </div>

//                       <div className="mt-3 h-1 w-10 rounded-full bg-[#8b183d]" />

//                       <h3 className="mt-4 text-[11px] font-bold uppercase leading-6 text-[#2d2d2d]">
//                         {item.title}
//                       </h3>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Dots */}
//           <div className="mt-8 flex justify-center gap-2">
//             {mobileSlides.slice(0, 3).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => {
//                   setEnableTransition(true);
//                   setCurrentSlide(index);
//                 }}
//                 className={`mobile-slider-dot ${
//                   currentSlide % 3 === index ? "active" : ""
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default QucikMarket;


import React from "react";

const features = [
  {
    image: "/quickMarket/amazon.png",
    title: "Amazon",
  },
  {
    image: "/quickMarket/blinkit.png",
    title: "Blinkit",
  },
  {
    image: "/quickMarket/flipkart.webp",
    title: "Flipkart",
  },
  {
    image: "/quickMarket/instamart.png",
    title: "Instamart",
  },
  {
    image: "/quickMarket/zepto.png",
    title: "Zepto",
  },
  // {
  //   image: "/quickMarket/jioMart.png",
  //   title: "Jio Mart",
  // },
];

const QucikMarket = () => {
  return (
    <section className="relative bg-[#f5ebda] py-1">

      <div className="mx-auto max-w-7xl px-6">

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:grid grid-cols-6 gap-y-12">

          {features.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative flex h-32 w-32 items-center justify-center">

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    absolute
                    h-18
                    w-18
                    object-contain
                    transition-all
                    duration-500
                    ease-out
                    animate-[floatPulse_3s_ease-in-out_infinite]
                    group-hover:scale-100
                    group-hover:-translate-y-4
                    group-hover:rotate-6
                    group-hover:drop-shadow-[0_10px_15px_rgba(0,0,0,0.35)]
                    rounded-full
                  "
                />

              </div>

              <div
                className="
                  mt-4
                  h-1
                  w-10
                  rounded-full
                  bg-[#8b183d]
                  transition-all
                  duration-300
                  group-hover:w-16
                "
              />

              <h3
                className="
                  mt-5
                  text-[10px]
                  font-cormorant
                  md:text-[14px]
                  font-semibold
                  uppercase
                  leading-7
                  text-[#2d2d2d]
                "
              >
                {item.title}
              </h3>

            </div>
          ))}

        </div>


        {/* ================= MOBILE CONTINUOUS SLIDER ================= */}
        <div className="lg:hidden overflow-hidden w-full">

          <div className="flex animate-icon-slider w-max">

            {[...features, ...features].map((item, index) => (

              <div
                key={index}
                className="
                  w-[150px]
                  flex-shrink-0
                  flex
                  flex-col
                  items-center
                  text-center
                "
              >

                {/* Icon */}
                <div
                  className="
                    relative
                    flex
                    h-28
                    w-28
                    items-center
                    justify-center
                  "
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    draggable={false}
                    className="
                      h-18
                      w-18
                      object-contain
                      rounded-full
                      animate-[floatPulse_3s_ease-in-out_infinite]
                    "
                  />

                </div>


                {/* Underline */}
                <div
                  className="
                    mt-3
                    h-1
                    w-10
                    rounded-full
                    bg-[#8b183d]
                  "
                />


                {/* Title */}
                <h3
                  className="
                    mt-4
                    text-[11px]
                    font-cormorant
                    font-bold
                    uppercase
                    leading-6
                    text-[#2d2d2d]
                  "
                >
                  {item.title}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default QucikMarket;