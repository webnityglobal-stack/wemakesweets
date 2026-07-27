import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import OurStory from '../pages/OurStory'
import Benefits from '../pages/Benefits'
import Contact from '../pages/Contact'
import AllProducts from '../pages/AllProducts'
import ProductDetailsPage from '../pages/ProductDetailsPage'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<MainLayout/>}>
             <Route index element={<Home/>}/>
             <Route path='our-story' element={<OurStory/>}/>
             <Route path='benefits' element={<Benefits/>}/>
             <Route path='contact' element={<Contact/>}/>
             {/* <Route path='products' element={<AllProducts/>}/>
             <Route path="/products/:slug" element={<ProductDetailsPage />} */}
        </Route>
       
    </Routes>
  )
}

export default AppRoutes