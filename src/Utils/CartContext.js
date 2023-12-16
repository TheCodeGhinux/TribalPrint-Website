import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const baseUrl = `https://tribalprintengine.onrender.com/api/v1/carts/get`;
        const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Implc3Vzd3JpdGVzMjAwNDNAZ21haWwuY29tIiwic3ViIjoiNjU1NzdhNzFlYzI2ODEyYTBmYTljMjk2IiwiaWF0IjoxNzAwNjY2NjU5LCJleHAiOjM2MDAwMDE3MDA2NjY2NTl9.ZFE2O34gp4eVC5EYGXLA9AYu-mwSEdqggsaHQep3Em8`;
        const response = await axios.get(baseUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status < 200 || response.status >= 300) {
          throw new Error(
            `Failed to fetch payment methods: ${response.statusText}`
          );
        }

        setCart(response.data);
      } catch (error) {
        setError(error.message || "Error fetching payment methods");
        console.error(error.message);
      }
    };

    if (!cart) {
      fetchCart();
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, error }}>
      {children}
    </CartContext.Provider>
  );
};
