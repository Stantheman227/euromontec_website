import React from 'react'

const Arbeitnehmerüberlassung = () => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Arbeitnehmerüberlassung
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flexible Personallösungen für Ihr Unternehmen – wir vermitteln qualifizierte Fachkräfte für Ihre Projekte.
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Hier finden Sie Informationen zu unserem Arbeitnehmerüberlassungs-Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Arbeitnehmerüberlassung

