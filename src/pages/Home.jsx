import React from 'react'
import HomeSection from './home/HomeSection'
import Services from './services/Services'
import About from './about/About'
import Vehicles from './vehicles/Vehicles'


const Home = () => {
  return (
    <>
      <HomeSection/>
      <Services/>
      <About/>
      <Vehicles/>
    </>
  )
}

export default Home
