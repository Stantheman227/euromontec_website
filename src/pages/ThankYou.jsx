import React from 'react'
import { Link } from 'react-router-dom'

const ThankYou = () => {
  return (
    <div className="pt-16 min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="mb-8">
          <svg
            className="mx-auto h-16 w-16 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Vielen Dank!
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei Ihnen.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Zur Startseite
          </Link>
          <Link
            to="/kontakt"
            className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300"
          >
            Weitere Nachricht senden
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ThankYou

