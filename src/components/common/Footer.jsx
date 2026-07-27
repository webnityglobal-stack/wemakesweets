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
    <footer className="relative pt-12 overflow-hidden ">
      {/* Background */}
      <picture className="absolute inset-0 -z-20">
        <source media="(max-width:768px)" srcSet="/footerMobile.png" />
        <img
          src="/footerDesktop.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </picture>

      {/* Overlay */}
      

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-5 pb-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}

          <div className="text-center md:text-left">

            <img
              src="/logo.webp"
              alt="logo"
              className="h-20 mx-auto md:mx-0 mb-5"
            />

            <p className="text-gray-200 leading-7">
              Desi soul. Modern snacking.
              <br />
              Made with real ingredients,
              <br />
              crafted for a better you.
            </p>

            <div className="flex justify-center md:justify-start gap-3 mt-6">

              <a  target="_blank"
  rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=100076647155144"
                className="w-10 h-10 rounded-full bg-[#b98d39] flex items-center justify-center hover:scale-110 duration-300"
              >
                <img src='/facebook.svg' size={18}  />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#b98d39] flex items-center justify-center hover:scale-110 duration-300"
              >
               <img src='/instagram.svg' size={18} className="h-full w-full object-cover" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#b98d39] flex items-center justify-center hover:scale-110 duration-300"
              >
                <img src='/whatsapp.svg' size={18}  />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div className="text-center md:text-left">

            <h3 className="text-[#eac067] font-semibold uppercase tracking-wider mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-[#f5d58a] transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* Customer Care */}

          <div className="text-center md:text-left">

            <h3 className="text-[#eac067] font-semibold uppercase tracking-wider mb-5">
              Customer Care
            </h3>

            <ul className="space-y-3">
              {customerCare.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-[#f5d58a] transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* Address */}

          <div className="text-center md:text-left">

            <h3 className="text-[#eac067] font-semibold uppercase tracking-wider mb-5">
              Our Address
            </h3>

            <div className="flex justify-center md:justify-start gap-3">

              <MapPin
                className="text-[#eac067] mt-1 shrink-0"
                size={22}
              />

              <p className="text-gray-200 leading-7 text-left">
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

     <div className="mt-10 border-t border-white/15 pt-5 text-center text-sm text-gray-300">
  © {new Date().getFullYear()} WeMake Sweets & Snacks.
  <br className="block md:hidden" />
  <span className="md:ml-1">All Rights Reserved.</span>
</div>
          
      </div>
    </footer>
  );
};

export default Footer;