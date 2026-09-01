const product = {
  _id: "1",
  slug: "ultimate-snack-box",

  name: "Ultimate Snack Box",

  shortDescription:
    "A delicious assortment of naturally sweetened snacks crafted with premium dates, crunchy nuts, and wholesome ingredients.",

  description:
    "Enjoy the perfect balance of taste and nutrition with our Ultimate Snack Box. Every bite is carefully crafted using premium quality dates, roasted nuts, seeds, and natural ingredients. No refined sugar, no palm oil, and no artificial preservatives. It's the perfect healthy snack for every age.",

  salePrice: 749,
  mrp: 838,

  rating: 4.8,

  stock: 12,

  isBestSeller: true,

  images: ["/products/product1.webp"],

  highlights: [
    "100% Natural Ingredients",
    "No Refined Sugar",
    "No Palm Oil",
    "Rich in Protein, Iron, Phosphorus",
    "No Artificial Preservatives",
    "Made In India",
  ],

  ingredients: [
    "Premium Dates",
    "Almonds",
    "Cashews",
    "Pistachios",
    "Pumpkin Seeds",
    "Sunflower Seeds",
    "Cardamom",
  ],

  nutrition: {
    Calories: "152 kcal",
    Protein: "4.8 g",
    Iron: "19 g",
    Phosphorus: "8 g",
    Sugar: "5.2 g",
    Fat: "6.8 g",
  },

  weight: "400g",

  shelfLife: "6 Months",

  storage:
    "Store in a cool and dry place. Keep away from direct sunlight. Refrigeration is not required.",

  countryOfOrigin: "India",

  reviews: [
    {
      id: 1,
      name: "Rahul Sharma",
      rating: 5,
      date: "12 July 2026",
      comment:
        "Absolutely delicious! Fresh ingredients and naturally sweet. My family loved it.",
    },
    {
      id: 2,
      name: "Priya Gupta",
      rating: 5,
      date: "20 July 2026",
      comment:
        "Perfect healthy snack. Packaging was premium and delivery was quick.",
    },
    {
      id: 3,
      name: "Amit Verma",
      rating: 4,
      date: "22 July 2026",
      comment:
        "Very tasty and filling. Would definitely order again.",
    },
    {
      id: 4,
      name: "Sneha Patel",
      rating: 5,
      date: "28 July 2026",
      comment:
        "Best quality sweets and snacks! The sweetness is natural from dates and honey, perfect guilt-free treat.",
    },
    {
      id: 5,
      name: "Vikram Mehta",
      rating: 5,
      date: "04 August 2026",
      comment:
        "Ordered for corporate gifting and everyone loved the taste and presentation. Highly recommended!",
    },
    {
      id: 6,
      name: "Ananya Roy",
      rating: 5,
      date: "15 August 2026",
      comment:
        "Crunchy, flavorful, and wholesome. Really love that there is no palm oil or refined sugar.",
    },
  ],

variants: [
    {
      _id: "v1",
      title: "250g",
      salePrice: 249,
      mrp: 299,
      stock: 15,
      sku: "DN250"
    },
    {
      _id: "v2",
      title: "500g",
      salePrice: 449,
      mrp: 499,
      stock: 10,
      sku: "DN500"
    },
    {
      _id: "v3",
      title: "1kg",
      salePrice: 849,
      mrp: 949,
      stock: 5,
      sku: "DN1000"
    }
  ]

};

export default product;