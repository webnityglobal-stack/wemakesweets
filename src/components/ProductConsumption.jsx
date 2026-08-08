// import {
//   Building2,
//   Dumbbell,
//   Gift,
//   HeartHandshake,
//   Plane,
//   Sparkles,
// } from "lucide-react";
// import { LayoutTextFlip } from "./ui/layout-text-flip";
// import { SquigglyText } from "./ui/squiggly-text";
// import { FireworksBackground } from "./animate-ui/components/backgrounds/fireworks";

// const occasions = [
//   {
//     icon: HeartHandshake,
//     title: "Wedding",
//     desc: "Luxury wedding hampers & return gifts",
//     color: "#572340", // Date Bite
//     bg: "#603917",
//     image: "/occasions/wedding.webp",
//   },
//   {
//     icon: Building2,
//     title: "Corporate",
//     desc: "Employee & client gifting solutions",
//     color: "#603917", // Anjeer
//     bg: "#164984",
//     image: "/occasions/corporate.webp",
//   },
//   {
//     icon: Sparkles,
//     title: "Festivals",
//     desc: "Celebrate every festival with sweetness",
//     color: "#3e5a2c", // Date Elaichi
//     bg: "#572340",
//     image: "/occasions/festivals.webp",
//   },
//   {
//     icon: Dumbbell,
//     title: "Healthy Snacking",
//     desc: "Perfect for gym & daily nutrition",
//     color: "#164984", // Multi Seed
//     bg: "#3e5a2c",
//     image: "/occasions/gym.webp",
//   },
//   {
//     icon: Plane,
//     title: "Travel Friendly",
//     desc: "Easy to carry & enjoy anywhere",
//     color: "#8b183d", // Rice Crispy
//     bg: "#603917",
//     image: "/occasions/travel.webp",
//   },
//   {
//     icon: Gift,
//     title: "Family Celebrations",
//     desc: "Birthdays, parties & family moments",
//     color: "#572340", // Sequence Restart
//     bg: "#8b183d",
//     image: "/occasions/family.webp",
//   },
// ];

// const ProductConsumption = () => {
//   return (
//     // <section className=" py-8 lg:py-12">
//     <section className="relative overflow-hidden py-4 md:py-8 bg-[#60f9e4bf3917]">
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <FireworksBackground
//           population={1}
//           color={["#E8B357", "#f9e4bf", "#810c26"]}
//           fireworkSpeed={{ min: 4, max: 7 }}
//           fireworkSize={{ min: 2, max: 4 }}
//           particleSpeed={{ min: 2, max: 6 }}
//           particleSize={{ min: 1, max: 3 }}
//           className="h-full w-full"
//         />
//       </div>
//       <div className="mx-auto max-w-7xl px-5">


//       <div className="relative text-center overflow-hidden">

//   {/* Fireworks Background */}
//   <div className="absolute inset-0 z-0 pointer-events-none">
//     <FireworksBackground
//       population={1}
//       color={["#E8B357", "#810c26", "#572340"]}
//       fireworkSpeed={{ min: 4, max: 7 }}
//       fireworkSize={{ min: 2, max: 4 }}
//       particleSpeed={{ min: 2, max: 6 }}
//       particleSize={{ min: 1, max: 3 }}
//       className="h-full w-full"
//     />
//   </div>
//           {/* <span className="inline-block rounded-full bg-[#572340]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[4px] text-[#572340]">
//     Perfect For
//   </span> */}

//           {/* <h2 className="mt-5 font-serif text-4xl font-bold text-[#603917] lg:text-6xl">
//     Every Occasion
//   </h2> */}
//           <h2 className=" font-serif text-4xl font-bold text-[#603917] lg:text-6xl">
//             <LayoutTextFlip
//               text="Perfect For "
//               words={["Weddings", "Corporate", "Festivals", "Healthy Snacking", "Travel Friendly", "Family Celebrations"]}
//             />
//           </h2>
//           <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#3e5a2c]">
//             From  <SquigglyText
//               stepDuration={70}
//               scale={[6, 9]}
//               className="text-amber-500"
//             >weddings</SquigglyText> to corporate gifting,  <SquigglyText
//               stepDuration={70}
//               scale={[6, 9]}
//               className="text-amber-500"
//             > festivals</SquigglyText> to
//             healthy snacking
//             —our handcrafted  <SquigglyText
//               stepDuration={70}
//               scale={[6, 9]}
//               className="text-amber-500"
//             >sweets</SquigglyText>  make every moment memorable.
//           </p>

//         </div>

//         <div className=" mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

//           {occasions.map((item) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.title}
//                 style={{
//                   backgroundColor: item.bg,
//                   borderColor: item.color + "40",
//                 }}
//                 className="group relative overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
//               >


//                 {/* Background Image */}
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="absolute inset-0 h-full w-full object-cover opacity-[0.3] transition-all duration-700 group-hover:scale-110 group-hover:opacity-[0.22]"
//                 />

//                 {/* Dark Overlay */}
//                 <div
//                   className="absolute inset-0"
//                   style={{
//                     // background: `linear-gradient(to bottom, ${item.bg}CC, ${item.bg}F2)`,
//                   }}
//                 />

//                 {/* Decorative Glow */}
//                 <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#E8B357]/10 blur-3xl transition-all duration-500 group-hover:scale-150" />

//                 {/* Content */}
//                 <div className="relative z-10 p-7">

//                   <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f9e4bf]/15 backdrop-blur-md border border-white/20 text-[#f9e4bf] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
//                     <Icon size={30} />
//                   </div>

//                   <h3 className="mt-6 text-2xl font-bold text-[#f9e4bf]">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 leading-7 text-[#f9e4bf]/90">
//                     {item.desc}
//                   </p>

//                 </div>
//               </div>
//             );
//           })}
//         </div>


//         {/* <div className="mt-14 rounded-3xl bg-[#08376c] px-8 py-8 text-center shadow-xl">

//           <h3 className="font-serif text-3xl text-[#f9e4bf]">
//             Crafted For Every Celebration ❤️
//           </h3>

//           <p className="mt-4 text-[#f9e4bf]/90">
//             Whether it's a wedding, corporate event, festival, birthday,
//             fitness journey or family gathering — our premium handcrafted
//             sweets are made to make every occasion unforgettable.
//           </p>

//           <a
//             href="tel:18002032007"
//             className="mt-7 inline-flex rounded-full bg-[#E8B357] px-8 py-3 font-bold text-[#08376c] transition hover:scale-105"
//           >
//             📞 Call For Bulk Orders
//           </a>

//         </div> */}
//         <div className="mt-14 rounded-3xl bg-[#164984] px-8 py-8 text-center shadow-xl">

//           <h3 className="font-serif text-3xl text-[#f9e4bf]">
//             Crafted For Every  <SquigglyText
//               stepDuration={70}
//               scale={[6, 9]}
//               className="text-amber-500"
//             >Celebration</SquigglyText>  ❤️
//           </h3>

//           <p className="mt-4 text-[#f9e4bf]/90">
//             Whether it's a wedding, corporate event, festival, birthday,
//             fitness journey or family gathering — our premium handcrafted
//             sweets are made to make every occasion unforgettable.
//           </p>

//           <a
//             href="tel:18002032007"
//             className="
//       mt-7
//       inline-flex
//       rounded-full
//       bg-pink-600
//       px-8
//       py-3
//       font-semibold
//       text-white
//       shadow-md
//       transition-all
//       duration-300
//       hover:bg-[#572340]
//       hover:scale-105
//       hover:shadow-lg
//     "
//           >
//             📞  
//         >Call For Bulk <SquigglyText
//               stepDuration={70}
//               scale={[6, 9]}
//               className="text-white">Orders </SquigglyText>
//           </a>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default ProductConsumption;

import { useState } from "react";
import {
  Building2,
  Dumbbell,
  Gift,
  HeartHandshake,
  Plane,
  Sparkles,
} from "lucide-react";

import { LayoutTextFlip } from "./ui/layout-text-flip";
import { SquigglyText } from "./ui/squiggly-text";
import { FireworksBackground } from "./animate-ui/components/backgrounds/fireworks";

const occasions = [
  {
    icon: HeartHandshake,
    title: "Wedding",
    desc: "Luxury wedding hampers & return gifts",
    color: "#572340",
    bg: "#603917",
    image: "/occasions/wedding.webp",
  },
  {
    icon: Building2,
    title: "Corporate",
    desc: "Employee & client gifting solutions",
    color: "#603917",
    bg: "#164984",
    image: "/occasions/corporate.webp",
  },
  {
    icon: Sparkles,
    title: "Festivals",
    desc: "Celebrate every festival with sweetness",
    color: "#3e5a2c",
    bg: "#572340",
    image: "/occasions/festivals.webp",
  },
  {
    icon: Dumbbell,
    title: "Healthy Snacking",
    desc: "Perfect for gym & daily nutrition",
    color: "#164984",
    bg: "#3e5a2c",
    image: "/occasions/gym.webp",
  },
  {
    icon: Plane,
    title: "Travel Friendly",
    desc: "Easy to carry & enjoy anywhere",
    color: "#8b183d",
    bg: "#603917",
    image: "/occasions/travel.webp",
  },
  {
    icon: Gift,
    title: "Family Celebrations",
    desc: "Birthdays, parties & family moments",
    color: "#572340",
    bg: "#8b183d",
    image: "/occasions/family.webp",
  },
];

const OccasionCard = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const Icon = item.icon;

  return (
    <div
      className="group [perspective:1200px]"
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div
        className={`
          relative
          w-full
          transition-transform
          duration-700
          [transform-style:preserve-3d]

          md:group-hover:[transform:rotateY(180deg)]

          ${
            isFlipped
              ? "[transform:rotateY(180deg)]"
              : ""
          }
        `}
      >
        {/* ================================================= */}
        {/* FRONT - EXACTLY YOUR CURRENT CARD */}
        {/* ================================================= */}

        <div
          style={{
            backgroundColor: item.bg,
            borderColor: item.color + "40",
          }}
          className="
            relative
            min-h-[260px]
            overflow-hidden
            rounded-3xl
            border
            transition-all
            duration-500
            hover:shadow-2xl
            [backface-visibility:hidden]
          "
        >
          {/* Background Image */}
          <img
            src={item.image}
            alt={item.title}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              opacity-[1]
              transition-all
              duration-700
              group-hover:scale-110
              group-hover:opacity-[0.22]
            "
          />

          {/* Dark Overlay */}
          {/* <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                to bottom,
                ${item.bg}CC,
                ${item.bg}F2
              )`,
            }}
          /> */}
          <div
  className="absolute inset-0"
  style={{
    background: `${item.bg}60`,
  }}
/>


          {/* Decorative Glow */}
          <div
            className="
              absolute
              right-0
              top-0
              h-32
              w-32
              rounded-full
              bg-[#E8B357]/10
              blur-3xl
              transition-all
              duration-500
              group-hover:scale-150
            "
          />

          {/* Content */}
          <div className="relative z-10 p-7">

            {/* Icon */}
            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                border
                border-white/20
                bg-[#f9e4bf]/15
                text-[#f9e4bf]
                backdrop-blur-md
                transition-all
                duration-500
                group-hover:rotate-6
                group-hover:scale-110
              "
            >
              <Icon size={30} />
            </div>

            {/* Title */}
            <h3 className="mt-6 text-2xl font-bold text-[#f9e4bf]">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-3 leading-7 text-[#f9e4bf]/90">
              {item.desc}
            </p>

          </div>
        </div>

        {/* ================================================= */}
        {/* BACK - ONLY IMAGE */}
        {/* ================================================= */}

        <div
          className="
            absolute
            inset-0
            overflow-hidden
            rounded-3xl
            [backface-visibility:hidden]
            [transform:rotateY(180deg)]
          "
        >
          <img
            src={item.image}
            alt={item.title}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />
        </div>
      </div>
    </div>
  );
};

const ProductConsumption = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">

      {/* ================================================= */}
      {/* FIREWORKS BACKGROUND */}
      {/* ================================================= */}

      <div className="absolute inset-0 z-0 pointer-events-none">
        <FireworksBackground
          population={1}
          color={["#E8B357", "#f9e4bf", "#810c26"]}
          fireworkSpeed={{ min: 4, max: 7 }}
          fireworkSize={{ min: 2, max: 4 }}
          particleSpeed={{ min: 2, max: 6 }}
          particleSize={{ min: 1, max: 3 }}
          className="h-full w-full"
        />
      </div>

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10 max-w-[1500px] mx-auto px-4 md:px-6">

        {/* Heading */}

        <div className="relative text-center overflow-hidden mb-12">

          <div className="relative z-10">

            <span
              className="
                inline-block
                rounded-full
                bg-[#572340]/10
                px-5
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[4px]
                text-[#572340]
              "
            >
              Perfect For
            </span>

            <h2
              className="
                mt-5
                font-serif
                text-4xl
                font-bold
                text-[#603917]
                lg:text-6xl
              "
            >
              Every Occasion
            </h2>

          </div>
        </div>

        {/* ================================================= */}
        {/* OCCASION CARDS */}
        {/* ================================================= */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {occasions.map((item) => (
            <OccasionCard
              key={item.title}
              item={item}
            />
          ))}

        </div>

        {/* ================================================= */}
        {/* BULK ORDER CTA */}
        {/* ================================================= */}

        <div
          className="
            mt-14
            rounded-3xl
            bg-[#164984]
            px-8
            py-8
            text-center
            shadow-xl
          "
        >

          <h3 className="font-serif text-3xl text-[#f9e4bf]">

            Crafted For Every{" "}

            <SquigglyText
              stepDuration={70}
              scale={[6, 9]}
              className="text-amber-500"
            >
              Celebration
            </SquigglyText>

            {" "}❤️

          </h3>

          <p className="mt-4 text-[#f9e4bf]/90">
            Whether it's a wedding, corporate event, festival, birthday,
            fitness journey or family gathering — our premium handcrafted
            sweets are made to make every occasion unforgettable.
          </p>

          <a
            href="tel:18002032007"
            className="
              mt-7
              inline-flex
              rounded-full
              bg-pink-600
              px-8
              py-3
              font-semibold
              text-white
              shadow-md
              transition-all
              duration-300
              hover:bg-[#572340]
              hover:scale-105
              hover:shadow-lg
            "
          >
            📞 Call For Bulk{" "}

            <SquigglyText
              stepDuration={70}
              scale={[6, 9]}
              className="text-white"
            >
              Orders
            </SquigglyText>

          </a>

        </div>

      </div>
    </section>
  );
};

export default ProductConsumption;