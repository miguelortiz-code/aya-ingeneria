import React, { useState, useEffect, useRef } from 'react'
import { useInView } from '../../hooks/useInView'

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
      {/* Número — usa clase Tailwind para que el dark override del CSS lo pise */}
      <div className="font-display text-5xl lg:text-6xl text-solar-400 group-hover:text-solar-300 transition-colors duration-300">
        {count}
        <span className="text-solar-500">{suffix}</span>
      </div>

      {/* Label — usa clase Tailwind para que el dark override lo pise */}
      <p className="font-body text-solar-300 text-sm mt-2 tracking-wide uppercase">
        {label}
      </p>
    </div>
  )
}