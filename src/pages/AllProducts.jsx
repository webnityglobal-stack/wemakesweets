import ProductGrid from "../components/products/ProductGrid";
import products from "../constants/productData";

const AllProducts = () => {

  return (

    <section className="container mx-auto px-5 py-10 bg-[#f9e4bf]">

      <h1 className="mb-8 text-3xl font-bold">

        All Products

      </h1>

      <ProductGrid products={products} />

    </section>

  );

};

export default AllProducts; 