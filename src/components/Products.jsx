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
      <div className="products-container grid g-1 mx-auto my-1">
        {loader && <h2 className="text-center">L O A D I N G ...</h2>}
        {sortedProducts.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
    </main>
  );
};
