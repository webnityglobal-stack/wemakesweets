// import { PhoneCall } from "lucide-react";


// const TopBanner = () => {
 
//   return (
    
//     <div className="relative overflow-hidden bg-[#3e5a2c]">
//       {/* Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#572340] via-[#164984] to-[#3e5a2c]" />

//       {/* Bottom Accent Line */}
//       <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#164984]" />

//       <div className="relative mx-auto flex min-h-[48px] max-w-7xl items-center justify-center gap-2 px-4 text-center">

//         {/* Left Decorative Line */}
//         <span className="hidden h-px w-10 bg-[#f9e4bf]/50 md:block" />

//         {/* Heading */}
//         <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#f9e4bf] md:text-xs">
//           Corporate Gifting 🎉
//         </span>

//         {/* Icon */}
//         <PhoneCall
//           size={16}
//           className="mx-1 text-[#164984]"
//           strokeWidth={2.5}
//         />

//         {/* Text */}
//         <span className="text-sm font-medium text-white md:text-base">
//           For Corporate Gift Orders
//         </span>

//         {/* Call Button */}
     
//          {/* <a
//           href="tel:18002032007"
//           className="rounded-full !bg-pink-600 !hover:bg-[#572340] px-4 py-1.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 "
//         >
//           Call 1800 203 2007
//         </a> */}
//         <a
//   href="tel:18002032007"
//   className="
//     inline-flex
//     items-center
//     rounded-full
//     bg-pink-600
//     hover:bg-[#60b396]
//     px-4
//     py-1.5
//     text-sm
//     font-semibold
//     text-white
//     shadow-md
//     transition-all
//     duration-300
//     hover:scale-105
//     shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] border-black hover:shadow-[3px_4px_0px_#000] 
//   "
// >
//   Call 1800 203 2007
// </a>
       

//         {/* Right Decorative Line */}
//         <span className="hidden h-px w-10 bg-[#f9e4bf]/50 md:block" />

//       </div>
//     </div>
//   );
// };

// export default TopBanner;


import { PhoneCall } from "lucide-react";

const TopBanner = () => {
  return (
    <div className="relative overflow-hidden bg-[#3e5a2c]">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#572340] via-[#164984] to-[#3e5a2c]" />

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#164984]" />

      {/* ================= DESKTOP ================= */}
      <div className="relative mx-auto hidden min-h-[48px] max-w-7xl items-center justify-center gap-2 px-4 text-center md:flex">

        {/* Left Decorative Line */}
        <span className="hidden h-px w-10 bg-[#f9e4bf]/50 lg:block" />

        {/* Heading */}
        <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[2px] text-[#f9e4bf] md:text-xs">
          Corporate Gifting 🎉
        </span>

        {/* Icon */}
        <PhoneCall
          size={16}
          className="mx-1 shrink-0 text-[#164984]"
          strokeWidth={2.5}
        />

        {/* Text */}
        <span className="whitespace-nowrap text-sm font-medium text-white md:text-base">
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
            shadow-md
            transition-all
            duration-300
            hover:scale-105
            hover:bg-[#60b396]
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
          <div className="flex shrink-0 items-center gap-3 px-4">

            <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[1.3px] text-[#f9e4bf]">
              Corporate Gifting 🎉
            </span>

            <PhoneCall
              size={14}
              className="shrink-0 text-[#f9e4bf]"
              strokeWidth={2.5}
            />

            <span className="whitespace-nowrap text-[11px] font-medium text-white">
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


          {/* Duplicate Content */}
          <div className="flex shrink-0 items-center gap-3 px-4">

            <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[1.3px] text-[#f9e4bf]">
              Corporate Gifting 🎉
            </span>

            <PhoneCall
              size={14}
              className="shrink-0 text-[#f9e4bf]"
              strokeWidth={2.5}
            />

            <span className="whitespace-nowrap text-[11px] font-medium text-white">
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