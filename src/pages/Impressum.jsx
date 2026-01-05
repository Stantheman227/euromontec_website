import React from 'react'

const Impressum = () => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Impressum
          </h1>
        </div>

        {/* Content Section */}
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Euromontec Personalmanagement GmbH</h2>
            <p className="mb-2">Parkstraße 1</p>
            <p className="mb-4">02826 Görlitz</p>
            
            <p className="mb-2">Handelsregister: HRB 47350</p>
            <p className="mb-4">Registergericht: Dresden</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Vertreten durch:</h2>
            <p className="mb-2">Cezary Gosiewski & Gerriet Cornelius</p>
            <p className="mb-2">Parkstraße 1</p>
            <p className="mb-4">02826 Görlitz</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Kontakt</h2>
            <p className="mb-2">Telefon: +49 (0) 3581 / 4391400</p>
            <p className="mb-4">E-Mail: info@euromontec.de</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            </h2>
            <p className="mb-4">DE 45 905 4975</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Redaktionell verantwortlich</h2>
            <p className="mb-2">Euromontec Personalmanagement GmbH</p>
            <p className="mb-2">Parkstraße 1</p>
            <p className="mb-4">02826 Görlitz</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">EU-Streitschlichtung</h2>
            <p className="mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              <a 
                href="https://ec.europa.eu/consumers/odr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline ml-1"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .
            </p>
            <p className="mb-4">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p className="mb-4">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Impressum

