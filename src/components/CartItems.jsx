import { useCart } from "../context/cart-context";
import { CartItemCard } from "./CartItemCard";

export const CartItems = () => {
  const { cartState } = useCart();
  const { cartItems } = cartState;

  return (
    <div className="cart-items">
      {cartItems.map((product) => (
        <CartItemCard key={product._id} product={product} />
      ))}
    </div>
  );
};
