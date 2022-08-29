import { useCart } from "../context/cart-context";
import { calcDiscount, calcItemsPrice, calcQuantity } from "../utils/cartSummary";

export const CartSummary = () => {
  const {
    cartState: { cartItems },
  } = useCart();

  const itemsTotal = calcItemsPrice(cartItems);
  const discount = calcDiscount(cartItems, itemsTotal);
  const totalQuantity = calcQuantity(cartItems);

  return (
    <div className="cart-summary p-1">
      {cartItems.length !== 0 && (
        <>
          <p className="cart-summary-title">CART SUMMARY ({totalQuantity})</p>
          <div className="cart-item flex-sbw my-1 mx-0">
            Items total <span className="span">₹ {itemsTotal}</span>
          </div>
          <div className="cart-item flex-sbw my-1 mx-0">
            Discount <span className="span">- ₹ {discount}</span>
          </div>
          <hr />
          <h3 className="cart-item flex-sbw-c my-1 mx-0">
            ORDER TOTAL <span className="span">₹ {itemsTotal - discount}</span>
          </h3>
          <button className="btn py-sm px-1 btn-primary">PLACE ORDER</button>
        </>
      )}
    </div>
  );
};
