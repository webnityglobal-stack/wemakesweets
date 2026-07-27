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
    <section className="mt-24">

      <div className="mx-auto max-w-7xl rounded-[36px] bg-[#f9e4bf]/20 p-6 md:p-10">

        {/* Heading */}

        <div className="mb-12 text-center">

          <span className="font-semibold uppercase tracking-[4px] text-[#810c26]">
            Product Details
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#08376c]">
            Crafted With Premium Ingredients
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
            {product.description}
          </p>

        </div>

        {/* Grid */}

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Ingredients */}

          <div className="rounded-3xl border border-[#810c2610] bg-white p-8 shadow-sm">

            <div className="mb-8 flex items-center gap-3">

              <div className="rounded-xl bg-[#810c26] p-3 text-white">
                <Leaf size={22} />
              </div>

              <h3 className="text-2xl font-bold text-[#08376c]">
                Ingredients
              </h3>

            </div>

            <div className="space-y-5">

              {product.ingredients.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4"
                >

                  <div className="rounded-full bg-[#2a4d25] p-1 text-white">

                    <BadgeCheck size={16} />

                  </div>

                  <span className="text-lg text-gray-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Product Information */}

          <div className="rounded-3xl border border-[#810c2610] bg-white p-8 shadow-sm">

            <div className="mb-8 flex items-center gap-3">

              <div className="rounded-xl bg-[#08376c] p-3 text-white">
                <Package size={22} />
              </div>

              <h3 className="text-2xl font-bold text-[#08376c]">
                Product Information
              </h3>

            </div>

            <div className="space-y-6">

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

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-start gap-4 rounded-2xl bg-[#f9e4bf]/20 p-5">

    <div className="mt-1 text-[#810c26]">
      {icon}
    </div>

    <div>

      <p className="font-semibold text-[#08376c]">
        {label}
      </p>

      <p className="mt-1 leading-7 text-gray-600">
        {value}
      </p>

    </div>

  </div>
);

export default ProductDescription;