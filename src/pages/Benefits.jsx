import {
  ShieldCheck,
  Leaf,
  Truck,
  Gift,
  Clock3,
  BadgeCheck,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description:
      "Prepared using carefully selected ingredients to deliver exceptional taste and consistent quality.",
    color: "#08376c",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "Every sweet is crafted fresh with pure ingredients for rich flavour and authentic taste.",
    color: "#2a4d25",
  },
  {
    icon: Gift,
    title: "Perfect For Every Occasion",
    description:
      "Elegant gifting options for weddings, festivals, birthdays and corporate celebrations.",
    color: "#810c26",
  },
  {
    icon: Truck,
    title: "Safe Delivery",
    description:
      "Carefully packed to preserve freshness and ensure every box reaches you perfectly.",
    color: "#2a4d25",
  },
  {
    icon: Clock3,
    title: "Made Fresh Daily",
    description:
      "Prepared in small batches every day to maintain authentic taste and freshness.",
    color: "#254a21",
  },
  {
    icon: BadgeCheck,
    title: "Trusted By Families",
    description:
      "Loved by customers for quality, hygiene and memorable sweet experiences.",
    color: "#810c26",
  },
];

export default function Benefits() {
  return (
    <section className="bg-[#f9e4bf] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[5px] text-[#08376c] font-semibold">
            WHY CHOOSE US
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#810c26]">
            Crafted To Delight Every Celebration
          </h2>

          <p className="mt-6 text-gray-700 leading-8">
            We combine traditional recipes with premium ingredients
            and modern quality standards to deliver sweets you'll
            always remember.
          </p>

        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[28px] bg-[#552b12] p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div
                  className="absolute top-0 left-0 h-2 w-full"
                  style={{ background: item.color }}
                />

                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl text-white"
                  style={{ background: item.color }}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#f9e4bf]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-[#f9e4bf]">
                  {item.description}
                </p>

                <div
                  className="mt-8 h-1 w-14 rounded-full transition-all duration-500 group-hover:w-24"
                  style={{ background: item.color }}
                />
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}