// import {
//   Mail,
//   Phone,
//   MapPin,
// } from "lucide-react";

// const quickLinks = [
//   "Home",
//   "Our Story",
//   "Products",
//   // "Gifting",
//   // "Recipes",
//   // "Blogs",
//   "Contact Us",
// ];

// const customerCare = [
//   "FAQs",
//   "Shipping & Delivery",
//   "Returns & Refunds",
//   "Privacy Policy",
//   "Terms & Conditions",
// ];

// const Footer = () => {
//   return (
//   <footer className="relative overflow-hidden pt-12">
//   {/* Background */}
//   <picture className="absolute inset-0 -z-20">
//     <source media="(max-width:768px)" srcSet="/footerMobile.webp" />
//     <img
//       src="/footerDesktop.webp"
//       alt=""
//       className="h-full w-full object-cover"
//     />
//   </picture>

//   {/* Optional Overlay */}
//   <div className="absolute inset-0 -z-10 bg-[#572340]/55 backdrop-blur-[1px]" />

//   {/* Footer */}
//   <div className="mx-auto max-w-7xl px-5 pb-8">

//     <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

//       {/* Logo */}
//       <div className="text-center md:text-left">

//         <img
//           src="/logo.webp"
//           alt="logo"
//           className="mx-auto mb-5 h-20 md:mx-0"
//         />

//         <p className="leading-7 text-[#f9e4bf]/90">
//           Desi soul. Modern snacking.
//           <br />
//           Made with real ingredients,
//           <br />
//           crafted for a better you.
//         </p>

//         <div className="mt-6 flex justify-center gap-3 md:justify-start">

//           <a
//             target="_blank"
//             rel="noopener noreferrer"
//             href="https://www.facebook.com/profile.php?id=100076647155144"
//             className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E35A7E] transition-all duration-300 hover:scale-110 hover:bg-[#164984]"
//           >
//             <img src="/facebook.svg" alt="Facebook" />
//           </a>

//           <a
//             href="#"
//             className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E35A7E] transition-all duration-300 hover:scale-110 hover:bg-[#164984]"
//           >
//             <img
//               src="/instagram.svg"
//               alt="Instagram"
//               className="h-full w-full object-cover"
//             />
//           </a>

//           <a
//             href="#"
//             className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E35A7E] transition-all duration-300 hover:scale-110 hover:bg-[#164984]"
//           >
//             <img src="/whatsapp.svg" alt="WhatsApp" />
//           </a>

//         </div>

//       </div>

//       {/* Quick Links */}
//       <div className="text-center md:text-left">

//         <h3 className="mb-5 font-semibold uppercase tracking-wider text-[#F4C02D]">
//           Quick Links
//         </h3>

//         <ul className="space-y-3">
//           {quickLinks.map((item) => (
//             <li key={item}>
//               <a
//                 href="#"
//                 className="text-[#f9e4bf]/90 transition hover:text-[#66BC9E]"
//               >
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>

//       </div>

//       {/* Customer Care */}
//       <div className="text-center md:text-left">

//         <h3 className="mb-5 font-semibold uppercase tracking-wider text-[#F4C02D]">
//           Customer Care
//         </h3>

//         <ul className="space-y-3">
//           {customerCare.map((item) => (
//             <li key={item}>
//               <a
//                 href="#"
//                 className="text-[#f9e4bf]/90 transition hover:text-[#66BC9E]"
//               >
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>

//       </div>

//       {/* Address */}
//       <div className="text-center md:text-left">

//         <h3 className="mb-5 font-semibold uppercase tracking-wider text-[#F4C02D]">
//           Our Address
//         </h3>

//         <div className="flex justify-center gap-3 md:justify-start">

//           <MapPin
//             className="mt-1 shrink-0 text-[#DE6239]"
//             size={22}
//           />

//           <p className="text-left leading-7 text-[#f9e4bf]/90">
//             Ground Floor, Block No. 159,
//             <br />
//             Plot No. 51,
//             <br />
//             Shakti Industries,
//             <br />
//             Bhada,
//             <br />
//             Surat - 395006,
//             <br />
//             Gujarat, India
//           </p>

//         </div>

//       </div>

//     </div>

//     {/* Copyright */}

//     <div className="mt-10 border-t border-white/15 pt-5 text-center text-sm text-[#f9e4bf]/75">
//       © {new Date().getFullYear()} WeMake Sweets & Snacks.
//       <br className="block md:hidden" />
//       <span className="md:ml-1">All Rights Reserved.</span>
//     </div>

//   </div>
// </footer>
//   );
// };

// export default Footer;


import {
  // Facebook,
  // Instagram,
  MessageCircle,
  ChevronRight,
  MapPin,
  Mail,
} from "lucide-react";

const quickLinks = [
  "Home",
  "Our Story",
  "Products",
  "Contact Us",
];

const customerCare = [
  "FAQs",
  "Shipping & Delivery",
  "Returns & Refunds",
  "Privacy Policy",
  "Terms & Conditions",
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#6e051b] text-[#f9e4bf]">

      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute -left-24 top-28 h-72 w-72 rounded-full border border-[#f4c02d]" />
        <div className="absolute -right-28 bottom-20 h-80 w-80 rounded-full border border-[#f4c02d]" />
      </div>

      {/* Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">

        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-16 md:h-24 w-full fill-[#f9e4bf]"
        >
          <path d="M321.39,56.44C196.78,76.35,0,0,0,0V120H1200V0s-178.71,84.35-355.78,69.72C679.3,56.18,601.67,8.26,463.76,8.26,392.42,8.26,363.86,47.91,321.39,56.44Z" />
        </svg>

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-14">

        <div className="grid gap-14 lg:grid-cols-5">

          {/* ======================================
                  LOGO SECTION
          ======================================= */}

          <div className="lg:col-span-2">

            <img
              src="/logo.webp"
              alt="We Make"
              className="h-20"
            />

            {/* Divider */}

            <div className="mt-8 mb-8 flex items-center gap-3">

              <div className="h-px flex-1 bg-[#f4c02d]/30" />

              <div className="h-3 w-3 rounded-full bg-[#f4c02d]" />

              <div className="h-px flex-1 bg-[#f4c02d]/30" />

            </div>

            <p className="max-w-sm text-lg leading-9 text-[#f9e4bf]/90">

              Desi soul. Modern snacking.

              <br />

              Made with real ingredients,

              <br />

              crafted for a better you.

            </p>

            {/* Social */}

            <div className="mt-10 flex gap-4">

              <a
                href="#"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#f4c02d]/25 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E35A7E]"
              >
                <img
                  src="/facebook.svg"
                  alt="Facebook"
                  className="h-5 w-5 transition duration-300 group-hover:scale-110"
                />
              </a>

              <a
                href="#"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#f4c02d]/25 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E35A7E]"
              >
                <img
                  src="/instagram.svg"
                  alt="Instagram"
                  className="h-5 w-5 transition duration-300 group-hover:scale-110"
                />
              </a>

              <a
                href="#"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#f4c02d]/25 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#25D366]"
              >
                <img
                  src="/whatsapp.svg"
                  alt="WhatsApp"
                  className="h-5 w-5 transition duration-300 group-hover:scale-110"
                />
              </a>

              <a
                href="#"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#f4c02d]/25 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-black"
              >
                <img
                  src="/x.svg"
                  alt="X"
                  className="h-5 w-5 transition duration-300 group-hover:scale-110"
                />
              </a>

            </div>

          </div>

          {/* ======================================
                QUICK LINKS
          ======================================= */}

          <div>

            <h3 className="text-xl font-bold uppercase tracking-wider text-[#f4c02d]">

              Quick Links

            </h3>

            <div className="mt-4 mb-8 h-[2px] w-20 bg-gradient-to-r from-[#f4c02d] to-transparent" />

            <ul className="space-y-5">

              {quickLinks.map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="group flex items-center gap-3 text-lg transition-all duration-300 hover:text-white"
                  >

                    <ChevronRight
                      size={18}
                      className="text-[#f4c02d] transition group-hover:translate-x-1"
                    />

                    <span>{item}</span>

                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* ======================================
                CUSTOMER CARE
          ======================================= */}

          <div>

            <h3 className="text-xl font-bold uppercase tracking-wider text-[#f4c02d]">
              Customer Care
            </h3>

            <div className="mt-4 mb-8 h-[2px] w-20 bg-gradient-to-r from-[#f4c02d] to-transparent" />

            <ul className="space-y-5">

              {customerCare.map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="group flex items-center gap-3 text-lg transition hover:text-white"
                  >

                    <ChevronRight
                      size={18}
                      className="text-[#f4c02d] transition group-hover:translate-x-1"
                    />

                    {item}

                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* ======================================
                ADDRESS
          ======================================= */}

          <div>

            <h3 className="text-xl font-bold uppercase tracking-wider text-[#f4c02d]">
              Our Address
            </h3>

            <div className="mt-4 mb-8 h-[2px] w-20 bg-gradient-to-r from-[#f4c02d] to-transparent" />

            <div className="flex gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E35A7E]/15 border border-[#E35A7E]/30">

                <MapPin
                  size={22}
                  className="text-[#E35A7E]"
                />

              </div>

              <p className="leading-9 text-[#f9e4bf]/90">

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

        <div className="my-14 flex items-center justify-center gap-5">

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
        <div className="flex flex-col items-center justify-center text-center gap-3">

          {/* Left */}

          {/* <div>

            <p className="text-[#f9e4bf]/80 text-center lg:text-left">

              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-[#f4c02d]">
                WeMake Sweets & Snacks
              </span>

              . All Rights Reserved.

            </p>

            <p className="mt-2 text-sm text-[#f9e4bf]/60 text-center lg:text-left">

              Crafted with ❤️ in India

            </p>

          </div> */}
          <div className="flex flex-col items-center justify-center text-center gap-3">

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

      <div className="pointer-events-none absolute left-0 bottom-0 h-60 w-60 opacity-10">

        <svg
          viewBox="0 0 200 200"
          className="h-full w-full fill-[#f4c02d]"
        >
          <path d="M100 0C80 40 40 80 0 100c40 20 80 60 100 100 20-40 60-80 100-100-40-20-80-60-100-100z" />
        </svg>

      </div>

      <div className="pointer-events-none absolute right-0 top-0 h-60 w-60 rotate-180 opacity-10">

        <svg
          viewBox="0 0 200 200"
          className="h-full w-full fill-[#f4c02d]"
        >
          <path d="M100 0C80 40 40 80 0 100c40 20 80 60 100 100 20-40 60-80 100-100-40-20-80-60-100-100z" />
        </svg>

      </div>

    </footer>
  );
};

export default Footer;