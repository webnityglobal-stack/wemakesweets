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
import products from '../constants/productData'
import ProductGrid from '../components/products/ProductGrid'
import { Link } from 'react-router-dom'
import Testimonials from '../components/testimonials/Testimonials'
import ReelsSection from '../components/reels/ReelsSection'
import FAQPage from '../components/home/FAQ/FAQPage'
import IconPage from '../components/our-story/IconPage'
import SplitText from '@/components/SplitText'
import Boxes from '@/components/home/Boxes'
import ScrollWavyUnderline from '@/components/common/ScrollWavyUnderline'
import OurStoryVideo from '@/components/our-story/OurStoryVideo'

const Home = () => {
  return (
    <div className='flex flex-col  bg-[#f9e4bf] '>
      <PremiumSlider />
      <Boxes />
      {/* <Hero/> */}

      {/* <ProductSlider/><OurProduct/> */}
      <ProductConsumption />

      <div>
        <section className="bg-[#f9e4bf] py-4 md:px-[24px]">
          <div className="container mx-auto px-4 sm:px-4 lg:px-4">

            {/* Heading */}
            <div className="mb-10 text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-[#572340]">
                Our Collection
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#603917] md:text-4xl">
                Best Selling Products
              </h2>
              <ScrollWavyUnderline />
              {/* Decorative Line */}
              {/* <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-[#3e5a2c]" /> */}
            </div>

            {/* Products */}
            <ProductGrid products={products.slice(0, 4)} />

            {/* Button */}
            <div className="mt-12 flex justify-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-pink-600 px-8 py-3 font-semibold text-white border-[0.5px] border-black shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] transition-all duration-300 hover:scale-105 hover:bg-[#572340] hover:shadow-[3px_4px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_3px_0px_#000]">
                View All Products
              </Link>
            </div>

          </div>
        </section>
      </div>




      {/* <HowrahBridge/> */}
      <HeroContent />
      {/* <GatewayOfIndia/> */}
      <PerfectOccasion />
      {/* <InspiredByHeritage/> */}
      {/* <OurStory /> */}
      <ReelsSection />
      <IconPage />
      <OurStoryVideo />
      <Testimonials />
      <FAQPage />
    </div>
  )
}

export default Home