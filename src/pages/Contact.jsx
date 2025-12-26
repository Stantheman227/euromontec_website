import React from 'react'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Kontakt
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nehmen Sie Kontakt mit uns auf – wir beantworten Ihre Fragen rund um Jobs & Personalvermittlung im Handwerk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-6">
              Kontaktinformationen
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">E-Mail</h3>
                <p>info@euromontec.de</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                <p>+49 (0) XXX XXX XXX</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                <p>
                  Euromontec GmbH<br />
                  Musterstraße 123<br />
                  12345 Musterstadt
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-6">
              Nachricht senden
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

