import React from 'react'
import Hero from '../components/home/Hero'
import HeroContent from '../components/home/HeroContent'
import OurStory from '../components/home/OurStory'
import PerfectOccasion from '../components/home/PerfectOccasion'
import PremiumSlider from '../components/home/premiumslider/PremiumSlider'
import ProductSlider from '../components/home/productSlider/ProductSlider'
import InspiredByHeritage from '../components/home/InspiredByHeritage'
import OurProduct from '../components/home/OurProduct'
import GatewayOfIndia from '../components/home/GatewayOfIndia'
import HowrahBridge from '../components/home/HowrahBridge'
import ProductConsumption from '../components/ProductConsumption'

const Home = () => {
  return (
    <div className='flex flex-col  bg-[#f9e4bf] '>
      <PremiumSlider/>
      
        <Hero/>
        {/* <ProductSlider/> */}<OurProduct/>
        <ProductConsumption/>
        <HowrahBridge/>
        <HeroContent/>
        <GatewayOfIndia/>
        <PerfectOccasion/>
        <InspiredByHeritage/>
        <OurStory/>
    </div>
  )
}

export default Home