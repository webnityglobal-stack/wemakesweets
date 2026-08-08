import { PhoneCall } from "lucide-react";
import { SquigglyText } from "../ui/squiggly-text";

const TopBanner = () => {
 
  return (
    
    <div className="relative overflow-hidden bg-[#3e5a2c]">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#572340] via-[#164984] to-[#3e5a2c]" />

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#164984]" />

      <div className="relative mx-auto flex min-h-[48px] max-w-7xl items-center justify-center gap-2 px-4 text-center">

        {/* Left Decorative Line */}
        <span className="hidden h-px w-10 bg-[#f9e4bf]/50 md:block" />

        {/* Heading */}
        <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#f9e4bf] md:text-xs">
          Corporate   <SquigglyText
                    stepDuration={70}
                    scale={[6, 9]}
                    className="text-amber-500"
                  >Gifting 🎉</SquigglyText>  
        </span>

        {/* Icon */}
        <PhoneCall
          size={16}
          className="mx-1 text-[#164984]"
          strokeWidth={2.5}
        />

        {/* Text */}
        <span className="text-sm font-medium text-white md:text-base">
          For Corporate   <SquigglyText
          stepDuration={70}
          scale={[6, 9]}
          className="text-amber-500"
        >Gift</SquigglyText>  Orders
        </span>

        {/* Call Button */}
     
         {/* <a
          href="tel:18002032007"
          className="rounded-full !bg-pink-600 !hover:bg-[#572340] px-4 py-1.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 "
        >
          Call 1800 203 2007
        </a> */}
        <a
  href="tel:18002032007"
  className="
    inline-flex
    items-center
    rounded-full
    bg-pink-600
    px-4
    py-1.5
    text-sm
    font-semibold
    text-white
    shadow-md
    transition-all
    duration-300
    hover:bg-[#572340]
    hover:scale-105
  "
>
  Call 1800 203 2007
</a>
       

        {/* Right Decorative Line */}
        <span className="hidden h-px w-10 bg-[#f9e4bf]/50 md:block" />

      </div>
    </div>
  );
};

export default TopBanner;