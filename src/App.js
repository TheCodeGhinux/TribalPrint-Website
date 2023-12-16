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

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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
