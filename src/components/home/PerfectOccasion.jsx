import {
  Gift,
  BriefcaseBusiness,
  Flower2,
  GiftIcon,
  ArrowRight,
  Landmark,
  Ship,
} from "lucide-react";

import { Link } from "react-router-dom";

const occasions = [
  {
    id: 1,
    title: "Festive Gifting",
    description:
      "Thoughtful gifts for every festival and celebration.",
    icon: Gift,
  },
  {
    id: 2,
    title: "Corporate Gifting",
    description:
      "Premium gifts for clients, teams and business partners.",
    icon: BriefcaseBusiness,
  },
  {
    id: 3,
    title: "Wedding Gifting",
    description:
      "Elegant gifts for beautiful wedding celebrations.",
    icon: Flower2,
  },
  {
    id: 4,
    title: "Personal Gifting",
    description:
      "Special gifts for the people who matter most.",
    icon: GiftIcon,
  },
];

const PerfectOccasion = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5ead7]">

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
                h-[220px]
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
                src="/surar-heri.png"
                alt="Heritage of Surat"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  object-left
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
                px-3
                py-4
                sm:px-5
                sm:py-6
                lg:-ml-3
                lg:px-5
                xl:px-7
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
    pr-3
    py-4
    sm:px-5
    sm:py-6
    lg:-ml-3
    lg:px-5
    xl:px-7
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
                "
              >

                <Landmark
                  size={12}
                  className="sm:h-3.5 sm:w-3.5"
                />

                The Heritage of

              </p>


              {/* SURAT */}

              <h2
                className="
                  mt-1
                  font-serif
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
                  font-serif
                  text-[13px]
                  leading-4
                  text-[#70533a]
                  sm:mt-4
                  sm:text-xs
                  sm:leading-6
                  lg:text-sm
                  lg:leading-7
                "
              >
                A city of tradition,
                <br />
                prosperity and
                <br />
                timeless sweetness.
              </p>


              {/* =================================================
                  MINI TIMELINE
                  Hidden on very small screens
              ================================================= */}

              <div
                className="
                  mt-4
                  hidden
                  space-y-2.5
                  sm:block
                  lg:mt-7
                  lg:space-y-4
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
            items-center
            bg-[#f8efdf]
            lg:min-h-[650px]
            lg:w-[55%]
          "
        >

          {/* Decorative circle */}

          {/* <div
              className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-40
              w-40
              rounded-full
              border
              border-[#d8ad5c]/20
              sm:h-60
              sm:w-60
              lg:-right-24
              lg:-top-24
              lg:h-80
              lg:w-80
            "
          /> */}


          {/* RIGHT CONTENT */}

          <div
            className="
              relative
              z-10
              w-full
              px-5
              py-7
              sm:px-8
              sm:py-10
              md:px-12
              lg:px-12
              lg:py-12
              xl:px-16
            "
          >

            {/* HEADER */}

            <div className="text-center lg:text-left">

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  lg:justify-start
                "
              >

                <span className="h-px w-6 bg-[#b98a3e] sm:w-10" />

                <span
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#9a7134]
                    sm:text-xs
                    sm:tracking-[0.25em]
                  "
                >
                  CRAFTED WITH HERITAGE
                </span>

                <span
                  className="
                    h-px
                    w-6
                    bg-[#b98a3e]
                    lg:hidden
                    sm:w-10
                  "
                />

              </div>


              {/* Heading */}

              <h2
                className="
                  mt-2
                  font-serif
                  text-2xl
                  font-semibold
                  leading-tight
                  text-[#603917]
                  sm:mt-4
                  sm:text-4xl
                  md:text-5xl
                  lg:text-4xl
                  xl:text-4xl
                "
              >
                Timeless Flavours,

                {/* Timeless Flavours, Beautifully Crafted */}
                <br />

                <span className="text-[#9b1839]">
                  Beautifully Crafted
                </span>
              </h2>


              {/* Decorative line */}

              <div
                className="
                  mx-auto
                  mt-3
                  flex
                  items-center
                  justify-center
                  gap-2
                  lg:mx-0
                  lg:justify-start
                "
              >

                <span className="h-px w-8 bg-[#c49a4c] sm:w-12" />

                <span className="h-1.5 w-1.5 rotate-45 bg-[#c49a4c]" />

                <span className="h-px w-8 bg-[#c49a4c] sm:w-12" />

              </div>


              {/* Description */}

              <p
                className="
                  mx-auto
                  mt-3
                  max-w-xl
                  text-[10px]
                  leading-5
                  text-[#594532]
                  sm:mt-5
                  sm:text-sm
                  sm:leading-7
                  md:text-base
                  lg:mx-0
                  lg:text-left
                "
              >
                {/* From time-honoured recipes to carefully selected ingredients, every sweet is crafted to bring you an authentic taste of Indian tradition. */}
                Authentic Indian flavours, crafted with love and care
              </p>

            </div>


            {/* =================================================OCCASION CARDS================================================= */}

            <div
              className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-3">
              {occasions.map((occasion) => {
                const Icon = occasion.icon;

                return (
                  <Link
                    key={occasion.id}
                    to={`/occasion/${occasion.id}`}
                    className="
          group
          relative
          overflow-hidden
          rounded-lg
          border
          border-[#d9bd8b]/45
          bg-white/60
          px-2
          py-2
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[#c99b48]
          hover:bg-white/90
          hover:shadow-[0_6px_15px_rgba(90,55,20,0.10)]
          sm:rounded-xl
          sm:px-3
          sm:py-2.5
          
        "
                  >

                    {/* Decorative background */}

                    {/* <div
                      className="
            pointer-events-none
            absolute
            -right-3
            -top-3
            h-10
            w-10
            rounded-full
            bg-[#f0dcae]/30
            transition-transform
            duration-500
            group-hover:scale-[2]
          "
                    /> */}

                    {/* CONTENT */}

                    <div
                      className="
            relative
            z-10
            flex
            items-center
            gap-2
            
          "
                    >

                      {/* ICON */}

                      <div
                        className="
              flex
              h-7
              w-7
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-pink-600
              transition-all
              duration-300
              group-hover:scale-105
              sm:h-9
              sm:w-9
              hover:bg-[#60b396]
              
            "
                      >
                        <Icon
                          size={13}
                          strokeWidth={1.5}
                          className=" hover:text-black text-white sm:h-4 sm:w-4"
                        />
                      </div>

                      {/* TEXT ON RIGHT */}

                      <div className="min-w-0 flex-1">

                        <h3
                          className="
                font-serif
                text-[10px]
                font-semibold
                leading-tight
                text-[#603917]
                sm:text-sm
              "
                        >
                          {occasion.title}
                        </h3>

                        {/* Description hidden on mobile */}

                        <p
                          className="
                mt-0.5
                hidden
                text-[10px]
                leading-4
                text-[#594532]
                sm:block
              "
                        >
                          {occasion.description}
                        </p>

                        {/* Explore */}

                        <div
                          className="
                mt-0.5
                flex
                items-center
                gap-0.5
                text-[6px]
                font-bold
                uppercase
                tracking-[0.06em]
                text-[#9a7134]
                sm:text-[9px]
              "
                        >
                          Explore

                          <ArrowRight
                            size={8}
                            className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
                          />
                        </div>

                      </div>

                    </div>

                  </Link>
                );
              })}
            </div>


            {/* BOTTOM STATEMENT */}

            <div
              className="
                mt-4
                flex
                items-center
                justify-center
                gap-2
                sm:mt-6
                sm:gap-3
                lg:justify-start
              "
            >

              <div
                className="
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-pink-600
                  hover:bg-[#60b396]
                  hover:text-black
                  sm:h-9
                  sm:w-9
                "
              >

                <Gift
                  size={13}
                  className="text-white hover:text-black "
                />

              </div>


              <p
                className="
                  font-serif
                  text-[10px]
                  italic
                  text-[#603917]
                  sm:text-sm
                "
              >
                Where every bite tells a story.
              </p>

            </div>


            {/* BUTTON */}

            <div
              className="
                mt-4
                flex
                justify-center
                sm:mt-6
                lg:justify-start
              "
            >

              <Link to="/products">

                <button
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-black
                    bg-pink-600
                    px-4
                    py-2
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-wide
                    text-white
                    shadow-[2px_3px_0px_#3d2418]
                    transition-all
                    duration-300
                    hover:bg-[#60b396]
                    hover:text-black
                    hover:shadow-[4px_5px_0px_#3d2418]
                    sm:px-7
                    sm:py-3
                    sm:text-sm
                  "
                >

                  Explore Collection

                  <ArrowRight
                    size={13}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      sm:h-[18px]
                      sm:w-[18px]
                    "
                  />

                </button>

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default PerfectOccasion;