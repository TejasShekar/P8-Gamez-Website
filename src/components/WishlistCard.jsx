import { useCart } from "../context/cart-context";
import { toast } from "react-toastify";

export const WishlistCard = ({ product }) => {
  const {
    cartState: { cartItems },
    cartDispatch,
  } = useCart();
  const matchedItemInCart = cartItems.find((item) => item._id === product._id);

  const removeFromWishlist = (id) => {
    cartDispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: id,
    });
    toast.success(<div>Removed from Wishlist</div>);
  };

  const moveToCart = (product) => {
    if (matchedItemInCart === undefined) {
      cartDispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
      cartDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: product._id,
      });
    }
    if (matchedItemInCart) {
      cartDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: product._id,
      });
      cartDispatch({
        type: "INCREMENT_ITEM",
        payload: product,
      });
    }
    toast.success(<div>Moved to Cart</div>);
  };

  return (
    <div key={product._id} className="card pos-relative flex-sbw-c flex-col">
      <img className="card-img" src={product.src} alt={product.title} />
      <div className="card-info flex-sbw flex-col">
        <p className="card-title">{product.title}</p>
        <div className="price-info flex-center">
          <div className="final-price">₹{product.price}</div>
          <div className="mrp">₹{product.mrp}</div>
          <h3>
            <i className="fas fa-star"></i>
            {product.rating}
          </h3>
        </div>
      </div>
      <div className="cta">
        <button
          className="btn py-sm px-1 btn-primary"
          onClick={() => moveToCart(product)}
        >
          Move to Cart
        </button>
        <button
          className="btn py-sm px-1 btn-secondary"
          onClick={() => removeFromWishlist(product._id)}
        >
          Remove from Wishlist
        </button>
      </div>
    </div>
  );
};
