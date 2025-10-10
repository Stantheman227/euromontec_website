import React from 'react'

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Workforce?
        </h2>
        <p className="text-xl text-primary-100 mb-10 leading-relaxed">
          Let's discuss how our employee leasing solutions can help your business grow. 
          Get in touch with our team today for a free consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition shadow-lg">
            Schedule a Call
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA
