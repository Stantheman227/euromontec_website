import React from 'react'

const MaschinenbauIndustriemechanik = () => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Maschinenbau / Industriemechanik
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Erfahrene Maschinenbauer und Industriemechaniker für Ihre Produktions- und Fertigungsprozesse.
          </p>
        </div>

        {/* Content Section */}
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

