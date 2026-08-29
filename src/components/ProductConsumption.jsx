import { useEffect, useState } from "react";
import {
  Building2,
  Dumbbell,
  Gift,
  HeartHandshake,
  Plane,
  Sparkles,
} from "lucide-react";
import { FireworksBackground } from "./animate-ui/components/backgrounds/fireworks";
import ScrollWavyUnderline from "./common/ScrollWavyUnderline";
import Wave from "./Wave";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="group [perspective:1200px] md:px-4 px-2">
      <div
        className={`
          relative
          w-full
          transition-transform
          duration-700
          [transform-style:preserve-3d]
          ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
        `}
      >
        {/* ================= FRONT ================= */}

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

          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              // background: `${item.bg}40`,
              background: `${item.bg}B0`,
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
            <h3 className="mt-6 md:text-xl font-cormorant font-semibold text-2xl  text-[#f9e4bf]">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-3 leading-7 md:text-[18px] font-manrope font-normal text-[#f9e4bf]/90">
              {item.desc}
            </p>

          </div>
        </div>

        {/* ================= BACK ================= */}

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
    <section className="relative overflow-hidden md:px-8 px-4 py-14 md:py-24 bg-[#f9e4bf]">

     <Wave
    position="top"
    fill="#f5ebda"
    // fill='pink-600'
  />

  {/* ================= CONTENT ================= */}
  <div className="relative z-10 max-w-[1500px] mx-auto px-4 md:px-8">

    {/* Your existing content */}

  </div>


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

      <div className="relative z-10 max-w-[1500px] mx-auto px-2 md:px-4">

        {/* Heading */}

        <div className="relative text-center overflow-hidden mb-4">

          <div className="relative z-10">

            <span
              className="
                inline-block
                rounded-full
                md:px-8
                md:py-3
                px-4
                py-2
                text-xs
                font-manrope
                font-bold
                uppercase
                tracking-[4px]
                text-white
                p
              "
            >
              Perfect For
            </span>

            <h2
              className="
                mt-5
                font-cormorant
                text-4xl
                font-bold
                text-[#603917]
                lg:text-4xl
                
              "
            >
              Every Occasion
            </h2>
            <ScrollWavyUnderline />

          </div>
        </div>


{/* ================================================= */}
{/* OCCASION CARDS */}
{/* ================================================= */}

{/* ================= MOBILE AUTO SLIDER ================= */}
<div className="mt-8 overflow-hidden md:hidden">
  <div className="flex animate-occasion-slider">
    {[...occasions, ...occasions].map((item, index) => (
      <div
        key={`${item.title}-${index}`}
        className="w-full flex-shrink-0 px-2"
      >
        <OccasionCard item={item} />
      </div>
    ))}
  </div>
</div>

{/* ================= DESKTOP GRID ================= */}
<div className="mt-8 hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] items-center mx-auto">
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

        {/* <div
          className="
            mt-14
            rounded-3xl
            bg-[#164984]
            px-8
            py-8
            text-center
            shadow-xl
            max-w-[1000px] 
            mx-auto
          "
        > */}
        <div
  className="
    mt-14
    rounded-3xl
    bg-[#164984]
    px-2
    py-8
    text-center
    shadow-xl

    w-[90%]
    max-w-[1000px]
    min-h-[260px]

    md:w-auto
    md:min-h-0
    md:px-8
    md:py-8

    mx-auto
  "
>

          <h3 className="font-cormorant font-semibold text-xl md:text-3xl text-[#f9e4bf]">

            Crafted For Every{" "}

            Celebration
          

            {" "}❤️

          </h3>

          <p className="mt-4 text-[12px] md:text-sm font-manrope font-normal text-[#f9e4bf]/90">
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
              px-4 
              py-2
              md:px-8
              md:py-3
              font-bold
              font-manrope
              text-white
              hover:text-white
              shadow-md
              transition-all
              duration-300
              hover:bg-[#60b396]
              hover:scale-105
              shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] border-black hover:shadow-[3px_4px_0px_#000]
            "
          >
            ☎ Call For Bulk{" "} Orders
          

          </a>

        </div>

      </div>


{/* ================= BOTTOM WAVE ================= */}
<div className="absolute bottom-0 left-0 z-0 w-full overflow-hidden leading-none">
  <svg
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
    className="block h-16 w-full md:h-24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0,85 C220,45 420,42 600,72 C780,102 980,104 1200,85 V120 H0 Z"
      fill="#f5ebda"
    />
  </svg>
</div>


    </section>
  );
};

export default ProductConsumption;