import React, { useState, useEffect, useRef } from 'react'

const ExpertiseBanner = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    placements: 0,
    experience: 0,
    timeSavings: 0
  })
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  const targetValues = {
    projects: 500,
    placements: 1200,
    experience: 15,
    timeSavings: 80
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateCounters()
          }
        })
      },
      {
        threshold: 0.3
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [hasAnimated])

  const animateCounters = () => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0

    const animate = () => {
      if (currentStep <= steps) {
        const progress = currentStep / steps
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)

        setCounters({
          projects: Math.floor(targetValues.projects * easeOutQuart),
          placements: Math.floor(targetValues.placements * easeOutQuart),
          experience: Math.floor(targetValues.experience * easeOutQuart),
          timeSavings: Math.floor(targetValues.timeSavings * easeOutQuart)
        })

        currentStep++
        setTimeout(animate, stepDuration)
      } else {
        // Ensure final values are set
        setCounters({
          projects: targetValues.projects,
          placements: targetValues.placements,
          experience: targetValues.experience,
          timeSavings: targetValues.timeSavings
        })
      }
    }

    animate()
  }

  const stats = [
    {
      headline: "Erfolgreiche Projekte",
      value: counters.projects,
      suffix: "+"
    },
    {
      headline: "Zufrieden Vermittelte",
      value: counters.placements,
      suffix: "+"
    },
    {
      headline: "Branchenerfahrung",
      value: counters.experience,
      suffix: "+"
    },
    {
      headline: "Zeitersparnis",
      value: counters.timeSavings,
      suffix: "+"
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Expertise</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                {stat.headline}
              </h3>
              <div className="text-5xl md:text-6xl font-bold text-white">
                {stat.value}{stat.suffix}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExpertiseBanner

