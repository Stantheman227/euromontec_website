import React from 'react'
import image11 from '../../assets/images/image11.jpg'

const Arbeitnehmerüberlassung = () => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] max-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={image11}
            alt="Arbeitnehmerüberlassung"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Arbeitnehmerüberlassung
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Die Arbeitnehmerüberlassung bietet Ihnen maximale Flexibilität bei der Personalplanung. Wir überlassen Ihnen qualifizierte Fachkräfte für den Zeitraum, den Sie benötigen – ob für kurzfristige Projekte, saisonale Spitzenzeiten oder langfristige Unterstützung. Als Ihr zuverlässiger Partner übernehmen wir alle administrativen Aufgaben und sorgen für eine reibungslose Zusammenarbeit.
            </p>
            
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
              Unsere Leistungen
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Schnelle Vermittlung qualifizierter Fachkräfte</li>
              <li>Flexible Einsatzzeiten nach Ihren Bedürfnissen</li>
              <li>Übernahme aller arbeitsrechtlichen Verpflichtungen</li>
              <li>Professionelle Betreuung während des gesamten Einsatzes</li>
              <li>Unterstützung bei Projekten aller Größenordnungen</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
              Vorteile für Ihr Unternehmen
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Reaktionsschnelle Personalplanung ohne langfristige Verpflichtungen</li>
              <li>Reduzierung von Personalkosten und administrativem Aufwand</li>
              <li>Zugang zu spezialisierten Fachkräften aus unserem Netzwerk</li>
              <li>Möglichkeit zur Übernahme bewährter Mitarbeiter</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              Unsere Arbeitnehmerüberlassung ist die ideale Lösung für Unternehmen, die flexibel auf schwankende Auftragslagen reagieren müssen oder zusätzliche Kapazitäten für spezielle Projekte benötigen. Wir vermitteln Ihnen zuverlässige Fachkräfte, die sich schnell in Ihre Prozesse einarbeiten und sofort produktiv einsetzbar sind.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Arbeitnehmerüberlassung

