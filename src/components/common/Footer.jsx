import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const quickLinks = [
  "Home",
  "Our Story",
  "Products",
  // "Gifting",
  // "Recipes",
  // "Blogs",
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
  <footer className="relative overflow-hidden pt-12">
  {/* Background */}
  <picture className="absolute inset-0 -z-20">
    <source media="(max-width:768px)" srcSet="/footerMobile.webp" />
    <img
      src="/footerDesktop.webp"
      alt=""
      className="h-full w-full object-cover"
    />
  </picture>

  {/* Optional Overlay */}
  <div className="absolute inset-0 -z-10 bg-[#572340]/55 backdrop-blur-[1px]" />

  {/* Footer */}
  <div className="mx-auto max-w-7xl px-5 pb-8">

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

      {/* Logo */}
      <div className="text-center md:text-left">

        <img
          src="/logo.webp"
          alt="logo"
          className="mx-auto mb-5 h-20 md:mx-0"
        />

        <p className="leading-7 text-[#f9e4bf]/90">
          Desi soul. Modern snacking.
          <br />
          Made with real ingredients,
          <br />
          crafted for a better you.
        </p>

        <div className="mt-6 flex justify-center gap-3 md:justify-start">

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/profile.php?id=100076647155144"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E35A7E] transition-all duration-300 hover:scale-110 hover:bg-[#164984]"
          >
            <img src="/facebook.svg" alt="Facebook" />
          </a>

          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E35A7E] transition-all duration-300 hover:scale-110 hover:bg-[#164984]"
          >
            <img
              src="/instagram.svg"
              alt="Instagram"
              className="h-full w-full object-cover"
            />
          </a>

          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E35A7E] transition-all duration-300 hover:scale-110 hover:bg-[#164984]"
          >
            <img src="/whatsapp.svg" alt="WhatsApp" />
          </a>

        </div>

      </div>

      {/* Quick Links */}
      <div className="text-center md:text-left">

        <h3 className="mb-5 font-semibold uppercase tracking-wider text-[#F4C02D]">
          Quick Links
        </h3>

        <ul className="space-y-3">
          {quickLinks.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-[#f9e4bf]/90 transition hover:text-[#66BC9E]"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

      </div>

      {/* Customer Care */}
      <div className="text-center md:text-left">

        <h3 className="mb-5 font-semibold uppercase tracking-wider text-[#F4C02D]">
          Customer Care
        </h3>

        <ul className="space-y-3">
          {customerCare.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-[#f9e4bf]/90 transition hover:text-[#66BC9E]"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

      </div>

      {/* Address */}
      <div className="text-center md:text-left">

        <h3 className="mb-5 font-semibold uppercase tracking-wider text-[#F4C02D]">
          Our Address
        </h3>

        <div className="flex justify-center gap-3 md:justify-start">

          <MapPin
            className="mt-1 shrink-0 text-[#DE6239]"
            size={22}
          />

          <p className="text-left leading-7 text-[#f9e4bf]/90">
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

    {/* Copyright */}

    <div className="mt-10 border-t border-white/15 pt-5 text-center text-sm text-[#f9e4bf]/75">
      © {new Date().getFullYear()} WeMake Sweets & Snacks.
      <br className="block md:hidden" />
      <span className="md:ml-1">All Rights Reserved.</span>
    </div>

  </div>
</footer>
  );
};

export default Footer;