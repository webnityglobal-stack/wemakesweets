import ScrollWavyUnderline from "@/components/common/ScrollWavyUnderline";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <main className="overflow-hidden bg-[#f5ebda]">

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative overflow-hidden bg-[#3e5a2c]">

        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#810c26]/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#2a4d25]/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12 md:py-18">

          <div className="text-center">

            <h1 className="mt-6 font-cormorant font-bold text-3xl md:text-5xl font-black leading-tight text-[#f9e4bf]">
              Let's Create
              <br />
              Sweet Moments Together
            </h1>

            <ScrollWavyUnderline color="#f9e4bf" />

            <p className="cinzel mx-auto font-manrope mt-8 max-w-3xl text-base sm:text-lg leading-8 sm:leading-9 text-[#f9e4bf]/75">
              Whether you're planning a wedding, corporate event,
              festival or simply craving premium sweets,
              we'd love to hear from you.
            </p>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* CONTACT SECTION */}
      {/* ================================================= */}

      <section className="py-10 md:py-18">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

          <div className="grid gap-12 lg:gap-16 lg:grid-cols-2">

            {/* ======================================= */}
            {/* CONTACT FORM */}
            {/* ======================================= */}

            <div className="w-full">
              <div className="rounded-[28px] sm:rounded-[35px] bg-[#603917] p-6 sm:p-8 lg:p-10 shadow-2xl">

                <span className="uppercase tracking-[4px] sm:tracking-[5px] text-[#f9e4bf] font-semibold text-xs sm:text-sm">
                  Send Us A Message
                </span>

                <h2 className="mt-4 text-2xl sm:text-3xl font-cormorant md:text-4xl font-black text-[#f9e4bf]">
                  We'd Love To Hear From You
                </h2>

                <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#f9e4bf]">
                  Fill out the form below and our team will get
                  back to you as soon as possible.
                </p>

                <form className="mt-6 sm:mt-8 space-y-3 sm:space-y-2 text-[#f9e4bf]">

                  <div className="grid gap-4 sm:gap-6 md:grid-cols-2">

                    <div>
                      <label className="mb-2 block font-semibold text-sm sm:text-base">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full rounded-2xl text-[#810c26] border placeholder:text-[#810c26]/50 border-gray-300 bg-[#fdfaf3] px-4 sm:px-5 py-3 sm:py-4 outline-none transition focus:border-[#810c26] text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block font-semibold text-sm sm:text-base">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        placeholder="Your Phone"
                        className="w-full text-[#810c26] placeholder:text-[#810c26]/50 rounded-2xl border border-gray-300 bg-[#fdfaf3] px-4 sm:px-5 py-3 sm:py-4 outline-none transition focus:border-[#810c26] text-sm sm:text-base"
                      />
                    </div>

                  </div>

                  <div>
                    <label className="mb-2 block font-semibold text-sm sm:text-base">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full text-[#810c26] placeholder:text-[#810c26]/50 rounded-2xl border border-gray-300 bg-[#fdfaf3] px-4 sm:px-5 py-3 sm:py-4 outline-none transition focus:border-[#08376c] text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-semibold text-sm sm:text-base">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Subject"
                      className="w-full text-[#810c26] placeholder:text-[#810c26]/50 rounded-2xl border border-gray-300 bg-[#fdfaf3] px-4 sm:px-5 py-3 sm:py-4 outline-none transition focus:border-[#2a4d25] text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-semibold text-sm sm:text-base">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Write your message..."
                      className="w-full text-[#810c26] placeholder:text-[#810c26]/50 rounded-2xl border border-gray-300 bg-[#fdfaf3] px-4 sm:px-5 py-3 sm:py-4 outline-none transition focus:border-[#552b12] text-sm sm:text-base"
                    />
                  </div>

                  <button
                    type="button"
                    className="flex items-center justify-center gap-3 rounded-full text-white hover:text-white bg-pink-600 hover:bg-[#60b396] hover:scale-105 shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000] md:px-8 md:py-4 px-6 py-3.5 font-semibold transition-all duration-300 text-sm sm:text-base w-full sm:w-auto cursor-pointer"
                  >
                    <Send size={18} />
                    Send Message
                  </button>

                </form>

              </div>
            </div>

            {/* ======================================= */}
            {/* CONTACT INFO */}
            {/* ======================================= */}

            <div className="w-full">

              <div className="text-center lg:text-left">
                <span className="uppercase tracking-[3px] md:tracking-[5px] text-[#164984] font-semibold text-xs sm:text-sm">
                  Contact Information
                </span>

                <h2 className="mt-3 sm:mt-4 font-cormorant text-3xl md:text-5xl font-black text-[#8b183d]">
                  We're Always
                  <br />
                  Here To Help
                </h2>

                <ScrollWavyUnderline className="justify-center lg:justify-start lg:pr-70" />

                <p className="mt-4 sm:mt-6 leading-7 sm:leading-8 text-[#3e5a2c] text-sm sm:text-base">
                  Have questions about our sweets,
                  bulk orders or corporate gifting?
                  Reach out to us anytime.
                </p>
              </div>

              <div className="mt-8 md:mt-12 space-y-4 sm:space-y-6">

                {/* Address */}
                <div className="flex gap-4 sm:gap-5 rounded-[24px] sm:rounded-[28px] bg-[#3e5a2c] p-4 sm:p-6 shadow-lg items-start">
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-[#164984] text-white">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#f9e4bf]">
                      Visit Our Facility
                    </h3>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:leading-8 text-[#f9e4bf]">
                      Ground Floor, Block No.159,
                      <br />
                      Plot No.51, Shakti Industries,
                      <br />
                      Bhada, Surat, Gujarat - 395006
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 sm:gap-5 rounded-[24px] sm:rounded-[28px] bg-[#164984] p-4 sm:p-6 shadow-lg items-start">
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-[#E35A7E] text-white">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#f9e4bf]">
                      Call Us
                    </h3>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-lg font-semibold text-[#f9e4bf]">
                      18002032007
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 sm:gap-5 rounded-[24px] sm:rounded-[28px] bg-[#603917] p-4 sm:p-6 shadow-lg items-start">
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-[#DE6239] text-white">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#f9e4bf]">
                      Email Address
                    </h3>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-lg font-semibold break-all text-[#f9e4bf]">
                      cs@wemakesweets.com
                    </p>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex gap-4 sm:gap-5 rounded-[24px] sm:rounded-[28px] bg-[#572340] p-4 sm:p-6 shadow-lg items-start">
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F4C02D] text-[#572340]">
                    <Clock3 className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#f9e4bf]">
                      Working Hours
                    </h3>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-[#f9e4bf]">
                      Monday - Saturday
                      <br />
                      9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* LOCATION & MAP */}
      {/* ================================================= */}

      <section className="bg-[#572340] py-8 md:py-12">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

          <div className="text-center">

            <span className="uppercase tracking-[4px] sm:tracking-[5px] text-[#f9e4bf] font-semibold text-xs sm:text-sm">
              FIND US
            </span>

            <ScrollWavyUnderline color="#f9e4bf" />

            <h2 className="mt-4 font-cormorant md:text-4xl text-2xl sm:text-3xl font-black text-[#f9e4bf]">
              Visit Our Manufacturing Facility
            </h2>

            <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base md:text-lg leading-7 sm:leading-9 text-[#f9e4bf]">
              We'd love to welcome you. Visit our facility and experience
              the craftsmanship, quality and freshness that goes into every
              sweet we create.
            </p>

          </div>

          <div className="mt-8 sm:mt-12 md:mt-16 overflow-hidden rounded-[24px] sm:rounded-[35px] border-4 sm:border-8 border-[#f9e4bf] shadow-2xl">
            <iframe
              title="location"
              src="https://www.google.com/maps?q=21.255194,72.926028&z=17&output=embed"
              className="h-[280px] sm:h-[350px] md:h-[400px] w-full"
              loading="lazy"
              allowFullScreen
            />
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://www.google.com/maps?q=21.255194,72.926028"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full text-white hover:text-white bg-pink-600 hover:bg-[#60b396] hover:scale-105 shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000] px-6 sm:px-8 py-3.5 sm:py-4 font-manrope font-semibold transition-all duration-300 text-sm sm:text-base cursor-pointer"
            >
              Open in Google Maps
              <span>↗</span>
            </a>
          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* WHY CONNECT WITH US */}
      {/* ================================================= */}

      <section className="bg-[#f9e4bf] py-10 md:py-18">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

          <div className="text-center">

            <span className="uppercase tracking-[4px] sm:tracking-[5px] text-[#164984] font-semibold text-xs sm:text-sm">
              WHY CHOOSE US
            </span>

            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-cormorant md:text-4xl font-black text-[#8b183d]">
              We Love Hearing From You
            </h2>

            <ScrollWavyUnderline />

          </div>

          <div className="mt-8 md:mt-16 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">

            {/* Card 1 */}
            <div className="rounded-[24px] sm:rounded-[30px] bg-[#3e5a2c] p-6 sm:p-8 shadow-xl transition hover:-translate-y-3">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-[#164984] text-2xl sm:text-3xl text-white">
                💬
              </div>
              <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-bold text-[#f9e4bf]">
                Quick Support
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-8 text-[#f9e4bf]">
                Our team responds quickly to all your enquiries.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-[24px] sm:rounded-[30px] bg-[#164984] p-6 sm:p-8 shadow-xl transition hover:-translate-y-3">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-[#E35A7E] text-2xl sm:text-3xl text-white">
                🎁
              </div>
              <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-bold text-[#f9e4bf]">
                Bulk Orders
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-8 text-[#f9e4bf]">
                Weddings, festivals and corporate gifting made easy.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-[24px] sm:rounded-[30px] bg-[#603917] p-6 sm:p-8 shadow-xl transition hover:-translate-y-3">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-[#66BC9E] text-2xl sm:text-3xl text-white">
                🚚
              </div>
              <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-bold text-[#f9e4bf]">
                Safe Delivery
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-8 text-[#f9e4bf]">
                Hygienic packaging and reliable delivery for every order.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-[24px] sm:rounded-[30px] bg-[#572340] p-6 sm:p-8 shadow-xl transition hover:-translate-y-3">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-[#F4C02D] text-2xl sm:text-3xl text-[#572340]">
                ⭐
              </div>
              <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-bold text-[#f9e4bf]">
                Trusted Quality
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-8 text-[#f9e4bf]">
                Premium ingredients with authentic handcrafted taste.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* QUICK STATS */}
      {/* ================================================= */}

      <section className="bg-[#164984] py-14 sm:py-18 md:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">

            <div className="text-center">
              <h2 className="md:text-3xl text-2xl sm:text-3xl font-black text-[#f9e4bf]">
                100%
              </h2>
              <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base text-white/80">
                Fresh Ingredients
              </p>
            </div>

            <div className="text-center">
              <h2 className="md:text-3xl text-2xl sm:text-3xl font-black text-[#f9e4bf]">
                500+
              </h2>
              <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base text-white/80">
                Happy Customers
              </p>
            </div>

            <div className="text-center">
              <h2 className="md:text-3xl text-2xl sm:text-3xl font-black text-[#f9e4bf]">
                24×7
              </h2>
              <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base text-white/80">
                Customer Support
              </p>
            </div>

            <div className="text-center">
              <h2 className="md:text-3xl text-2xl sm:text-3xl font-black text-[#f9e4bf]">
                Premium
              </h2>
              <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base text-white/80">
                Quality Promise
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* FAQ */}
      {/* ================================================= */}

      <section className="bg-[#f9e4bf] py-10 md:py-12">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">

          <div className="text-center">

            <span className="uppercase font-manrope font-semibold tracking-[4px] sm:tracking-[5px] text-[#164984] text-xs sm:text-sm">
              FAQ
            </span>

            <h2 className="mt-3 sm:mt-4 font-cormorant font-bold text-2xl sm:text-3xl md:text-4xl font-black text-[#8b183d]">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base md:text-xl md:text-2xl leading-7 sm:leading-8 text-[#3e5a2c]">
              Here are some common questions about our sweets, ordering process
              and customer support.
            </p>

          </div>

          <div className="mt-8 space-y-4 sm:space-y-6">

            {/* FAQ 1 */}
            <div className="rounded-[22px] sm:rounded-[28px] border border-[#66BC9E] bg-[#3e5a2c] p-5 sm:p-8 shadow-sm transition hover:shadow-lg">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#f9e4bf]">
                Do you accept bulk orders?
              </h3>
              <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base leading-6 sm:leading-8 text-[#f9e4bf]">
                Yes. We specialize in weddings, festivals, corporate gifting,
                birthdays and other large celebrations.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="rounded-[22px] sm:rounded-[28px] border border-[#F4C02D] bg-[#164984] p-5 sm:p-8 shadow-sm transition hover:shadow-lg">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#f9e4bf]">
                How fresh are your sweets?
              </h3>
              <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base leading-6 sm:leading-8 text-[#f9e4bf]">
                Every batch is freshly prepared using premium ingredients while
                maintaining the highest hygiene standards.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="rounded-[22px] sm:rounded-[28px] border border-[#DE6239] bg-[#603917] p-5 sm:p-8 shadow-sm transition hover:shadow-lg">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#f9e4bf]">
                Can I customize gift boxes?
              </h3>
              <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base leading-6 sm:leading-8 text-[#f9e4bf]">
                Absolutely. We offer customized sweet boxes and gifting options
                for festivals, weddings and corporate events.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="rounded-[22px] sm:rounded-[28px] border border-[#E35A7E] bg-[#572340] p-5 sm:p-8 shadow-sm transition hover:shadow-lg">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#f9e4bf]">
                How can I contact customer support?
              </h3>
              <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base leading-6 sm:leading-8 text-[#f9e4bf]">
                You can reach us via phone, email or by submitting the contact
                form. Our team will respond as quickly as possible.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* CTA */}
      {/* ================================================= */}

      <section className="relative overflow-hidden bg-gradient-to-r from-[#164984] via-[#8b183d] to-[#603917] py-12 md:py-16">

        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#66BC9E]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#E35A7E]/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 text-center">

          <span className="uppercase tracking-[4px] sm:tracking-[5px] text-[#F4C02D] font-semibold text-xs sm:text-sm">
            LET'S CONNECT
          </span>

          <ScrollWavyUnderline color="#F4C02D" />

          <h2 className="mt-4 sm:mt-6 font-cormorant text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
            Let's Make Every
            <br />
            Celebration Sweeter
          </h2>

          <p className="mx-auto mt-4 md:mt-8 max-w-3xl text-sm sm:text-base md:text-lg leading-7 sm:leading-9 text-[#f9e4bf]/90">
            Whether you're looking for premium sweets, festive gift boxes or
            corporate orders, our team is always ready to help you create
            unforgettable moments.
          </p>

          <div className="mt-6 md:mt-12 flex flex-wrap justify-center gap-3 sm:gap-5">

            <a
              href="tel:18002032007"
              onClick={(e) => {
                if (window.innerWidth >= 768) {
                  e.preventDefault();
                }
              }}
              className="group inline-flex items-center justify-center min-w-[160px] md:min-w-[190px] rounded-full text-white hover:text-white bg-pink-600 hover:bg-[#60b396] hover:scale-105 shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000] px-8 py-3.5 sm:py-4 font-semibold transition-all duration-300 text-sm sm:text-base cursor-pointer"
            >
              <span className="md:hidden">☎ Call Now</span>
              <span className="hidden md:inline md:group-hover:hidden">☎ Call Now</span>
              <span className="hidden md:group-hover:inline tracking-wider font-bold">☎ 18002032007</span>
            </a>

            <a
              href="mailto:cs@wemakesweets.com"
              className="rounded-full text-white hover:text-white bg-pink-600 hover:bg-[#60b396] hover:scale-105 shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] hover:shadow-[3px_4px_0px_#000] px-8 py-3.5 sm:py-4 font-semibold transition-all duration-300 text-sm sm:text-base cursor-pointer"
            >
              ✉ Email Us
            </a>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* FINAL MESSAGE */}
      {/* ================================================= */}

      <section className="bg-[#f5ebda] py-10 md:py-12">

        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-cormorant font-black text-[#8b183d]">
            Thank You For Visiting
          </h2>

          <ScrollWavyUnderline />

          <p className="mx-auto mt-6 sm:mt-8 font-manrope max-w-3xl text-sm sm:text-base md:text-lg leading-7 sm:leading-9 text-[#3e5a2c]">
            We appreciate your interest in <strong>WeMake Sweets</strong>.
            Every enquiry, every order and every celebration inspires us to
            craft sweets that bring happiness to your family and loved ones.
          </p>

        

        </div>

      </section>

    </main>
  );
}