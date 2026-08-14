import { useState } from "react";
import { Search, MessageCircleQuestion } from "lucide-react";
import { motion } from "framer-motion";
import FAQItem from "./FAQItem";
import { Link } from "react-router-dom";

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

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="relative overflow-hidden bg-[#f9e4bf] py-4">

      {/* Background Blur */}

      <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-[#8b183d]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#164984]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#8b183d]/10">

            <MessageCircleQuestion
              size={28}
              className="text-[#8b183d]"
            />

          </div>

          <span className="rounded-full bg-[#8b183d]/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#8b183d]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-2xl font-black text-[#2d2d2d] md:text-3xl">
            Got Questions?
            <span className="block text-[#8b183d]">
              We've Got Answers
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[14px] md:text-[16px] leading-8 text-gray-600">
            Find answers to the most commonly asked questions about our
            healthy snacks, ingredients, shipping, storage and more.
          </p>

        </motion.div>

        {/* Search */}
{/* 
        <div className="relative mx-auto mt-14 max-w-2xl">

          <Search
            size={22}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search your question..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-16 w-full rounded-2xl border border-[#8b183d]/20 bg-white pl-14 pr-6 text-lg outline-none transition focus:border-[#8b183d] focus:ring-4 focus:ring-[#8b183d]/10"
          />

        </div> */}

        {/* FAQ List */}

        <div className="mt-14 space-y-5">

          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))
          ) : (
            <div className="rounded-3xl bg-[white] p-10 text-center shadow">

              <h3 className="text-2xl font-bold text-[#8b183d]">
                No Question Found
              </h3>

              <p className="mt-3 text-gray-500">
                Try searching with another keyword.
              </p>

            </div>
          )}

        </div>
<div className="mt-20 rounded-[32px] bg-gradient-to-r from-[#8b183d] via-[#572340] to-[#164984] p-10 text-center text-white">

  <h2 className="md:text-xl  font-bold">
    Still Have Questions?
  </h2>

  <p className="mx-auto mt-4 max-w-2xl text-white/80">
    Our team is always ready to help you with orders,
    ingredients, delivery and product recommendations.
  </p>

 <Link to='/contact'>
  <button className="mt-8 rounded-full bg-pink-600 hover:bg-[#572340] px-6 py-2 font-semibold  transition hover:scale-105 shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] border-black hover:shadow-[3px_4px_0px_#000]">
    Contact Us
  </button>
 </Link>

</div>
      </div>
    </section>
  );
};

export default FAQPage;