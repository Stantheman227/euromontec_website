import React from 'react'

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-gray-100 p-5 md:p-6 text-left h-full">
    <div className="mb-5 md:mb-6 flex justify-start">
      {icon}
    </div>
    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">{title}</h3>
    <p className="text-base text-gray-600 leading-relaxed">{description}</p>
  </div>
)

export default ServiceCard

