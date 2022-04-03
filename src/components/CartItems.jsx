export const CartItems = () => {
  return (
    <div className="cart-items">
      <div className="card-horizontal pos-relative flex m-1">
        <img
          className="card-img-h"
          src="https://store-images.s-microsoft.com/image/apps.8135.66515090704019777.7fa547c1-c211-4229-a4d3-3ceef762e0a4.0bb0ac0a-9d63-4d91-8e53-f2e39a040bcd"
          alt="Grand Theft Auto V"
        />
        <div className="card-details flex flex-col m-auto">
          <div className="card-info flex-sbw flex-col">
            <p className="card-title">Grand Theft Auto V</p>
            <p>
              Quantity: <i className="fas fa-minus-circle px-1 py-0"></i>1
              <i className="fas fa-plus-circle px-1 py-0"></i>
            </p>
            <div className="price-info flex-center">
              <p className="final-price">₹ 2,000</p>
              <p className="mrp">₹ 2,499</p>
              <p className="price-percentage">(20% OFF)</p>
            </div>
          </div>
          <div className="cta">
            <button className="btn py-sm px-1 btn-secondary">
              Remove from Cart
            </button>
            <button className="btn py-sm px-1 btn-primary">Move to Wishlist</button>
          </div>
        </div>
      </div>
      <div className="card-horizontal pos-relative flex m-1">
        <img
          className="card-img-h"
          src="https://store-images.s-microsoft.com/image/apps.26142.69997608528322872.06dc9610-5c4e-484e-b028-58ad215e637a.b216af15-301f-4f23-83a3-69a59a87985b"
          alt="Watch Dogs 2"
        />
        <div className="card-details flex flex-col m-auto">
          <div className="card-info flex-sbw flex-col">
            <p className="card-title">Watch Dogs 2</p>
            <p>
              Quantity: <i className="fas fa-minus-circle px-1 py-0"></i>1
              <i className="fas fa-plus-circle px-1 py-0"></i>
            </p>
            <div className="price-info flex-center">
              <p className="final-price">₹ 2,000</p>
              <p className="mrp">₹ 2,499</p>
              <p className="price-percentage">(20% OFF)</p>
            </div>
          </div>
          <div className="cta">
            <button className="btn py-sm px-1 btn-secondary">
              Remove from Cart
            </button>
            <button className="btn py-sm px-1 btn-primary">Move to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};
