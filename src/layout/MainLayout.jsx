import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import TopBanner from '../components/topbanner/TopBanner'
import PromoPopupModal from '../components/common/PromoPopupModal'

const MainLayout = () => {
  return (
    <div className=' flex flex-col'>
        <TopBanner/>
        <div className=''>
            <Navbar/>
        </div>
   
    <div>
        <Outlet/>
    </div>
    <Footer/>
    <PromoPopupModal />
     </div>
  )
}

export default MainLayout