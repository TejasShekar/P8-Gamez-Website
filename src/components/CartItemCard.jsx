import { useCart } from "../context/cart-context";

export const CartItemCard = ({ product }) => {
  const { cartDispatch } = useCart();
  const removeFromCart = (id) => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
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
              className={`btn ${
                product.quantity <= 1 ? "disabled" : "enabled"
              }`}
              id="decrement-btn"
              disabled={product.quantity <= 1}
              onClick={() =>
                cartDispatch({ type: "DECREMENT_ITEM", payload: product })
              }
            >
              <i className="fas fa-minus-circle px-1 py-0"></i>
            </button>
            {product.quantity}
            <button
              className="btn enabled"
              id="increment-btn"
              onClick={() =>
                cartDispatch({ type: "INCREMENT_ITEM", payload: product })
              }
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
          <button className="btn py-sm px-1 btn-primary">
            Move to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
