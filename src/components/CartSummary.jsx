export const CartSummary = () => {
  return (
    <div className="cart-summary p-1">
      <p className="cart-summary-title">PRICE DETAILS</p>
      <div className="cart-item flex-sbw my-1 mx-0">
        MRP <span className="span">₹ 4,998</span>
      </div>
      <div className="cart-item flex-sbw my-1 mx-0">
        Discount <span className="span"> ₹ 998</span>
      </div>
      <div className="cart-item flex-sbw my-1 mx-0">
        Delivery Charges <span className="span">₹ 0</span>
      </div>
      <h3 className="cart-item flex-sbw my-1 mx-0">
        TOTAL AMOUNT <span className="span">₹ 4,000</span>
      </h3>
      <button className="btn py-sm px-1 btn-primary">PLACE ORDER</button>
    </div>
  );
};
