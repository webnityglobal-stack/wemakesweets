// import TermsContent from "@/components/termsAndContition/TermsContent";
// import TermsHeader from "@/components/termsAndContition/TermsHeader";
// import React from "react";


// const TermsAndConditions = () => {
//   return (
//     <main className="min-h-screen bg-[#f5ebda]">
//       <TermsHeader />
//       <TermsContent />
//     </main>
//   );
// };

// export default TermsAndConditions;


const TermsAndConditions = () => {
  const terms = [
    {
      number: "01",
      title: "General Use",
      content: (
        <>
          <p>
            By using this website, you confirm that you are at least 18 years
            old or are using the website under the supervision of a parent or
            legal guardian.
          </p>
          <p className="mt-3">
            All content on this website is for informational purposes only and
            is subject to change without notice.
          </p>
        </>
      ),
    },
    {
      number: "02",
      title: "User Responsibilities",
      content: (
        <>
          <p>
            Users agree not to misuse the website by knowingly introducing
            viruses, trojans, or other malicious material.
          </p>
          <p className="mt-3">
            You must not attempt to gain unauthorized access to the server,
            database, or any part of the site.
          </p>
        </>
      ),
    },
    {
      number: "03",
      title: "Product & Service Descriptions",
      content: (
        <p>
          All efforts are made to ensure accuracy in product descriptions,
          images, pricing, and availability. However, we do not warrant that
          product descriptions or other content are complete, current, or
          error-free.
        </p>
      ),
    },
    {
      number: "04",
      title: "Order Acceptance & Cancellation",
      content: (
        <p>
          Placing an order on this website does not constitute a confirmed
          order. We reserve the right to refuse or cancel any order for
          reasons including but not limited to product availability, pricing
          errors, or suspected fraud.
        </p>
      ),
    },
    {
      number: "05",
      title: "Pricing and Payment",
      content: (
        <p>
          All prices are displayed in INR or the local currency and are
          inclusive or exclusive of taxes as indicated. Payments must be made
          through secure and approved payment gateways. The website is not
          liable for any payment gateway errors.
        </p>
      ),
    },
    {
      number: "06",
      title: "Intellectual Property",
      content: (
        <p>
          All text, graphics, logos, images, and other materials on this
          website are the intellectual property of their respective owners and
          protected by copyright and trademark laws. Unauthorized use or
          duplication of any materials is prohibited.
        </p>
      ),
    },
    {
      number: "07",
      title: "Limitation of Liability",
      content: (
        <>
          <p>
            We are not responsible for any indirect or consequential damages
            that may arise from the use or inability to use the website or the
            products purchased through it.
          </p>
          <p className="mt-3">
            Liability is limited to the value of the product purchased, if
            applicable.
          </p>
        </>
      ),
    },
    {
      number: "08",
      title: "Modifications to Terms",
      content: (
        <p>
          These terms may be revised at any time without prior notice.
          Continued use of the site after changes implies acceptance of those
          changes.
        </p>
      ),
    },
    {
      number: "09",
      title: "Governing Law",
      content: (
        <p>
          These terms shall be governed by and construed in accordance with
          the laws of India.
        </p>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#f5ebda] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-manrope text-xs font-semibold uppercase tracking-[0.25em] text-[#572340] sm:text-sm">
            Legal Information
          </p>

          <h1 className="mt-3 font-cormorant text-4xl font-bold leading-tight text-[#572340] sm:text-5xl md:text-6xl">
            Terms & Conditions
          </h1>

          <div className="mx-auto mt-5 h-[2px] w-16 bg-[#572340]" />

          <p className="mt-6 font-manrope text-sm font-normal leading-7 text-gray-700 sm:text-base sm:leading-8">
            These Terms and Conditions govern your use of this website and the
            purchase of products or services offered herein. By accessing or
            using this website, you agree to be bound by these terms. Please
            read them carefully.
          </p>
        </div>

        {/* Terms */}
        <div className="mt-12 space-y-5 sm:mt-16 sm:space-y-6">
          {terms.map((term) => (
            <article
              key={term.number}
              className="rounded-2xl border border-[#572340]/10 bg-white/70 p-5 shadow-sm sm:p-7 lg:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                {/* Number */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#572340] font-manrope text-sm font-semibold text-white sm:h-11 sm:w-11">
                  {term.number}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="font-cormorant text-2xl font-semibold leading-tight text-[#572340] sm:text-3xl">
                    {term.title}
                  </h2>

                  <div className="mt-3 font-manrope text-sm font-normal leading-7 text-gray-700 sm:text-base sm:leading-8">
                    {term.content}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 rounded-2xl bg-[#572340] px-5 py-6 text-center sm:mt-12 sm:px-8 sm:py-8">
          <p className="font-manrope text-sm font-medium leading-7 text-white/90 sm:text-base sm:leading-8">
            By continuing to use this website, you acknowledge that you have
            read, understood, and agreed to these Terms & Conditions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;