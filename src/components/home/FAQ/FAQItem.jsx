// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown } from "lucide-react";

// const FAQItem = ({ question, answer }) => {
//   const [open, setOpen] = useState(false);

//   return (
   
// <motion.div 
//   layout 
//   transition={{ duration: 0.35 }} 
//   className="w-full max-w-[380px] mx-auto overflow-hidden rounded-3xl border border-[#8b183d]/15 bg-[#f2ede1] shadow-sm transition-all duration-300 hover:border-[#8b183d]/30 hover:shadow-xl px-3 lg:w-[520px] lg:max-w-none"
// >
//       {/* Question */}
     
// <button 
//   onClick={() => setOpen(!open)} 
//   className="flex w-full items-center justify-between gap-5 p-2 text-left md:p-3 lg:grid lg:grid-cols-[420px_44px_1fr]"
// >
//         <h3
//           className={`text-[16px] font-bold transition-colors duration-300 md:text-[16px] ${
//             open ? "text-[#8b183d]" : "text-[#2d2d2d]"
//           }`}
//         >
//           {question}
//         </h3>

// {/* right circle  */}
// <motion.div
//   animate={{ rotate: open ? 180 : 0 }}
//   transition={{ duration: 0.3 }}
//   // className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
//   className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-300  ${
//     open
//       ? "bg-[#8b183d] text-white"
//       : "bg-[#f9e4bf] text-[#8b183d]"
//   }`}

  
// >
//   <ChevronDown size={22} strokeWidth={2.5}  className=""/>
// </motion.div>

//       </button>

//       {/* Answer */}
//       <AnimatePresence initial={false}>
//         {open && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{
//               duration: 0.35,
//               ease: "easeInOut",
//             }}
//             className="overflow-hidden"
//           >
//             <div className="border-t border-[#8b183d]/10  px-2 py-3 md:px-3">
//               <p className="leading-8 text-gray-600">
//                 {answer}
//               </p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="
        w-full
        max-w-[380px]
        mx-auto
        overflow-hidden
        rounded-3xl
        border border-[#8b183d]/15
        bg-[#f2ede1]
        shadow-sm
        transition-all
        duration-300
        hover:border-[#8b183d]/30
        hover:shadow-xl
        px-3
        lg:w-[520px]
        lg:max-w-none
      "
    >
      {/* Question */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-5
          p-2
          text-left
          md:p-3
        "
      >
        <h3
          className={`text-[16px] font-bold transition-colors duration-300 ${
            open ? "text-[#8b183d]" : "text-[#2d2d2d]"
          }`}
        >
          {question}
        </h3>

        {/* Arrow */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            transition-all
            duration-300
            ${
              open
                ? "bg-[#8b183d] text-white"
                : "bg-[#f9e4bf] text-[#8b183d]"
            }
          `}
        >
          <ChevronDown size={22} strokeWidth={2.5} />
        </motion.div>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: {
                duration: 0.35,
                ease: "easeInOut",
              },
              opacity: {
                duration: 0.25,
              },
            }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#8b183d]/10 px-2 py-3 md:px-3">
              <p className="leading-8 text-gray-600">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQItem;

