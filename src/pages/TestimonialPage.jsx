import React from 'react'

import AppNavBar from '../components/AppNavBar'
import Footer from '../components/footer/Footer'
import NewsLetter from "../components/newsletter/NewsLetter"
import Testimonial from '../components/testimonials/Testimonial'

const TestimonialPage = () => {
  return (
    <div>
      <AppNavBar/>
      <Testimonial/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default TestimonialPage