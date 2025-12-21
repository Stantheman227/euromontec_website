import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Wie schnell können Sie qualifizierte Handwerker vermitteln?",
      answer: "In der Regel können wir innerhalb von 2-5 Werktagen qualifizierte Fachkräfte für Ihre Baustelle bereitstellen. Die genaue Dauer hängt von der spezifischen Anforderung und Verfügbarkeit ab."
    },
    {
      question: "Welche Qualifikationen haben die vermittelten Handwerker?",
      answer: "Alle von uns vermittelten Handwerker werden sorgfältig geprüft. Wir überprüfen ihre Qualifikationen, Referenzen und Erfahrungen, um sicherzustellen, dass sie den höchsten Standards entsprechen."
    },
    {
      question: "Wie flexibel sind die Einsätze?",
      answer: "Wir bieten maximale Flexibilität - von kurzfristigen Einsätzen für einzelne Projekte bis hin zu langfristigen Kooperationen. Die Dauer und der Umfang werden individuell auf Ihre Bedürfnisse angepasst."
    },
    {
      question: "Welche Kosten entstehen für mich?",
      answer: "Unsere Preise sind transparent und werden individuell auf Ihr Projekt zugeschnitten. Kontaktieren Sie uns für ein unverbindliches Angebot, das auf Ihre spezifischen Anforderungen zugeschnitten ist."
    },
    {
      question: "Was passiert, wenn ein Handwerker nicht passt?",
      answer: "Ihre Zufriedenheit ist unser oberstes Ziel. Falls ein Handwerker nicht Ihren Erwartungen entspricht, tauschen wir ihn schnellstmöglich aus, ohne zusätzliche Kosten für Sie."
    },
    {
      question: "Bieten Sie auch langfristige Personalvermittlung an?",
      answer: "Ja, wir unterstützen Sie sowohl bei kurzfristigen Projekten als auch bei langfristigen Personalbedarfen. Wir entwickeln maßgeschneiderte Lösungen, die zu Ihrem Unternehmen passen."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-4 md:mb-6">
            Häufig gestellte Fragen
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Fragen & <span className="text-primary-600">Antworten</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:border-primary-600 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
              >
                <span className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-primary-600 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

