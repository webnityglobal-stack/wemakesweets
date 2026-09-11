import React from "react";

const CancellationReturnRefundHeader = () => {
  return (
    <section className="bg-[#572340] text-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-4 font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-white/75 sm:text-sm">
            WEMAKE / wemakesweets
          </p>

          <h1 className="font-cormorant text-3xl font-bold leading-[0.95] sm:text-4xl md:text-4xl lg:text-5xl">
            Cancellation, Return &amp; Refund Policy
          </h1>

          <div className="mt-7 flex flex-col items-center justify-center gap-2 font-manrope text-sm text-white/80 sm:flex-row sm:gap-3">
            <span>Effective date: 7 September 2026</span>

            <span className="hidden h-1 w-1 rounded-full bg-white/50 sm:block" />

            <span>Website: wemakesweets.com</span>
          </div>

          <p className="mx-auto mt-8 max-w-3xl font-manrope text-sm font-normal leading-7 text-white/90 sm:text-base sm:leading-8">
            This policy explains when customers may cancel an order and the
            circumstances in which WEMAKE may provide a replacement, exchange
            or refund for food products purchased through the website.
          </p>

        </div>
      </div>
    </section>
  );
};

export default CancellationReturnRefundHeader;