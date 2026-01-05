import React from 'react'

const About = () => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Über uns
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lernen Sie Euromontec kennen. Ihr Partner für Personalvermittlung und Arbeitnehmerüberlassung in der Industrie und Handwerk.
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Hier finden Sie zukünftig Informationen über unser Unternehmen, unsere Werte und unsere Mission.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

