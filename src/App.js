import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header, Footer } from './Layouts'
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
  Success,
  TermsCondition,
} from './Pages'
import ScrollToTop from './Components/ScrollToTop'
import UploadProduct from './Pages/UploadProduct'
import { useEffect, useState } from 'react'
import Preloader from './Components/PreLoader/PreLoader'
import { Toaster } from 'react-hot-toast'
import axios from 'axios'
import $http from './api/axios'

const App = () => {
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const createGuestCart = async () => {
      try {
        // const baseUrl = "/api/v1/carts/create/guest";
        // const response = await axios.get(baseUrl, { withCredentials: true });
        const response = await $http.get(`/carts/create/guest`, {
          withCredentials: true,
        })

        // Extract and save the cookie from the response headers
        console.log('response data:', response)
        const cookieHeader = await response.headers['Set-Cookie']
        if (cookieHeader) {
          const [cookie] = cookieHeader.split(';')
          localStorage.setItem('guestCartCookie', cookie)
        }

        const { user, _id, visitorId, userId } = await response.data.data
        const { isUser } = await response.data.data
        console.log('isUser:', isUser)

        localStorage.setItem('isUser', isUser)

        localStorage.setItem('user', user)
        localStorage.setItem('_id', _id)
        localStorage.setItem('visitorId', visitorId)
        localStorage.setItem('userId', userId)
      } catch (error) {
        console.error('Error creating guest cart:', error.message)
      }

      setTimeout(() => {
        setLoading(false)
      }, 3000)
    }

    createGuestCart()
  }, [])

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
              <Route path='/' element={<Home />} />
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='/sign-up' element={<SignUp />} />
              <Route path='/all-products' element={<AllProducts />} />
              <Route path='/cart' element={<Cart />} />
              <Route
                path='/terms-and-conditions'
                element={<TermsCondition />}
              />
              <Route path='/privacy-policy' element={<PrivacyPolicy />} />
              <Route path='/all-products/:id' element={<Banner />} />
              <Route
                path='/all-products/:id/upload/:productId'
                element={<UploadProduct />}
              />
              <Route path='/order' element={<OrderDetail />} />
              <Route path='/success' element={<Success />} />
              <Route path='/checkout' element={<CheckOut />} />
            </Routes>
            <Footer />
            <ScrollToTop />
          </BrowserRouter>
        </>
      )}
    </>
  )
}

export default App
