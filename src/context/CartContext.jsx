import React from "react";

export const CartContext = React.createContext();

// CartContext.Provider - Component

// useState, useReducer

export function CartContextProvider({ children }) {
  const [cartCount, setCartCount] = React.useState(0);

  const handleCartCount = (val) => {
    //+2
    setCartCount(cartCount + val);
  };

  // boolean, string, array, object, function ....

  return (
    <CartContext.Provider value={{ cartCount, handleCartCount }}>
      {children}
    </CartContext.Provider>
  );
}
