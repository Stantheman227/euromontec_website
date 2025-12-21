import React, { useState } from 'react'
import logo from '../../assets/logo-transparent-png.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="cursor-pointer">
              <img 
                src={logo} 
                alt="Euromontec" 
                className="h-[3.125rem] md:h-[3.75rem] w-auto"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Für Bewerber - Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-primary-600 transition flex items-center gap-1">
                Für Bewerber
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                  <a href="#jobs" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition">
                    Stellenangebote
                  </a>
                  <a href="#bewerbung" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition">
                    Bewerbung
                  </a>
                  <a href="#karriere" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition">
                    Karriere
                  </a>
                </div>
              )}
            </div>
            
            <a href="#fachbereiche" className="text-gray-700 hover:text-primary-600 transition">Fachbereiche</a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 transition">Über uns</a>
            <a href="#kontakt" className="text-gray-700 hover:text-primary-600 transition">Kontakt</a>
            
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition">
              Für Unternehmen
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <a href="#bewerber" className="block text-gray-700 hover:text-primary-600">Für Bewerber</a>
            <a href="#fachbereiche" className="block text-gray-700 hover:text-primary-600">Fachbereiche</a>
            <a href="#about" className="block text-gray-700 hover:text-primary-600">Über uns</a>
            <a href="#kontakt" className="block text-gray-700 hover:text-primary-600">Kontakt</a>
            <button className="w-full bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700">
              Für Unternehmen
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
