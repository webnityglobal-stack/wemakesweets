import React from "react";

const CancellationReturnRefundContent = () => {
  return (
    <section className="bg-[#f5ebda]">
      <div className="mx-auto max-w-5xl px-5 pt-6 sm:px-8 sm:pt-8 lg:px-10 lg:pt-10">

        {/* =====================================================
            1. SCOPE
        ===================================================== */}
        <PolicySection number="1" title="Scope">
          <p>
            This policy applies to purchases made through the WEMAKE /
            wemakesweets website. Because WEMAKE sells food products, returns
            are restricted to eligible quality, damage, expiry and
            wrong-product situations rather than ordinary change-of-mind
            returns
          </p>
        </PolicySection>


        {/* =====================================================
            2. ORDER CANCELLATION
        ===================================================== */}
        <PolicySection number="2" title="Order Cancellation">
          <p>
            Customers may request cancellation after placing an order, subject
            to the order&apos;s processing/dispatch status. Once an order has
            been processed or handed to the shipping carrier, cancellation may
            not be possible.
          </p>

          <p>
            Where cancellation is accepted and payment has already been
            collected, any eligible refund will be processed through the
            applicable payment channel, subject to payment-provider processing
            times.
          </p>
        </PolicySection>


        {/* =====================================================
            3. DAMAGED DURING TRANSIT
        ===================================================== */}
        <PolicySection number="3" title="Damaged During Transit">
          <p>
            If a product is damaged during transit, contact WEMAKE customer
            support promptly and provide the order number and clear
            photographs/videos of the damaged product, packaging, shipping label
            and any other relevant evidence.
          </p>

          <p>
            After verification, WEMAKE may offer a replacement/exchange or
            refund, depending on stock availability and the circumstances of the
            claim.
          </p>
        </PolicySection>


        {/* =====================================================
            4. EXPIRED PRODUCT
        ===================================================== */}
        <PolicySection number="4" title="Expired Product">
          <p>
            If you receive a product that is expired at the time of delivery,
            contact customer support promptly with photographs of the product,
            batch/expiry information and packaging. Subject to verification,
            WEMAKE may arrange a replacement or refund.
          </p>
        </PolicySection>


        {/* =====================================================
            5. WRONG PRODUCT
        ===================================================== */}
        <PolicySection number="5" title="Wrong Product">
          <p>
            If the wrong product is delivered, contact customer support
            promptly. After verification, WEMAKE may arrange an
            exchange/replacement with the correct product or another appropriate
            remedy.
          </p>
        </PolicySection>


        {/* =====================================================
            6. NON-RETURNABLE SITUATIONS
        ===================================================== */}
        <PolicySection number="6" title="Non-Returnable Situations">
          <p>
            Food products are generally not returnable for change of mind, taste
            preference, incorrect storage after delivery, opened/consumed
            products without an eligible defect, or conditions caused after
            successful delivery that are not attributable to WEMAKE or the
            carrier.
          </p>

          <p>
            Nothing in this section limits any mandatory consumer rights or
            remedies available under applicable law.
          </p>
        </PolicySection>


        {/* =====================================================
            7. REFUND METHOD AND TIMING
        ===================================================== */}
        <PolicySection number="7" title="Refund Method and Timing">
          <p>
            Where a refund is approved, it will generally be initiated to the
            original payment method or through another lawful method agreed/
            required for the transaction. The time for the credit to appear may
            depend on the payment provider, bank or card/UPI network.
          </p>

          <p>
            WEMAKE will communicate the status of an approved refund through the
            contact information associated with the order.
          </p>
        </PolicySection>


        {/* =====================================================
            8. EVIDENCE AND VERIFICATION
        ===================================================== */}
        <PolicySection number="8" title="Evidence and Verification">
          <p>
            WEMAKE may request reasonable evidence to verify a claim, including
            photographs, videos, packaging, batch/expiry details, order
            information and delivery records. Customers should retain the
            affected product and packaging until the claim is resolved.
          </p>
        </PolicySection>


        {/* =====================================================
            9. HOW TO CONTACT US
        ===================================================== */}
        <PolicySection number="9" title="How to Contact Us">
          <p>
            Email:{" "}
            <a
              href="mailto:cs@wemakesweets.com"
              className="font-semibold text-[#572340] underline decoration-[#572340]/30 underline-offset-4 hover:decoration-[#572340]"
            >
              cs@wemakesweets.com
            </a>
          </p>

          <p>
            Customer support:{" "}
            <a
              href="tel:18002032007"
              className="font-semibold text-[#572340] underline decoration-[#572340]/30 underline-offset-4 hover:decoration-[#572340]"
            >
              18002032007
            </a>
          </p>

          <p>
            Website: wemakesweets.com
          </p>

          <p>
            Please include the order number, registered mobile/email, a
            description of the issue and supporting photographs/videos where
            relevant.
          </p>
        </PolicySection>


        {/* =====================================================
            10. CONSUMER RIGHTS
        ===================================================== */}
        <PolicySection number="10" title="Consumer Rights">
          <p>
            This policy is intended to provide a clear process for resolving
            eligible issues and does not waive rights or remedies that cannot
            lawfully be excluded under applicable Indian consumer-protection
            law.
          </p>
        </PolicySection>


        {/* =====================================================
            PUBLICATION CHECKLIST
        ===================================================== */}
        <div className="mt-14 rounded-2xl border border-[#572340]/15 bg-[#fffaf3] p-6 shadow-[0_10px_40px_rgba(87,35,64,0.06)] sm:p-8 lg:p-10">

          <div className="mb-7">
            <p className="font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-[#572340]/65">
              Before Publishing
            </p>

            <h2 className="mt-2 font-cormorant text-3xl font-semibold leading-tight text-[#572340] sm:text-4xl">
              Publication checklist — confirm before publishing
            </h2>
          </div>

          <div className="space-y-5">

            <ChecklistItem>
              Confirm the exact cancellation cutoff used by your operations.
            </ChecklistItem>

            <ChecklistItem>
              Choose a practical claim/reporting window for damaged, expired or
              wrong-product cases before publishing.
            </ChecklistItem>

            <ChecklistItem>
              Confirm the expected internal refund-processing SLA and add it if
              you can reliably meet it.
            </ChecklistItem>

            <ChecklistItem>
              Confirm whether you want replacement to be the default remedy for
              transit damage or whether customers may choose refund when stock is
              available.
            </ChecklistItem>

          </div>
        </div>


        {/* =====================================================
            CONTACT DETAILS
        ===================================================== */}
        <div className="mt-10 border-t border-[#572340]/15 pt-8 sm:mt-12 sm:pt-10">

          <p className="font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-[#572340]/60">
            Contact
          </p>

          <div className="mt-4 space-y-2 font-manrope text-sm leading-7 text-[#3D3539] sm:text-base">

            <p>
              Wemake Sweets &amp; Snacks, Shakti Industrial Park, Bhada, Surat,
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

            <p>
              FSSAI Licence No.: 10721031001496.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};


/* =====================================================
   REUSABLE POLICY SECTION
===================================================== */

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


/* =====================================================
   CHECKLIST ITEM
===================================================== */

const ChecklistItem = ({ children }) => {
  return (
    <div className="flex items-start gap-3 font-manrope text-sm font-normal leading-7 text-[#4B4448] sm:text-base">

      <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-[#572340]" />

      <p>{children}</p>

    </div>
  );
};


export default CancellationReturnRefundContent;