import { useProducts } from "../context/product-context";
import { ProductCard } from "./ProductCard";
import { filterProducts } from "../utils/filterProducts";
import { useFilter } from "../context/filter-context";

export const Products = () => {
  const { productsList, loader } = useProducts();
  const { filterState } = useFilter();

  const sortedProducts = filterProducts(productsList, filterState);
  return (
    <main className="products">
      {!loader && sortedProducts.length === 0 && (
        <h2 className="text-center m-2">NO MATCHING PRODUCTS</h2>
      )}
      {loader && <h2 className="text-center m-2">L O A D I N G ...</h2>}
      <div className="products-container grid g-1 mx-auto my-1">
        {sortedProducts.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
    </main>
  );
};
