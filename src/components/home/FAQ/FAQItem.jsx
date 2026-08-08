import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      transition={{ duration: 0.35 }}
      className="overflow-hidden rounded-3xl border border-[#8b183d]/15 bg-white shadow-sm transition-all duration-300 hover:border-[#8b183d]/30 hover:shadow-xl"
    >
      {/* Question */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-5 p-6 text-left md:p-7"
      >
        <h3
          className={`text-lg font-bold transition-colors duration-300 md:text-xl ${
            open ? "text-[#8b183d]" : "text-[#2d2d2d]"
          }`}
        >
          {question}
        </h3>

        {/* <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            open
              ? "bg-[#8b183d] text-white"
              : "bg-[#f9e4bf] text-[#8b183d]"
          }`}
        >
          <Plus size={22} strokeWidth={2.5} />
        </motion.div> */}

<motion.div
  animate={{ rotate: open ? 180 : 0 }}
  transition={{ duration: 0.3 }}
  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
    open
      ? "bg-[#8b183d] text-white"
      : "bg-[#f9e4bf] text-[#8b183d]"
  }`}
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
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#8b183d]/10 bg-[#fff8f3] px-6 py-6 md:px-7">
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