import React from 'react'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import ExpertiseBanner from './components/sections/ExpertiseBanner'
import Benefits from './components/sections/Benefits'
import BannerJumpingman from './components/sections/BannerJumpingman'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <ExpertiseBanner />
      <Benefits />
      <BannerJumpingman />
      <Footer />
    </div>
  )
}

export default App
