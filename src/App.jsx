import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'
import Arbeitnehmerüberlassung from './pages/Arbeitnehmerüberlassung'
import Personalvermittlung from './pages/Personalvermittlung'
import Uebernahmeoption from './pages/Uebernahmeoption'
import About from './pages/About'

function App() {
  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/kontakt/danke" element={<ThankYou />} />
        <Route path="/arbeitnehmeruberlassung" element={<Arbeitnehmerüberlassung />} />
        <Route path="/personalvermittlung" element={<Personalvermittlung />} />
        <Route path="/uebernahmeoption" element={<Uebernahmeoption />} />
        <Route path="/ueber-uns" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
