import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart-context";
import { toast } from "react-toastify";

export const ProductCard = ({ product }) => {
  const {
    cartState: { cartItems, wishlist },
    cartDispatch,
  } = useCart();
  const navigate = useNavigate();

  const matchedItemInCart = cartItems.find((item) => item._id === product._id);
  const matchedItemInWishlist = wishlist.find(
    (item) => item._id === product._id
  );

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

  const { title, src, price, mrp, rating } = product;
  return (
    <div className="card pos-relative flex-sbw-c flex-col">
      <div className="card-badge pos-abs py-0 px-sm">
        <div>({Math.round(((mrp - price) * 100) / mrp)}% OFF)</div>
      </div>
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
      {matchedItemInCart ? (
        <button
          className="btn py-sm px-1 btn-primary"
          onClick={() => navigate("/cart")}
        >
          Go to Cart
        </button>
      ) : (
        <button
          className="btn py-sm px-1 btn-primary"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      )}
      {matchedItemInWishlist ? (
        <button
          className="btn py-sm px-1 btn-secondary"
          onClick={() => navigate("/wishlist")}
        >
          Go to Wishlist
        </button>
      ) : (
        <button
          className="btn py-sm px-1 btn-secondary"
          onClick={() => addToWishlist(product)}
        >
          Add to Wishlist
        </button>
      )}
    </div>
  );
};
