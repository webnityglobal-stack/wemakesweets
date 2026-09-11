import React from "react";

/* =========================================================
   COMPONENT 1 — PRIVACY POLICY HEADER
========================================================= */

const PrivacyPolicyHeader = () => {
  return (
    <section className="bg-[#572340] text-white">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <div className="mx-auto max-w-4xl text-center">
          {/* Small Brand Label */}
          <p className="mb-4 font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-white/75 sm:text-sm">
            WEMAKE / wemakesweets
          </p>

          {/* Main Heading */}
          <h1 className="font-cormorant text-5xl font-bold leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
            Privacy Policy
          </h1>

          {/* Effective Date */}
          <div className="mt-7 flex flex-col items-center justify-center gap-2 font-manrope text-sm text-white/80 sm:flex-row sm:gap-3">
            <span>Effective date: 7 September 2026</span>

            <span className="hidden h-1 w-1 rounded-full bg-white/50 sm:block" />

            <span>Website: wemakesweets.com</span>
          </div>

          {/* Intro */}
          <p className="mx-auto mt-8 max-w-3xl font-manrope  text-[10px] md:text-sm font-normal leading-7 text-white/90 sm:text-base sm:leading-8">
            Your privacy matters to us. This Privacy Policy explains what
            WEMAKE may collect, why it is used, how it may be shared, and the
            choices available to customers when using our website and services.
          </p>
        </div>
      </div>
    </section>
  );
};


/* =========================================================
   COMPONENT 2 — PRIVACY POLICY CONTENT
========================================================= */

const PrivacyPolicyContent = () => {
  return (
    <section className="bg-[#f5ebda]">
      <div className="mx-auto max-w-5xl px-5 pt-6 sm:px-8 sm:pt-8 lg:px-10 lg:pt-14">

        {/* -------------------------------------------------
            1. WHO WE ARE
        ------------------------------------------------- */}
        <PolicySection number="1" title="Who We Are">
          <p>
            Wemake Sweets & Snacks is a partnership business operating the
            WEMAKE / wemakesweets brand and the website wemakesweets.com. We
            sell food and snack products to customers in India.
          </p>

          <p>
            For privacy questions or requests, contact us at{" "}
            <a
              href="mailto:cs@wemakesweets.com"
              className="font-semibold text-[#572340] underline decoration-[#572340]/30 underline-offset-4 transition hover:decoration-[#572340]"
            >
              cs@wemakesweets.com
            </a>{" "}
            or{" "}
            <a
              href="tel:18002032007"
              className="font-semibold text-[#572340] underline decoration-[#572340]/30 underline-offset-4 transition hover:decoration-[#572340]"
            >
              18002032007
            </a>
            .
          </p>
        </PolicySection>


        {/* -------------------------------------------------
            2. INFORMATION WE COLLECT
        ------------------------------------------------- */}
        <PolicySection number="2" title="Information We Collect">
          <p>
            We may collect information you provide when you create an account,
            place an order, contact customer support, communicate with us
            through WhatsApp, submit a review, or upload a customer photo.
          </p>

          <PolicySubHeading>
            Account and contact information:
          </PolicySubHeading>

          <p>
            name, mobile number, email address and WhatsApp/contact information.
          </p>

          <PolicySubHeading>
            Order information:
          </PolicySubHeading>

          <p>
            billing and shipping address, products ordered, order history and
            information needed to fulfil and support your purchase.
          </p>

          <PolicySubHeading>
            Payment information:
          </PolicySubHeading>

          <p>
            payment-related information necessary to complete an order.
            Payments are facilitated through Fastrr by Shiprocket. WEMAKE
            should not be understood to store complete card, UPI or banking
            credentials unless its systems actually do so.
          </p>

          <PolicySubHeading>
            Customer content:
          </PolicySubHeading>

          <p>
            reviews, ratings, photographs and other content you voluntarily
            submit.
          </p>
        </PolicySection>


        {/* -------------------------------------------------
            3. HOW WE USE INFORMATION
        ------------------------------------------------- */}
        <PolicySection number="3" title="How We Use Information">
          <p>
            We use personal information to create and manage customer accounts,
            process and fulfil orders, arrange delivery, process payments,
            provide customer support, handle returns/refunds/exchanges, respond
            to enquiries, prevent fraud or misuse, maintain business records,
            and improve our website and services.
          </p>

          <p>
            We may use reviews or photographs submitted by customers for
            website, social-media or marketing purposes where permitted by the
            applicable consent/terms applicable to that submission.
          </p>
        </PolicySection>


        {/* -------------------------------------------------
            4. ANALYTICS
        ------------------------------------------------- */}
        <PolicySection
          number="4"
          title="Analytics, Advertising and Similar Technologies"
        >
          <p>
            We use Google Analytics, Google Ads and Meta/Facebook Pixel, and may
            use related technologies for website analytics, advertising
            measurement, conversion tracking and improving our marketing.
          </p>

          <p>
            Although you have indicated that the website does not intentionally
            use cookies as a standalone feature, these third-party services may
            use cookies or similar technologies depending on the website
            configuration. The website operator should therefore verify the
            actual cookie/tracking configuration before publishing this policy.
          </p>

          <p>
            Instagram/Facebook and WhatsApp may also process information
            according to their own privacy policies when you interact with those
            services.
          </p>
        </PolicySection>


        {/* -------------------------------------------------
            5. SHARING
        ------------------------------------------------- */}
        <PolicySection number="5" title="Sharing and Disclosure">
          <p>
            We may share information with service providers who help operate
            the website, process payments, deliver orders, provide
            technology/analytics, or provide customer support. Relevant
            providers include Fastrr by Shiprocket and Shiprocket delivery
            services, as applicable.
          </p>

          <p>
            We may disclose information when required by law, court order,
            governmental authority, or where reasonably necessary to prevent
            fraud, abuse, security incidents or unlawful activity.
          </p>

          <p>
            We do not sell customer personal information as a standalone
            business practice.
          </p>
        </PolicySection>


        {/* -------------------------------------------------
            6. DATA RETENTION
        ------------------------------------------------- */}
        <PolicySection number="6" title="Data Retention">
          <p>
            We retain personal information for as long as reasonably necessary
            for account administration, order fulfilment, customer service,
            accounting, tax, legal, fraud-prevention and dispute-resolution
            purposes, or as otherwise required by applicable law.
          </p>
        </PolicySection>


        {/* -------------------------------------------------
            7. DATA SECURITY
        ------------------------------------------------- */}
        <PolicySection number="7" title="Data Security">
          <p>
            We use reasonable administrative, technical and organisational
            safeguards appropriate to the nature of the information. However,
            no online system or transmission can be guaranteed to be completely
            secure.
          </p>
        </PolicySection>


        {/* -------------------------------------------------
            8. YOUR CHOICES
        ------------------------------------------------- */}
        <PolicySection number="8" title="Your Choices and Requests">
          <p>
            Subject to applicable law and reasonable verification, you may
            contact us to request access to, correction of, or deletion of
            personal information, or to ask questions about how your information
            is used. Certain information may need to be retained for legal,
            accounting, security or transaction-related reasons.
          </p>

          <p>
            You may also manage certain browser/device permissions for cookies
            or advertising technologies through your browser or device
            settings, although disabling technologies may affect website
            functionality.
          </p>
        </PolicySection>


        {/* -------------------------------------------------
            9. CHILDREN
        ------------------------------------------------- */}
        <PolicySection number="9" title="Children's Information">
          <p>
            The website is intended for general consumers and is not
            specifically directed to children. We do not knowingly seek to
            collect personal information from children in violation of
            applicable law.
          </p>
        </PolicySection>


        {/* -------------------------------------------------
            10. THIRD PARTY
        ------------------------------------------------- */}
        <PolicySection number="10" title="Third-Party Websites and Services">
          <p>
            Our website may contain links or integrations to third-party
            websites and services. Their privacy practices are governed by
            their own policies, not this Privacy Policy.
          </p>
        </PolicySection>


        {/* -------------------------------------------------
            11. CHANGES
        ------------------------------------------------- */}
        <PolicySection number="11" title="Changes to this Policy">
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our services, technology or legal requirements. The
            updated version will be posted on the website with a revised
            effective date.
          </p>
        </PolicySection>


        {/* -------------------------------------------------
            12. GOVERNING LAW
        ------------------------------------------------- */}
        <PolicySection number="12" title="Governing Law">
          <p>
            This Privacy Policy is governed by the laws of India, subject to
            applicable consumer and data-protection rights.
          </p>
        </PolicySection>


        {/* -------------------------------------------------
            PUBLICATION CHECKLIST
        ------------------------------------------------- */}
        <div className="mt-14 rounded-2xl border border-[#572340]/15 bg-white p-6 shadow-[0_10px_40px_rgba(87,35,64,0.06)] sm:p-8 lg:p-10">
          <div className="mb-7">
            <p className="font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-[#572340]/65">
              Before Publishing
            </p>

            <h2 className="mt-2 font-cormorant text-3xl font-semibold text-[#572340] sm:text-4xl">
              Publication checklist — confirm before publishing
            </h2>
          </div>

          <div className="space-y-5">
            <ChecklistItem>
              Confirm the actual payment-data flow with Fastrr/Shiprocket and
              your website developer before stating whether WEMAKE stores any
              payment credentials.
            </ChecklistItem>

            <ChecklistItem>
              Confirm the actual cookie/consent configuration for Google
              Analytics, Google Ads and Meta Pixel.
            </ChecklistItem>

            <ChecklistItem>
              Consider adding a dedicated grievance/privacy contact person if
              required by your applicable legal framework.
            </ChecklistItem>
          </div>
        </div>


        {/* -------------------------------------------------
            CONTACT
        ------------------------------------------------- */}
        <div className="mt-10 border-t border-[#572340]/10 pt-8 sm:mt-12 sm:pt-10">
          <p className="font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-[#572340]/60">
            Contact
          </p>

          <div className="mt-4 space-y-2 font-manrope text-sm leading-7 text-[#3D3539] sm:text-base">
            <p>
              Wemake Sweets & Snacks, Shakti Industrial Park, Bhada, Surat,
              Gujarat, India.
            </p>

            <p>
              Email:{" "}
              <a
                href="mailto:cs@wemakesweets.com"
                className="font-semibold text-[#572340] hover:underline"
              >
                cs@wemakesweets.com
              </a>
            </p>

            <p>
              Customer support:{" "}
              <a
                href="tel:18002032007"
                className="font-semibold text-[#572340] hover:underline"
              >
                18002032007
              </a>
            </p>

            <p>FSSAI Licence No.: 10721031001496.</p>
          </div>
        </div>
      </div>
    </section>
  );
};


/* =========================================================
   SMALL REUSABLE HELPERS
========================================================= */

const PolicySection = ({ number, title, children }) => {
  return (
    <article className="border-b border-[#572340]/10 py-9 first:pt-0 sm:py-11">
      <div className="flex gap-4 sm:gap-6">
        {/* Number */}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#572340] font-manrope text-xs font-semibold text-white sm:h-10 sm:w-10">
          {number}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <h2 className="font-cormorant text-3xl font-semibold leading-tight text-[#572340] sm:text-4xl">
            {title}
          </h2>

          <div className="mt-5 space-y-4 font-manrope text-sm font-normal leading-7 text-[#4B4448] sm:text-base sm:leading-8">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
};


const PolicySubHeading = ({ children }) => {
  return (
    <h3 className="!mb-[-0.5rem] font-manrope text-sm font-semibold text-[#572340] sm:text-base">
      {children}
    </h3>
  );
};


const ChecklistItem = ({ children }) => {
  return (
    <div className="flex items-start gap-3 font-manrope text-sm font-normal leading-7 text-[#4B4448] sm:text-base">
      <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-[#572340]" />
      <p>{children}</p>
    </div>
  );
};


/* =========================================================
   MAIN PAGE
========================================================= */

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-[#f5ebda]">
      <PrivacyPolicyHeader />
      <PrivacyPolicyContent />
    </main>
  );
};

export default PrivacyPolicy;

export {
  PrivacyPolicyHeader,
  PrivacyPolicyContent,
};