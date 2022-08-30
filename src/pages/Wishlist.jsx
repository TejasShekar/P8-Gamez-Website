import { ProductCard } from "../components";
import { useCart } from "../context/cart-context";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const Wishlist = () => {
  useDocumentTitle("P8-Gamez | Wishlist");
  const {
    cartState: { wishlist },
  } = useCart();

  return (
    <>
      {wishlist.length === 0 && (
        <h2 className="text-center m-2">YOU HAVE NO ITEMS IN THE WISHLIST</h2>
      )}
      <div className="wishlist-container grid g-2 mx-auto my-1">
        {wishlist.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};
