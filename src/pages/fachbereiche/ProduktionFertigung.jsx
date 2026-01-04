import React from 'react'

const ProduktionFertigung = () => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Produktion / Fertigung
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Erfahrene Fachkräfte für Produktion und Fertigung – effizient, zuverlässig und qualitätsbewusst.
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Im Bereich Produktion und Fertigung vermitteln wir qualifizierte Fachkräfte, die über umfassende Erfahrung in verschiedenen Fertigungsprozessen und Produktionsabläufen verfügen.
            </p>
            
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
              Unsere Leistungen
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Fachkräfte für Serienfertigung und Massenproduktion</li>
              <li>Produktionsmitarbeiter für Montage und Endfertigung</li>
              <li>Qualitätsprüfer und Qualitätssicherung</li>
              <li>Fachkräfte für Logistik und Materialwirtschaft</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              Unsere vermittelten Fachkräfte unterstützen Sie dabei, Ihre Produktionsziele zu erreichen. Sie bringen Erfahrung in verschiedenen Branchen mit und passen sich schnell an Ihre Prozesse und Anforderungen an.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProduktionFertigung

