import ProductCategoryBanner from "../components/products/ProductCategoryBanner";
import ProductGrid from "../components/products/ProductGrid";
import ProductHero from "../components/products/ProductHero";
import products from "../constants/productData";

const AllProducts = () => {

  return (

    <section className="container mx-auto px-5 py-10 bg-[#f9e4bf]">

     <ProductHero/>
     {/* <ProductCategoryBanner/> */}

      <ProductGrid products={products} />

    </section>

  );

};

export default AllProducts; 