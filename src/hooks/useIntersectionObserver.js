import { useState, useEffect } from 'react'

/**
 * Custom hook for observing element intersection with viewport
 * Supports both single element and multiple elements
 * 
 * @param {React.RefObject|Array<React.RefObject>} refs - Single ref or array of refs to observe
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1), default: 0.2
 * @param {string} options.rootMargin - Root margin for intersection, default: '0px'
 * @param {boolean} options.once - Stop observing after first intersection, default: true
 * @returns {boolean|Object} - Single ref: boolean, Multiple refs: object with visibility state per index
 */
const useIntersectionObserver = (refs, options = {}) => {
  const {
    threshold = 0.2,
    rootMargin = '0px',
    once = true,
  } = options

  const isMultiple = Array.isArray(refs)
  const [visibleState, setVisibleState] = useState(
    isMultiple ? {} : false
  )

  useEffect(() => {
    // Handle single ref
    if (!isMultiple) {
      if (!refs?.current) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleState(true)
              if (once) {
                observer.unobserve(entry.target)
              }
            }
          })
        },
        {
          threshold,
          rootMargin,
        }
      )

      observer.observe(refs.current)

      return () => {
        if (refs.current) {
          observer.unobserve(refs.current)
        }
      }
    }

    // Handle multiple refs
    const observers = refs.map((ref, index) => {
      if (!ref?.current) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleState((prev) => ({
                ...prev,
                [index]: true,
              }))
              if (once) {
                observer.unobserve(entry.target)
              }
            }
          })
        },
        {
          threshold,
          rootMargin,
        }
      )

      observer.observe(ref.current)
      return observer
    })

    return () => {
      observers.forEach((observer, index) => {
        if (observer && refs[index]?.current) {
          observer.unobserve(refs[index].current)
        }
      })
    }
  }, [refs, threshold, rootMargin, once, isMultiple])

  return visibleState
}

export default useIntersectionObserver

