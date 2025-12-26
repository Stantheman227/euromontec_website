import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const menuItems = [
  { 
    itemName: 'Unsere Leistungen', 
    route: '#', 
    htmlTag: 'a',
    submenu: [
      { itemName: 'Arbeitnehmerüberlassung', route: '/arbeitnehmeruberlassung', htmlTag: 'Link' },
      { itemName: 'Personalvermittlung', route: '/personalvermittlung', htmlTag: 'Link' },
      { itemName: 'Temp-to-Perm', route: '/temp-to-perm', htmlTag: 'Link' }
    ]
  },
  { itemName: 'Über uns', route: '#about', htmlTag: 'a' },
  { itemName: 'Kontakt', route: '/kontakt', htmlTag: 'Link' },
  { itemName: 'Für Unternehmen', route: '#', htmlTag: 'button' }
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredDropdown, setHoveredDropdown] = useState(null)
  const [expandedMobileDropdown, setExpandedMobileDropdown] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  const handleServicesClick = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      // We're on home, scroll to services section
      const servicesSection = document.getElementById('services')
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // We're on another route, navigate to home first
      navigate('/')
      setTimeout(() => {
        const servicesSection = document.getElementById('services')
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)

    }
  }

  const renderMenuItem = (item, index, isMobile = false) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0
    const isDropdownOpen = isMobile 
      ? expandedMobileDropdown === index
      : hoveredDropdown === index

    const baseClasses = isMobile 
      ? 'block text-gray-700 hover:text-primary-600'
      : 'text-gray-700 hover:text-primary-600 transition'
    
    const renderSubmenuItem = (subItem) => {
      switch (subItem.htmlTag) {
        case 'a':
          return (
            <a key={subItem.itemName} href={subItem.route} className={baseClasses}>
              {subItem.itemName}
            </a>
          )
        case 'Link':
          return (
            <Link key={subItem.itemName} to={subItem.route} className={baseClasses}>
              {subItem.itemName}
            </Link>
          )
        case 'button':
          const buttonClasses = isMobile
            ? 'w-full bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700'
            : 'bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition'
          return (
            <button key={subItem.itemName} className={buttonClasses}>
              {subItem.itemName}
            </button>
          )
        default:
          return null
      }
    }

    const renderMainItem = () => {
      // Special handling for "Unsere Leistungen" menu item
      if (item.itemName === 'Unsere Leistungen') {
        return (
          <a 
            href={item.route} 
            className={baseClasses}
            onClick={handleServicesClick}
          >
            {item.itemName}
          </a>
        )
      }

      switch (item.htmlTag) {
        case 'a':
          return (
            <a href={item.route} className={baseClasses}>
              {item.itemName}
            </a>
          )
        case 'Link':
          return (
            <Link to={item.route} className={baseClasses}>
              {item.itemName}
            </Link>
          )
        case 'button':
          const buttonClasses = isMobile
            ? 'w-full bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700'
            : 'bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition'
          return (
            <button className={buttonClasses}>
              {item.itemName}
            </button>
          )
        default:
          return null
      }
    }

    // If item has submenu, wrap in dropdown container
    if (hasSubmenu) {
      if (isMobile) {
        return (
          <div key={item.itemName} className="space-y-2">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                // Special handling for "Unsere Leistungen" - don't expand dropdown, handle click
                if (item.itemName === 'Unsere Leistungen') {
                  handleServicesClick(e)
                  return
                }
                setExpandedMobileDropdown(expandedMobileDropdown === index ? null : index)
              }}
            >
              <span className={baseClasses}>{item.itemName}</span>
              <svg 
                className={`w-4 h-4 text-gray-700 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {isDropdownOpen && (
              <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                {item.submenu.map(subItem => renderSubmenuItem(subItem))}
              </div>
            )}
          </div>
        )
      } else {
        return (
          <div 
            key={item.itemName}
            className="relative"
            onMouseEnter={() => setHoveredDropdown(index)}
            onMouseLeave={() => setHoveredDropdown(null)}
          >
            <div className="flex items-center space-x-1">
              {renderMainItem()}
              <svg 
                className="w-4 h-4 text-gray-700"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                {item.submenu.map(subItem => (
                  <div key={subItem.itemName} className="px-4 py-2 hover:bg-gray-50">
                    {renderSubmenuItem(subItem)}
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      }
    }

    // Regular menu item without submenu
    return (
      <div key={item.itemName}>
        {renderMainItem()}
      </div>
    )
  }

  return (
    <header className="fixed w-full bg-white backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="cursor-pointer">
              <div className="relative">
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight italic">
                  <span className="font-bold text-primary-600">euro</span>montec
                </h1>
                <p className="absolute top-[55%] right-0 mt-1 font-mailman text-gray-900 text-lg sm:text-xl md:text-2xl">
                  Personal
                </p>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
