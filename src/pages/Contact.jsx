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
    <main className="overflow-hidden bg-[#f9e4bf]">

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative overflow-hidden bg-[#08376c]">

        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#810c26]/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#2a4d25]/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">

          <div className="text-center">

            <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm uppercase tracking-[4px] text-[#f9e4bf] backdrop-blur">
              Contact Us
            </span>

              <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight text-[#f9e4bf]  ">

              Let's Create
              <br />

              Sweet Moments Together

            </h1>

            <p className="cinzel mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#f9e4bf]/75">

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

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid gap-16 lg:grid-cols-2">

            {/* ======================================= */}
            {/* CONTACT FORM */}
            {/* ======================================= */}

            <div className="rounded-[35px] bg-[#810c26] p-8 shadow-2xl lg:p-10">

              <span className="uppercase tracking-[5px] text-[#f9e4bf] font-semibold">
                Send Us A Message
              </span>

              <h2 className="mt-4 text-4xl font-black text-[#f9e4bf]">
                We'd Love To Hear From You
              </h2>

              <p className="mt-5 leading-8 text-[#f9e4bf]">

                Fill out the form below and our team will get
                back to you as soon as possible.

              </p>

              <form className="mt-10 space-y-6 text-[#f9e4bf]">

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
                  className="flex items-center gap-3 rounded-full bg-[#810c26] px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#68091f]"
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

              <span className="uppercase tracking-[5px] text-[#08376c] font-semibold">
                Contact Information
              </span>

              <h2 className="mt-4 text-5xl font-black text-[#810c26]">
                We're Always
                <br />
                Here To Help
              </h2>

              <p className="mt-6 leading-8 text-gray-700">

                Have questions about our sweets,
                bulk orders or corporate gifting?
                Reach out to us anytime.

              </p>

              <div className="mt-12 space-y-6">

                {/* Address */}

                <div className="flex gap-5 rounded-[28px] bg-[#254a21] p-6 shadow-lg">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#08376c] text-white">

                    <MapPin />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-[#f9e4bf]">
                      Visit Our Facility
                    </h3>

                    <p className="mt-2 leading-8 text-[#f9e4bf]">

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

                <div className="flex gap-5 rounded-[28px] bg-[#08376c] p-6 shadow-lg">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#810c26] text-white">

                    <Phone />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-[#f9e4bf]">
                      Call Us
                    </h3>

                    <p className="mt-2 text-lg font-semibold text-[#f9e4bf] ">
                      18002032007
                    </p>

                  </div>

                </div>

                {/* Email */}

                <div className="flex gap-5 rounded-[28px] bg-[#552b12] p-6 shadow-lg">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2a4d25] text-white">

                    <Mail />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-[#f9e4bf]">
                      Email Address
                    </h3>

                    <p className="mt-2 text-lg font-semibold break-all text-[#f9e4bf]">
                      cs@wemakesweets.com
                    </p>

                  </div>

                </div>

                {/* Timing */}

                <div className="flex gap-5 rounded-[28px] bg-[#254a21] p-6 shadow-lg">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#08376c] text-white">

                    <Clock3 />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-[#f9e4bf]">
                      Working Hours
                    </h3>

                    <p className="mt-2 leading-8 text-[#f9e4bf]">
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

      <section className="bg-[#552b12] py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="text-center">

            <span className="uppercase tracking-[5px] text-[#f9e4bf] font-semibold">
              FIND US
            </span>

            <h2 className="mt-4 text-5xl font-black text-[#f9e4bf]">
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
              className="h-[500px] w-full"
              loading="lazy"
            />

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* WHY CONNECT WITH US */}
      {/* ================================================= */}

      <section className="bg-[#f9e4bf] py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="text-center">

            <span className="uppercase tracking-[5px] text-[#08376c] font-semibold">
              WHY CHOOSE US
            </span>

            <h2 className="mt-4 text-5xl font-black text-[#810c26]">
              We Love Hearing From You
            </h2>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-[30px] bg-[#254a21] p-8 shadow-xl transition hover:-translate-y-3">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#08376c] text-3xl text-white">
                💬
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#f9e4bf]">
                Quick Support
              </h3>

              <p className="mt-4 leading-8 text-[#f9e4bf]">
                Our team responds quickly to all your enquiries.
              </p>

            </div>

            <div className="rounded-[30px] bg-[#08376c] p-8 shadow-xl transition hover:-translate-y-3">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#810c26] text-3xl text-white">
                🎁
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#f9e4bf]">
                Bulk Orders
              </h3>

              <p className="mt-4 leading-8 text-[#f9e4bf]">
                Weddings, festivals and corporate gifting made easy.
              </p>

            </div>

            <div className="rounded-[30px] bg-[#552b12] p-8 shadow-xl transition hover:-translate-y-3">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2a4d25] text-3xl text-white">
                🚚
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#f9e4bf]">
                Safe Delivery
              </h3>

              <p className="mt-4 leading-8 text-[#f9e4bf]">
                Hygienic packaging and reliable delivery for every order.
              </p>

            </div>

            <div className="rounded-[30px] bg-[#254a21] p-8 shadow-xl transition hover:-translate-y-3">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#552b12] text-3xl text-white">
                ⭐
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#f9e4bf]">
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

      <section className="bg-[#08376c] py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">

            <div className="text-center">

              <h2 className="text-5xl font-black text-[#f9e4bf]">
                100%
              </h2>

              <p className="mt-4 text-white/80">
                Fresh Ingredients
              </p>

            </div>

            <div className="text-center">

              <h2 className="text-5xl font-black text-[#f9e4bf]">
                500+
              </h2>

              <p className="mt-4 text-white/80">
                Happy Customers
              </p>

            </div>

            <div className="text-center">

              <h2 className="text-5xl font-black text-[#f9e4bf]">
                24×7
              </h2>

              <p className="mt-4 text-white/80">
                Customer Support
              </p>

            </div>

            <div className="text-center">

              <h2 className="text-5xl font-black text-[#f9e4bf]">
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

      <section className="bg-[#f9e4bf] py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-10">

          <div className="text-center">

            <span className="uppercase tracking-[5px] text-[#08376c] font-semibold">
              FAQ
            </span>

            <h2 className="mt-4 text-5xl font-black text-[#810c26]">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Here are some common questions about our sweets, ordering process
              and customer support.
            </p>

          </div>

          <div className="mt-16 space-y-6">

            <div className="rounded-[28px] border border-[#f9e4bf] bg-[#254a21] p-8 shadow-sm transition hover:shadow-lg">
              <h3 className="text-xl font-bold text-[#f9e4bf]">
                Do you accept bulk orders?
              </h3>

              <p className="mt-4 leading-8 text-[#f9e4bf]">
                Yes. We specialize in weddings, festivals, corporate gifting,
                birthdays and other large celebrations.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#f9e4bf] bg-[#08376c] p-8 shadow-sm transition hover:shadow-lg">
              <h3 className="text-xl font-bold text-[#f9e4bf]">
                How fresh are your sweets?
              </h3>

              <p className="mt-4 leading-8 text-[#f9e4bf]">
                Every batch is freshly prepared using premium ingredients while
                maintaining the highest hygiene standards.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#552b12] bg-[#552b12] p-8 shadow-sm transition hover:shadow-lg">
              <h3 className="text-xl font-bold text-[#f9e4bf]">
                Can I customize gift boxes?
              </h3>

              <p className="mt-4 leading-8 text-[#f9e4bf]">
                Absolutely. We offer customized sweet boxes and gifting options
                for festivals, weddings and corporate events.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#f9e4bf] bg-[#254a21] p-8 shadow-sm transition hover:shadow-lg">
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

      <section className="relative overflow-hidden bg-gradient-to-r from-[#08376c] via-[#810c26] to-[#552b12] py-28">

        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#2a4d25]/20 blur-3xl"></div>

        <div className="relative mx-auto max-w-6xl px-6 text-center">

          <span className="uppercase tracking-[5px] text-[#f9e4bf] font-semibold">
            LET'S CONNECT
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-white leading-tight">
            Let's Make Every
            <br />
            Celebration Sweeter
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/80">
            Whether you're looking for premium sweets, festive gift boxes or
            corporate orders, our team is always ready to help you create
            unforgettable moments.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <a
              href="tel:18002032007"
              className="rounded-full bg-[#f9e4bf] px-8 py-4 font-semibold text-[#08376c] transition hover:scale-105"
            >
              📞 Call Now
            </a>

            <a
              href="mailto:cs@wemakesweets.com"
              className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              ✉ Email Us
            </a>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* FINAL MESSAGE */}
      {/* ================================================= */}

      <section className="bg-[#f9e4bf] py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-black text-[#810c26]">
            Thank You For Visiting
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#2a4d25]" />

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-700">
            We appreciate your interest in <strong>We Make Sweets</strong>.
            Every enquiry, every order and every celebration inspires us to
            craft sweets that bring happiness to your family and loved ones.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <span className="rounded-full bg-[#08376c] px-6 py-3 text-[#f9e4bf]">
              Premium Quality
            </span>

            <span className="rounded-full bg-[#810c26] px-6 py-3 text-[#f9e4bf]">
              Fresh Ingredients
            </span>

            <span className="rounded-full bg-[#2a4d25] px-6 py-3 text-[#f9e4bf]">
              Crafted With Love
            </span>

            <span className="rounded-full bg-[#552b12] px-6 py-3 text-[#f9e4bf]">
              Trusted Since Day One
            </span>

          </div>

        </div>

      </section>

    </main>
  );
}