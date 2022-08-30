export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, { ...payload, quantity: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item._id !== payload),
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, { ...payload }],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item._id !== payload),
      };
    case "INCREMENT_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item._id === payload._id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case "DECREMENT_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item._id === payload._id ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };

    default:
      return state;
  }
};
