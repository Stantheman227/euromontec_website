import React from 'react'
import ServiceCard from '../ui/ServiceCard'

const Benefits = () => {
  const services = [
    {
      icon: (
        <div className="w-14 h-14 flex items-center justify-center">
          <svg className="w-14 h-14 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      ),
      title: "Schnelle Vermittlung ohne Umschweife",
      description: "Innerhalb von Tagen sind qualifizierte Handwerker auf der Baustelle."
    },
    {
      icon: (
        <div className="w-14 h-14 rounded-full border-2 border-gray-900 flex items-center justify-center">
          <svg className="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      ),
      title: "Geprüfte Fachkräfte mit echtem Können",
      description: "Jeder Arbeiter wird überprüft, damit Sie wissen, wer kommt."
    },
    {
      icon: (
        <div className="w-14 h-14 rounded-full border-2 border-gray-900 flex items-center justify-center">
          <svg className="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      ),
      title: "Flexibilität für Ihre Projekte",
      description: "Kurze oder längere Einsätze, ganz wie Sie es brauchen."
    },
    {
      icon: (
        <div className="w-14 h-14 rounded-full border-2 border-gray-900 flex items-center justify-center">
          <svg className="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        </div>
      ),
      title: "Sicherheit & Qualität",
      description: "Höchste Sicherheitsstandards und Qualitätskontrolle bei allen Projekten."
    },
    {
      icon: (
        <div className="w-14 h-14 rounded-full border-2 border-gray-900 flex items-center justify-center">
          <svg className="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
          </svg>
        </div>
      ),
      title: "Maßgeschneiderte Lösungen",
      description: "Individuelle Anpassung an Ihre spezifischen Anforderungen und Bedürfnisse."
    }
  ]

  return (
    <section id="benefits" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="">
        <div className="text-left mb-10 md:mb-12 gap-4 md:gap-4 text-center">
          <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-4 md:mb-6">Wir bieten</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Maßgeschneiderte <span className="text-primary-600">Lösungen</span> nach ihren Anforderungen
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className={
                index < 3 
                  ? 'md:col-span-2' 
                  : index === 3 
                    ? 'md:col-span-3 md:col-start-1' 
                    : 'md:col-span-3 md:col-start-4'
              }
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
