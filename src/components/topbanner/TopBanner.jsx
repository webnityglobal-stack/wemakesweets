import { PhoneCall } from "lucide-react";

const TopBanner = () => {
  return (
    <div className="relative overflow-hidden bg-[#3e5a2c]">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#572340] via-[#164984] to-[#3e5a2c]" />

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#164984]" />

      {/* ================= DESKTOP ================= */}
    <div className="relative mx-auto hidden min-h-[48px] max-w-7xl gap-1 items-center justify-center px-4 text-center md:flex">

  {/* Left Decorative Line */}
  <span className="hidden h-px w-10 bg-[#f9e4bf]/50 lg:block" />

  <span className="font-manrope whitespace-nowrap text-sm font-semibold text-white md:text-base">
    For Corporate Gift Orders
  </span>

  {/* Call Button */}
  <a
    href="tel:18002032007"
    className="
      inline-flex
      shrink-0
      items-center
      whitespace-nowrap
      rounded-full
      bg-pink-600
      px-4
      py-1.5
      text-sm
      font-semibold
      text-white
      transition-all
      duration-300
      hover:scale-105
      hover:bg-[#60b396]
      hover:text-black
      shadow-[1px_2px_0px_#000]
      sm:shadow-[2px_3px_0px_#000]
      border-black
      hover:shadow-[3px_4px_0px_#000]
    "
  >
    Call 1800 203 2007
  </a>

  {/* Right Decorative Line */}
  <span className="hidden h-px w-10 bg-[#f9e4bf]/50 lg:block" />

</div>


      {/* ================= MOBILE ================= */}
      <div className="relative flex h-[48px] w-full items-center overflow-hidden md:hidden">

        <div className="top-banner-marquee flex w-max items-center whitespace-nowrap">

          {/* First Content */}
          <div className="flex shrink-0 items-center gap-3 ">

            {/* <PhoneCall
              size={14}
              className="shrink-0 text-[#f9e4bf]"
              strokeWidth={2.5}
            /> */}

            <span className="whitespace-nowrap text-[11px] font-semibold font-manrope text-white">
              For Corporate Gift Orders
            </span>

            <a
              href="tel:18002032007"
              className="
                inline-flex
                shrink-0
                items-center
                whitespace-nowrap
                rounded-full
                bg-pink-600
                px-3
                py-1
                text-[10px]
                font-semibold
                text-white
                shadow-[1px_2px_0px_#000]
                font-cormorant font-semibold 
              "
            >
              Call 1800 203 2007
            </a>

          </div>


          {/* Duplicate Content */}
          <div className="flex shrink-0 items-center gap-3 px-4">
            {/* <PhoneCall
              size={14}
              className="shrink-0 text-[#f9e4bf]"
              strokeWidth={2.5}
            /> */}

            <span className="whitespace-nowrap text-[11px] font-semibold font-manrope text-white">
              For Corporate Gift Orders
            </span>

            <a
              href="tel:18002032007"
              className="
                inline-flex
                shrink-0
                items-center
                whitespace-nowrap
                rounded-full
                bg-pink-600
                px-3
                py-1
                text-[10px]
                font-semibold
                text-white
                shadow-[1px_2px_0px_#000]
                
              "
            >
              Call 1800 203 2007
            </a>

          </div>

        </div>
      </div>
    </div>
  );
};

export default TopBanner;