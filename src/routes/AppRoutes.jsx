import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import OurStory from '../pages/OurStory'
import Benefits from '../pages/Benefits'
import Contact from '../pages/Contact'
import AllProducts from '../pages/AllProducts'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import ScrollToTop from '@/components/ScrollToTop'
import { Link } from "react-router-dom";
import Signup from '@/pages/SignUp'
import Login from '@/layout/Login'
import AddToCart from '@/pages/AddToCart'
import OrderConfirmation from '@/pages/OrderConfirmation'
import MyOrders from '@/pages/MyOrders'
import TrackOrder from '@/pages/TrackOrder'
import MyAccount from '@/pages/MyAccount'
import Wishlist from '@/pages/Wishlist'

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='our-story' element={<OurStory />} />
          <Route path='benefits' element={<Benefits />} />
          <Route path='contact' element={<Contact />} />
          <Route path='products' element={<AllProducts />} />
          <Route path="/products/:slug" element={<ProductDetailsPage />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path="/cart" element={<AddToCart />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/orders/:orderId" element={<TrackOrder />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/wishlist" element={<Wishlist/>} />
        </Route>

      </Routes>
    </>

  )
}

export default AppRoutes