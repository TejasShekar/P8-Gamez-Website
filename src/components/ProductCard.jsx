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
      <img className="card-img" src={src} alt={title} />
      <div className="card-info flex-sbw flex-col">
        <p className="card-title">{title}</p>
        <div className="price-info flex-sbw-c">
          <div className="flex flex-sbw-c">
            <p className="final-price">₹{price}</p>
            <p className="mrp">₹{mrp}</p>
            <p className="discount">({Math.round(((mrp - price) * 100) / mrp)}%)</p>
          </div>
          <p>
            <i className="fas fa-star selected"></i>
            {rating}
          </p>
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
            className="wishlist-btn flex-center"
            onClick={() =>
              matchedItemInWishlist
                ? removeFromWishlist(product._id)
                : addToWishlist(product)
            }
          >
            {matchedItemInWishlist ? (
              <i class="fas fa-heart"></i>
            ) : (
              <i class="far fa-heart"></i>
            )}
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
            className="wishlist-btn"
            onClick={() => removeFromWishlist(product._id)}
          >
            <i class="fas fa-heart"></i>
          </button>
        </>
      )}
    </div>
  );
};
