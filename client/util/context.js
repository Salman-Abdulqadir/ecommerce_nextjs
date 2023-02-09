import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  const [qty, setQty] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const increaseQty = () => {
    setQty(qty + 1);
  };
  const decreaseQty = () => {
    qty - 1 < 1 ? setQty(1) : setQty(qty - 1);
  };
  const addToCart = (product, quantity) => {
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };
  const removeProduct = (product) => {
    
  }

  const states = {
    qty,
    increaseQty,
    decreaseQty,
    showCart,
    setShowCart,
    cartItems,
    setCartItems,
    addToCart,
  };
  return <ShopContext.Provider value={states}>{children}</ShopContext.Provider>;
};

export const useStateContext = () => useContext(ShopContext);
