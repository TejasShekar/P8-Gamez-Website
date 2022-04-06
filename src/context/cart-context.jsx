import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

const CartContext = createContext();
const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, { cartItems: [] });
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
