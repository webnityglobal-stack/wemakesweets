import React from 'react'
import Hero from '../components/home/Hero'
import HeroContent from '../components/home/HeroContent'
import OurStory from '../components/home/OurStory'
import PerfectOccasion from '../components/home/PerfectOccasion'
import PremiumSlider from '../components/home/premiumslider/PremiumSlider'
import ProductSlider from '../components/home/productSlider/ProductSlider'

const Home = () => {
  return (
    <div className='flex flex-col gap-2 p-2 '>
      <PremiumSlider/>
      
        <Hero/>
        <ProductSlider/>
        <HeroContent/>
        <PerfectOccasion/>
        <OurStory/>
    </div>
  )
}

export default Home