import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">TalentBridge</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary-600 transition">Services</a>
            <a href="#benefits" className="text-gray-700 hover:text-primary-600 transition">Benefits</a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 transition">About</a>
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition">
              Contact Us
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <a href="#services" className="block text-gray-700 hover:text-primary-600">Services</a>
            <a href="#benefits" className="block text-gray-700 hover:text-primary-600">Benefits</a>
            <a href="#about" className="block text-gray-700 hover:text-primary-600">About</a>
            <button className="w-full bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700">
              Contact Us
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
