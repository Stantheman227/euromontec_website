import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import Benefits from '../components/sections/Benefits'
import BannerStatistics from '../components/sections/BannerStatistics'
import Services from '../components/sections/Services'
import BannerJumpingman from '../components/sections/BannerJumpingman'
import FAQ from '../components/sections/FAQ'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    // Handle hash scrolling when component mounts or hash changes
    if (location.hash === '#services') {
      setTimeout(() => {
        const servicesSection = document.getElementById('services')
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [location.hash])

  return (
    <>
      <Hero />
      <Benefits />
      <BannerStatistics />
      <Services />
      <BannerJumpingman />
      <FAQ />
    </>
  )
}

export default Home

