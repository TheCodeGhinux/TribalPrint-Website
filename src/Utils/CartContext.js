import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import $http from "../api/axios";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [error, setError] = useState(null);
  const [userIp, setUserIp] = useState(null);


    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const res = await $http.get(`/carts/create/guest`)
    //       // console.log(res)
    //       const resData = await res.data
    //       setResponseData(JSON.stringify(resData, null, 2))
    //       setResData(res)

    //       return resData
    //     } catch (e) {
    //       console.log(e)
    //       return e.response.data ?? { message: e.message }
    //     }
    //   }
    //   fetchData()
    // }, [])

  // Fetch user's IP and set it in localStorage
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userId = localStorage.getItem("userId");

        if (!userId) {
          throw new Error("user is null or undefined");
        }
        // const baseUrl = `/api/v1/carts/get/${userId}`;
        // const response1 = await axios.get(baseUrl);
        const response = await $http.get(`/carts/get/${userId}`)

        console.log('in cart context:', response);
  
        if (response.status < 200 || response.status >= 300) {
          throw new Error(`Failed to fetch cart data: ${response.statusText}`);
        }
  
        // Save cart data in localStorage
        localStorage.setItem("cart", JSON.stringify(response.data.data));
  
        // Set cart data
        setCart(response.data.data);
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
