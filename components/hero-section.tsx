'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transparency-opacity"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundColor: "rgba(75, 46, 46, 0.6)", // brown tint with transparency
        }}
      />



      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Natural Ingredients Badge */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent rounded-full text-accent text-sm font-medium backdrop-blur-sm">
              <span>🍃</span>
              <span>100% Natural Ingredients</span>
              <span>🍃</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block">Artisanal</span>
            <span className="block text-accent">Luxury Chocolates</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal mt-4 text-gray-200">
              Crafted with Passion, Delivered with Love
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover our handcrafted collection of premium chocolates, made from single-origin cocoa beans 
            and the finest natural ingredients. Each piece tells a story of tradition and innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/shop">
              <Button 
                size="xl" 
                variant="luxury"
                className="w-full sm:w-auto"
              >
                Shop Now
              </Button>
            </Link>
            <Link href="/build-box">
              <Button 
                size="xl" 
                variant="luxury-outline"
                className="w-full sm:w-auto"
              >
                Build Your Box
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span>✨</span>
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🚚</span>
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🎁</span>
              <span>Gift Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🌱</span>
              <span>Eco-Friendly</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
