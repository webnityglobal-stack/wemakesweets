import {
  Flame,
  Beef,
  Wheat,
  Candy,
  Droplets,
  Activity,
} from "lucide-react";

const nutritionItems = [
  {
    label: "Calories",
    key: "calories",
    icon: Flame,
    color: "#810c26",
    bg: "#810c2610",
  },
  {
    label: "Protein",
    key: "protein",
    icon: Beef,
    color: "#08376c",
    bg: "#08376c10",
  },
  {
    label: "Carbohydrates",
    key: "carbohydrates",
    icon: Wheat,
    color: "#552b12",
    bg: "#552b1210",
  },
  {
    label: "Sugar",
    key: "sugar",
    icon: Candy,
    color: "#810c26",
    bg: "#810c2610",
  },
  {
    label: "Fiber",
    key: "fiber",
    icon: Activity,
    color: "#2a4d25",
    bg: "#2a4d2510",
  },
  {
    label: "Fat",
    key: "fat",
    icon: Droplets,
    color: "#08376c",
    bg: "#08376c10",
  },
];

const NutritionFacts = ({ product }) => {
  return (
    <section className="mt-24">

      <div className="text-center">

        <span className="font-semibold uppercase tracking-[4px] text-[#810c26]">
          Nutrition Facts
        </span>

        <h2 className="mt-4 text-4xl font-bold text-[#08376c]">
          Goodness In Every Bite
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
          Made using carefully selected ingredients to deliver
          wholesome nutrition without compromising on taste.
        </p>

      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {nutritionItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.key}
              className="group rounded-3xl border border-[#810c2610] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className="mb-6 inline-flex rounded-2xl p-4"
                style={{ background: item.bg }}
              >
                <Icon
                  size={30}
                  style={{ color: item.color }}
                />
              </div>

              <h3 className="text-lg font-semibold text-[#08376c]">
                {item.label}
              </h3>

              <p
                className="mt-3 text-3xl font-bold"
                style={{ color: item.color }}
              >
                {product.nutrition[item.key]}
              </p>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-gray-100">

                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${40 + Math.random() * 50}%`,
                    background: item.color,
                  }}
                />

              </div>

            </div>
          );
        })}

      </div>

      <div className="mt-12 rounded-3xl bg-[#f9e4bf]/25 p-8">

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h3 className="text-2xl font-bold text-[#08376c]">
              Healthy Snacking Starts Here
            </h3>

            <p className="mt-3 max-w-3xl leading-8 text-gray-600">
              Our products are crafted with naturally nutritious
              ingredients like premium dates, nuts and seeds,
              making every bite rich in fiber, protein and
              natural goodness.
            </p>

          </div>

          <div className="rounded-2xl bg-[#810c26] px-8 py-6 text-center text-white shadow-lg">

            <p className="text-sm uppercase tracking-widest">
              Natural Ingredients
            </p>

            <h2 className="mt-2 text-5xl font-bold">
              100%
            </h2>

          </div>

        </div>

      </div>

    </section>
  );
};

export default NutritionFacts;