'use client'

import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

interface ComingSoonProps {
  title?: string
  message?: string
}

export function ComingSoon({ 
  title = "Coming Soon", 
  message = "We're working on something amazing. Check back soon!" 
}: ComingSoonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-16"
    >
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-r from-accent to-accent/80 rounded-full flex items-center justify-center">
            <Clock className="h-10 w-10 text-charcoal" />
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
      <h3 className="font-playfair text-3xl font-bold text-primary mb-4">
        {title}
      </h3>
      <p className="text-lg text-gray-600 max-w-md mx-auto">
        {message}
      </p>
    </motion.div>
  )
}

