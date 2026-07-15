import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar'

const MainLayout = () => {
  return (
    <div className=''>
        <div className=''>
            <Navbar/>
        </div>
   
    <div>
        <Outlet/>
    </div>
     </div>
  )
}

export default MainLayout