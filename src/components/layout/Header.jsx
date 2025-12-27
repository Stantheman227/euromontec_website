import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const menuItems = [
  { 
    itemName: 'Unsere Leistungen', 
    route: '#', 
    htmlTag: 'a',
    submenu: [
      { itemName: 'Arbeitnehmerüberlassung', route: '/arbeitnehmeruberlassung', htmlTag: 'Link' },
      { itemName: 'Personalvermittlung', route: '/personalvermittlung', htmlTag: 'Link' },
      { itemName: 'Arbeitnehmerüberlassung mit Übernahmeoption', route: '/uebernahmeoption', htmlTag: 'Link' }
    ]
  },
  { 
    itemName: 'Fachbereiche', 
    route: '#', 
    htmlTag: 'a',
    submenu: [
      { itemName: 'Schweißtechnik', route: '/fachbereiche/schweisstechnik', htmlTag: 'Link' },
      { itemName: 'Metallbau / Schlosserarbeiten', route: '/fachbereiche/metallbau-schlosserarbeiten', htmlTag: 'Link' },
      { itemName: 'Elektrotechnik', route: '/fachbereiche/elektrotechnik', htmlTag: 'Link' },
      { itemName: 'Zerspanungstechnik / CNC', route: '/fachbereiche/zerspanungstechnik-cnc', htmlTag: 'Link' },
      { itemName: 'Maschinenbau / Industriemechanik', route: '/fachbereiche/maschinenbau-industriemechanik', htmlTag: 'Link' },
      { itemName: 'Produktion / Fertigung', route: '/fachbereiche/produktion-fertigung', htmlTag: 'Link' }
    ]
  },
  { itemName: 'Über uns', route: '/ueber-uns', htmlTag: 'Link' },
  { itemName: 'Kontakt', route: '/kontakt', htmlTag: 'Link' }
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const handleMouseEnter = (index) => {
    if (menuItems[index].submenu) {
      setOpenDropdown(index)
    }
  }

  const handleMouseLeave = () => {
    setOpenDropdown(null)
  }

  const renderMenuItem = (item, index, isMobile = false) => {
    const baseClasses = isMobile 
      ? 'block text-gray-700 hover:text-primary-600'
      : 'text-gray-700 hover:text-primary-600 transition relative'
    
    const hasSubmenu = item.submenu && item.submenu.length > 0
    const isDropdownOpen = openDropdown === index

    const renderSubmenuItem = (subItem, subIndex, totalItems) => {
      const isLastItem = subIndex === totalItems - 1
      const separatorClass = isLastItem ? '' : 'border-b border-gray-200'
      
      switch (subItem.htmlTag) {
        case 'a':
          return (
            <a 
              key={subItem.itemName} 
              href={subItem.route} 
              className={`flex items-start px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition ${separatorClass}`}
            >
              <span className="mr-2 flex-shrink-0 mt-0.5">•</span>
              <span className="flex-1">{subItem.itemName}</span>
            </a>
          )
        case 'Link':
          return (
            <Link 
              key={subItem.itemName} 
              to={subItem.route} 
              className={`flex items-start px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition ${separatorClass}`}
            >
              <span className="mr-2 flex-shrink-0 mt-0.5">•</span>
              <span className="flex-1">{subItem.itemName}</span>
            </Link>
          )
        default:
          return null
      }
    }
    
    switch (item.htmlTag) {
      case 'a':
        return (
          <div 
            key={item.itemName}
            className="relative h-full flex items-center"
            onMouseEnter={() => !isMobile && handleMouseEnter(index)}
            onMouseLeave={() => !isMobile && handleMouseLeave()}
          >
            <a 
              href={hasSubmenu ? '#' : item.route}
              onClick={(e) => {
                if (hasSubmenu) {
                  e.preventDefault()
                }
              }}
              className={`${baseClasses} flex items-center gap-1 h-full`}
            >
              {item.itemName}
              {hasSubmenu && !isMobile && (
                <svg 
                  className="w-4 h-4 transition-transform"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </a>
            {hasSubmenu && !isMobile && (
              <>
                {/* Invisible spacer to maintain hover area between header and dropdown */}
                <div 
                  className={`absolute left-0 top-full w-56 h-2 z-40 transition-opacity duration-500 ${
                    isDropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                />
                {/* Dropdown menu */}
                <div 
                  className={`absolute left-0 top-[calc(100%)] w-56 bg-white rounded-b-lg shadow-lg border border-gray-100 overflow-hidden z-50 transition-all duration-500 ease ${
                    isDropdownOpen 
                      ? 'opacity-100 max-h-[400px] pointer-events-auto' 
                      : 'opacity-0 max-h-0 pointer-events-none'
                  }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="py-2">
                    {item.submenu.map((subItem, subIndex) => renderSubmenuItem(subItem, subIndex, item.submenu.length))}
                  </div>
                </div>
              </>
            )}
          </div>
        )
      case 'Link':
        return (
          <div 
            key={item.itemName}
            className="relative h-full flex items-center"
            onMouseEnter={() => !isMobile && handleMouseEnter(index)}
            onMouseLeave={() => !isMobile && handleMouseLeave()}
          >
            <Link 
              to={hasSubmenu ? '#' : item.route}
              onClick={(e) => {
                if (hasSubmenu) {
                  e.preventDefault()
                }
              }}
              className={`${baseClasses} flex items-center gap-1 h-full`}
            >
              {item.itemName}
              {hasSubmenu && !isMobile && (
                <svg 
                  className="w-4 h-4 transition-transform"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </Link>
            {hasSubmenu && !isMobile && (
              <>
                {/* Invisible spacer to maintain hover area between header and dropdown */}
                <div 
                  className={`absolute left-0 top-full w-56 h-2 z-40 transition-opacity duration-500 ${
                    isDropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                />
                {/* Dropdown menu */}
                <div 
                  className={`absolute left-0 top-[calc(100%+0.5rem)] w-56 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden z-50 transition-all duration-500 ease ${
                    isDropdownOpen 
                      ? 'opacity-100 max-h-[400px] pointer-events-auto' 
                      : 'opacity-0 max-h-0 pointer-events-none'
                  }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="py-2">
                    {item.submenu.map((subItem, subIndex) => renderSubmenuItem(subItem, subIndex, item.submenu.length))}
                  </div>
                </div>
              </>
            )}
          </div>
        )
      case 'button':
        const buttonClasses = isMobile
          ? 'w-full bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700'
          : 'bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition'
        return (
          <button key={item.itemName} className={buttonClasses}>
            {item.itemName}
          </button>
        )
      default:
        return null
    }
  }

  return (
    <header className="fixed w-full bg-white backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="cursor-pointer">
              <div className="relative">
                <p className="text-2xl md:text-3xl text-gray-900 tracking-tight italic">
                  <span className="font-bold text-primary-600">euro</span>montec
                </p>
                <p className="absolute top-[55%] right-[-10%] mt-1 font-mailman text-gray-900 text-lg md:text-xl">
                  Personalmanagement
                </p>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex h-full items-center space-x-8">
            {menuItems.map((item, index) => renderMenuItem(item, index, false))}
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
            {menuItems.map((item, index) => renderMenuItem(item, index, true))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
