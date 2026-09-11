import React from "react";

const ShippingDeliveryContent = () => {
  return (
    <section className="bg-[#f5ebda]">
      <div className="mx-auto max-w-5xl px-5 pt-6 sm:px-8 sm:pt-8 lg:px-10 lg:pt-10">

        {/* =====================================================
            1. DELIVERY COVERAGE
        ===================================================== */}
        <ShippingSection number="1" title="Delivery Coverage">
          <p>
            WEMAKE currently accepts online orders for delivery within India
            only. Delivery availability may depend on the serviceable PIN code
            and the shipping network available for the destination.
          </p>
        </ShippingSection>


        {/* =====================================================
            2. SHIPPING PARTNER
        ===================================================== */}
        <ShippingSection number="2" title="Shipping Partner">
          <p>
            Orders may be shipped through Shiprocket and its participating
            courier partners. Carrier allocation may vary based on destination,
            serviceability and operational requirements.
          </p>
        </ShippingSection>


        {/* =====================================================
            3. ORDER PROCESSING
        ===================================================== */}
        <ShippingSection number="3" title="Order Processing">
          <p>
            Orders are processed after successful order confirmation/payment
            authorisation. Processing and dispatch timelines may vary depending
            on product availability, order volume, weekends, public holidays
            and operational conditions.
          </p>

          <p>
            Customers should ensure that the delivery address, recipient name
            and mobile number entered at checkout are accurate.
          </p>
        </ShippingSection>


        {/* =====================================================
            4. DELIVERY
        ===================================================== */}
        <ShippingSection number="4" title="Delivery">
          <p>
            Estimated delivery information, where shown at checkout or in order
            communications, is an estimate rather than an unconditional
            guarantee. Delivery can be affected by courier capacity, weather,
            transport disruption, public holidays, remote-area serviceability
            and other events outside WEMAKE&apos;s reasonable control.
          </p>
        </ShippingSection>


        {/* =====================================================
            5. DELIVERY ADDRESS AND FAILED DELIVERY
        ===================================================== */}
        <ShippingSection
          number="5"
          title="Delivery Address and Failed Delivery"
        >
          <p>
            Customers are responsible for providing a complete and accurate
            delivery address and being reasonably available to receive the
            parcel. Additional charges or re-delivery arrangements may apply
            where a delivery fails because of an incorrect address, recipient
            unavailability or other customer-provided information, subject to
            the applicable courier rules.
          </p>
        </ShippingSection>


        {/* =====================================================
            6. DAMAGED PARCEL / PRODUCT
        ===================================================== */}
        <ShippingSection
          number="6"
          title="Damaged Parcel / Product"
        >
          <p>
            If a package or product is received visibly damaged, customers
            should contact WEMAKE customer support promptly and retain the outer
            packaging, product, labels and other relevant evidence.
          </p>

          <p>
            For a product damaged during transit, WEMAKE may request
            photographs/videos or other information needed to verify the claim
            before arranging an eligible refund or replacement.
          </p>
        </ShippingSection>


        {/* =====================================================
            7. EXPIRED OR WRONG PRODUCT
        ===================================================== */}
        <ShippingSection number="7" title="Expired or Wrong Product">
          <p>
            If an expired product is received, or the wrong product is
            delivered, contact customer support promptly. Eligible cases may be
            resolved by replacement/exchange or refund, as applicable under the
            Cancellation, Return &amp; Refund Policy.
          </p>
        </ShippingSection>


        {/* =====================================================
            8. FOOD STORAGE
        ===================================================== */}
        <ShippingSection number="8" title="Food Storage">
          <p>
            All WEMAKE products should be stored in a cool and dry place and
            according to the instructions on the packaging. Customers should
            avoid exposing food products to excessive heat, moisture or
            unsuitable storage conditions.
          </p>
        </ShippingSection>


        {/* =====================================================
            9. CONTACT
        ===================================================== */}
        <ShippingSection number="9" title="Contact">
          <p>
            For shipping support, contact{" "}
            <a
              href="mailto:cs@wemakesweets.com"
              className="font-semibold text-[#572340] underline decoration-[#572340]/30 underline-offset-4 hover:decoration-[#572340]"
            >
              cs@wemakesweets.com
            </a>{" "}
            or{" "}
            <a
              href="tel:18002032007"
              className="font-semibold text-[#572340] underline decoration-[#572340]/30 underline-offset-4 hover:decoration-[#572340]"
            >
              18002032007
            </a>
            . Please provide your order number and relevant delivery details
            when contacting support.
          </p>
        </ShippingSection>


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
              Add a specific customer claim/reporting window (for example,
              within 24/48 hours of delivery) only after deciding what your
              operations can reliably support.
            </ChecklistItem>

            <ChecklistItem>
              Add the actual estimated delivery ranges displayed by your
              website/Shiprocket checkout if you want the policy to state
              specific timelines.
            </ChecklistItem>

            <ChecklistItem>
              Confirm whether any delivery charges or re-delivery charges apply
              to failed deliveries.
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
   REUSABLE SECTION COMPONENT
===================================================== */

const ShippingSection = ({ number, title, children }) => {
  return (
    <article className="border-b border-[#572340]/10 py-9 first:pt-0 sm:py-11">

      <div className="flex gap-4 sm:gap-6">

        {/* Section Number */}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#572340] font-manrope text-xs font-semibold text-white sm:h-10 sm:w-10">
          {number}
        </div>

        {/* Section Content */}
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


export default ShippingDeliveryContent;