import { useState } from "react";

const FlipCard = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group w-full [perspective:1000px]"
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div
        className={`
          relative
          w-full
          transition-transform
          duration-700
          [transform-style:preserve-3d]

          /* Desktop hover */
          md:group-hover:[transform:rotateY(180deg)]

          /* Mobile tap */
          ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
        `}
      >
        {/* ================= FRONT ================= */}
        <div
          className="
            relative
            w-full
            overflow-hidden
            rounded-[22px]
            md:rounded-[26px]
            shadow-sm
            [backface-visibility:hidden]
          "
        >
          <img
            src={data.image}
            alt={data.title}
            className="
              w-full
              h-[300px]
              sm:h-[340px]
              md:h-[300px]
              object-cover
            "
          />

          <h3
            className="
              mt-4
              pb-1
              text-center
              font-manrope
              text-xl
              sm:text-2xl
              lg:text-[24px]
              font-semibold
              text-[#552b12]
              
            "
          >
            {data.title}
          </h3>
        </div>

        {/* ================= BACK ================= */}
        <div
          className="
            absolute
            inset-0
            h-[350px]
            sm:h-[340px]
            md:h-[350px]

            rounded-[22px]
            md:rounded-[26px]

            p-6
            text-white
            shadow-lg

            flex
            flex-col
            justify-center

            [backface-visibility:hidden]
            [transform:rotateY(180deg)]
          "
          style={{
            backgroundColor: data.color,
          }}
        >
          <h3 className="text-2xl font-manrope font-medium mb-5">
            Ingredients
          </h3>

          <ul className="space-y-2 font-manrope  max-h-[150px] sm:max-h-[180px] overflow-y-auto pr-2
                      [&::-webkit-scrollbar]:w-[2px]
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:bg-white/40
  [&::-webkit-scrollbar-thumb]:rounded-full

          "

          >
            {data.ingredients.map((ingredient) => (
              <li
                key={ingredient}
                className="flex items-center gap-2 text-sm sm:text-base"
              >
                <span className="text-[#f9e4bf]">
                  ✓
                </span>

                {ingredient}
              </li>
            ))}
          </ul>

          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="
              mt-6
              self-start
              rounded-full
              px-5
              py-2
              text-sm
              font-manrope
              font-semibold
              text-white
              hover:text-white
              bg-pink-600
              hover:bg-[#60b396]
              hover:scale-105
              shadow-[1px_2px_0px_#000]
              sm:shadow-[2px_3px_0px_#000]
              hover:shadow-[3px_4px_0px_#000]
              transition-all
              duration-300
              cursor-pointer
            "
          >
            View Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;