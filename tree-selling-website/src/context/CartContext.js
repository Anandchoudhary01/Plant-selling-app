import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add to Cart
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);


    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(cart.map((item) => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Increment Quantity
  const incrementQuantity = (id) => {
    setCart(cart.map((item) => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Decrement Quantity
  const decrementQuantity = (id) => {
    setCart(
      cart
        .map((item) => 
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Remove items with 0 quantity
    );
  };

  // Calculate Total
  const calculateTotal = () => cart.reduce((total, item) => total + item.price * item.quantity, 0);
//remove car
const removeFromCart = (id) => {
  setCart((prev) => prev.filter((item) => item.id !== id));
};


const cartCount = cart.length;
  return (
    <CartContext.Provider value={{ cart, addToCart, incrementQuantity, decrementQuantity, calculateTotal,removeFromCart,cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
