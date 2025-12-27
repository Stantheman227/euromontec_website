import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Euromontec - Personalmanagement GmbH</h3>
            <p className="text-sm leading-relaxed">
                Ihr zuverlässiger Partner für flexible Mitarbeiterüberlassung und Personalvermittlung im Handwerk.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Arbeitnehmerüberlassung</a></li>
              <li><a href="#" className="hover:text-white transition">Personalvermittlung</a></li>
              <li><a href="#" className="hover:text-white transition">Arbeitnehmerüberlassung mit Übernahmeoption</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Über uns</a></li>
              <li><a href="#" className="hover:text-white transition">Karriere</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Kontaktinformationen</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@euromontec.de</li>
              <li>Phone: +49 (0) 3581 / 4391400</li>
              <li>Address: Parkstraße 1, 02826 Görlitz </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2025 Euromontec. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
