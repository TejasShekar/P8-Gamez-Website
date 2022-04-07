import { useCart } from "../context/cart-context";

export const ProductCard = ({ product }) => {
  const {
    cartState: { cartItems },
    cartDispatch,
  } = useCart();

  const addToCart = (product) => {
    const matchedItem = cartItems.find((item) => item._id === product._id);
    if (matchedItem === undefined) {
      cartDispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
    }
    if (matchedItem) {
      cartDispatch({
        type: "INCREMENT_ITEM",
        payload: product,
      });
    }
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
      <div className="cta">
        <button
          className="btn py-sm px-1 btn-primary"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
        <button className="btn py-sm px-1 btn-secondary">Wishlist</button>
      </div>
    </div>
  );
};
