import React from 'react'

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-5 md:p-6 text-left h-full rounded-lg lg:hover:scale-105 lg:transition-all lg:duration-300 relative overflow-hidden">
    {/* Blue stripes in top-right corner */}
    <div className="absolute top-0 right-0 rotate-[-90deg] w-24 h-24">
      <div className="absolute top-0 right-0 w-36 h-1.5  bg-primary-600 transform origin-top-right rotate-[-45deg]"></div>
      <div className="absolute top-4 right-0 w-36 h-1.5 bg-primary-600 transform origin-top-right rotate-[-45deg]"></div>
      <div className="absolute top-8 right-0 w-36 h-1.5 bg-primary-600 transform origin-top-right rotate-[-45deg]"></div>
    </div>
    
    <div className="mb-5 md:mb-6 flex justify-start">
      {icon}
    </div>
    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{title}</h3>
    <p className="text-base text-gray-600 leading-relaxed">{description}</p>
  </div>
)

export default ServiceCard

