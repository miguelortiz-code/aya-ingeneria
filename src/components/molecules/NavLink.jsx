import React from 'react'

/**
 * Molecule: NavLink
 * Navigation link with active state and hover animation
 */
export function NavLink({ href, children, onClick, active = false, mobile = false }) {
  if (mobile) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`block px-4 py-3 font-heading font-semibold text-base rounded-xl transition-all duration-200
          ${active
            ? 'text-solar-400 bg-solar-500/10'
            : 'text-white/70 hover:text-solar-400 hover:bg-white/5'
          }`}
      >
        {children}
      </a>
    )
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative font-heading font-semibold text-sm tracking-wide transition-colors duration-200 group
        ${active ? 'text-solar-400' : 'text-white/70 hover:text-solar-400'}`}
    >
      {children}
      <span
        className={`absolute -bottom-1 left-0 h-0.5 bg-solar-400 transition-all duration-300
          ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}
      />
    </a>
  )
}
