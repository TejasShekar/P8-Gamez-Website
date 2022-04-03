import { useProducts } from "../context/product-context";

export const Products = () => {
  const { productsList, loader } = useProducts();

  return (
    <main className="products">
      <div className="products-container grid g-2 mx-auto my-1">
        {loader && <h2>L O A D I N G ...</h2>}
        {productsList.map(({ _id, title, src, price, mrp, discount }) => {
          return (
            <div key={_id} className="card pos-relative flex-sbw-c flex-col">
              <img className="card-img" src={src} alt={title} />
              <div className="card-info flex-sbw flex-col">
                <p className="card-title">{title}</p>
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
