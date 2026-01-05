import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'
import Arbeitnehmerüberlassung from './pages/leistungen/Arbeitnehmerüberlassung'
import Personalvermittlung from './pages/leistungen/Personalvermittlung'
import Uebernahmeoption from './pages/leistungen/Uebernahmeoption'
import About from './pages/About'
import Impressum from './pages/Impressum'
import SchweisstechnikMetallbau from './pages/fachbereiche/SchweisstechnikMetallbau'
import MaschinenbauIndustriemechanik from './pages/fachbereiche/MaschinenbauIndustriemechanik'
import Elektrotechnik from './pages/fachbereiche/Elektrotechnik'
import ProduktionFertigung from './pages/fachbereiche/ProduktionFertigung'

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
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/fachbereiche/schweisstechnik-metallbau" element={<SchweisstechnikMetallbau />} />
        <Route path="/fachbereiche/maschinenbau-industriemechanik" element={<MaschinenbauIndustriemechanik />} />
        <Route path="/fachbereiche/elektrotechnik" element={<Elektrotechnik />} />
        <Route path="/fachbereiche/produktion-fertigung" element={<ProduktionFertigung />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
