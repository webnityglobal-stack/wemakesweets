import {
  // Facebook,
  // Instagram,
  MessageCircle,
  ChevronRight,
  MapPin,
  Mail,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import Wave from "../Wave";
import { Link } from "react-router-dom";
const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Our Story", path: "/our-story" },
  { name: "Products", path: "/products" },
  { name: "Contact Us", path: "/contact" },
];

const customerCare = [
  // { name: "FAQs", path: "/" },
  // { name: "Shipping & Delivery", path: "/" },
  // { name: "Returns & Refunds", path: "/" },
  { name: "Privacy Policy", path: "/" },
  { name: "Terms & Conditions", path: "/" },
];

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

const toggleSection = (section) => {
  setOpenSection(openSection === section ? null : section);
};
  return (
    // <footer className="relative overflow-hidden bg-[#5a0115] text-[#f9e4bf]">
    <footer className="relative z-0 -mt-[1px] overflow-hidden bg-[#5a0115] text-[#f9e4bf]">

      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute -left-24 top-28 h-72 w-72 rounded-full border border-[#f4c02d]" />
        <div className="absolute -right-28 bottom-20 h-80 w-80 rounded-full border border-[#f4c02d]" />
      </div>

      {/* Wave */}
      {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180"> */}
      <div className="absolute -top-[3px] left-0 w-full overflow-hidden leading-none rotate-180">
  <svg
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
    className="relative block h-16 md:h-18 w-full fill-[#f5ebda]"
  >
   
    <path d="M0,28 C220,68 420,72 600,40 C780,8 980,6 1200,28 V120 H0 Z" />
  </svg>
</div>
 


      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-26 pb-4">

        <div className="grid gap-4 md:gap-14 lg:grid-cols-5">

          {/* ======================================
                  LOGO SECTION
          ======================================= */}

          <div className="lg:col-span-2">

            <img
              src="/withoutBackground1.png"
              alt="We Make"
              className="h-20"
            />
            {/* Divider */}

            <div className="mt-2 mb-2 flex items-center gap-4">

              <div className="h-px flex-1 bg-[#f4c02d]/30" />

              <div className="h-3 w-3 rounded-full bg-[#f4c02d]" />

              <div className="h-px flex-1 bg-[#f4c02d]/30" />

            </div>


<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <p className="max-w-sm text-lg leading-6 text-[#f9e4bf]/90">

              Desi soul. Modern snacking.

              <br />

              Made with real ingredients,

              <br />

              crafted for a better you.

            </p>

            {/* Social */}

            <div className="mt-2 flex gap-1">

              <a
                href="#"
                className="group flex h-8 w-8 items-center justify-center rounded-full border border-[#f4c02d]/25 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E35A7E]"
              >
                <img
                  src="/facebook.svg"
                  alt="Facebook"
                  className="h-5 w-5 transition duration-300 group-hover:scale-110"
                />
              </a>

              <a
                href="#"
                className="group flex h-8 w-8 items-center justify-center rounded-full border border-[#f4c02d]/25 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E35A7E]"
              >
                <img
                  src="/instagram.svg"
                  alt="Instagram"
                  className="h-5 w-5 transition duration-300 group-hover:scale-110"
                />
              </a>

              <a
                href="#"
                className="group flex h-8 w-8 items-center justify-center rounded-full border border-[#f4c02d]/25 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#25D366]"
              >
                <img
                  src="/whatsapp.svg"
                  alt="WhatsApp"
                  className="h-5 w-5 transition duration-300 group-hover:scale-110"
                />
              </a>

              <a
                href="#"
                className="group flex h-8 w-8 items-center justify-center rounded-full border border-[#f4c02d]/25 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-black"
              >
                <img
                  src="/x.svg"
                  alt="X"
                  className="h-5 w-5 transition duration-300 group-hover:scale-110"
                />
              </a>

            </div>
</div>
          </div>

          {/* ======================================
                QUICK LINKS
          ======================================= */}

         <div>
  {/* Heading */}
  <button
    onClick={() => toggleSection("quick")}
    className="flex w-full items-center justify-between lg:pointer-events-none"
  >
    <h3 className="text-xl font-bold uppercase tracking-wider text-[#f4c02d]">
      Quick Links
    </h3>

    {/* Mobile arrow */}
    <ChevronDown
      size={20}
      className={`text-[#f4c02d] transition-transform duration-300 lg:hidden ${
        openSection === "quick" ? "rotate-180" : ""
      }`}
    />
  </button>

  <div className="mt-1 mb-2 h-[2px] w-20 bg-gradient-to-r from-[#f4c02d] to-transparent" />

  {/* Content */}
  <div
    className={`overflow-hidden transition-all duration-300 lg:max-h-none lg:opacity-100 ${
      openSection === "quick"
        ? "max-h-60 opacity-100"
        : "max-h-0 opacity-0 lg:max-h-none"
    }`}
  >
    <ul className="space-y-1 pt-1 lg:pt-0">
      {quickLinks.map((item) => (
        <li key={item}>
         <Link
  to={item.path}
  className="group flex items-center gap-3 text-md transition-all duration-300 hover:text-white"
>
  <ChevronRight
    size={18}
    className="text-[#f4c02d] transition group-hover:translate-x-1"
  />

  <span>{item.name}</span>
</Link>
        </li>
      ))}
    </ul>
  </div>
</div>

          {/* ======================================
                CUSTOMER CARE
          ======================================= */}
          <div>
  <button
    onClick={() => toggleSection("care")}
    className="flex w-full items-center justify-between lg:pointer-events-none"
  >
    <h3 className="text-xl font-bold uppercase tracking-wider text-[#f4c02d]">
      Customer Care
    </h3>

    <ChevronDown
      size={18}
      className={`text-[#f4c02d] transition-transform duration-300 lg:hidden ${
        openSection === "care" ? "rotate-180" : ""
      }`}
    />
  </button>

  <div className="mt-1 mb-2 h-[2px] w-20 bg-gradient-to-r from-[#f4c02d] to-transparent" />

  <div
    className={`overflow-hidden transition-all duration-300 ${
      openSection === "care"
        ? "max-h-60 opacity-100"
        : "max-h-0 opacity-0"
    } lg:max-h-none lg:opacity-100`}
  >
    <ul className="space-y-2 pt-1">
      {customerCare.map((item) => (
        <li key={item}>
        <Link
  to={item.path}
  className="group flex items-center gap-3 text-md transition hover:text-white"
>
  <ChevronRight
    size={18}
    className="text-[#f4c02d] transition group-hover:translate-x-1"
  />

  {item.name}
</Link>
        </li>
      ))}
    </ul>
  </div>
</div>

          {/* ======================================
                ADDRESS
          ======================================= */}
<div>
  <button
    onClick={() => toggleSection("address")}
    className="flex w-full items-center justify-between lg:pointer-events-none"
  >
    <h3 className="text-xl font-bold uppercase tracking-wider text-[#f4c02d]">
      Our Address
    </h3>

    <ChevronDown
      size={18}
      className={`text-[#f4c02d] transition-transform duration-300 lg:hidden ${
        openSection === "address" ? "rotate-180" : ""
      }`}
    />
  </button>

  <div className="mt-1 mb-3 h-[2px] w-20 bg-gradient-to-r from-[#f4c02d] to-transparent" />

  <div
    className={`overflow-hidden transition-all duration-300 ${
      openSection === "address"
        ? "max-h-80 opacity-100"
        : "max-h-0 opacity-0"
    } lg:max-h-none lg:opacity-100`}
  >
    <div className="flex gap-4 pt-1">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E35A7E]/30 bg-[#E35A7E]/15">
        <MapPin
          size={22}
          className="text-[#E35A7E]"
        />
      </div>

      <p className="text-md leading-6 text-[#f9e4bf]/90">
        Ground Floor, Block No. 159,
        <br />
        Plot No. 51,
        <br />
        Shakti Industries,
        <br />
        Bhada,
        <br />
        Surat - 395006,
        <br />
        Gujarat, India
      </p>

    </div>
  </div>
</div>



        </div>

        {/* ======================================
              NEWSLETTER
        ======================================= */}

        {/* <div className="mt-20 rounded-[30px] border border-[#f4c02d]/20 bg-white/5 backdrop-blur-md p-6 md:p-10">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            Left

            <div className="flex items-center gap-6">

              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[#f4c02d]/20 bg-[#E35A7E]/15">

                <Mail
                  size={34}
                  className="text-[#f4c02d]"
                />

              </div>

              <div>

                <h3 className="text-2xl font-bold uppercase text-[#f4c02d]">

                  Stay Updated

                </h3>

                <p className="mt-3 max-w-md text-[#f9e4bf]/80 leading-7">

                  Subscribe to receive festive offers,
                  healthy snack updates and exclusive launches.

                </p>

              </div>

            </div>

            Right

            <div className="flex w-full max-w-2xl flex-col gap-4 sm:flex-row">

              <input
                type="email"
                placeholder="Enter your email address"
                className="h-14 flex-1 rounded-full border border-white/10 bg-white px-6 text-black outline-none transition focus:border-[#f4c02d]"
              />

              <button className="h-14 rounded-full bg-[#E35A7E] px-8 font-semibold tracking-wide text-white transition hover:scale-105 hover:bg-[#164984]">

                SUBSCRIBE →

              </button>

            </div>

          </div>

        </div> */}
        {/* ===============================
            Divider
        ================================ */}

        <div className="my-1 flex items-center justify-center gap-5">

          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#f4c02d]/40 to-transparent" />

          <div className="flex items-center gap-2">

            <div className="h-2 w-2 rounded-full bg-[#f4c02d]" />
            <div className="h-3 w-3 rotate-45 border border-[#f4c02d]" />
            <div className="h-2 w-2 rounded-full bg-[#f4c02d]" />

          </div>

          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#f4c02d]/40 to-transparent" />

        </div>

        {/* ===============================
              Bottom Footer
        ================================ */}

        {/* <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"> */}
        <div className="flex flex-col items-center justify-center text-center gap-2">

          {/* Left */}

          <div className="flex flex-col items-center justify-center text-center gap-1">

            <p className="text-[#f9e4bf]/80">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-[#f4c02d]">
                WeMake Sweets & Snacks
              </span>
              . All Rights Reserved.
            </p>

            <p className="text-sm text-[#f9e4bf]/60">
              Crafted with ❤️ in India
            </p>

          </div>

          {/* Payment */}

          {/* <div className="flex flex-wrap justify-center gap-4">

            <div className="rounded-xl bg-white px-4 py-2 shadow-lg transition hover:-translate-y-1">
              <img
                src="/visa.png"
                alt="Visa"
                className="h-7"
              />
            </div>

            <div className="rounded-xl bg-white px-4 py-2 shadow-lg transition hover:-translate-y-1">
              <img
                src="/mastercard.png"
                alt="MasterCard"
                className="h-7"
              />
            </div>

            <div className="rounded-xl bg-white px-4 py-2 shadow-lg transition hover:-translate-y-1">
              <img
                src="/rupay.png"
                alt="RuPay"
                className="h-7"
              />
            </div>

            <div className="rounded-xl bg-white px-4 py-2 shadow-lg transition hover:-translate-y-1">
              <img
                src="/upi.png"
                alt="UPI"
                className="h-7"
              />
            </div>

          </div> */}

        </div>

      </div>

      {/* ===============================
          Decorative Corner
      ================================ */}

      {/* <div className="pointer-events-none absolute left-0 bottom-0 h-60 w-60 opacity-10">

        <svg
          viewBox="0 0 200 200"
          className="h-full w-full fill-[#f4c02d]"
        >
          <path d="M100 0C80 40 40 80 0 100c40 20 80 60 100 100 20-40 60-80 100-100-40-20-80-60-100-100z" />
        </svg>

      </div> */}

      {/* <div className="pointer-events-none absolute right-0 top-20 h-60 w-60 rotate-180 opacity-10">

        <svg
          viewBox="0 0 200 200"
          className="h-full w-full fill-[#f4c02d]"
        >
          <path d="M100 0C80 40 40 80 0 100c40 20 80 60 100 100 20-40 60-80 100-100-40-20-80-60-100-100z" />
        </svg>

      </div> */}

    </footer>
  );
};

export default Footer;