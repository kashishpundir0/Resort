import React from 'react'
import Hero from '../components/Hero'
import About from './About'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
        {/* <h2>Welcome to Wisteria Chalet</h2> */}
        <Hero/>
        {/* <About/> */}
        <Features/>
        <Testimonials/>
    </div>
  )
}

export default Home