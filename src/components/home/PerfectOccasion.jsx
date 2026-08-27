import {
  Gift,
  BriefcaseBusiness,
  Flower2,
  GiftIcon,
  ArrowRight,
  Landmark,
  Ship,
} from "lucide-react";

const PerfectOccasion = () => {
  
  return (
    <section className="relative w-full overflow-hidden bg-[#f5ead7]">
{/* decorative shape left */}
<div className="pointer-events-none absolute left-140 z-20 top-20 h-12 w-12 rotate-180 opacity-50">

        <svg
          viewBox="0 0 200 200"
          className="h-full w-full fill-[#f4c02d]"
        >
          <path d="M100 0C80 40 40 80 0 100c40 20 80 60 100 100 20-40 60-80 100-100-40-20-80-60-100-100z" />
        </svg>

      </div>
{/* decorative shape right*/}

<div className="pointer-events-none absolute left-202 z-20 top-20 h-12 w-12 rotate-180 opacity-50">

        <svg
          viewBox="0 0 200 200"
          className="h-full w-full fill-[#f4c02d]"
        >
          <path d="M100 0C80 40 40 80 0 100c40 20 80 60 100 100 20-40 60-80 100-100-40-20-80-60-100-100z" />
        </svg>

      </div>



{/* Desktop heading */}
<div 
  className="
    hidden
    lg:flex
    flex-col
    absolute
    top-14
    left-150
    z-20
    items-center
    gap-2
  "
>





  <Landmark
    size={16}
    className="text-[#9a7134]"
  />

  <span
    className="
      text-[11px]
      font-semibold
      uppercase
      tracking-[0.18em]
      text-[#9a7134]
    "
  >
    The Product of 
  </span>
  
   <h2
                className="
                  mt-1
                  font-cormorant
                  text-3xl
                  pl-8
                  font-medium
                  tracking-wide
                  text-[#603917]
                  sm:text-4xl
                  lg:text-4xl
                  xl:text-5xl
                "
              >
                SURAT
              </h2>
  <div
                className="
                  
                  h-[2px]
                  w-8
                  bg-[#dca94e]
                  
                  sm:w-30
                "
              />

</div>





      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1600px]
          flex-col
          lg:min-h-[650px]
          lg:flex-row
        "
      >

        {/* =====================================================
            LEFT SIDE — SURAT HERITAGE
        ===================================================== */}

        <div
          className="
            relative
            flex
            w-full
            overflow-hidden
            bg-[#f5ead7]
            lg:min-h-[650px]
            lg:w-[45%]
          "
        >

          {/* =================================================
              MOBILE + DESKTOP HERITAGE CONTENT
          ================================================= */}

          <div
            className="
              flex
              w-full
              flex-row
              lg:flex-row
            "
          >

            {/* =================================================
                SURAT IMAGE
            ================================================= */}

            <div
              className="
                relative
                h-[320px]
                w-[48%]
                
                shrink-0
                overflow-hidden
                sm:h-[280px]
                sm:w-[48%]
                md:h-[320px]
                lg:h-[650px]
                lg:w-[62%]
              "
            >

              <img
                src="/surat1.png"
                alt="Heritage of Surat"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  object-left
                    translate-y-[5px]
  lg:translate-y-0

                "
              />

              {/* Image fade */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-transparent
                  via-transparent
                  to-[#f5ead7]/90
                "
              />

              {/* Golden border */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-2
                  sm:inset-4
                  sm:rounded-[22px]
                  lg:inset-5
                "
              />

            </div>


            {/* =================================================
                SURAT INFORMATION
                RIGHT OF IMAGE ON MOBILE
            ================================================= */}

            {/* <div
  className="
    relative
    z-10
    flex
    min-w-0
    flex-1
    flex-col
    justify-center
    bg-[#f5ead7]
    pl-8
    lg:pl-18
    xl:pl-14
    pr-1
    py-4
    sm:px-5
    sm:py-6
    lg:-ml-3
    lg:px-4
    xl:px-4
  "
> */}
<div
  className="
    relative
    z-10
    flex
    min-w-0
    flex-1
    flex-col
    justify-center
    bg-[#f5ead7]
    pl-8
    lg:pl-0
    xl:pl-0
    pr-1
    py-4
    sm:px-5
    sm:py-6
    lg:-ml-3
    lg:px-4
    xl:px-4
    lg:items-center
  "
>

              {/* Small heading */}

              <p
                className="
                  flex
                  items-center
                  gap-1.5
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#9a7134]
                  sm:text-[9px]
                  sm:tracking-[0.18em]
                  lg:text-[10px]
                  lg:hidden
                "
              >

                <Landmark
                  size={12}
                  className="sm:h-3.5 sm:w-3.5"
                />

                The Product of 

              </p>


              {/* SURAT */}

              <h2
                className="
                  mt-1
                  font-cormorant
                  text-3xl
                  font-medium
                  tracking-wide
                  text-[#603917]
                  sm:text-4xl
                  lg:text-4xl
                  xl:text-5xl
                  lg:hidden
                "
              >
                SURAT
              </h2>


              {/* Decorative line */}

              <div
                className="
                lg:hidden
                  mt-2
                  h-[2px]
                  w-8
                  bg-[#dca94e]
                  sm:mt-3
                  sm:w-12
                "
              />


              {/* Description */}

              <p
                className="
                  mt-2
                  lg:mt-24
                  font-manrope
                  text-[13px]
                  leading-4
                  text-[#70533a]
                  sm:mt-4
                  sm:text-xs
                  sm:leading-6
                  lg:text-sm
                  lg:leading-7
                  md:pl-18
                "
              >
               Where rich traditions
                <br />
                 meet modern ambition
                <br />
                 and timeless charm.  
              </p>


              {/* =================================================
                  MINI TIMELINE
                  Hidden on very small screens
              ================================================= */}

              <div
                className="
                  mt-4
                  
                  space-y-2.5
                  sm:block
                  lg:mt-7
                  lg:space-y-4
                  md:pl-18
                "
              >

                {/* 16th Century */}

                <div className="flex items-start gap-2">

                  <div
                    className="
                      mt-1
                      h-2
                      w-2
                      shrink-0
                      rounded-full
                      border-2
                      border-[#c99b48]
                    "
                  />

                  <div>

                    <p
                      className="
                        font-serif
                        text-[10px]
                        font-semibold
                        text-[#603917]
                        lg:text-sm
                      "
                    >
                      16th Century
                    </p>

                    <p
                      className="
                        text-[9px]
                        text-[#765b42]
                        lg:text-[11px]
                      "
                    >
                      A thriving port city
                    </p>

                  </div>

                </div>


                {/* 17th Century */}

                <div className="flex items-start gap-2">

                  <div
                    className="
                      mt-1
                      h-2
                      w-2
                      shrink-0
                      rounded-full
                      border-2
                      border-[#c99b48]
                    "
                  />

                  <div>

                    <p
                      className="
                        font-serif
                        text-[10px]
                        font-semibold
                        text-[#603917]
                        lg:text-sm
                      "
                    >
                      17th Century
                    </p>

                    <p
                      className="
                        text-[9px]
                        text-[#765b42]
                        lg:text-[11px]
                      "
                    >
                      Hub of trade & commerce
                    </p>

                  </div>

                </div>


                {/* Today */}

                <div className="flex items-start gap-2">

                  <div
                    className="
                      mt-1
                      h-2
                      w-2
                      shrink-0
                      rounded-full
                      bg-[#c99b48]
                    "
                  />

                  <div>

                    <p
                      className="
                        font-serif
                        text-[10px]
                        font-semibold
                        text-[#603917]
                        lg:text-sm
                      "
                    >
                      Today
                    </p>

                    <p
                      className="
                        text-[9px]
                        text-[#765b42]
                        lg:text-[11px]
                      "
                    >
                      A legacy of excellence
                    </p>

                  </div>

                </div>

              </div>


              {/* Bottom label */}

              <div
                className="
                  mt-4
                  flex
                  items-center
                  gap-1.5
                  border-t
                  border-[#c99b48]/30
                  pt-3
                  sm:mt-6
                  sm:gap-2
                  sm:pt-4
                  md:pl-18
                "
              >

                <Ship
                  size={13}
                  className="text-[#9a7134] sm:h-4 sm:w-4"
                />

                <span
                  className="
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.1em]
                    text-[#806044]
                    sm:text-[12px]
                    sm:tracking-[0.13em]
                  "
                >
                  Timeless Traditions
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            RIGHT SIDE — PERFECT OCCASION
        ===================================================== */}

<div
  className="
    relative
    flex
    w-full
    overflow-hidden
    bg-[#f5ead7]

    lg:min-h-[650px]
    lg:w-[55%]
  "
>
  <div
    className="
      flex
      w-full
      flex-row
    "
  >

    {/* =================================================
        SURAT INFORMATION
        LEFT SIDE OF THIS PANEL
    ================================================= */}

  <div
  className="
    relative
    z-10
    flex
    min-w-0
    flex-1
    flex-col
    justify-center

    bg-[#f5ead7]

    pl-8
    py-4

    sm:px-5
    sm:py-6

    lg:w-[40%]
    lg:flex-none
    lg:px-7
    lg:py-8

    xl:px-9
  "
>

  {/* Small heading */}
  <p
    className="
      flex
      items-center
      gap-1.5
      text-[9px]
      font-semibold
      uppercase
      tracking-[0.12em]
      text-[#9a7134]
lg:hidden
      sm:text-[9px]
      sm:tracking-[0.18em]

      lg:text-[10px]
    "
  >
    <Landmark
      size={12}
      className="sm:h-3.5 sm:w-3.5"
    />

    THE PRODUCT
  </p>


  {/* SURAT */}
  <h2
    className="
      mt-1
      lg:hidden
      font-cormorant
      text-3xl
      font-medium
      tracking-wide
      text-[#603917]

      sm:text-4xl

      lg:text-4xl

      xl:text-5xl
    "
  >
    SURAT
  </h2>


  {/* Decorative line */}
  <div
    className="
    lg:hidden
      mt-2
      h-[2px]
      w-12
      bg-[#dca94e]
      sm:mt-3
      sm:w-12
    "
  />


  {/* Description */}
  <p
    className="
      mt-2
      font-manrope
      text-[13px]
      leading-4
      text-[#70533a]

      sm:mt-4
      sm:text-xs
      sm:leading-6
lg:mt-24
      lg:text-sm
      lg:leading-7
      md:pl-18
    "
  >
    A city shaped by rivers,
    <br />
    enriched by trade and
    <br />
    rooted in timeless tradition.
  </p>


  {/* =================================================
      MINI TIMELINE
  ================================================= */}

  <div
    className="
      mt-4
      
      space-y-2.5

      sm:block

      lg:mt-7
      lg:space-y-4
      md:pl-16
    "
  >

    {/* Heritage */}
    <div className="flex items-start gap-2">

      <div
        className="
          mt-1
          h-2
          w-2
          shrink-0
          rounded-full
          border-2
          border-[#c99b48]
        "
      />

      <div>
        <p
          className="
            font-serif
            text-[10px]
            font-semibold
            text-[#603917]

            lg:text-sm
          "
        >
         Heritage 
        </p>

        <p
          className="
            text-[9px]
            text-[#765b42]

            lg:text-[11px]
          "
        >
          Centuries of culture
        </p>
      </div>

    </div>


    {/* Commerce */}
    <div className="flex items-start gap-2">

      <div
        className="
          mt-1
          h-2
          w-2
          shrink-0
          rounded-full
          border-2
          border-[#c99b48]
        "
      />

      <div>
        <p
          className="
            font-serif
            text-[10px]
            font-semibold
            text-[#603917]

            lg:text-sm
          "
        >
          Commerce
        </p>

        <p
          className="
            text-[9px]
            text-[#765b42]

            lg:text-[11px]
          "
        >
          A legacy built on trade 
        </p>
      </div>

    </div>


    {/* Craftsmanship */}
    <div className="flex items-start gap-2">

      <div
        className="
          mt-1
          h-2
          w-2
          shrink-0
          rounded-full
          bg-[#c99b48]
        "
      />

      <div>
        <p
          className="
            font-serif
            text-[10px]
            font-semibold
            text-[#603917]

            lg:text-sm
          "
        >
          Diamonds 
        </p>

        <p
          className="
            text-[9px]
            text-[#765b42]

            lg:text-[11px]
          "
        >
        Diamonds, Textiles  &amp; artistry
        </p>
      </div>

    </div>

  </div>


  {/* Bottom label */}
  <div
    className="
      mt-4
      flex
      items-center
      gap-1.5
      border-t
      border-[#c99b48]/30
      pt-3
md:pl-18
      sm:mt-6
      sm:gap-2
      sm:pt-4
    "
  >

    <Ship
      size={13}
      className="
        text-[#9a7134]

        sm:h-4
        sm:w-4
      "
    />

    <span
      className="
        text-[8px]
        font-medium
        uppercase
        tracking-[0.1em]
        text-[#806044]

        sm:text-[12px]
        sm:tracking-[0.13em]
      "
    >
      The Spirit of Surat
    </span>

  </div>

</div>


    {/* =================================================
        SURAT IMAGE
        RIGHT SIDE
    ================================================= */}

    <div
      className="
        relative
        h-[320px]
        w-[52%]
        shrink-0
        overflow-hidden

        sm:h-[280px]
        sm:w-[52%]

        md:h-[320px]

        lg:h-[650px]
        lg:w-[60%]
      "
    >

      <img
        src="/surat3.png"
        alt="Heritage of Surat"
        className="
          absolute
          inset-0
          h-full
          w-full

          object-cover
          object-right
        "
      />

      {/* Soft fade toward text */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-l
          from-transparent
          via-transparent
          to-[#f5ead7]/70
        "
      />

    </div>

  </div>

</div>
      </div>

    </section>
  );
};

export default PerfectOccasion;