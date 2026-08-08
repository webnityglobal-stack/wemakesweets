// import ProductCard from "./ProductCard";


// const ProductGrid = ({ products }) => {
//   if (!products.length) {
//     return (
//       <div className="py-20 text-center text-gray-500">
//         No Products Found
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
//       {products.map((product) => (
//         <ProductCard
//           key={product._id}
//           product={product}
//         />
//       ))}
//     </div>
//   );
// };

// export default ProductGrid;

import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  if (!products.length) {
    return (
      <div className="py-20 text-center text-gray-500">
        No Products Found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;