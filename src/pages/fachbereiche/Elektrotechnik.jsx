import React from 'react'

const Elektrotechnik = () => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Elektrotechnik
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Qualifizierte Elektrotechniker für Installation, Wartung und Instandhaltung elektrischer Anlagen.
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Im Bereich Elektrotechnik vermitteln wir erfahrene Fachkräfte, die über fundierte Kenntnisse in der Installation, Wartung und Reparatur elektrischer Systeme und Anlagen verfügen.
            </p>
            
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
              Unsere Leistungen
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Elektriker für Installation und Montage</li>
              <li>Fachkräfte für Steuerungs- und Regelungstechnik</li>
              <li>Elektroniker für Betriebstechnik und Automatisierung</li>
              <li>Spezialisten für Wartung und Instandhaltung</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              Unsere vermittelten Elektrotechniker verfügen über die notwendigen Qualifikationen und Zertifizierungen. Sie unterstützen Sie bei Projekten aller Art – von der Hausinstallation bis zur komplexen Industrieanlage.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Elektrotechnik

