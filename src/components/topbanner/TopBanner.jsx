import { PhoneCall } from "lucide-react";

const TopBanner = () => {
  return (
    <div className="relative overflow-hidden bg-[#08376c]">
      {/* Decorative Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#08376c] via-[#0d4a8f] to-[#08376c]" />

      {/* Gold Line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#E8B357]" />

      <div className="relative mx-auto flex min-h-[44px] max-w-7xl items-center justify-center gap-2 px-4 text-center">

        <span className="hidden h-px w-10 bg-[#E8B357]/60 md:block" />

        <span className="font-semibold uppercase tracking-[2px] text-[#E8B357] text-[11px] md:text-xs">
          Corporate Gifting
        </span>

        <PhoneCall
          size={15}
          className="mx-1 text-[#f9e4bf]"
        />

        <span className="text-sm font-medium text-white md:text-base">
          For Corporate Gift Orders
        </span>

        <a
          href="tel:18002032007"
          className="rounded-full bg-[#E8B357] px-3 py-1 text-sm font-bold text-[#08376c] transition-all duration-300 hover:scale-105 hover:bg-[#f9e4bf]"
        >
          Call 1800 203 2007
        </a>

        <span className="hidden h-px w-10 bg-[#E8B357]/60 md:block" />

      </div>
    </div>
  );
};

export default TopBanner;