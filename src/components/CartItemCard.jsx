import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart-context";
import { toast } from "react-toastify";

export const CartItemCard = ({ product }) => {
  const navigate = useNavigate();
  const {
    cartState: { wishlist },
    cartDispatch,
  } = useCart();

  const removeFromCart = (id) => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
    toast.success(<div>Removed to Cart</div>);
  };

  const matchedItemInWishlist = wishlist.find((item) => item._id === product._id);

  const moveToWishlist = (product) => {
    if (matchedItemInWishlist === undefined) {
      cartDispatch({
        type: "ADD_TO_WISHLIST",
        payload: product,
      });
      cartDispatch({
        type: "REMOVE_FROM_CART",
        payload: product._id,
      });
    }
    if (matchedItemInWishlist) {
      cartDispatch({
        type: "REMOVE_FROM_CART",
        payload: product._id,
      });
    }
    toast.success(<div>Moved to Wishlist</div>);
  };
  return (
    <div key={product._id} className="card-horizontal pos-relative flex m-1">
      <img className="card-img-h" src={product.src} alt={product.title} />
      <div className="card-details flex flex-col m-auto">
        <div className="card-info flex-sbw flex-col">
          <p className="card-title">{product.title}</p>
          <p>
            Quantity:{" "}
            <button
              className={`btn ${product.quantity <= 1 ? "disabled" : "enabled"}`}
              id="decrement-btn"
              disabled={product.quantity <= 1}
              onClick={() => cartDispatch({ type: "DECREMENT_ITEM", payload: product })}
            >
              <i className="fas fa-minus-circle px-1 py-0"></i>
            </button>
            {product.quantity}
            <button
              className="btn enabled"
              id="increment-btn"
              onClick={() => cartDispatch({ type: "INCREMENT_ITEM", payload: product })}
            >
              <i className="fas fa-plus-circle px-1 py-0"></i>
            </button>
          </p>
          <div className="price-info flex-center">
            <p className="final-price">₹ {product.price}</p>
            <p className="mrp">₹ {product.mrp}</p>
          </div>
        </div>
        <div className="cta">
          <button
            className="btn py-sm px-1 btn-secondary"
            onClick={() => removeFromCart(product._id)}
          >
            Remove from Cart
          </button>
          {matchedItemInWishlist ? (
            <button
              className="btn py-sm px-1 btn-primary"
              onClick={() => navigate("/wishlist")}
            >
              Go to Wishlist
            </button>
          ) : (
            <button
              className="btn py-sm px-1 btn-primary"
              onClick={() => moveToWishlist(product)}
            >
              Move to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
