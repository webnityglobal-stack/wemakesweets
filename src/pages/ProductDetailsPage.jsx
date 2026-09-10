// import NutritionFacts from "../components/products/details/NutritionFacts";
// import ProductDescription from "../components/products/details/ProductDescription";
// import ProductGallery from "../components/products/details/ProductGallery";
// import ProductHighlights from "../components/products/details/ProductHighlights";
// import ProductInfo from "../components/products/details/ProductInfo";
// import Reviews from "../components/products/details/Reviews";
// import { useParams } from "react-router-dom";
// import useProduct from "../hooks/products/useProduct";



// const ProductDetailsPage = () => {


//   return (
//     <section className="container mx-auto w-full max-w-full min-w-0 px-4 sm:px-5 pt-6 sm:pt-12 bg-[#f5ebda] overflow-x-hidden">

//       <div className="grid gap-10 lg:grid-cols-2 w-full max-w-full min-w-0">

//         <ProductGallery
//           images={product.images}
//         />
//  {/* ProductInfo Next Part */}
//           <ProductInfo product={product} />
// <ProductHighlights product={product} />
// <ProductDescription product={product} />
// <NutritionFacts product={product} />
// <Reviews   product={product} />
//       {/* <RelatedProducts products={relatedProducts} /> */}
//         <div>
          
         
//         </div>

//       </div>

//     </section>
//   );
// };

// export default ProductDetailsPage;

import { useParams } from "react-router-dom";

import NutritionFacts from "../components/products/details/NutritionFacts";
import ProductDescription from "../components/products/details/ProductDescription";
import ProductGallery from "../components/products/details/ProductGallery";
import ProductHighlights from "../components/products/details/ProductHighlights";
import ProductInfo from "../components/products/details/ProductInfo";
import Reviews from "../components/products/details/Reviews";

import useProduct from "../hooks/products/useProduct";

const ProductDetailsPage = () => {
  const { productId } = useParams();

  const {
    product,
    loading,
    error,
  } = useProduct(productId);

  if (loading) {
    return (
      <section className="container mx-auto w-full max-w-full min-w-0 px-4 sm:px-5 pt-6 sm:pt-12 bg-[#f5ebda]">
        <div className="flex min-h-[500px] items-center justify-center">
          <p className="font-manrope text-[#603917]">
            Loading Product...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container mx-auto w-full max-w-full min-w-0 px-4 sm:px-5 pt-6 sm:pt-12 bg-[#f5ebda]">
        <div className="flex min-h-[500px] items-center justify-center">
          <p className="font-manrope text-[#8b183d]">
            {error}
          </p>
        </div>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="container mx-auto w-full max-w-full min-w-0 px-4 sm:px-5 pt-6 sm:pt-12 bg-[#f5ebda]">
        <div className="flex min-h-[500px] items-center justify-center">
          <p className="font-manrope text-[#603917]">
            Product not found.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto w-full max-w-full min-w-0 px-4 sm:px-5 pt-6 sm:pt-12 bg-[#f5ebda] overflow-x-hidden">

      <div className="grid gap-10 lg:grid-cols-2 w-full max-w-full min-w-0">

        <ProductGallery
          images={product.images}
        />

        <ProductInfo
          product={product}
        />

        <ProductHighlights
          product={product}
        />

        <ProductDescription
          product={product}
        />

        <NutritionFacts
          product={product}
        />

        <Reviews
          product={product}
        />

      </div>

    </section>
  );
};

export default ProductDetailsPage;