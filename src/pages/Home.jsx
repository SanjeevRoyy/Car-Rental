import React from 'react'
import HomeSection from './home/HomeSection'
import Services from './services/Services'
import About from './about/About'
import Vehicles from './vehicles/Vehicles'
import OurApp from './faq/OurApp'
import Testimonials from './testimonials/Testimonials'


const Home = () => {
  return (
    <>
      <HomeSection/>
      <Services/>
      <About/>
      <Vehicles/>
      <OurApp/>
      <Testimonials/>
    </>
  )
}

export default Home
