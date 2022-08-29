import { useNavigate } from "react-router-dom";
import { CartItems, CartSummary } from "../components";
import { useCart } from "../context/cart-context";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const Cart = () => {
  const navigate = useNavigate();

  const {
    cartState: { cartItems },
  } = useCart();
  useDocumentTitle("P8-Gamez | Cart");
  return (
    <>
      {cartItems.length === 0 && (
        <>
          <h2 className="text-center m-2">YOU HAVE NO ITEMS IN THE CART</h2>
          <div className=" flex-center">
            <button
              className="btn py-sm px-1 btn-primary"
              onClick={() => navigate("/products")}
            >
              Go To Store
            </button>
          </div>
        </>
      )}
      {cartItems.length !== 0 && (
        <main className="flex-c flex-wrap m-1 g-1">
          <CartItems />
          <CartSummary />
        </main>
      )}
    </>
  );
};
