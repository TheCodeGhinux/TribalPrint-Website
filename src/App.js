import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header, Footer } from "./Layouts";
import {
  AllProducts,
  Banner,
  Cart,
  CheckOut,
  Home,
  OrderDetail,
  PrivacyPolicy,
  SignIn,
  SignUp,
  TermsCondition,
} from "./Pages";
import ScrollToTop from "./Components/ScrollToTop";
import UploadProduct from "./Pages/UploadProduct";
import { useEffect, useState } from "react";
import Preloader from "./Components/PreLoader/PreLoader";
import { Toaster } from "react-hot-toast";
import axios from "axios";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call
    const createGuestCart = async () => {
      try {
         const baseUrl = `https://tribalprintengine.onrender.com/api/v1/carts/create/guest`;
        const response = await axios.get(baseUrl, {
        });

        // Handle the response accordingly
        console.log("Guest Cart Created:", response.data);
      } catch (error) {
        console.error("Error creating guest cart:", error.message);
      }

      // Simulating a delay
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    // Call the function to create guest cart
    createGuestCart();
  }, []);

  

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
        <Toaster />
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/all-products" element={<AllProducts />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/terms-and-conditions"
                element={<TermsCondition />}
              />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/all-products/:id" element={<Banner />} />
              <Route
                path="/all-products/:id/upload/:productId"
                element={<UploadProduct />}
              />
              <Route
                path="/all-products/banner/order"
                element={<OrderDetail />}
              />
              <Route
                path="/checkout/:checkoutId"
                element={<CheckOut />}
              />
            </Routes>
            <Footer />
            <ScrollToTop />
          </BrowserRouter>
        </>
      )}
    </>
  );
};

export default App;
