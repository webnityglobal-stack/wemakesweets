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

  <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10">

    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* Left */}

      <div>

        <span className="inline-flex items-center gap-2 rounded-full bg-[#66BC9E]/15 px-5 py-2 text-sm uppercase tracking-[4px] text-[#f9e4bf] backdrop-blur">

          <Sparkles
            size={16}
            className="text-[#F4C02D]"
          />

          Since Every Celebration Matters

        </span>

        <h1 className="mt-8 text-5xl font-black leading-tight text-[#f9e4bf] md:text-6xl">

          Every Sweet
          <br />

          Has A Story.
<ScrollWavyUnderline  color = "#f9e4bf"/>
        </h1>

        {/* <div className="mt-6 h-1 w-32 rounded-full bg-[#E35A7E]" /> */}
        

        <p className="mt-8 max-w-xl text-lg leading-9 text-[#f9e4bf]">

          At <span className="font-semibold text-[#F4C02D]">We Make Sweets</span>,
          every handcrafted delicacy is more than a dessert.
          It is a memory, a celebration and a tradition passed
          through generations.

        </p>

        <button className="group mt-10 flex items-center gap-3 rounded-full bg-[#E35A7E] px-8 py-4 text-white transition-all duration-300 hover:scale-105 hover:bg-[#572340] hover:shadow-xl shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] border-black hover:shadow-[3px_4px_0px_#000]">

          Explore Our Journey

          <ArrowDown
            size={18}
            className="transition group-hover:translate-y-1"
          />

        </button>

      </div>

      {/* Right */}

      <div className="relative">

        <div className="absolute -left-6 -top-6 h-full w-full rounded-[40px] border border-[#66BC9E]/30" />

        <div className="overflow-hidden rounded-[40px] shadow-2xl">

          <img
            src="/ourStory/ourStoryPage1.webp"
            alt="Our Story"
            className="h-[650px] w-full object-cover transition duration-700 hover:scale-110"
          />

        </div>

        <div className="absolute -bottom-8 left-8 rounded-3xl bg-[#f9e4bf] p-6 shadow-xl">

          <p className="text-sm uppercase tracking-[3px] text-[#603917]">

            Crafted With Love

          </p>

          <h3 className="mt-2 text-xl font-bold text-[#E35A7E]">

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
<OurStoryVideo/>
<IconPage/>



      {/* ===================================================== */}
      {/* OUR BEGINNING */}
      {/* ===================================================== */}

     <section className="py-28">

  <div className="mx-auto max-w-7xl px-6 lg:px-10">

    <div className="grid items-center gap-20 lg:grid-cols-2">

      {/* IMAGE */}

      <div className="relative">

        <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[35px] bg-[#E35A7E]" />

        <div className="relative overflow-hidden rounded-[35px] shadow-2xl">

          <img
            src="/ourStory/ourStoryPage2.webp"
            alt=""
            className="h-[650px] w-full object-cover transition duration-700 hover:scale-110"
          />

        </div>

      </div>

      {/* CONTENT */}

      <div>

        <span className="text-sm font-semibold uppercase tracking-[5px] text-[#164984]">

          OUR BEGINNING

        </span>

        <h2 className="mt-5 text-5xl font-black leading-tight text-[#8b183d]">

          Inspired By
          <br />
          Tradition,
          <br />
          Perfected With Passion.
          <ScrollWavyUnderline color="#66BC9E"/>
        </h2>

        {/* <div className="mt-8 h-1 w-28 rounded-full bg-[#66BC9E]" /> */}
        

        <p className="mt-8 leading-9 text-[#3e5a2c]">

          Our journey began with a simple belief—
          that every celebration deserves sweets crafted
          with authenticity, care and uncompromising quality.

        </p>

        <p className="mt-6 leading-9 text-[#3e5a2c]">

          From sourcing premium ingredients to preserving
          traditional recipes, every detail reflects our
          commitment to creating unforgettable experiences
          for families, festivals and special occasions.

        </p>

        <div className="mt-12 grid gap-6 text-[#f9e4bf] sm:grid-cols-2">

          {/* 1st */}
          <div className="rounded-3xl bg-[#603917] p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">

            <Heart
              className="text-[#F4C02D]"
              size={34}
            />

            <h4 className="mt-5 text-xl font-bold">

              Made With Love

            </h4>

            <p className="mt-3 leading-7 text-[#f9e4bf]">

              Every recipe carries warmth,
              dedication and handcrafted perfection.

            </p>

          </div>

          {/* 2nd */}
          <div className="rounded-3xl bg-[#164984] p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">

            <Award
              className="text-[#F4C02D]"
              size={34}
            />

            <h4 className="mt-5 text-xl font-bold">

              Premium Quality

            </h4>

            <p className="mt-3 leading-7 text-[#f9e4bf]">

              Only the finest ingredients are chosen
              to create sweets worth remembering.

            </p>

          </div>

          {/* 3rd */}
          <div className="rounded-3xl bg-[#3e5a2c] p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">

            <Leaf
              className="text-[#66BC9E]"
              size={34}
            />

            <h4 className="mt-5 text-xl font-bold">

              Pure Ingredients

            </h4>

            <p className="mt-3 leading-7 text-[#f9e4bf]">

              Freshness and purity remain
              at the heart of everything we create.

            </p>

          </div>

          {/* 4th */}
          <div className="rounded-3xl bg-[#8b183d] p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">

            <Sparkles
              className="text-[#F4C02D]"
              size={34}
            />

            <h4 className="mt-5 text-xl font-bold">

              Memorable Moments

            </h4>

            <p className="mt-3 leading-7 text-[#f9e4bf]">

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

     <section className="relative overflow-hidden bg-gradient-to-r from-[#8b183d] via-[#572340] to-[#164984] py-28">

  {/* Background Decorations */}

  <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-[#66BC9E]/20 blur-3xl" />

  <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#E35A7E]/15 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

    <div className="text-center">

      <span className="text-sm font-semibold uppercase tracking-[6px] text-[#f9e4bf]">
        OUR PHILOSOPHY
      </span>

      <h2 className="mt-5 text-5xl font-black text-[#f9e4bf]">
        More Than Just
        <br />
        Sweets
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#f9e4bf]">
        Every bite tells a story of craftsmanship, heritage and joy.
        We believe sweets should create memories that stay with people
        long after the celebration ends.
      </p>

    </div>

    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {/* Card 1 */}
      <div className="rounded-[30px] bg-[#603917] p-8 text-[#f9e4bf] shadow-xl transition duration-300 hover:-translate-y-3">

        <div className="text-5xl">🍯</div>

        <h3 className="mt-6 text-2xl font-bold">
          Authentic Taste
        </h3>

        <p className="mt-4 leading-8 text-[#f9e4bf]/85">
          Recipes inspired by generations of Indian traditions.
        </p>

      </div>

      {/* Card 2 */}
      <div className="rounded-[30px] bg-[#3e5a2c] p-8 text-[#f9e4bf] shadow-xl transition duration-300 hover:-translate-y-3">

        <div className="text-5xl">🌿</div>

        <h3 className="mt-6 text-2xl font-bold">
          Finest Ingredients
        </h3>

        <p className="mt-4 leading-8 text-[#f9e4bf]/85">
          Carefully selected premium ingredients in every creation.
        </p>

      </div>

      {/* Card 3 */}
      <div className="rounded-[30px] bg-[#164984] p-8 text-[#f9e4bf] shadow-xl transition duration-300 hover:-translate-y-3">

        <div className="text-5xl">❤️</div>

        <h3 className="mt-6 text-2xl font-bold">
          Crafted With Love
        </h3>

        <p className="mt-4 leading-8 text-[#f9e4bf]/85">
          Every sweet is handcrafted with care and dedication.
        </p>

      </div>

      {/* Card 4 */}
      <div className="rounded-[30px] bg-[#8b183d] p-8 text-[#f9e4bf] shadow-xl transition duration-300 hover:-translate-y-3">

        <div className="text-5xl">🎁</div>

        <h3 className="mt-6 text-2xl font-bold">
          Memorable Moments
        </h3>

        <p className="mt-4 leading-8 text-[#f9e4bf]/85">
          Designed to make every celebration unforgettable.
        </p>

      </div>

    </div>

  </div>

</section>
      {/* ===================================================== */}
      {/* JOURNEY TIMELINE */}
      {/* ===================================================== */}

   <section className="bg-[#f9e4bf] py-28">

  <div className="mx-auto max-w-6xl px-6">

    <div className="text-center">

      <span className="font-semibold uppercase tracking-[5px] text-[#164984]">
        OUR JOURNEY
      </span>

      <h2 className="mt-4 text-5xl font-black text-[#8b183d]">
        Growing With Every Celebration
      </h2>
<ScrollWavyUnderline />
    </div>

    <div className="relative mt-24">

      {/* Timeline */}
      <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-[#603917] lg:block" />

      {[
        {
          year: "The Beginning",
          title: "A Passion Was Born",
          color: "#164984",
          card: "#603917",
          text:
            "Started with a dream to create handcrafted sweets inspired by timeless Indian recipes.",
        },
        {
          year: "Growing Trust",
          title: "Customers Became Family",
          color: "#E35A7E",
          card: "#3e5a2c",
          text:
            "Word of mouth and consistent quality helped us become part of countless celebrations.",
        },
        {
          year: "Today",
          title: "Crafting Happiness",
          color: "#F4C02D",
          card: "#164984",
          text:
            "We continue to innovate while preserving the authentic taste people love.",
        },
      ].map((item, index) => (

        <div
          key={index}
          className={`relative mb-16 flex ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center gap-10`}
        >

          <div className="hidden w-1/2 lg:block" />

          <div
            className="absolute left-1/2 hidden h-6 w-6 -translate-x-1/2 rounded-full border-4 border-[#f9e4bf] lg:flex"
            style={{ background: item.color }}
          />

          <div className="w-full lg:w-1/2">

            <div
              className="rounded-[30px] p-10 shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{ background: item.card }}
            >

              <span
                className="inline-block rounded-full px-5 py-2 text-sm font-semibold text-white"
                style={{ background: item.color }}
              >
                {item.year}
              </span>

              <h3 className="mt-6 text-3xl font-bold text-[#f9e4bf]">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-[#f9e4bf]/90">
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
      {/* VALUES */}
      {/* ===================================================== */}

  <section className="bg-[#164984] py-28">

  <div className="mx-auto max-w-7xl px-6 lg:px-10">

    <div className="text-center">

      <span className="font-semibold uppercase tracking-[5px] text-[#F4C02D]">
        OUR VALUES
      </span>

      <h2 className="mt-5 text-5xl font-black text-[#f9e4bf]">
        The Values That Define Us
      </h2>
<ScrollWavyUnderline color="#f9e4bf"/>
    </div>

    <div className="mt-20 grid gap-8 md:grid-cols-2">

      {/* Tradition */}
      <div className="rounded-[35px] border-l-[8px] border-[#66BC9E] bg-[#572340] p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <h3 className="text-3xl font-bold text-[#F4C02D]">
          Tradition
        </h3>

        <p className="mt-5 leading-8 text-[#f9e4bf]">
          Every recipe respects authentic Indian sweet-making traditions
          passed through generations.
        </p>

      </div>

      {/* Quality */}
      <div className="rounded-[35px] border-l-[8px] border-[#E35A7E] bg-[#8b183d] p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <h3 className="text-3xl font-bold text-[#F4C02D]">
          Quality
        </h3>

        <p className="mt-5 leading-8 text-[#f9e4bf]">
          Premium ingredients and uncompromising quality standards are at
          the heart of everything we make.
        </p>

      </div>

      {/* Freshness */}
      <div className="rounded-[35px] border-l-[8px] border-[#66BC9E] bg-[#3e5a2c] p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <h3 className="text-3xl font-bold text-[#F4C02D]">
          Freshness
        </h3>

        <p className="mt-5 leading-8 text-[#f9e4bf]">
          Every order is prepared with freshness and attention to detail,
          ensuring the finest taste.
        </p>

      </div>

      {/* Relationships */}
      <div className="rounded-[35px] border-l-[8px] border-[#DE6239] bg-[#603917] p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <h3 className="text-3xl font-bold text-[#F4C02D]">
          Relationships
        </h3>

        <p className="mt-5 leading-8 text-[#f9e4bf]">
          We don't just make sweets—we build lasting relationships through
          trust and memorable celebrations.
        </p>

      </div>

    </div>

  </div>

</section>

            {/* ===================================================== */}
      {/* EXPERIENCE / CTA */}
      {/* ===================================================== */}

     <section className="relative overflow-hidden py-28 bg-gradient-to-r from-[#164984] via-[#8b183d] to-[#603917]">

  <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[#66BC9E]/15 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#3e5a2c]/20 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT */}

      <div>

        <span className="uppercase tracking-[6px] text-[#F4C02D] text-sm font-semibold">
          EXPERIENCE THE DIFFERENCE
        </span>

        <h2 className="mt-6 text-5xl lg:text-6xl font-black leading-tight text-[#f9e4bf]">
          Every Celebration
          <br />
          Deserves
          <br />
          Something Sweet.
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-9 text-[#f9e4bf]/80">
          Whether it's a wedding, festival, birthday or corporate event,
          our handcrafted sweets are made to turn ordinary moments into
          unforgettable celebrations.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <button className="rounded-full bg-[#E35A7E] px-8 py-4 font-semibold text-white transition hover:scale-105 shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] border-black hover:shadow-[3px_4px_0px_#000]">
            Explore Collection
          </button>

          <button className="rounded-full border border-[#f9e4bf]/40 px-8 py-4 font-semibold text-[#f9e4bf] transition hover:bg-[#66BC9E]/15">
            Contact Us
          </button>

        </div>

      </div>

      {/* RIGHT */}

      <div className="grid grid-cols-2 gap-6">

        <div className="rounded-[30px] bg-white/10 p-8 backdrop-blur">
          <h3 className="text-5xl font-black text-[#F4C02D]">100%</h3>
          <p className="mt-4 text-[#f9e4bf]/80">
            Premium Ingredients
          </p>
        </div>

        <div className="rounded-[30px] bg-white/10 p-8 backdrop-blur">
          <h3 className="text-5xl font-black text-[#66BC9E]">Fresh</h3>
          <p className="mt-4 text-[#f9e4bf]/80">
            Handcrafted Daily
          </p>
        </div>

        <div className="rounded-[30px] bg-white/10 p-8 backdrop-blur">
          <h3 className="text-5xl font-black text-[#E35A7E]">Love</h3>
          <p className="mt-4 text-[#f9e4bf]/80">
            Crafted Into Every Bite
          </p>
        </div>

        <div className="rounded-[30px] bg-white/10 p-8 backdrop-blur">
          <h3 className="text-5xl font-black text-[#DE6239]">Trust</h3>
          <p className="mt-4 text-[#f9e4bf]/80">
            Built With Every Order
          </p>
        </div>

      </div>

    </div>

  </div>

</section>

      {/* ===================================================== */}
      {/* THANK YOU */}
      {/* ===================================================== */}

   <section className="relative bg-[#f9e4bf] py-24">

  <div className="mx-auto max-w-5xl px-6 text-center">

    <span className="font-semibold uppercase tracking-[5px] text-[#164984]">
      THANK YOU
    </span>

    <h2 className="mt-6 text-5xl font-black leading-tight text-[#8b183d]">
      Thank You For Being
      <br />
      A Part Of Our Story
    </h2>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#3e5a2c]">
      Every customer who chooses us becomes a part of our journey.
      Your celebrations inspire us to create sweets that carry happiness,
      tradition and unforgettable memories.
    </p>

    {/* <div className="mx-auto mt-12 h-1 w-28 rounded-full bg-[#66BC9E]" /> */}
    <ScrollWavyUnderline/>

    <div className="mt-14 flex flex-wrap justify-center gap-5">

      <div className="rounded-full bg-[#164984] px-6 py-3 text-[#f9e4bf]">
        Authentic Taste
      </div>

      <div className="rounded-full bg-[#8b183d] px-6 py-3 text-[#f9e4bf]">
        Premium Quality
      </div>

      <div className="rounded-full bg-[#3e5a2c] px-6 py-3 text-[#f9e4bf]">
        Freshly Crafted
      </div>

      <div className="rounded-full bg-[#603917] px-6 py-3 text-[#f9e4bf]">
        Made With Love
      </div>

    </div>

  </div>

</section>

    </main>
  );
}