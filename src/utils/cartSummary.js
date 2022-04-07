export const calcItemsPrice = (cartItems) => {
  return cartItems.reduce(
    (price, item) => (price = price + item.mrp * item.quantity),
    0
  );
};

export const calcDiscount = (cartItems, itemsTotal) => {
  return (
    itemsTotal -
    cartItems.reduce(
      (discount, item) => (discount = discount + item.price * item.quantity),
      0
    )
  );
};

export const calcQuantity = (cartItems) => {
  return cartItems.reduce((count, item) => (count = count + item.quantity), 0);
};
