// import ProductCategoryBanner from "../components/products/ProductCategoryBanner";
// import ProductGrid from "../components/products/ProductGrid";
// import ProductHero from "../components/products/ProductHero";
// import useProducts from "../hooks/products/useProducts";

// const AllProducts = () => {

//   return (

//     <section className="container mx-auto bg-[#f5ebda]">

//      <ProductHero/>
//      {/* <ProductCategoryBanner/> */}
// <div className="md:p-4 p-3">
//       <ProductGrid products={products}  />
// </div>
//     </section>

//   );

// };

// export default AllProducts; 

import ProductGrid from "../components/products/ProductGrid";
import ProductHero from "../components/products/ProductHero";
import useProducts from "../hooks/products/useProducts";

const AllProducts = () => {
  const {
    products,
    loading,
    error,
  } = useProducts();

  return (
    <section className="container mx-auto bg-[#f5ebda]">

      <ProductHero />

      <div className="md:p-4 p-3">

        {loading ? (
          <div className="py-20 text-center">
            <p className="font-manrope text-gray-500">
              Loading Products...
            </p>
          </div>
        ) : error ? (
          <div className="py-20 text-center">
            <p className="font-manrope text-[#8b183d]">
              {error}
            </p>
          </div>
        ) : (
          <ProductGrid products={products} />
        )}

      </div>

    </section>
  );
};

export default AllProducts;