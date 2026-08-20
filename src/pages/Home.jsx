import React from 'react'
import HeroContent from '../components/home/HeroContent'
import PerfectOccasion from '../components/home/PerfectOccasion'
import PremiumSlider from '../components/home/premiumslider/PremiumSlider'
import ProductConsumption from '../components/ProductConsumption'
import products from '../constants/productData'
import ProductGrid from '../components/products/ProductGrid'
import { Link } from 'react-router-dom'
import Testimonials from '../components/testimonials/Testimonials'
import ReelsSection from '../components/reels/ReelsSection'
import FAQPage from '../components/home/FAQ/FAQPage'
import IconPage from '../components/our-story/IconPage'
import Boxes from '@/components/home/Boxes'
import ScrollWavyUnderline from '@/components/common/ScrollWavyUnderline'
import OurStoryVideo from '@/components/our-story/OurStoryVideo'
import ProductCard from '@/components/products/ProductCard'
import QucikMarket from '@/components/QuicMarket'

const Home = () => {
  return (
    <div className='flex flex-col  bg-[#]'>
      <PremiumSlider />
      <Boxes />
      {/* <Hero/> */}

      {/* <ProductSlider/><OurProduct/> */}
      <ProductConsumption />

      <div>
        <section className="relative bg-[#f5ebda] py-4 md:px-[24px]">
     {/* <Wave
    position="bottom"
    fill="#f9e4bf"
  /> */}

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
            {/* <ProductGrid products={products.slice(0, 4)} /> */}



            {/* Products */}
            {/* Products */}
            <div className="relative">

              {/* Desktop Slider */}
              <div
                id="best-selling-slider"
                className="hidden lg:block overflow-hidden"
              >
                <div
                  id="best-selling-track"
                  className="flex gap-5 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {products.map((product) => (
                    <div
                      key={product._id}
                      className="shrink-0 w-[calc((100%-60px)/4)]"
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile */}
              <div className="lg:hidden">
                <ProductGrid products={products.slice(0, 4)} />
              </div>

              {/* Desktop Buttons */}
              <div className="hidden lg:flex absolute -top-16 right-0 gap-2">

                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("best-selling-track")
                      ?.scrollBy({
                        left: -350,
                        behavior: "smooth",
                      })
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#572340] text-white shadow-md transition hover:scale-105"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("best-selling-track")
                      ?.scrollBy({
                        left: 350,
                        behavior: "smooth",
                      })
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#572340] text-white shadow-md transition hover:scale-105"
                >
                  →
                </button>

              </div>

            </div>




            {/* Button */}
            <div className="mt-12 flex justify-center">
              <Link
                to="/products"
                className="inline-flex hover:text-black items-center justify-center rounded-full bg-pink-600 md:px-8 px-4 py-2 md:py-3 font-semibold text-white border-[0.5px] border-black shadow-[1px_2px_0px_#000] sm:shadow-[2px_3px_0px_#000] transition-all duration-300 hover:scale-105 hover:bg-[#60b396] hover:shadow-[3px_4px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_3px_0px_#000]">
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
      <QucikMarket/>
      <Testimonials />
      <FAQPage />
    </div>
  )
}

export default Home