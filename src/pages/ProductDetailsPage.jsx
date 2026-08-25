import NutritionFacts from "../components/products/details/NutritionFacts";
import ProductDescription from "../components/products/details/ProductDescription";
import ProductGallery from "../components/products/details/ProductGallery";
import ProductHighlights from "../components/products/details/ProductHighlights";
import ProductInfo from "../components/products/details/ProductInfo";
import RelatedProducts from "../components/products/details/RelatedProducts";
import Reviews from "../components/products/details/Reviews";
import prod from "../constants/product";



const ProductDetailsPage = () => {
const product = prod;

  return (
    <section className="container mx-auto px-5 pt-12 bg-[#f5ebda]">

      <div className="grid gap-10 lg:grid-cols-2">

        <ProductGallery
          images={product.images}
        />
 {/* ProductInfo Next Part */}
          <ProductInfo product={product} />
<ProductHighlights product={product} />
<ProductDescription product={product} />
<NutritionFacts product={product} />
<Reviews   product={product} />
      {/* <RelatedProducts products={relatedProducts} /> */}
        <div>
          
         
        </div>

      </div>

    </section>
  );
};

export default ProductDetailsPage;