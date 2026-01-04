import React from 'react'
import image11 from '../../assets/images/image11.jpg'

const Personalvermittlung = () => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] max-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={image11}
            alt="Personalvermittlung"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Personalvermittlung
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Unsere Personalvermittlung verbindet qualifizierte Fachkräfte mit passenden Arbeitgebern. Wir verstehen die Anforderungen beider Seiten und sorgen für eine erfolgreiche und langfristige Zusammenarbeit. Mit unserem umfassenden Netzwerk und unserer langjährigen Erfahrung finden wir die perfekte Lösung für Ihre Personalbedürfnisse.
            </p>
            
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
              Unsere Leistungen
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Gezielte Suche nach passenden Kandidaten für Ihre Stellenausschreibungen</li>
              <li>Umfassende Bewerberauswahl und Vorabprüfung der Qualifikationen</li>
              <li>Professionelle Beratung bei der Stellenbesetzung</li>
              <li>Unterstützung während des gesamten Einstellungsprozesses</li>
              <li>Vermittlung von Fachkräften aller Qualifikationsebenen</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
              Unser Vorgehen
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Detaillierte Analyse Ihrer Anforderungen und Unternehmenskultur</li>
              <li>Aktive Suche in unserem umfangreichen Kandidatenpool</li>
              <li>Gründliche Vorauswahl und Qualifikationsprüfung</li>
              <li>Vermittlung passender Kandidaten für Vorstellungsgespräche</li>
              <li>Begleitung bis zur erfolgreichen Einstellung</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              Ob Sie auf der Suche nach neuen Mitarbeitern sind oder als Fachkraft den nächsten Karriereschritt planen – unsere Personalvermittlung schafft die Verbindung zwischen Talenten und Chancen. Wir legen Wert auf Transparenz, Vertrauen und eine nachhaltige Zusammenarbeit, die für beide Seiten erfolgreich ist.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Personalvermittlung

