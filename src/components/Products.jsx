import { products } from "../backend/db/products";

export const Products = () => {
  return (
    <main className="products">
      <div className="products-container grid g-2 mx-auto my-1">
        {products.map(({ _id, name, src, price, mrp, discount }) => {
          return (
            <div key={_id} className="card pos-relative flex-sbw-c flex-col">
              <img className="card-img" src={src} alt={name} />
              <div className="card-info flex-sbw flex-col">
                <p className="card-title">{name}</p>
                <div className="price-info flex-center">
                  <div className="final-price">₹{price}</div>
                  <div className="mrp">₹{mrp}</div>
                  <p className="price-percentage">({discount}% OFF)</p>
                </div>
              </div>
              <div className="cta">
                <button className="btn py-sm px-1 btn-primary">
                  Add to Cart
                </button>
                <button className="btn py-sm px-1 btn-secondary">
                  Wishlist
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};
