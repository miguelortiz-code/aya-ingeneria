import React from 'react'
import {
  Sun, Flame, Droplets, Wind, Wrench, Thermometer, Zap,
  Cylinder, Shield, Star, ChevronRight, Menu, X, Phone,
  Mail, MapPin, ArrowRight, CheckCircle, Quote,
} from 'lucide-react'

const iconMap = {
  Sun, Flame, Droplets, Wind, Wrench, Thermometer, Zap,
  Cylinder, Shield, Star, ChevronRight, Menu, X, Phone,
  Mail, MapPin, ArrowRight, CheckCircle, Quote,
}

/**
 * Atom: SolarIcon
 * Renders a Lucide icon by string name
 */
export function SolarIcon({ name, size = 24, className = '' }) {
  const Icon = iconMap[name] || Sun
  return <Icon size={size} className={className} />
}
