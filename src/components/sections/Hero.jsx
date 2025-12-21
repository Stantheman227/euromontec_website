import React from 'react'
import heroVideo from '../../assets/Euromontec_video_1.mp4'

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Company Name */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-12 tracking-tight uppercase italic">
          Euromontec
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="bg-primary-600 text-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-primary-700 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 w-full sm:w-auto min-w-[250px] opacity-60 hover:opacity-100 ">
            Für Jobsuchende
          </button>
          <button className="bg-white text-gray-900 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 w-full sm:w-auto min-w-[250px] opacity-60 hover:opacity-100">
            Für Unternehmen
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
