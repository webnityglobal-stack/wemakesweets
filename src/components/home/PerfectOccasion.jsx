import { Landmark, Ship } from "lucide-react";

const PerfectOccasion = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5ead7]">
      {/* =====================================================
          DESKTOP CENTER HEADING (ALWAYS CENTERED ON ALL SCREENS)
      ===================================================== */}
      <div className="pointer-events-none absolute top-10 xl:top-14 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2 text-center">
        {/* Decorative shape left */}
        <div className="pointer-events-none absolute -left-16 xl:-left-20 top-1/2 -translate-y-1/2 h-10 w-10 xl:h-12 xl:w-12 rotate-180 opacity-50">
          <svg viewBox="0 0 200 200" className="h-full w-full fill-[#f4c02d]">
            <path d="M100 0C80 40 40 80 0 100c40 20 80 60 100 100 20-40 60-80 100-100-40-20-80-60-100-100z" />
          </svg>
        </div>

        {/* Decorative shape right */}
        <div className="pointer-events-none absolute -right-16 xl:-right-20 top-1/2 -translate-y-1/2 h-10 w-10 xl:h-12 xl:w-12 rotate-180 opacity-50">
          <svg viewBox="0 0 200 200" className="h-full w-full fill-[#f4c02d]">
            <path d="M100 0C80 40 40 80 0 100c40 20 80 60 100 100 20-40 60-80 100-100-40-20-80-60-100-100z" />
          </svg>
        </div>

        <Landmark size={18} className="text-[#9a7134]" />

        <span className="text-[11px] xl:text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7134]">
          The Product of
        </span>

        <h2 className="font-cormorant text-4xl xl:text-5xl font-medium tracking-wide text-[#603917]">
          SURAT
        </h2>

        <div className="h-[2px] w-24 xl:w-28 bg-[#dca94e]" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}
      <div className="mx-auto flex w-full max-w-[1600px] flex-col lg:min-h-[650px] lg:flex-row">
        {/* =====================================================
            LEFT SIDE — SURAT HERITAGE
        ===================================================== */}
        <div className="relative flex w-full overflow-hidden bg-[#f5ead7] lg:min-h-[650px] lg:w-1/2">
          <div className="flex w-full flex-row">
            {/* SURAT IMAGE (50% WIDTH) */}
            <div className="relative h-[320px] w-1/2 shrink-0 overflow-hidden sm:h-[280px] md:h-[320px] lg:h-[650px] lg:w-1/2">
              <img
                src="/surat1.png"
                alt="Heritage of Surat"
                className="absolute inset-0 h-full w-full object-cover object-left translate-y-[5px] lg:translate-y-0"
              />

              {/* Image fade */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#f5ead7]/90" />

              {/* Golden border */}
              <div className="pointer-events-none absolute inset-2 sm:inset-4 sm:rounded-[22px] lg:inset-5" />
            </div>

            {/* SURAT INFORMATION (50% WIDTH - SHIFTED RIGHT) */}
            <div className="relative z-10 flex min-w-0 w-1/2 flex-col justify-center bg-[#f5ead7] pl-5 pr-2 py-4 sm:px-6 sm:py-6 lg:w-1/2 lg:pl-20 lg:pr-4 xl:pl-28 xl:pr-6 2xl:pl-32">
              {/* Small heading (Mobile only) */}
              <p className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#9a7134] sm:text-[9px] sm:tracking-[0.18em] lg:hidden">
                <Landmark size={12} className="sm:h-3.5 sm:w-3.5" />
                The Product of
              </p>

              {/* SURAT (Mobile only) */}
              <h2 className="mt-1 font-cormorant text-3xl font-medium tracking-wide text-[#603917] sm:text-4xl lg:hidden">
                SURAT
              </h2>

              {/* Decorative line (Mobile only) */}
              <div className="mt-2 h-[2px] w-8 bg-[#dca94e] sm:mt-3 sm:w-12 lg:hidden" />

              {/* Description */}
              <p className="mt-2 font-manrope text-[13px] leading-4 text-[#70533a] sm:mt-4 sm:text-xs sm:leading-6 lg:mt-24 xl:mt-28 lg:text-sm lg:leading-7">
                Where rich traditions
                <br />
                meet modern ambition
                <br />
                and timeless charm.
              </p>

              {/* MINI TIMELINE */}
              <div className="mt-4 space-y-2.5 sm:block lg:mt-7 lg:space-y-4">
                {/* 16th Century */}
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full border-2 border-[#c99b48]" />
                  <div>
                    <p className="font-serif text-[10px] font-semibold text-[#603917] lg:text-sm">
                      16th Century
                    </p>
                    <p className="text-[9px] text-[#765b42] lg:text-[11px]">
                      A thriving port city
                    </p>
                  </div>
                </div>

                {/* 17th Century */}
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full border-2 border-[#c99b48]" />
                  <div>
                    <p className="font-serif text-[10px] font-semibold text-[#603917] lg:text-sm">
                      17th Century
                    </p>
                    <p className="text-[9px] text-[#765b42] lg:text-[11px]">
                      Hub of trade & commerce
                    </p>
                  </div>
                </div>

                {/* Today */}
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#c99b48]" />
                  <div>
                    <p className="font-serif text-[10px] font-semibold text-[#603917] lg:text-sm">
                      Today
                    </p>
                    <p className="text-[9px] text-[#765b42] lg:text-[11px]">
                      A legacy of excellence
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom label */}
              <div className="mt-4 flex items-center gap-1.5 border-t border-[#c99b48]/30 pt-3 sm:mt-6 sm:gap-2 sm:pt-4">
                <Ship size={13} className="text-[#9a7134] sm:h-4 sm:w-4" />
                <span className="text-[8px] font-medium uppercase tracking-[0.1em] text-[#806044] sm:text-[12px] sm:tracking-[0.13em]">
                  Timeless Traditions
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT SIDE — PERFECT OCCASION
        ===================================================== */}
        <div className="relative flex w-full overflow-hidden bg-[#f5ead7] lg:min-h-[650px] lg:w-1/2">
          <div className="flex w-full flex-row">
            {/* SURAT INFORMATION (50% WIDTH - SHIFTED RIGHT) */}
            <div className="relative z-10 flex min-w-0 w-1/2 flex-col justify-center bg-[#f5ead7] pl-5 pr-2 py-4 sm:px-6 sm:py-6 lg:w-1/2 lg:pl-14 lg:pr-6 xl:pl-20 xl:pr-8 2xl:pl-24">
              {/* Decorative shape on mobile */}
              <div className="lg:hidden relative pointer-events-none z-20 mb-2 h-8 w-8 rotate-180 opacity-50">
                <svg viewBox="0 0 200 200" className="h-full w-full fill-[#f4c02d]">
                  <path d="M100 0C80 40 40 80 0 100c40 20 80 60 100 100 20-40 60-80 100-100-40-20-80-60-100-100z" />
                </svg>
              </div>

              {/* Description */}
              <p className="mt-2 font-manrope text-[13px] leading-4 text-[#70533a] sm:mt-4 sm:text-xs sm:leading-6 lg:mt-24 xl:mt-28 lg:text-sm lg:leading-7">
                A city shaped by rivers,
                <br />
                enriched by trade and
                <br />
                rooted in timeless tradition.
              </p>

              {/* MINI TIMELINE */}
              <div className="mt-4 space-y-2.5 sm:block lg:mt-7 lg:space-y-4">
                {/* Heritage */}
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full border-2 border-[#c99b48]" />
                  <div>
                    <p className="font-serif text-[10px] font-semibold text-[#603917] lg:text-sm">
                      Heritage
                    </p>
                    <p className="text-[9px] text-[#765b42] lg:text-[11px]">
                      Centuries of culture
                    </p>
                  </div>
                </div>

                {/* Commerce */}
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full border-2 border-[#c99b48]" />
                  <div>
                    <p className="font-serif text-[10px] font-semibold text-[#603917] lg:text-sm">
                      Commerce
                    </p>
                    <p className="text-[9px] text-[#765b42] lg:text-[11px]">
                      A legacy built on trade
                    </p>
                  </div>
                </div>

                {/* Craftsmanship / Diamonds */}
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#c99b48]" />
                  <div>
                    <p className="font-serif text-[10px] font-semibold text-[#603917] lg:text-sm">
                      Diamonds
                    </p>
                    <p className="text-[9px] text-[#765b42] lg:text-[11px]">
                      Diamonds, Textiles & artistry
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom label */}
              <div className="mt-4 flex items-center gap-1.5 border-t border-[#c99b48]/30 pt-3 sm:mt-6 sm:gap-2 sm:pt-4">
                <Ship size={13} className="text-[#9a7134] sm:h-4 sm:w-4" />
                <span className="text-[8px] font-medium uppercase tracking-[0.1em] text-[#806044] sm:text-[12px] sm:tracking-[0.13em]">
                  The Spirit of Surat
                </span>
              </div>
            </div>

            {/* SURAT IMAGE (50% WIDTH) */}
            <div className="relative h-[320px] w-1/2 shrink-0 overflow-hidden sm:h-[280px] md:h-[320px] lg:h-[650px] lg:w-1/2">
              <img
                src="/surat3.png"
                alt="Heritage of Surat"
                className="absolute inset-0 h-full w-full object-cover object-right"
              />

              {/* Soft fade toward text */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#f5ead7]/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfectOccasion;
