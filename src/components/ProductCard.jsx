export const ProductCard = ({ product }) => {
  const { _id, title, src, price, mrp, rating } = product;
  return (
    <div key={_id} className="card pos-relative flex-sbw-c flex-col">
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
        <button className="btn py-sm px-1 btn-primary">Add to Cart</button>
        <button className="btn py-sm px-1 btn-secondary">Wishlist</button>
      </div>
    </div>
  );
};
