import React from 'react'
import '..//assets/css/bootstrap.css'
import AppNavBar from '../components/AppNavBar'
import Service from '../components/service/Service'
import Footer from '../components/footer/Footer'
import NewsLetter from "../components/newsletter/NewsLetter"

const ServicePage = () => {
  return (
    <div>
      <AppNavBar/>

        <Service/>  
        <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default ServicePage