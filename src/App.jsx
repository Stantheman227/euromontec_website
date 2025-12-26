import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'

function App() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/kontakt/danke" element={<ThankYou />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
