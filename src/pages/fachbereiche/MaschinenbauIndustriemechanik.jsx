import React from 'react'
import image11 from '../../assets/images/image11.jpg'

const MaschinenbauIndustriemechanik = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-200">
      {/* Hero Section */}
      <section className="relative h-[60vh] max-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={image11}
            alt="Maschinenbau / Industriemechanik"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Maschinenbau & Industriemechanik
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Im Bereich Maschinenbau und Industriemechanik vermitteln wir qualifizierte Fachkräfte, die über fundierte Kenntnisse in der Konstruktion, Fertigung und Instandhaltung von Maschinen und Anlagen verfügen.
            </p>
            
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
              Unsere Leistungen
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Maschinenbauer für Konstruktion und Entwicklung</li>
              <li>Industriemechaniker für Fertigung und Montage</li>
              <li>Fachkräfte für Maschineninstandhaltung und Wartung</li>
              <li>Spezialisten für Anlagenbau und -optimierung</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              Unsere vermittelten Fachkräfte bringen umfassende Erfahrung in verschiedenen Branchen mit und unterstützen Sie bei der Realisierung Ihrer Projekte – von der Planung bis zur Umsetzung.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MaschinenbauIndustriemechanik

