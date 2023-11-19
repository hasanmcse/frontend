import React from 'react'
import AppNavBar from '../components/AppNavBar'
import Footer from "../components/footer/Footer"
import Newsletter from '../components/newsletter/NewsLetter'
import HeroSection from '../components/herosection/HeroSection'
import WorkList from "../components/worklist/WorkList"
import FeaturedProduct from '../components/featuredproduct/FeaturedProduct'

const HomePage = () => {
  return (
    <div>
      <AppNavBar/>
     <HeroSection/>
     <WorkList/>
     <FeaturedProduct/>

      <Newsletter/>
     <Footer/>
    </div>
  )
}

export default HomePage