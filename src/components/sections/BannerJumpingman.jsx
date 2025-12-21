import React from 'react'
import jumpingImage from '../../assets/images/jumping.jpg'

const BannerJumpingman = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={jumpingImage}
          alt="Springender Mann"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Bereit für den <span className="text-primary-600">Wandel</span> Ihrer Belegschaft?
        </h2>
        <p className="text-xl text-primary-100 mb-10 leading-relaxed">
          Lassen Sie uns besprechen, wie unsere Arbeitnehmerüberlassungslösungen Ihrem Unternehmen beim Wachstum helfen können. 
          Kontaktieren Sie unser Team noch heute für eine kostenlose Beratung.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition shadow-lg">
            Termin vereinbaren
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition">
            Broschüre herunterladen
          </button>
        </div>
      </div>
    </section>
  )
}

export default BannerJumpingman

