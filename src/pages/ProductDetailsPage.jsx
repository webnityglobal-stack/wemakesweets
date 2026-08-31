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
    <section className="container mx-auto w-full max-w-full min-w-0 px-4 sm:px-5 pt-6 sm:pt-12 bg-[#f5ebda] overflow-x-hidden">

      <div className="grid gap-10 lg:grid-cols-2 w-full max-w-full min-w-0">

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