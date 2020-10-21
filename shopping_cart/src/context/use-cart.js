import React, { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { addToCart, removeFromCart } from "../utils/cart";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

//reducer
const initialState = [];

const reducer = (draft, action) => {
  switch (action.type) {
    case "ADD":
      addToCart(draft, action.item);
      return;
    case "REMOVE":
      removeFromCart(draft, action.item);
      return;
    default:
      return draft;
  }
};

//cart context for the provider
export function CartProvider({ children }) {
  const [cart, dispatch] = useImmerReducer(reducer, initialState);

  const addItem = (product) => dispatch({ type: "ADD", item: product });

  const removeItem = (product) => dispatch({ type: "REMOVE", item: product });

  function countItemsInCart(sku) {
    const itemsInCart = cart.filter((p) => p.sku === sku);

    return itemsInCart.length;
  }

  function totalPrice() {}

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        cart,
        countItemsInCart,
        totalPrice: totalPrice(),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
