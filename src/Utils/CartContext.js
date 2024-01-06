import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [error, setError] = useState(null);
  const [userIp, setUserIp] = useState(null);

  // Fetch user's IP and set it in localStorage
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userId = localStorage.getItem("userId");

        if (!userId) {
          throw new Error("user is null or undefined");
        }
        const baseUrl = `https://tp-prod.onrender.com/api/v1/carts/get/${userId}`;
        const response = await axios.get(baseUrl);
  
        if (response.status < 200 || response.status >= 300) {
          throw new Error(`Failed to fetch cart data: ${response.statusText}`);
        }
  
        // Save cart data in localStorage
        localStorage.setItem("cart", JSON.stringify(response.data));
  
        // Set cart data
        setCart(response.data.cart);
      } catch (error) {
        setError(error.message || "Error fetching cart data");
        console.error(error.message);
      }
    };
  
    // Fetch cart data when userIp changes
    fetchCart();
  }, []);  // Only depend on userIp, not cart
  

  return (
    <CartContext.Provider value={{ cart, setCart, error }}>
      {children}
    </CartContext.Provider>
  );
};
