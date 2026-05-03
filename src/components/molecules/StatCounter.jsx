import React, { useState, useEffect, useRef } from 'react'
import { useInView } from '../../hooks/useInView'

/**
 * Molecule: StatCounter
 * Animated counter that increments when scrolled into view
 */
export function StatCounter({ value, suffix, label, index = 0 }) {
  const { ref, inView } = useInView()
  const [count, setCount] = useState(0)
  const hasRun = useRef(false)

  useEffect(() => {
    if (inView && !hasRun.current) {
      hasRun.current = true
      const duration = 1800
      const steps = 60
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
    }
  }, [inView, value])

  return (
    <div
      ref={ref}
      className={`text-center group transition-all duration-500
        ${inView ? 'animate-fade-up opacity-100' : 'opacity-0'}
      `}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
    >
      <div className="font-display text-5xl lg:text-6xl text-solar-400 group-hover:text-solar-300 transition-colors duration-300">
        {count}
        <span className="text-solar-500">{suffix}</span>
      </div>
      <p className="font-body text-white/55 text-sm mt-2 tracking-wide uppercase">{label}</p>
    </div>
  )
}
