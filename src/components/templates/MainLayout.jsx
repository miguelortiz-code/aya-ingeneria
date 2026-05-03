import React from 'react'
import { Navbar } from '../organisms/Navbar'
import { Footer } from '../organisms/Footer'

/**
 * Template: MainLayout
 * Main page layout wrapping all organisms
 */
export function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-navy-900">
      <Navbar />
      <main id="main-content" role="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
