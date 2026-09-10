import { useEffect, useState } from "react";
import productService from "../../services/productService";

const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProduct = async () => {
    if (!productId) {
      setProduct(null);
      setLoading(false);
      setError("Product ID is missing.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await productService.getProductById(productId);

      if (data?.success) {
        setProduct(data.product);
      } else {
        setProduct(null);
        setError(data?.message || "Unable to fetch product.");
      }
    } catch (error) {
      console.error("Unable to fetch product:", error);

      setProduct(null);

      setError(
        error.response?.data?.message ||
          "Unable to load product. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  return {
    product,
    loading,
    error,
    refetch: fetchProduct,
  };
};

export default useProduct;