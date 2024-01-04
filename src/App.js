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
    const createGuestCart = async () => {
      try {
        const baseUrl = "/api/v1/carts/create/guest";
        const response = await axios.get(baseUrl, { withCredentials: true });
    
        // Extract and save the cookie from the response headers
        const cookieHeader = response.headers["set-cookie"];
        if (cookieHeader) {
          const [cookie] = cookieHeader.split(";");
          localStorage.setItem("guestCartCookie", cookie);
        }
    
        console.log("Full Response:", response);
    
        const { user, _id, visitorId } = response.data;
        localStorage.setItem("user", user);
        localStorage.setItem("_id", _id);
        localStorage.setItem("visitorId", visitorId);
    
        console.log("Guest Cart Created:", response.data);
      } catch (error) {
        console.error("Error creating guest cart:", error.message);
      }
    
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };
    

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
                path="/order"
                element={<OrderDetail />}
              />
              <Route path="/checkout" element={<CheckOut />} />
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
