import React from 'react'

/**
 * Atom: Button
 * Reusable button with primary, outline, and ghost variants
 */
export function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
  const base =
    'inline-flex items-center gap-2 font-heading font-bold rounded-full transition-all duration-300 active:scale-95 cursor-pointer'

  const variants = {
    primary:
      'bg-solar-500 hover:bg-solar-400 text-navy-900 hover:shadow-solar hover:scale-105',
    outline:
      'border-2 border-solar-500 text-solar-500 hover:bg-solar-500 hover:text-navy-900',
    ghost:
      'text-white/70 hover:text-solar-400 hover:bg-white/5',
    sky:
      'bg-sky-500 hover:bg-sky-400 text-white hover:scale-105',
  }

  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  }

  if (variant === 'primary') {
    return (
      <button
        className={`btn-primary ${sizes[size]} ${className}`}
        style={{ color: '#FFFFFF' }}  // ← agrega esto
        {...props}
      >
        {children}
      </button>
    )
  }
}
