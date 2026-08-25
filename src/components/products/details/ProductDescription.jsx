// import {
//   BadgeCheck,
//   Leaf,
//   Package,
//   Globe,
//   Clock3,
//   Archive,
// } from "lucide-react";

// const ProductDescription = ({ product }) => {
//   return (
//     <section className=" ">

//       <div className="mx-auto max-w-7xl rounded-[36px] bg-[#f9e4bf]/20 p-6 pt-0 ">

//         {/* Heading */}

//         <div className="mb-12 text-center">

//           <span className="font-semibold uppercase tracking-[4px] text-[#810c26]">
//             Product Details
//           </span>

//           <h2 className="mt-4 text-4xl font-bold text-[#08376c]">
//             Crafted With Premium Ingredients
//           </h2>

//           <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
//             {product.description}
//           </p>

//         </div>

//         {/* Grid */}

//         <div className="grid gap-10 lg:grid-cols-2">

//           {/* Ingredients */}

//           <div className="rounded-3xl border border-[#810c2610] bg-white p-8 shadow-sm">

//             <div className="mb-8 flex items-center gap-3">

//               <div className="rounded-xl bg-[#810c26] p-3 text-white">
//                 <Leaf size={22} />
//               </div>

//               <h3 className="text-2xl font-bold text-[#08376c]">
//                 Ingredients
//               </h3>

//             </div>

//             <div className="space-y-5">

//               {product.ingredients.map((item, index) => (

//                 <div
//                   key={index}
//                   className="flex items-center gap-4"
//                 >

//                   <div className="rounded-full bg-[#2a4d25] p-1 text-white">

//                     <BadgeCheck size={16} />

//                   </div>

//                   <span className="text-lg text-gray-700">
//                     {item}
//                   </span>

//                 </div>

//               ))}

//             </div>

//           </div>

//           {/* Product Information */}

//           <div className="rounded-3xl border border-[#810c2610] bg-white p-8 shadow-sm">

//             <div className="mb-8 flex items-center gap-3">

//               <div className="rounded-xl bg-[#08376c] p-3 text-white">
//                 <Package size={22} />
//               </div>

//               <h3 className="text-2xl font-bold text-[#08376c]">
//                 Product Information
//               </h3>

//             </div>

//             <div className="space-y-6">

//               <InfoRow
//                 icon={<Archive size={20} />}
//                 label="Net Weight"
//                 value={product.weight}
//               />

//               <InfoRow
//                 icon={<Clock3 size={20} />}
//                 label="Shelf Life"
//                 value={product.shelfLife}
//               />

//               <InfoRow
//                 icon={<Package size={20} />}
//                 label="Storage"
//                 value={product.storage}
//               />

//               <InfoRow
//                 icon={<Globe size={20} />}
//                 label="Country Of Origin"
//                 value={product.countryOfOrigin}
//               />

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// const InfoRow = ({ icon, label, value }) => (
//   <div className="flex items-start gap-4 rounded-2xl bg-[#f9e4bf]/20 p-5">

//     <div className="mt-1 text-[#810c26]">
//       {icon}
//     </div>

//     <div>

//       <p className="font-semibold text-[#08376c]">
//         {label}
//       </p>

//       <p className="mt-1 leading-7 text-gray-600">
//         {value}
//       </p>

//     </div>

//   </div>
// );

// export default ProductDescription;


import {
  BadgeCheck,
  Leaf,
  Package,
  Globe,
  Clock3,
  Archive,
} from "lucide-react";

const ProductDescription = ({ product }) => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADING ================= */}

        <div className="mb-5 text-center md:mb-12">

          <span className="font-manrope text-xs font-semibold uppercase tracking-[3px] text-[#810c26] sm:text-sm sm:tracking-[4px]">
            Product Details
          </span>

          <h2 className="mt-3 font-cormorant text-3xl font-bold text-[#08376c] sm:text-4xl">
            Crafted With Premium Ingredients
          </h2>

          <p className="mx-auto mt-4 max-w-3xl font-manrope text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            {product.description}
          </p>

        </div>

        {/* ================= CONTENT ================= */}

        <div className="grid grid-cols-1 gap-10 md:gap-14 lg:grid-cols-2 lg:gap-16">

          {/* ================= INGREDIENTS ================= */}

          <div className=" ">

            <div className="mb-6 flex items-center gap-3">

              <div className="rounded-xl bg-[#810c26] p-3 text-white">
                <Leaf size={22} />
              </div>

              <h3 className="font-cormorant text-xl font-bold text-[#08376c] sm:text-3xl">
                Ingredients
              </h3>

            </div>

            {/* <div className="space-y-5"> */}
<div className="space-y-5 lg:max-h-[420px] lg:overflow-y-auto lg:pr-3">
              {product.ingredients.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <div className="shrink-0 rounded-full bg-[#2a4d25] p-1 text-white">
                    <BadgeCheck size={16} />
                  </div>

                  <span className="font-manrope text-base text-gray-700 sm:text-lg">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* ================= PRODUCT INFORMATION ================= */}

          <div className="flex flex-col">

            <div className="mb-6 flex  items-center gap-3">

              <div className="rounded-xl bg-[#08376c] p-3 text-white">
                <Package size={22} />
              </div>

              <h3 className="font-cormorant text-xl font-bold text-[#08376c] sm:text-3xl">
                Product Information
              </h3>

            </div>

            {/* <div className="space-y-5"> */}
<div className="space-y-4 lg:max-h-[420px]  lg:overflow-y-auto lg:pr-3">
              <InfoRow
                icon={<Archive size={20} />}
                label="Net Weight"
                value={product.weight}
              />

              <InfoRow
                icon={<Clock3 size={20} />}
                label="Shelf Life"
                value={product.shelfLife}
              />

              <InfoRow
                icon={<Package size={20} />}
                label="Storage"
                value={product.storage}
              />

              <InfoRow
                icon={<Globe size={20} />}
                label="Country Of Origin"
                value={product.countryOfOrigin}
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


/* ================= INFO ROW ================= */

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-start gap-4">

    <div className="mt-1 shrink-0 text-[#810c26]">
      {icon}
    </div>

    <div className="min-w-0">

      <p className="font-manrope text-sm font-semibold text-[#08376c] sm:text-base">
        {label}
      </p>

      <p className="mt-1 font-manrope text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
        {value}
      </p>

    </div>

  </div>
);

export default ProductDescription;