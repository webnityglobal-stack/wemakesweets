import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Award,
  Leaf,
  Sparkles,
  ArrowDown,
} from "lucide-react";
import OurStoryVideo from "../components/our-story/OurStoryVideo";
import IconPage from "../components/our-story/IconPage";
import ScrollWavyUnderline from "@/components/common/ScrollWavyUnderline";
 
export default function OurStory() {
  const videoSectionRef = useRef(null);

  const scrollToVideo = () => {
    videoSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="overflow-hidden bg-[#f9e4bf]">

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#603917]">

  {/* Background Decorations */}

  <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-[#8b183d]/20 blur-3xl" />

  <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#3e5a2c]/30 blur-3xl" />

  <div className="absolute top-1/3 right-1/4 h-56 w-56 rounded-full bg-[#603917]/25 blur-3xl" />

  <div className="absolute inset-0 opacity-10">
    <div className="absolute left-10 top-20 h-40 w-40 rounded-full border border-[#66BC9E]/30" />
    <div className="absolute bottom-32 right-20 h-52 w-52 rounded-full border border-[#F4C02D]/20" />
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-14 md:py-18 lg:px-10">

    <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">

      {/* Left */}

      <div>

        <span className="inline-flex items-center gap-2 rounded-full bg-[#66BC9E]/15 px-4 sm:px-5 py-2 md:text-sm text-[10px] uppercase tracking-[3px] sm:tracking-[4px] text-[#f9e4bf] backdrop-blur">

          <Sparkles
            size={16}
            className="text-[#F4C02D]"
          />

          Since Every Celebration Matters

        </span>

        <h1 className="md:mt-8 mt-4 font-cormorant text-3xl sm:text-4xl font-black leading-tight text-[#f9e4bf] md:text-5xl">

          Every Sweet
          <br />

          Has A Story
          {/* <ScrollWavyUnderline color="#f9e4bf" className="justify-center lg:justify-start lg:pr-80" /> */}
        </h1>

        {/* <div className="mt-6 h-1 w-32 rounded-full bg-[#E35A7E]" /> */}
        

        <p className="md:mt-8 mt-4 max-w-xl text-base md:text-lg leading-7 sm:leading-9 text-[#f9e4bf]">

          At <span className="font-semibold text-[#F4C02D]">WeMake Sweets</span>,
          every handcrafted delicacy is more than a dessert.
          It is a memory, a celebration and a tradition passed
          through generations.

        </p>

        <button
          onClick={scrollToVideo}
          className="group md:mt-10 mt-5 flex items-center gap-3 rounded-full text-white hover:text-white bg-pink-600 px-6 sm:px-8 py-3.5 sm:py-4 font-manrope font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#60b396] shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000] cursor-pointer"
        >

          Explore Our Journey

          <ArrowDown
            size={18}
            className="transition group-hover:translate-y-1"
          />

        </button>

      </div>

      {/* Right */}

      <div className="relative mt-4 lg:mt-0">

        <div className="absolute -left-3 -top-3 sm:-left-6 sm:-top-6 h-full w-full rounded-[30px] sm:rounded-[40px] border border-[#66BC9E]/30" />

        <div className="overflow-hidden rounded-[30px] sm:rounded-[40px] shadow-2xl">

          <img
            src="/ourStory/ourStoryPage1.webp"
            alt="Our Story"
            className="h-[500px] sm:h-[580px] md:h-[650px] w-full object-cover transition duration-700 hover:scale-110"
          />

        </div>

        <div className="absolute md:mb-0 mb-2 -bottom-2 md:-bottom-8 left-4 sm:left-8 rounded-2xl sm:rounded-3xl bg-[#f9e4bf] px-4 py-3 md:p-6 shadow-xl">

          <p className="md:text-sm text-[10px] uppercase tracking-[2px] sm:tracking-[3px] text-[#603917]">

            Crafted With Love

          </p>

          <h3 className="mt-1 md:mt-2 text-base sm:text-lg md:text-xl font-bold text-[#E35A7E]">

            100%
            <br />
            Freshness

          </h3>

        </div>

      </div>

    </div>

  </div>

</section>



{/* video section */}
<div ref={videoSectionRef} className="scroll-mt-8">
  <OurStoryVideo />
</div>
<IconPage/>



      {/* ===================================================== */}
      {/* OUR BEGINNING */}
      {/* ===================================================== */}

     <section className="relative overflow-hidden md:py-8 py-12">

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 ">

    <div className="grid items-center gap-10 lg:gap-20 lg:grid-cols-2 ">

      {/* IMAGE */}

      <div className="relative md:translate-y-14 md:pt-12">

        <div className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 h-full w-full rounded-[30px] sm:rounded-[40px] bg-[#603917]" />

        <div className="relative overflow-hidden rounded-[30px] sm:rounded-[40px] shadow-2xl ">

          <img
            src="/ourStory/ourStoryPage2.png"
            alt="Our Beginning"
            className="h-[500px] sm:h-[580px] md:h-[650px] w-full object-cover transition duration-700 hover:scale-110"
          />

        </div>

      </div>

      {/* CONTENT */}

      <div>

        <span className="text-xs sm:text-sm font-semibold uppercase tracking-[4px] sm:tracking-[5px] text-[#164984]">

          OUR BEGINNING

        </span>

        <h2 className="md:mt-2 mt-2 md:text-4xl text-3xl font-cormorant font-black leading-tight text-[#8b183d]">

          Inspired By
          <br />
          Tradition,
          <br />
          Perfected With Passion.
          <ScrollWavyUnderline color="#66BC9E" className="justify-center lg:justify-start lg:pr-60" />
        </h2>

        <p className="md:mt-4 mt-4 text-sm sm:text-base leading-7 sm:leading-9 text-[#3e5a2c]">

          Our journey began with a simple belief—
          that every celebration deserves sweets crafted
          with authenticity, care and uncompromising quality.

        </p>

        <p className="md:mt-2 mt-2 text-sm sm:text-base leading-7 sm:leading-9 text-[#3e5a2c]">

          From sourcing premium ingredients to preserving
          traditional recipes, every detail reflects our
          commitment to creating unforgettable experiences
          for families, festivals and special occasions.

        </p>

        <div className="mt-6 grid gap-4 text-[#f9e4bf] sm:grid-cols-2">

          {/* 1st */}
          <div className="rounded-3xl bg-[#603917] p-5 sm:p-6 md:p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">

            <Heart
              className="text-[#F4C02D]"
              size={28}
            />

            <h4 className="mt-4 md:mt-2 text-lg sm:text-xl font-bold">

              Made With Love

            </h4>

            <p className="mt-2 leading-6 sm:leading-7 text-sm sm:text-base text-[#f9e4bf]">

              Every recipe carries warmth,
              dedication and handcrafted perfection.

            </p>

          </div>

          {/* 2nd */}
          <div className="rounded-3xl bg-[#164984] p-5 sm:p-6 md:p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">

            <Award
              className="text-[#F4C02D]"
              size={28}
            />

            <h4 className="mt-4 md:mt-2 text-lg sm:text-xl font-bold">

              Premium Quality

            </h4>

            <p className="mt-2 leading-6 sm:leading-7 text-sm sm:text-base text-[#f9e4bf]">

              Only the finest ingredients are chosen
              to create sweets worth remembering.

            </p>

          </div>

          {/* 3rd */}
          <div className="rounded-3xl bg-[#3e5a2c] p-5 sm:p-6 md:p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">

            <Leaf
              className="text-[#66BC9E]"
              size={28}
            />

            <h4 className="mt-4 md:mt-2 text-lg sm:text-xl font-bold">

              Pure Ingredients

            </h4>

            <p className="mt-2 leading-6 sm:leading-7 text-sm sm:text-base text-[#f9e4bf]">

              Freshness and purity remain
              at the heart of everything we create.

            </p>

          </div>

          {/* 4th */}
          <div className="rounded-3xl bg-[#8b183d] p-5 sm:p-6 md:p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">

            <Sparkles
              className="text-[#F4C02D]"
              size={28}
            />

            <h4 className="mt-4 md:mt-2 text-lg sm:text-xl font-bold">

              Memorable Moments

            </h4>

            <p className="mt-2 leading-6 sm:leading-7 text-sm sm:text-base text-[#f9e4bf]">

              Because every celebration deserves
              something truly extraordinary.

            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
            {/* ===================================================== */}
      {/* OUR PHILOSOPHY */}
      {/* ===================================================== */}

     <section className="relative overflow-hidden bg-gradient-to-r from-[#8b183d] via-[#572340] to-[#164984] py-12 md:py-14">

  {/* Background Decorations */}

  <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-[#66BC9E]/20 blur-3xl" />

  <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#E35A7E]/15 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

    <div className="text-center">

      <span className="text-xs sm:text-sm font-semibold uppercase tracking-[4px] sm:tracking-[6px] text-[#f9e4bf]">
        OUR PHILOSOPHY
      </span>

      <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl font-cormorant font-black text-[#f9e4bf]">
        More Than Just
        <br />
        Sweets
      </h2>

      <p className="mx-auto mt-4 sm:mt-8 max-w-3xl text-base md:text-lg leading-7 sm:leading-9 text-[#f9e4bf]">
        Every bite tells a story of craftsmanship, heritage and joy.
        We believe sweets should create memories that stay with people
        long after the celebration ends.
      </p>

    </div>

    <div className="mt-10 md:mt-20 grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">

      {/* Card 1 */}
      <div className="rounded-[25px] sm:rounded-[30px] bg-[#603917] p-6 sm:p-8 text-[#f9e4bf] shadow-xl transition duration-300 hover:-translate-y-3">

        <div className="text-4xl sm:text-5xl">🍯</div>

        <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-bold">
          Authentic Taste
        </h3>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-8 text-[#f9e4bf]/85">
          Recipes inspired by generations of Indian traditions.
        </p>

      </div>

      {/* Card 2 */}
      <div className="rounded-[25px] sm:rounded-[30px] bg-[#3e5a2c] p-6 sm:p-8 text-[#f9e4bf] shadow-xl transition duration-300 hover:-translate-y-3">

        <div className="text-4xl sm:text-5xl">🌿</div>

        <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-bold">
          Finest Ingredients
        </h3>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-8 text-[#f9e4bf]/85">
          Carefully selected premium ingredients in every creation.
        </p>

      </div>

      {/* Card 3 */}
      <div className="rounded-[25px] sm:rounded-[30px] bg-[#164984] p-6 sm:p-8 text-[#f9e4bf] shadow-xl transition duration-300 hover:-translate-y-3">

        <div className="text-4xl sm:text-5xl">❤️</div>

        <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-bold">
          Crafted With Love
        </h3>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-8 text-[#f9e4bf]/85">
          Every sweet is handcrafted with care and dedication.
        </p>

      </div>

      {/* Card 4 */}
      <div className="rounded-[25px] sm:rounded-[30px] bg-[#8b183d] p-6 sm:p-8 text-[#f9e4bf] shadow-xl transition duration-300 hover:-translate-y-3">

        <div className="text-4xl sm:text-5xl">🎁</div>

        <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-bold">
          Memorable Moments
        </h3>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-8 text-[#f9e4bf]/85">
          Designed to make every celebration unforgettable.
        </p>

      </div>

    </div>

  </div>

</section>
      {/* ===================================================== */}
      {/* JOURNEY TIMELINE */}
      {/* ===================================================== */}

   <section className="relative overflow-hidden bg-[#f9e4bf] py-12 md:py-16">

  <div className="mx-auto max-w-6xl px-4 sm:px-6">

    <div className="text-center">

      <span className="text-xs sm:text-sm font-semibold uppercase tracking-[4px] sm:tracking-[5px] text-[#164984]">
        OUR JOURNEY
      </span>

      <h2 className="mt-3 sm:mt-4 md:text-5xl font-cormorant text-3xl font-black text-[#8b183d]">
        Growing With Every Celebration
      </h2>
<ScrollWavyUnderline />
    </div>

    <div className="relative mt-8 sm:mt-12 md:mt-24">

      {/* Timeline */}
      <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-[#603917] lg:block" />

      {[
        {
          year: "The Beginning",
          title: "A Passion Was Born — 2021",
          color: "#164984",
          card: "#603917",
          text:
            "What began in 2021 as a passion for creating wholesome, handcrafted indulgence soon became a vision to make healthy snacking truly delicious.",
        },
        {
          year: "Growing Trust",
          title: "Customers Became Family",
          color: "#E35A7E",
          card: "#3e5a2c",
          text:
            "Loved for our premium quality, wholesome ingredients and handcrafted taste, we grew one customer at a time. Today, our healthy snacks are part of countless homes, celebrations and everyday moments.",
        },
        {
          year: "Today",
          title: "Crafting Better Snacking",
          color: "#F4C02D",
          card: "#164984",
          text:
            "Today, we continue to create premium healthy snacks made with dates, nuts, seeds, pure cow ghee and pure honey. With a focus on quality, taste and mindful ingredients, we’re making wholesome snacking delicious, naturally.",
        },
      ].map((item, index) => (

        <div
          key={index}
          className={`relative mb-6 sm:mb-8 md:mb-16 flex ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center gap-4 md:gap-10`}
        >

          <div className="hidden w-1/2 lg:block" />

          <div
            className="absolute left-1/2 hidden h-6 w-6 -translate-x-1/2 rounded-full border-4 border-[#f9e4bf] lg:flex"
            style={{ background: item.color }}
          />

          <div className="w-full lg:w-1/2">

            <div
              className="rounded-[25px] sm:rounded-[30px] p-5 sm:p-7 md:p-10 shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{ background: item.card }}
            >

              <span
                className="inline-block rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white"
                style={{ background: item.color }}
              >
                {item.year}
              </span>

              <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-3xl font-bold text-[#f9e4bf]">
                {item.title}
              </h3>

              <p className="mt-3 sm:mt-5 text-sm sm:text-base leading-6 sm:leading-8 text-[#f9e4bf]/90">
                {item.text}
              </p>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

      {/* ===================================================== */}
      {/* 6. OUR VALUES */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-[#164984] py-12 md:py-14">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

          <div className="text-center">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[4px] sm:tracking-[5px] text-[#F4C02D]">
              OUR VALUES
            </span>

            <h2 className="mt-4 sm:mt-5 md:text-5xl text-3xl font-cormorant font-black text-[#f9e4bf]">
              The Values That Define Us
            </h2>
            <ScrollWavyUnderline color="#f9e4bf" />
          </div>

          <div className="mt-8 sm:mt-12 md:mt-20 grid gap-6 sm:gap-8 md:grid-cols-2">

            {/* Tradition */}
            <div className="rounded-[25px] sm:rounded-[35px] border-l-[6px] sm:border-l-[8px] border-[#66BC9E] bg-[#572340] p-6 sm:p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F4C02D]">
                Premium Ingredients
              </h3>
              <p className="mt-3 sm:mt-5 text-sm sm:text-base leading-6 sm:leading-8 text-[#f9e4bf]">
                We choose premium dates, nuts, seeds, pure cow ghee and pure honey to create wholesome snacks you can trust.
              </p>
            </div>

            {/* Quality */}
            <div className="rounded-[25px] sm:rounded-[35px] border-l-[6px] sm:border-l-[8px] border-[#E35A7E] bg-[#8b183d] p-6 sm:p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F4C02D]">
                Honest & Clean
              </h3>
              <p className="mt-3 sm:mt-5 text-sm sm:text-base leading-6 sm:leading-8 text-[#f9e4bf]">
                Simple, thoughtfully selected ingredients. No unnecessary compromise—just delicious, wholesome snacking.
              </p>
            </div>

            {/* Freshness */}
            <div className="rounded-[25px] sm:rounded-[35px] border-l-[6px] sm:border-l-[8px] border-[#66BC9E] bg-[#3e5a2c] p-6 sm:p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F4C02D]">
                Taste Without Compromise
              </h3>
              <p className="mt-3 sm:mt-5 text-sm sm:text-base leading-6 sm:leading-8 text-[#f9e4bf]">
                Healthy should never mean boring. We craft naturally delicious snacks that bring together nutrition and indulgent taste.
              </p>
            </div>

            {/* Relationships */}
            <div className="rounded-[25px] sm:rounded-[35px] border-l-[6px] sm:border-l-[8px] border-[#DE6239] bg-[#603917] p-6 sm:p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F4C02D]">
                Crafted With Care
              </h3>
              <p className="mt-3 sm:mt-5 text-sm sm:text-base leading-6 sm:leading-8 text-[#f9e4bf]">
                From sourcing to every finished bite, we focus on quality, freshness and mindful craftsmanship to deliver snacks made with care.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* 7. EXPERIENCE / CTA */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden py-12 md:py-14 bg-gradient-to-r from-[#164984] via-[#8b183d] to-[#603917]">

        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[#66BC9E]/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#3e5a2c]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left */}
            <div>
              <span className="uppercase tracking-[4px] sm:tracking-[6px] text-[#F4C02D] text-xs sm:text-sm font-semibold">
                EXPERIENCE THE DIFFERENCE
              </span>

              <h2 className="mt-4 sm:mt-6 font-cormorant md:text-5xl text-3xl lg:text-5xl font-black leading-tight text-[#f9e4bf]">
                Every Celebration
                <br />
                Deserves
                <br />
                Something Sweet.
              </h2>

              <p className="mt-4 sm:mt-8 max-w-xl text-sm sm:text-base md:text-lg leading-7 sm:leading-9 text-[#f9e4bf]/80">
                Whether it's a wedding, festival, birthday or corporate event,
                our handcrafted sweets are made to turn ordinary moments into
                unforgettable celebrations.
              </p>

              <div className="mt-6 sm:mt-10 flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center rounded-full text-white hover:text-white bg-pink-600 hover:bg-[#60b396] px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000] cursor-pointer"
                >
                  Explore Collection
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full text-white hover:text-white bg-pink-600 hover:bg-[#60b396] shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000] px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">

              <div className="rounded-[20px] sm:rounded-[30px] bg-white/10 p-4 sm:p-6 md:p-8 backdrop-blur text-center sm:text-left">
                <h3 className="md:text-5xl text-2xl sm:text-3xl font-black text-[#F4C02D]">100%</h3>
                <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base text-[#f9e4bf]/80">
                  Premium Ingredients
                </p>
              </div>

              <div className="rounded-[20px] sm:rounded-[30px] bg-white/10 p-4 sm:p-6 md:p-8 backdrop-blur text-center sm:text-left">
                <h3 className="md:text-5xl text-2xl sm:text-3xl font-black text-[#66BC9E]">Fresh</h3>
                <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base text-[#f9e4bf]/80">
                  Handcrafted Daily
                </p>
              </div>

              <div className="rounded-[20px] sm:rounded-[30px] bg-white/10 p-4 sm:p-6 md:p-8 backdrop-blur text-center sm:text-left">
                <h3 className="md:text-5xl text-2xl sm:text-3xl font-black text-[#E35A7E]">Love</h3>
                <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base text-[#f9e4bf]/80">
                  Crafted Into Every Bite
                </p>
              </div>

              <div className="rounded-[20px] sm:rounded-[30px] bg-white/10 p-4 sm:p-6 md:p-8 backdrop-blur text-center sm:text-left">
                <h3 className="md:text-5xl text-2xl sm:text-3xl font-black text-[#DE6239]">Trust</h3>
                <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base text-[#f9e4bf]/80">
                  Built With Every Order
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* 8. THANK YOU */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-[#f5ebda] pt-10 sm:pt-12 pb-6 md:pt-14">

        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">

          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[4px] sm:tracking-[5px] text-[#164984]">
            THANK YOU
          </span>

          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl font-cormorant font-semibold font-black leading-tight text-[#8b183d]">
            Thank You For Being
            <br />
            A Part Of Our Story
          </h2>
          <ScrollWavyUnderline />
          <p className="mx-auto font-manrope mt-6 sm:mt-8 max-w-3xl text-sm sm:text-base leading-7 sm:leading-9 text-[#3e5a2c]">
            Every customer who chooses us becomes a part of our journey.
            Your celebrations inspire us to create sweets that carry happiness,
            tradition and unforgettable memories.
          </p>

        </div>

      </section>

    </main>
  );
}