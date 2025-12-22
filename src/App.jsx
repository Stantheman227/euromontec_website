import React from 'react'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Benefits from './components/sections/Benefits'
import BannerStatistics from './components/sections/BannerStatistics'
import Services from './components/sections/Services'
import BannerJumpingman from './components/sections/BannerJumpingman'
import FAQ from './components/sections/FAQ'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      <Hero />
      <Benefits />
      <BannerStatistics />
      <Services />
      <BannerJumpingman />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
