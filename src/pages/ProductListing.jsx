import { Filters, Header, Products } from "../components";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const ProductListing = () => {
  useDocumentTitle("P8-Gamez | Products");
  return (
    <>
      <Header />
      <div className="product-wrapper">
        <Filters />
        <Products />
      </div>
    </>
  );
};
