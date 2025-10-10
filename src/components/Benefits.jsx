import React from 'react'

const Benefits = () => {
  const benefits = [
    { number: "01", title: "Cost Efficiency", description: "Reduce overhead costs associated with full-time employees" },
    { number: "02", title: "Flexibility", description: "Scale your workforce up or down based on business demands" },
    { number: "03", title: "Reduced Risk", description: "We handle compliance, payroll, and HR administration" },
    { number: "04", title: "Quick Access", description: "Fast deployment of qualified professionals when you need them" }
  ]

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Employee Leasing?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Employee leasing offers businesses the flexibility to adapt quickly to market changes 
              while maintaining access to top talent. Focus on your core business while we handle 
              the complexities of workforce management.
            </p>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="text-4xl font-bold text-primary-200">{benefit.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-[600px] flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-48 h-48 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
