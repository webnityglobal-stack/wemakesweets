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

const AppRoutes = () => {
  return (
    <> 
      <ScrollToTop/> 
      <Routes>
        <Route path='/' element={<MainLayout/>}>
             <Route index element={<Home/>}/>
             <Route path='our-story' element={<OurStory/>}/>
             <Route path='benefits' element={<Benefits/>}/>
             <Route path='contact' element={<Contact/>}/>
             <Route path='products' element={<AllProducts/>}/>
             <Route path="/products/:slug" element={<ProductDetailsPage/>} />
             <Route path='/sign-up' element={<Signup/>}/>
             <Route path='/login' element ={<Login/>}/>
        </Route>
       
    </Routes>
    </>

  )
}

export default AppRoutes