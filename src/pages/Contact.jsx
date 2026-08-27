import ScrollWavyUnderline from "@/components/common/ScrollWavyUnderline";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  return (
    <main className="overflow-hidden bg-[#f5ebda] ">

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative overflow-hidden bg-[#3e5a2c] ">

        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#810c26]/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#2a4d25]/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 md:py-18">

          <div className="text-center">

            <span className="inline-flex rounded-full bg-pink-600 hover:bg-[#60b396] px-5 py-2 text-sm uppercase tracking-[4px] text-[#f9e4bf] backdrop-blur shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] border-black hover:shadow-[3px_4px_0px_#000]">
              Contact Us
            </span>

              <h1 className="mt-6 font-cormorant font-bold text-3xl md:text-5xl font-black leading-tight text-[#f9e4bf]  ">

              Let's Create
              <br />

              Sweet Moments Together

            </h1>
<ScrollWavyUnderline color='#f9e4bf'/>
            <p className="cinzel mx-auto font-manrope mt-8 max-w-3xl text-lg leading-9 text-[#f9e4bf]/75">

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

      <section className="py-9 md:py-18">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid gap-16 lg:grid-cols-2">

            {/* ======================================= */}
            {/* CONTACT FORM */}
            {/* ======================================= */}

            <div className="rounded-[35px] bg-[#603917] p-8 shadow-2xl lg:p-10">

              <span className="uppercase tracking-[5px] text-[#f9e4bf]  font-semibold ">
                Send Us A Message
              </span>

              <h2 className="mt-4 text-2xl font-cormorant md:text-4xl font-black text-[#f9e4bf]">
                We'd Love To Hear From You
              </h2>

              <p className="mt-5 text-[#f9e4bf]">

                Fill out the form below and our team will get
                back to you as soon as possible.

              </p>

              <form className="mt-8 space-y-2 text-[#f9e4bf]">

                <div className="grid gap-6 md:grid-cols-2">

                  <div>

                    <label className="mb-2 block font-semibold">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded-2xl text-[#810c26] border placeholder:text-[#810c26]/50 border-gray-300 bg-[#fdfaf3] px-5 py-4 outline-none transition focus:border-[#810c26]"
                    />

                  </div>

                  <div>

                    <label className="mb-2 block font-semibold">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      placeholder="Your Phone"
                      className="w-full text-[#810c26] placeholder:text-[#810c26]/50 rounded-2xl border border-gray-300 bg-[#fdfaf3] px-5 py-4 outline-none transition focus:border-[#810c26]"
                    />

                  </div>

                </div>

                <div>

                  <label className="mb-2 block font-semibold">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full text-[#810c26] placeholder:text-[#810c26]/50 rounded-2xl border border-gray-300 bg-[#fdfaf3] px-5 py-4 outline-none transition focus:border-[#08376c]"
                  />

                </div>

                <div>

                  <label className="mb-2 block font-semibold">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Enter Subject"
                    className="w-full text-[#810c26] placeholder:text-[#810c26]/50 rounded-2xl border border-gray-300 bg-[#fdfaf3] px-5 py-4 outline-none transition focus:border-[#2a4d25]"
                  />

                </div>

                <div>

                  <label className="mb-2 block font-semibold">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Write your message..."
                    className="w-full text-[#810c26] placeholder:text-[#810c26]/50 rounded-2xl border border-gray-300 bg-[#fdfaf3] px-5 py-4 outline-none transition focus:border-[#552b12]"
                  />

                </div>

                <button
                  className="flex items-center gap-3 hover:bg-[#60b396] rounded-full bg-pink-600 md:px-8 md:py-4 px-4 py-3 font-semibold text-white transition duration-300 hover:scale-105  shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] border-black hover:shadow-[3px_4px_0px_#000]"
                >
                  <Send size={18} />
                  Send Message
                </button>

              </form>

            </div>

            {/* ======================================= */}
            {/* CONTACT INFO */}
            {/* ======================================= */}

          <div>

  <span className="uppercase tracking-[3px] md:tracking-[5px] text-[#164984] font-semibold">
    Contact Information
  </span>

  <h2 className="mt-4  font-cormorant text-3xl md:text-5xl font-black text-[#8b183d]">
    We're Always
    <br />
    Here To Help
  </h2>
<ScrollWavyUnderline />
  <p className="mt-6 leading-8 text-[#3e5a2c]">
    Have questions about our sweets,
    bulk orders or corporate gifting?
    Reach out to us anytime.
  </p>

  <div className="mt-12 space-y-6">

    {/* Address */}

    <div className="flex gap-5 rounded-[28px] bg-[#3e5a2c] p-6 shadow-lg">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#164984] text-white">

        <MapPin />

      </div>

      <div>

        <h3 className="md:text-xl text-[18px]  font-bold text-[#f9e4bf]">
          Visit Our Facility
        </h3>

        <p className="mt-2 md:leading-8 text-[#f9e4bf]">

          Ground Floor, Block No.159,
          <br />
          Plot No.51,
          Shakti Industries,
          <br />
          Bhada,
          Surat,
          Gujarat - 395006

        </p>

      </div>

    </div>

    {/* Phone */}

    <div className="flex gap-5 rounded-[28px] bg-[#164984] p-6 shadow-lg">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E35A7E] text-white">

        <Phone />

      </div>

      <div>

        <h3 className="md:text-xl text-[18px] font-bold text-[#f9e4bf]">
          Call Us
        </h3>

        <p className="mt-2 text-[15px]  md:text-lg font-semibold text-[#f9e4bf]">
          18002032007
        </p>

      </div>

    </div>

    {/* Email */}

    <div className="flex gap-5 rounded-[28px] bg-[#603917] p-6 shadow-lg">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#DE6239] text-white">

        <Mail />

      </div>

      <div>

        <h3 className="md:text-xl text-[18px] font-bold text-[#f9e4bf]">
          Email Address
        </h3>

        <p className="mt-2 text-[15px] md:text-lg font-semibold break-all text-[#f9e4bf]">
          cs@wemakesweets.com
        </p>

      </div>

    </div>

    {/* Timing */}

    <div className="flex gap-5 rounded-[28px] bg-[#572340] p-6 shadow-lg">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F4C02D] text-[#572340]">

        <Clock3 />

      </div>

      <div>

        <h3 className="md:text-xl text-[18px] font-bold text-[#f9e4bf]">
          Working Hours
        </h3>

        <p className="mt-2   text-[#f9e4bf]">
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

      <section className="bg-[#572340] py-6 md:py-12">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="text-center">

            <span className="uppercase tracking-[5px] text-[#f9e4bf] font-semibold">
              FIND US
            </span>
<ScrollWavyUnderline color='#f9e4bf'/>
            <h2 className="mt-4 font-cormorant md:text-4xl text-2xl font-black text-[#f9e4bf]">
              Visit Our Manufacturing Facility
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-[#f9e4bf]">
              We'd love to welcome you. Visit our facility and experience
              the craftsmanship, quality and freshness that goes into every
              sweet we create.
            </p>

          </div>

          <div className="mt-16 overflow-hidden rounded-[35px] border-8 border-[#f9e4bf] shadow-2xl">

            <iframe
              title="location"
              src="https://maps.google.com/maps?q=Ground%20Floor%20Block%20No%20159%20Plot%20No%2051%20Shakti%20Industries%20Bhada%20Surat&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-[400px] w-full"
              loading="lazy"
            />

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* WHY CONNECT WITH US */}
      {/* ================================================= */}

   <section className="bg-[#f9e4bf] py-12  md:py-18">

  <div className="mx-auto max-w-7xl px-6 lg:px-10">

    <div className="text-center">

      <span className="uppercase tracking-[5px] text-[#164984] font-semibold">
        WHY CHOOSE US
      </span>

      <h2 className="mt-4 text-3xl font-cormorant md:text-4xl font-black text-[#8b183d]">
        We Love Hearing From You
      </h2>
<ScrollWavyUnderline/>
    </div>

    <div className="mt-4 md:mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4 p-3 md:p-6">

      {/* Card 1 */}

      <div className="rounded-[30px] bg-[#3e5a2c] p-8 shadow-xl transition hover:-translate-y-3">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#164984] text-3xl text-white">
          💬
        </div>

        <h3 className="mt-6 text-xl font-bold text-[#f9e4bf]">
          Quick Support
        </h3>

        <p className="mt-4 leading-8 text-[#f9e4bf]">
          Our team responds quickly to all your enquiries.
        </p>

      </div>

      {/* Card 2 */}

      <div className="rounded-[30px] bg-[#164984] p-8 shadow-xl transition hover:-translate-y-3">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E35A7E] text-3xl text-white">
          🎁
        </div>

        <h3 className="mt-6 text-xl font-bold text-[#f9e4bf]">
          Bulk Orders
        </h3>

        <p className="mt-4 leading-8 text-[#f9e4bf]">
          Weddings, festivals and corporate gifting made easy.
        </p>

      </div>

      {/* Card 3 */}

      <div className="rounded-[30px] bg-[#603917] p-8 shadow-xl transition hover:-translate-y-3">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#66BC9E] text-3xl text-white">
          🚚
        </div>

        <h3 className="mt-6 text-xl font-bold text-[#f9e4bf]">
          Safe Delivery
        </h3>

        <p className="mt-4 leading-8 text-[#f9e4bf]">
          Hygienic packaging and reliable delivery for every order.
        </p>

      </div>

      {/* Card 4 */}

      <div className="rounded-[30px] bg-[#572340] p-8 shadow-xl transition hover:-translate-y-3">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F4C02D] text-3xl text-[#572340]">
          ⭐
        </div>

        <h3 className="mt-6 text-xl font-bold text-[#f9e4bf]">
          Trusted Quality
        </h3>

        <p className="mt-4 leading-8 text-[#f9e4bf]">
          Premium ingredients with authentic handcrafted taste.
        </p>

      </div>

    </div>

  </div>

</section>

      {/* ================================================= */}
      {/* QUICK STATS */}
      {/* ================================================= */}

      <section className="bg-[#164984] py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">

            <div className="text-center">

              <h2 className="md:text-3xl text-2xl font-black text-[#f9e4bf]">
                100%
              </h2>

              <p className="mt-4 text-white/80">
                Fresh Ingredients
              </p>

            </div>

            <div className="text-center">

              <h2 className="md:text-3xl text-2xl font-black text-[#f9e4bf]">
                500+
              </h2>

              <p className="mt-4 text-white/80">
                Happy Customers
              </p>

            </div>

            <div className="text-center">

              <h2 className="md:text-3xl text-2xl font-black text-[#f9e4bf]">
                24×7
              </h2>

              <p className="mt-4 text-white/80">
                Customer Support
              </p>

            </div>

            <div className="text-center">

              <h2 className="md:text-3xl text-2xl font-black text-[#f9e4bf]">
                Premium
              </h2>

              <p className="mt-4 text-white/80">
                Quality Promise
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* ================================================= */}
      {/* FAQ */}
      {/* ================================================= */}

     <section className="bg-[#f9e4bf] py-12">

  <div className="mx-auto max-w-6xl px-6 lg:px-10">

    <div className="text-center">

      <span className="uppercase font-manrope font-semibold tracking-[5px] text-[#164984] ">
        FAQ
      </span>

      <h2 className="mt-4 font-cormorant font-bold text-2xl md:text-4xl font-black text-[#8b183d]">
        Frequently Asked Questions
      </h2>

      <p className="mx-auto mt-6   md:text-xl md:text-2xl max-w-3xl text-lg leading-8 text-[#3e5a2c]">
        Here are some common questions about our sweets, ordering process
        and customer support.
      </p>

    </div>

    <div className="mt-8 space-y-6">

      {/* FAQ 1 */}

      <div className="rounded-[28px] border border-[#66BC9E] bg-[#3e5a2c] p-8 shadow-sm transition hover:shadow-lg">

        <h3 className="text-xl font-bold text-[#f9e4bf]">
          Do you accept bulk orders?
        </h3>

        <p className="mt-4 leading-8 text-[#f9e4bf]">
          Yes. We specialize in weddings, festivals, corporate gifting,
          birthdays and other large celebrations.
        </p>

      </div>

      {/* FAQ 2 */}

      <div className="rounded-[28px] border border-[#F4C02D] bg-[#164984] p-8 shadow-sm transition hover:shadow-lg">

        <h3 className="text-xl font-bold text-[#f9e4bf]">
          How fresh are your sweets?
        </h3>

        <p className="mt-4 leading-8 text-[#f9e4bf]">
          Every batch is freshly prepared using premium ingredients while
          maintaining the highest hygiene standards.
        </p>

      </div>

      {/* FAQ 3 */}

      <div className="rounded-[28px] border border-[#DE6239] bg-[#603917] p-8 shadow-sm transition hover:shadow-lg">

        <h3 className="text-xl font-bold text-[#f9e4bf]">
          Can I customize gift boxes?
        </h3>

        <p className="mt-4 leading-8 text-[#f9e4bf]">
          Absolutely. We offer customized sweet boxes and gifting options
          for festivals, weddings and corporate events.
        </p>

      </div>

      {/* FAQ 4 */}

      <div className="rounded-[28px] border border-[#E35A7E] bg-[#572340] p-8 shadow-sm transition hover:shadow-lg">

        <h3 className="text-xl font-bold text-[#f9e4bf]">
          How can I contact customer support?
        </h3>

        <p className="mt-4 leading-8 text-[#f9e4bf]">
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

  <section className="relative overflow-hidden bg-gradient-to-r from-[#164984] via-[#8b183d] to-[#603917] py-14 md:py-16">

  <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#66BC9E]/20 blur-3xl"></div>

  <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#E35A7E]/20 blur-3xl"></div>

  <div className="relative mx-auto max-w-6xl px-6 text-center">

    <span className="uppercase tracking-[5px] text-[#F4C02D] font-semibold">
      LET'S CONNECT
    </span>
<ScrollWavyUnderline color="#F4C02D"/>
    <h2 className="mt-6 font-cormorant text-2xl md:text-4xl font-black text-white leading-tight">
      Let's Make Every
      <br />
      Celebration Sweeter
    </h2>

    <p className="mx-auto mt-4 md:mt-8 max-w-3xl md:text-lg leading-9 text-[#f9e4bf]/90">
      Whether you're looking for premium sweets, festive gift boxes or
      corporate orders, our team is always ready to help you create
      unforgettable moments.
    </p>

    <div className= "mt-6 md:mt-12 flex flex-wrap justify-center md:gap-5 gap-2">

      <a
        href="tel:18002032007"
        className="rounded-full bg-pink-600 hover:bg-[#60b396] px-8 py-4 font-semibold text-white transition hover:scale-105  shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] border-black hover:shadow-[3px_4px_0px_#000]"
      >
         ☎ Call Now
      </a>

      <a
        href="mailto:cs@wemakesweets.com"
        className="rounded-full border border-0 px-8 bg-pink-600 hover:bg-[#60b396] py-4 font-semibold text-[#f9e4bf] transition shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000]  hover:shadow-[3px_4px_0px_#000]"
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

  <div className="mx-auto max-w-5xl px-6 text-center">

    <h2 className="text-2xl md:text-4xl font-cormorant font-black text-[#8b183d]">
      Thank You For Visiting
    </h2>
<ScrollWavyUnderline/>
    {/* <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#66BC9E]" /> */}

    <p className="mx-auto mt-8 font-manrope max-w-3xl md:text-lg leading-9 text-[#3e5a2c]">
      We appreciate your interest in <strong>We Make Sweets</strong>.
      Every enquiry, every order and every celebration inspires us to
      craft sweets that bring happiness to your family and loved ones.
    </p>

    <div className="mt-12 flex flex-wrap justify-center gap-4">

      <span className="rounded-full bg-[#164984] px-6 py-3 text-[#f9e4bf]">
        Premium Quality
      </span>

      <span className="rounded-full bg-[#8b183d] px-6 py-3 text-[#f9e4bf]">
        Fresh Ingredients
      </span>

      <span className="rounded-full bg-[#3e5a2c] px-6 py-3 text-[#f9e4bf]">
        Crafted With Love
      </span>

      <span className="rounded-full bg-[#603917] px-6 py-3 text-[#f9e4bf]">
        Trusted Since Day One
      </span>

    </div>

  </div>

</section>

    </main>
    
  );
}