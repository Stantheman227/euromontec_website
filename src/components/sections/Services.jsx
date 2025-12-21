import React from 'react'

const Services = () => {
  const services = [
    {
      title: "Personalvermittlung",
      description: "Wir vermitteln qualifizierte Fachkräfte schnell und zuverlässig. Unser Netzwerk umfasst erfahrene Handwerker und Spezialisten, die genau zu Ihren Anforderungen passen. Von der ersten Anfrage bis zur erfolgreichen Vermittlung begleiten wir Sie professionell."
    },
    {
      title: "Temp to Perm",
      description: "Unsere Temp-to-Perm-Lösung bietet Ihnen die Flexibilität, Mitarbeiter zunächst temporär zu beschäftigen und bei Bedarf in ein festes Arbeitsverhältnis zu überführen. So können Sie die Eignung der Kandidaten in der Praxis prüfen, bevor Sie eine langfristige Entscheidung treffen."
    },
    {
      title: "On-Site-Management",
      description: "Mit unserem On-Site-Management übernehmen wir die komplette Betreuung Ihrer externen Mitarbeiter direkt vor Ort. Wir kümmern uns um alle administrativen Aufgaben, die Koordination und sorgen für reibungslose Abläufe, damit Sie sich auf Ihr Kerngeschäft konzentrieren können."
    }
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => {
            const isEven = index % 2 === 1 // Row 2 (index 1) is even position
            const isImageLeft = !isEven // Row 1 and 3 have image on left
            
            return (
              <div
                key={index}
                className={`flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
                    <div className="text-center p-8">
                      <svg className="w-32 h-32 md:w-48 md:h-48 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm text-gray-500 mt-4">Bild: {service.title}</p>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services

