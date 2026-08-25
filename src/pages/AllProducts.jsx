import ProductCategoryBanner from "../components/products/ProductCategoryBanner";
import ProductGrid from "../components/products/ProductGrid";
import ProductHero from "../components/products/ProductHero";
import products from "../constants/productData";

const AllProducts = () => {

  return (

    <section className="container mx-auto bg-[#f5ebda]">

     <ProductHero/>
     {/* <ProductCategoryBanner/> */}
<div className="md:p-4 p-3">
      <ProductGrid products={products}  />
</div>
    </section>

  );

};

export default AllProducts; 