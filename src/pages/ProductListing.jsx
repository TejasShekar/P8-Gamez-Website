import { Filters, Header, Products } from "../components";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { ProductProvider } from "../context/product-context";

export const ProductListing = () => {
  useDocumentTitle("P8-Gamez | Products");
  return (
    <>
      <Header />
      <div className="product-wrapper">
        <ProductProvider>
          <Filters />
          <Products />
        </ProductProvider>
      </div>
    </>
  );
};
