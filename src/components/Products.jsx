import { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "./ProductCard";
import { filterProducts } from "../utils/filterProducts";
import { useFilter } from "../context/filter-context";

export const Products = () => {
  const { filterState } = useFilter();
  const [productsList, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);

  const getProducts = async () => {
    try {
      setLoader(true);
      const res = await axios.get("./api/products");
      setProducts((_prevData) => res.data.products);
      setLoader(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const sortedProducts = filterProducts(productsList, filterState);
  return (
    <main className="products">
      {!loader && sortedProducts.length === 0 && (
        <h2 className="text-center m-2">NO MATCHING PRODUCTS</h2>
      )}
      {loader && <h2 className="text-center m-2">L O A D I N G ...</h2>}
      <div className="products-container grid m-1">
        {sortedProducts.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
    </main>
  );
};
