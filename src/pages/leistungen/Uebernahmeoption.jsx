import React from 'react'
import image11 from '../../assets/images/image11.jpg'

const Uebernahmeoption = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-200">
      {/* Hero Section */}
      <section className="relative h-[60vh] max-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={image11}
            alt="Arbeitnehmerüberlassung mit Übernahmeoption"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Arbeitnehmerüberlassung mit Übernahmeoption
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Die Arbeitnehmerüberlassung mit Übernahmeoption bietet Ihnen die ideale Möglichkeit, neue Mitarbeiter zunächst in der Praxis kennenzulernen, bevor Sie eine langfristige Entscheidung treffen. Diese flexible Lösung ermöglicht es Ihnen, die Eignung und das Potenzial von Fachkräften zu prüfen, während Sie gleichzeitig von ihrer Expertise profitieren.
            </p>
            
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
              Unsere Leistungen
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Vermittlung qualifizierter Fachkräfte mit Übernahmeoption</li>
              <li>Flexible Testphase zur Bewährung in der Praxis</li>
              <li>Reibungsloser Übergang von Zeitarbeit zur Festanstellung</li>
              <li>Unterstützung bei allen administrativen Schritten</li>
              <li>Individuelle Gestaltung der Übernahmebedingungen</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
              Vorteile für Arbeitgeber
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Praxisnahe Bewährung vor der Festanstellung</li>
              <li>Reduziertes Einstellungsrisiko durch vorherige Zusammenarbeit</li>
              <li>Nahtloser Übergang ohne Unterbrechung der Arbeitsleistung</li>
              <li>Flexibilität bei der Entscheidung über eine Übernahme</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
              Vorteile für Arbeitnehmer
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Möglichkeit, das Unternehmen und die Aufgaben kennenzulernen</li>
              <li>Chance auf eine langfristige Perspektive</li>
              <li>Reibungsloser Übergang zur Festanstellung</li>
              <li>Professionelle Begleitung während der gesamten Phase</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              Unsere Arbeitnehmerüberlassung mit Übernahmeoption ist die perfekte Lösung für Unternehmen und Fachkräfte, die eine langfristige Zusammenarbeit anstreben, aber zunächst Sicherheit und Flexibilität wünschen. Wir begleiten Sie durch den gesamten Prozess und sorgen für eine erfolgreiche Integration in Ihr Unternehmen.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Uebernahmeoption

