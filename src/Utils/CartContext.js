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
    const fetchUserIp = async () => {
      try {
        const ipResponse = await axios.get("https://api64.ipify.org?format=json");
        const fetchedUserIp = ipResponse.data.ip;
        console.log(fetchedUserIp);
        setUserIp(fetchedUserIp); // Set userIp here

        // Save userIp in localStorage
        localStorage.setItem("userIp", fetchedUserIp);
      } catch (error) {
        console.error(error.message);
      }
    };

    // Check if userIp is already in localStorage
    const storedUserIp = localStorage.getItem("userIp");
    if (storedUserIp) {
      setUserIp(storedUserIp);
    } else {
      // If not, fetch it
      fetchUserIp();
    }
  }, []);

  // Fetch cart data using userIp and set it in localStorage
  useEffect(() => {
    const fetchCart = async () => {
      try {
        if (!userIp) return;
        const baseUrl = `https://tribalprintengine.onrender.com/api/v1/carts/get/${userIp}`;
        const response = await axios.get(baseUrl);
  
        if (response.status < 200 || response.status >= 300) {
          throw new Error(`Failed to fetch cart data: ${response.statusText}`);
        }
  
        // Save cart data in localStorage
        localStorage.setItem("cart", JSON.stringify(response.data));
  
        // Set cart data
        setCart(response.data);
      } catch (error) {
        setError(error.message || "Error fetching cart data");
        console.error(error.message);
      }
    };
  
    // Fetch cart data when userIp changes
    fetchCart();
  }, [userIp]);  // Only depend on userIp, not cart
  

  return (
    <CartContext.Provider value={{ cart, setCart, error }}>
      {children}
    </CartContext.Provider>
  );
};
