import { useState } from "react";
import { motion } from "framer-motion";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "Are your products made with 100% natural ingredients?",
    answer:
      "Yes. All our products are crafted using premium quality natural ingredients without compromising on taste and nutrition.",
  },
  {
    question: "Do your products contain refined sugar?",
    answer:
      "No. Our products are naturally sweetened and do not contain refined sugar.",
  },
  {
    question: "Are your snacks suitable for children?",
    answer:
      "Absolutely. Our healthy snacks are suitable for both kids and adults.",
  },
  {
    question: "How long is the shelf life?",
    answer:
      "Depending on the product, shelf life ranges from 6 to 9 months when stored properly.",
  },
  {
    question: "Do you use preservatives?",
    answer:
      "No. We avoid artificial preservatives while maintaining freshness through quality packaging.",
  },
  {
    question: "Are your products FSSAI Certified?",
    answer:
      "Yes. Every product is manufactured in an FSSAI-certified facility following strict quality standards.",
  },
  {
    question: "How many days does delivery take?",
    answer:
      "Orders are generally delivered within 3-7 business days depending on your location.",
  },
  {
    question: "Is Cash on Delivery available?",
    answer:
      "Yes. COD is available for most serviceable locations across India.",
  },
];


const FAQPage = () => {
  const [search, setSearch] = useState("");
  const [showFAQs, setShowFAQs] = useState(false);

  
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  const handleFAQToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    // <section className="relative overflow-hidden bg-[#f5ebda] py-4">
    <section className="relative z-10 -mb-[1px] overflow-hidden bg-[#f5ebda] py-4 border-0 outline-none">
      {/* Background Blur */}
      {/* <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-[#8b183d]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#164984]/10 blur-[120px]" /> */}

      <div className="relative mx-auto max-w-5xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#8b183d]/10   text-white
                  bg-pink-600
              hover:bg-[#66BC9E]
              hover:scale-105
                  hover:text-black
              shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] border-black hover:shadow-[3px_4px_0px_#000]">
            <MessageCircleQuestion
              size={28}
              className="text-white hover:text-black"
            />
          </div> */}
          {/* 
          <span className="rounded-full bg-[#8b183d]/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#8b183d]">
            Frequently Asked Questions
          </span> */}
        </motion.div>

        {/* FAQ Trigger */}
        <div className="flex justify-center pt-4 md:pt-9">
          <button
            type="button"
            onClick={() => {
              setShowFAQs((prev) => !prev);

              // FAQ section close karte time open question bhi close
              if (showFAQs) {
                setOpenIndex(null);
              }
            }}
            className="
              group
              rounded-full
          
            
              px-6 py-3
              text-center
            
              transition-all
              duration-300
              hover:border-[#8b183d]/40
            
              active:scale-95
              text-white
              hover:text-white
              bg-pink-600
              hover:bg-[#60b396]
              hover:scale-105
              shadow-[1px_2px_0px_#000]
              sm:shadow-[2px_3px_0px_#000]
              hover:shadow-[3px_4px_0px_#000]
              cursor-pointer
            "
          >
            <span className="block font-manrope text-[15px] font-semibold">
              Frequently Asked Questions
            </span>

            <span className="block text-[18px] font-bold  font-manrope transition-colors duration-300 ">
              {showFAQs ? "Close FAQs" : "Click Here"}
            </span>
          </button>
        </div>

        {/* FAQ List */}
        {showFAQs && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-10 space-y-5"
          >


            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() => handleFAQToggle(index)}
                />
              ))
            ) : (
              <div className="rounded-3xl bg-white p-10 text-center shadow">
                <h3 className="text-2xl font-bold text-[#8b183d]">
                  No Question Found
                </h3>

                <p className="mt-3 text-gray-500">
                  Try searching with another keyword.
                </p>
              </div>
            )}



        {/* Ask Your Question */}
        <div className="mt-12 rounded-3xl border border-[#8b183d]/10 bg-[#f2ede1] p-6 shadow-sm md:p-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#2d2d2d] md:text-2xl">
              Still have a question?
            </h3>

            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-600">
              Didn't find what you're looking for? Ask us your question and
              we'll be happy to help.
            </p>
          </div>

          <div className="mx-auto mt-6 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Ask your question..."
              className="
        flex-1
        rounded-full
        border border-[#8b183d]/20
        bg-white
        px-5 py-3
        text-sm
        text-[#2d2d2d]
        outline-none
        transition-all
        placeholder:text-gray-400
        focus:border-[#8b183d]/50
        focus:ring-2
        focus:ring-[#8b183d]/10
      "
            />

            <button
              type="button"
              className="
                rounded-full
                px-7 py-3
                text-sm
                font-semibold
                transition-all
                duration-300
                active:scale-95
                text-white
                hover:text-white
                bg-pink-600
                hover:bg-[#60b396]
                hover:scale-105
                shadow-[1px_2px_0px_#000]
                sm:shadow-[2px_3px_0px_#000]
                hover:shadow-[3px_4px_0px_#000]
                cursor-pointer
              "
            >
              Submit
            </button>
          </div>
        </div>


          </motion.div>
        )}



        {/* send us quesiton  */}


      </div>
    </section>
  );
};

export default FAQPage;