import { useState, useEffect, useRef } from 'react'

/**
 * Custom hook for animating counters when element enters viewport
 * 
 * @param {Object} targetValues - Object with counter keys and target values
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1), default: 0.3
 * @param {Object} options.durations - Object with durations for each counter key (optional)
 * @returns {Object} - Object containing counters state and ref to attach to element
 */
const useCounterAnimation = (targetValues, options = {}) => {
  const {
    threshold = 0.3,
    durations = {},
  } = options

  const [counters, setCounters] = useState(
    Object.keys(targetValues).reduce((acc, key) => {
      acc[key] = 0
      return acc
    }, {})
  )
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    if (hasAnimated) return

    const animateCounter = (key, targetValue, duration) => {
      const steps = 100
      const stepDuration = duration / steps
      let currentStep = 0

      const animate = () => {
        if (currentStep <= steps) {
          const progress = currentStep / steps
          // Exponential easing function - slows down dramatically as it approaches target
          const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
          const currentValue = Math.floor(targetValue * easeOutExpo)

          setCounters((prev) => ({
            ...prev,
            [key]: currentValue,
          }))

          currentStep++
          setTimeout(animate, stepDuration)
        } else {
          // Ensure final value is set
          setCounters((prev) => ({
            ...prev,
            [key]: targetValue,
          }))
        }
      }

      animate()
    }

    // Default staggered durations based on position
    const getDefaultDuration = (key) => {
      const baseDurations = {
        0: 2275, // First counter
        1: 2730, // Second counter
        2: 2470, // Third counter
        3: 2600, // Fourth counter
      }
      const keys = Object.keys(targetValues)
      const index = keys.indexOf(key)
      return baseDurations[index] || 2500
    }

    const animateCounters = () => {
      Object.keys(targetValues).forEach((key) => {
        const targetValue = targetValues[key]
        // Use custom duration if provided, otherwise use default staggered durations
        const duration = durations[key] || getDefaultDuration(key)
        animateCounter(key, targetValue, duration)
      })
    }

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
        threshold,
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
  }, [hasAnimated, threshold, targetValues, durations])

  return { counters, sectionRef }
}

export default useCounterAnimation

