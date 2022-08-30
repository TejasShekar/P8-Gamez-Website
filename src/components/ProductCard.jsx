import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/cart-context";
import { toast } from "react-toastify";

export const ProductCard = ({ product }) => {
  const {
    cartState: { cartItems, wishlist },
    cartDispatch,
  } = useCart();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const matchedItemInCart = cartItems.find((item) => item._id === product._id);
  const matchedItemInWishlist = wishlist.find((item) => item._id === product._id);

  const addToCart = (product) => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    toast.success(<div>Added to Cart</div>);
  };
  const addToWishlist = (product) => {
    cartDispatch({
      type: "ADD_TO_WISHLIST",
      payload: product,
    });
    toast.success(<div>Added to Wishlist</div>);
  };

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

  const { title, src, price, mrp, rating } = product;
  return (
    <div className="card pos-relative flex-sbw-c flex-col">
      {pathname !== "/wishlist" && (
        <div className="card-badge pos-abs py-0 px-sm">
          <div>({Math.round(((mrp - price) * 100) / mrp)}% OFF)</div>
        </div>
      )}
      <img className="card-img" src={src} alt={title} />
      <div className="card-info flex-sbw flex-col">
        <p className="card-title">{title}</p>
        <div className="price-info flex-center">
          <div className="final-price">₹{price}</div>
          <div className="mrp">₹{mrp}</div>
          <h3>
            <i className="fas fa-star"></i>
            {rating}
          </h3>
        </div>
      </div>
      {pathname !== "/wishlist" ? (
        <>
          <button
            className="btn py-sm px-1 btn-primary"
            onClick={() => (matchedItemInCart ? navigate("/cart") : addToCart(product))}
          >
            {matchedItemInCart ? "Go to Cart" : "Add to Cart"}
          </button>
          <button
            className="btn py-sm px-1 btn-secondary"
            onClick={() =>
              matchedItemInWishlist ? navigate("/wishlist") : addToWishlist(product)
            }
          >
            {matchedItemInWishlist ? "Go to Wishlist" : "Add to Wishlist"}
          </button>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};
