import {
  Heart,
  Award,
  Leaf,
  Sparkles,
  ArrowDown,
} from "lucide-react";

export default function OurStory() {
  return (
    <main className="overflow-hidden bg-[#f9e4bf]">

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative min-h-screen flex items-center bg-[#552b12] overflow-hidden">

        {/* Background Decorations */}

        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-[#810c26]/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#2a4d25]/30 blur-3xl" />

        <div className="absolute top-1/3 right-1/4 h-56 w-56 rounded-full bg-[#552b12]/20 blur-3xl" />

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 h-40 w-40 rounded-full border border-white/20" />
          <div className="absolute bottom-32 right-20 h-52 w-52 rounded-full border border-white/10" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 py-28">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}

            <div>

              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm uppercase tracking-[4px] text-[#f9e4bf] backdrop-blur">

                <Sparkles size={16} />

                Since Every Celebration Matters

              </span>

              <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-[#f9e4bf]">

                Every Sweet
                <br />

                Has A Story.

              </h1>

              <div className="mt-6 h-1 w-32 rounded-full bg-[#810c26]" />

              <p className="mt-8 max-w-xl text-lg leading-9 text-[#f9e4bf]">

                At <span className="font-semibold">We Make Sweets</span>,
                every handcrafted delicacy is more than a dessert.
                It is a memory, a celebration and a tradition passed
                through generations.

              </p>

              <button className="group mt-10 flex items-center gap-3 rounded-full bg-[#810c26] px-8 py-4 text-white transition duration-300 hover:scale-105 hover:bg-[#6e0a21]">

                Explore Our Journey

                <ArrowDown
                  size={18}
                  className="transition group-hover:translate-y-1"
                />

              </button>

            </div>

            {/* Right */}

            <div className="relative">

              <div className="absolute -left-6 -top-6 h-full w-full rounded-[40px] border border-[#f9e4bf]/20" />

              <div className="overflow-hidden rounded-[40px] shadow-2xl">

                <img
                  src="/ourStory/ourStoryPage1.png"
                  alt="Our Story"
                  className="h-[650px] w-full object-cover transition duration-700 hover:scale-110"
                />

              </div>

              <div className="absolute -bottom-8 left-8 rounded-3xl bg-[#f9e4bf] p-6 shadow-xl">

                <p className="text-sm uppercase tracking-[3px] text-[#552b12]">

                  Crafted With Love

                </p>

                <h3 className="mt-2 text-3xl font-bold text-[#810c26]">

                  100%
                  <br />
                  Freshness

                </h3>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* OUR BEGINNING */}
      {/* ===================================================== */}

      <section className="py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* IMAGE */}

            <div className="relative">

              <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[35px] bg-[#810c26]" />

              <div className="relative overflow-hidden rounded-[35px] shadow-2xl">

                <img
                  src="/ourStory/ourStoryPage2.png"
                  alt=""
                  className="h-[650px] w-full object-cover transition duration-700 hover:scale-110"
                />

              </div>

            </div>

            {/* CONTENT */}

            <div>

              <span className="text-sm uppercase tracking-[5px] font-semibold text-[#08376c]">

                OUR BEGINNING

              </span>

              <h2 className="mt-5 text-5xl font-black leading-tight text-[#810c26]">

                Inspired By
                <br />
                Tradition,
                <br />
                Perfected With Passion.

              </h2>

              <div className="mt-8 h-1 w-28 rounded-full bg-[#2a4d25]" />

              <p className="mt-8 leading-9 text-gray-700">

                Our journey began with a simple belief—
                that every celebration deserves sweets crafted
                with authenticity, care and uncompromising quality.

              </p>

              <p className="mt-6 leading-9 text-gray-700">

                From sourcing premium ingredients to preserving
                traditional recipes, every detail reflects our
                commitment to creating unforgettable experiences
                for families, festivals and special occasions.

              </p>

              <div className="mt-12 grid sm:grid-cols-2 gap-6 text-[#f9e4bf]">
{/* 1st */}
                <div className="rounded-3xl bg-[#552b12] p-7 shadow-lg transition hover:-translate-y-2">

                  <Heart className="text-[#f9e4bf]" size={34} />

                  <h4 className="mt-5 text-xl font-bold">

                    Made With Love

                  </h4>

                  <p className="mt-3 text-[#f9e4bf] leading-7">

                    Every recipe carries warmth,
                    dedication and handcrafted perfection.

                  </p>

                </div>
{/* 2nd */}
                <div className="rounded-3xl bg-[#08376c] p-7 shadow-lg transition hover:-translate-y-2">

                  <Award className="text-[#f9e4bf ]" size={34} />

                  <h4 className="mt-5 text-xl font-bold">

                    Premium Quality

                  </h4>

                  <p className="mt-3 text-[#f9e4bf] leading-7">

                    Only the finest ingredients are chosen
                    to create sweets worth remembering.

                  </p>

                </div>
{/* 3rd */}
                <div className="rounded-3xl bg-[#254a21] p-7 shadow-lg transition hover:-translate-y-2">

                  <Leaf className="text-[#f9e4bf]" size={34} />

                  <h4 className="mt-5 text-xl font-bold">

                    Pure Ingredients

                  </h4>

                  <p className="mt-3 text-[#f9e4bf] leading-7">

                    Freshness and purity remain
                    at the heart of everything we create.

                  </p>

                </div>
{/* 4nd */}
                <div className="rounded-3xl bg-[#552b12] p-7 shadow-lg transition hover:-translate-y-2">

                  <Sparkles className="text-[#f9e4bf]" size={34} />

                  <h4 className="mt-5 text-xl font-bold">

                    Memorable Moments

                  </h4>

                  <p className="mt-3 text-[#f9e4bf] leading-7">

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

      <section className="relative overflow-hidden bg-[#08376c] py-28">

        <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-[#810c26]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#2a4d25]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

          <div className="text-center">

            <span className="uppercase tracking-[6px] text-[#f9e4bf] text-sm font-semibold">
              OUR PHILOSOPHY
            </span>

            <h2 className="mt-5 text-5xl font-black text-white">
              More Than Just
              <br />
              Sweets
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/75">
              Every bite tells a story of craftsmanship, heritage and joy.
              We believe sweets should create memories that stay with people
              long after the celebration ends.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-[30px] bg-white/10 p-8 backdrop-blur transition duration-300 hover:-translate-y-3 hover:bg-[#810c26]">

              <div className="text-5xl">🍯</div>

              <h3 className="mt-6 text-2xl font-bold text-[#f9e4bf]">
                Authentic Taste
              </h3>

              <p className="mt-4 leading-8 text-white/80">
                Recipes inspired by generations of Indian traditions.
              </p>

            </div>

            <div className="rounded-[30px] bg-white/10 p-8 backdrop-blur transition duration-300 hover:-translate-y-3 hover:bg-[#2a4d25]">

              <div className="text-5xl">🌿</div>

              <h3 className="mt-6 text-2xl font-bold text-[#f9e4bf]">
                Finest Ingredients
              </h3>

              <p className="mt-4 leading-8 text-white/80">
                Carefully selected premium ingredients in every creation.
              </p>

            </div>

            <div className="rounded-[30px] bg-white/10 p-8 backdrop-blur transition duration-300 hover:-translate-y-3 hover:bg-[#552b12]">

              <div className="text-5xl">❤️</div>

              <h3 className="mt-6 text-2xl font-bold text-[#f9e4bf]">
                Crafted With Love
              </h3>

              <p className="mt-4 leading-8 text-white/80">
                Every sweet is handcrafted with care and dedication.
              </p>

            </div>

            <div className="rounded-[30px] bg-white/10 p-8 backdrop-blur transition duration-300 hover:-translate-y-3 hover:bg-[#254a21]">

              <div className="text-5xl">🎁</div>

              <h3 className="mt-6 text-2xl font-bold text-[#f9e4bf]">
                Memorable Moments
              </h3>

              <p className="mt-4 leading-8 text-white/80">
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

            <span className="uppercase tracking-[5px] text-[#08376c] font-semibold">
              OUR JOURNEY
            </span>

            <h2 className="mt-4 text-5xl font-black text-[#810c26]">
              Growing With Every Celebration
            </h2>

          </div>

          <div className="relative mt-24">

            <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-[#552b12] lg:block" />

            {[
              {
                year: "The Beginning",
                title: "A Passion Was Born",
                color: "#08376c",
                text:
                  "Started with a dream to create handcrafted sweets inspired by timeless Indian recipes.",
              },
              {
                year: "Growing Trust",
                title: "Customers Became Family",
                color: "#810c26",
                text:
                  "Word of mouth and consistent quality helped us become part of countless celebrations.",
              },
              {
                year: "Today",
                title: "Crafting Happiness",
                color: "#08376c",
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

                <div className="hidden lg:block w-1/2" />

                <div
                  className="hidden lg:flex absolute left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-[#f9e4bf]"
                  style={{ background: item.color }}
                />

                <div className="w-full lg:w-1/2">

                  <div className="rounded-[30px] bg-[#254a21] p-10 shadow-xl">

                    <span
                      className="inline-block rounded-full px-5 py-2 text-sm font-semibold text-white"
                      style={{ background: item.color }}
                    >
                      {item.year}
                    </span>

                    <h3 className="mt-6 text-3xl font-bold text-[#f9e4bf]">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-8 text-[#]">
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

      <section className="bg-[#810c26] py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="text-center">

            <span className="uppercase tracking-[5px] text-[#f9e4bf] font-semibold">
              OUR VALUES
            </span>

            <h2 className="mt-5 text-5xl font-black text-[#f9e4bf]">
              The Values That Define Us
            </h2>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2">

            <div className="rounded-[35px] border-l-[8px] border-[#08376c] bg-[#f9e4bf] p-10 transition hover:shadow-2xl">
              <h3 className="text-3xl font-bold text-[#08376c]">
                Tradition
              </h3>

              <p className="mt-5 leading-8 text-gray-700">
                Every recipe respects authentic Indian sweet-making traditions
                passed through generations.
              </p>
            </div>

            <div className="rounded-[35px] border-l-[8px] border-[#810c26] bg-[#f9e4bf] p-10 transition hover:shadow-2xl">
              <h3 className="text-3xl font-bold text-[#810c26]">
                Quality
              </h3>

              <p className="mt-5 leading-8 text-gray-700">
                Premium ingredients and uncompromising quality standards are at
                the heart of everything we make.
              </p>
            </div>

            <div className="rounded-[35px] border-l-[8px] border-[#2a4d25] bg-[#f9e4bf] p-10 transition hover:shadow-2xl">
              <h3 className="text-3xl font-bold text-[#2a4d25]">
                Freshness
              </h3>

              <p className="mt-5 leading-8 text-gray-700">
                Every order is prepared with freshness and attention to detail,
                ensuring the finest taste.
              </p>
            </div>

            <div className="rounded-[35px] border-l-[8px] border-[#552b12] bg-[#f9e4bf] p-10 transition hover:shadow-2xl">
              <h3 className="text-3xl font-bold text-[#552b12]">
                Relationships
              </h3>

              <p className="mt-5 leading-8 text-gray-700">
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

      <section className="relative overflow-hidden py-28 bg-gradient-to-r from-[#08376c] via-[#810c26] to-[#552b12]">

        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#2a4d25]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <div>

              <span className="uppercase tracking-[6px] text-[#f9e4bf] text-sm font-semibold">
                EXPERIENCE THE DIFFERENCE
              </span>

              <h2 className="mt-6 text-5xl lg:text-6xl font-black leading-tight text-white">
                Every Celebration
                <br />
                Deserves
                <br />
                Something Sweet.
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-9 text-white/80">
                Whether it's a wedding, festival, birthday or corporate event,
                our handcrafted sweets are made to turn ordinary moments into
                unforgettable celebrations.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <button className="rounded-full bg-[#f9e4bf] px-8 py-4 font-semibold text-[#08376c] transition hover:scale-105">
                  Explore Collection
                </button>

                <button className="rounded-full border border-[#f9e4bf]/40 px-8 py-4 font-semibold text-[#f9e4bf] transition hover:bg-white/10">
                  Contact Us
                </button>

              </div>

            </div>

            {/* RIGHT */}

            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-[30px] bg-white/10 p-8 backdrop-blur">
                <h3 className="text-5xl font-black text-[#f9e4bf]">100%</h3>
                <p className="mt-4 text-white/80">
                  Premium Ingredients
                </p>
              </div>

              <div className="rounded-[30px] bg-white/10 p-8 backdrop-blur">
                <h3 className="text-5xl font-black text-[#f9e4bf]">Fresh</h3>
                <p className="mt-4 text-white/80">
                  Handcrafted Daily
                </p>
              </div>

              <div className="rounded-[30px] bg-white/10 p-8 backdrop-blur">
                <h3 className="text-5xl font-black text-[#f9e4bf]">Love</h3>
                <p className="mt-4 text-white/80">
                  Crafted Into Every Bite
                </p>
              </div>

              <div className="rounded-[30px] bg-white/10 p-8 backdrop-blur">
                <h3 className="text-5xl font-black text-[#f9e4bf]">Trust</h3>
                <p className="mt-4 text-white/80">
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

          <span className="uppercase tracking-[5px] text-[#08376c] font-semibold">
            THANK YOU
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#810c26] leading-tight">
            Thank You For Being
            <br />
            A Part Of Our Story
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-700">
            Every customer who chooses us becomes a part of our journey.
            Your celebrations inspire us to create sweets that carry happiness,
            tradition and unforgettable memories.
          </p>

          <div className="mx-auto mt-12 h-1 w-28 rounded-full bg-[#2a4d25]" />

          <div className="mt-14 flex flex-wrap justify-center gap-5">

            <div className="rounded-full bg-[#08376c] px-6 py-3 text-[#f9e4bf]">
              Authentic Taste
            </div>

            <div className="rounded-full bg-[#810c26] px-6 py-3 text-[#f9e4bf]">
              Premium Quality
            </div>

            <div className="rounded-full bg-[#2a4d25] px-6 py-3 text-[#f9e4bf]">
              Freshly Crafted
            </div>

            <div className="rounded-full bg-[#552b12] px-6 py-3 text-[#f9e4bf]">
              Made With Love
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}