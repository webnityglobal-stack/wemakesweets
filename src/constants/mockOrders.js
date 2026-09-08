import products from "./productData";

const getProduct = (id) => products.find((product) => product._id === id);

const p2 = getProduct("2");
const p3 = getProduct("3");
const p4 = getProduct("4");
const p5 = getProduct("5");
const p6 = getProduct("6");

const createItem = (product, quantity) => ({
  _id: product._id,
  name: product.name,
  image: product.images?.[0],
  salePrice: product.salePrice,
  mrp: product.mrp,
  quantity,
});

const calculateSubtotal = (items) =>
  items.reduce((total, item) => total + item.salePrice * item.quantity, 0);

const calculateDiscount = (items) =>
  items.reduce(
    (total, item) => total + (item.mrp - item.salePrice) * item.quantity,
    0
  );

const createOrder = ({
  orderId,
  date,
  status,
  items,
  delivery,
  expectedDelivery,
  paymentMethod = "Online Payment",
  trackingNumber,
}) => {
  const subtotal = calculateSubtotal(items);
  const discount = calculateDiscount(items);

  return {
    orderId,
    date,
    status,
    items,
    subtotal,
    discount,
    delivery,
    total: subtotal + delivery,
    expectedDelivery,
    paymentMethod,
    trackingNumber,

    customer: {
      name: "Customer Name",
      phone: "+91 98XXXXXX10",
      email: "customer@example.com",
    },

    address: {
      name: "Customer Name",
      address: "123, Your Street, Near Main Market",
      city: "Surat",
      state: "Gujarat",
      pincode: "395001",
      phone: "+91 98XXXXXX10",
    },
  };
};

const mockOrders = [
  createOrder({
    orderId: "WMS-10001",
    date: "02 September 2026",
    status: "Confirmed",
    items: [
      createItem(p2, 1),
      createItem(p3, 1),
    ],
    delivery: 49,
    expectedDelivery: "5 - 7 September 2026",
    trackingNumber: "SRX458921036",
  }),

  createOrder({
    orderId: "WMS-09984",
    date: "28 August 2026",
    status: "Shipped",
    items: [
      createItem(p4, 1),
      createItem(p5, 2),
    ],
    delivery: 0,
    expectedDelivery: "2 - 4 September 2026",
    trackingNumber: "SRX458921014",
  }),

  createOrder({
    orderId: "WMS-09962",
    date: "20 August 2026",
    status: "Delivered",
    items: [
      createItem(p6, 2),
      createItem(p3, 1),
    ],
    delivery: 49,
    expectedDelivery: "25 - 27 August 2026",
    trackingNumber: "SRX458920875",
  }),
];

export default mockOrders;