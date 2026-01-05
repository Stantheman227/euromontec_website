import React, { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const About = () => {
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const valuesRef = useRef(null);

  const headerVisible = useIntersectionObserver(headerRef, { threshold: 0.3 });
  const contentVisible = useIntersectionObserver(contentRef, { threshold: 0.2 });
  const valuesVisible = useIntersectionObserver(valuesRef, { threshold: 0.2 });

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Zuverlässigkeit",
      description: "Wir stehen für verlässliche Partnerschaften und langfristige Zusammenarbeit."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      title: "Persönliche Betreuung",
      description: "Individuelle Beratung und enge Zusammenarbeit mit jedem Kunden und Mitarbeiter."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Transparenz & Vertrauen",
      description: "Offene Kommunikation und ehrliche Zusammenarbeit auf Augenhöhe."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443a55.381 55.381 0 015.25 2.882v3.675m-9.75 0h9.75" />
        </svg>
      ),
      title: "Nachhaltige Lösungen",
      description: "Langfristige Perspektiven für alle Beteiligten durch gezielte Entwicklung."
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-200">
      {/* Hero Header Section */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={headerRef}
            className={`text-center transition-all duration-700 ease-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-4">
              Über Euromontec
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Ihr Partner für <span className="text-primary-600">Jobs & Arbeitnehmerüberlassung</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Lernen Sie Euromontec kennen. Ihr zuverlässiger Partner für moderne Zeitarbeit und individuelle Personallösungen in der Industrie und im Handwerk.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={contentRef}
            className={`transition-all duration-700 ease-out delay-150 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="space-y-8 md:space-y-10">
              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Unsere Mission
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Die <strong className="text-gray-900">Euromontec Personalmanagement GmbH</strong> ist ein zuverlässiger Partner für moderne Zeitarbeit und individuelle Personallösungen. Unser Ziel ist es, Unternehmen flexibel, schnell und passgenau mit qualifizierten Fach- und Hilfskräften zu unterstützen und gleichzeitig Arbeitnehmern sichere Perspektiven und faire Arbeitsbedingungen zu bieten.
                </p>
              </div>

              {/* Experience */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Langjährige Erfahrung
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Mit langjähriger Erfahrung im Bereich Arbeitnehmerüberlassung verbinden wir Menschen und Unternehmen erfolgreich miteinander. Unser Team kennt die Anforderungen des Arbeitsmarktes genau und reagiert flexibel auf individuelle Bedürfnisse.
                </p>
              </div>

              {/* Approach */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Unser Ansatz
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Durch gezielte Auswahl, Betreuung und Entwicklung unserer Mitarbeiter schaffen wir nachhaltige Lösungen, die für alle Beteiligten Mehrwert bieten. Euromontec Personalmanagement GmbH steht für Zuverlässigkeit, Engagement und partnerschaftliche Zusammenarbeit,heute und in Zukunft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={valuesRef}
            className={`transition-all duration-700 ease-out delay-300 ${
              valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Unsere <span className="text-primary-600">Werte</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Wir legen großen Wert auf persönliche Betreuung, Transparenz und Vertrauenegenüber unseren Kunden als auch gegenüber unseren Mitarbeitenden.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary-200"
                >
                  <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
