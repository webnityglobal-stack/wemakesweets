import { useEffect, useState } from "react";
import productService from "../../services/productService";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await productService.getAllProducts();

      if (data?.success) {
        setProducts(data.products || []);
      } else {
        setProducts([]);
        setError(data?.message || "Unable to fetch products.");
      }
    } catch (error) {
      console.error("Unable to fetch products:", error);

      setProducts([]);

      setError(
        error.response?.data?.message ||
          "Unable to load products. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    refetch: fetchProducts,
  };
};

export default useProducts;