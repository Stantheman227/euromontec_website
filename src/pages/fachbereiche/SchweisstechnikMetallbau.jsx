import React from 'react'

const SchweisstechnikMetallbau = () => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Schweißtechnik / Metallbau
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Qualifizierte Fachkräfte für Schweiß- und Metallbauarbeiten – präzise, zuverlässig und professionell.
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              In den Bereichen Schweißtechnik und Metallbau vermitteln wir erfahrene Fachkräfte, die über umfassende Kenntnisse in verschiedenen Schweißverfahren und Metallbearbeitungstechniken verfügen.
            </p>
            
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
              Unsere Leistungen
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Schweißer für verschiedene Verfahren (MIG, MAG, WIG, E-Hand)</li>
              <li>Metallbauer und Schlosser für Konstruktionsarbeiten</li>
              <li>Fachkräfte für Stahl- und Metallbau</li>
              <li>Spezialisten für Blechbearbeitung und Montage</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              Unsere vermittelten Fachkräfte verfügen über langjährige Erfahrung und entsprechende Zertifizierungen. Sie unterstützen Sie bei Projekten aller Größenordnungen – von der Einzelfertigung bis zur Serienproduktion.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchweisstechnikMetallbau

