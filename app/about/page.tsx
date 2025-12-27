'use client'

import { motion } from 'framer-motion'
import { Heart, Award, Users, Leaf, Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory via-white to-accent/5">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-charcoal/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="font-playfair text-5xl font-bold mb-6">
              About Chocobucks
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Crafting exceptional chocolate experiences since 2010. 
              We believe in the power of premium ingredients, artisanal techniques, 
              and the joy that comes from sharing something truly special.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2010 by master chocolatier Maria Rodriguez, Chocobucks 
                  began as a small artisanal workshop with a simple mission: to create the 
                  world's finest chocolates using traditional techniques and the highest 
                  quality ingredients.
                </p>
                <p>
                  What started as a passion project has grown into a beloved brand known 
                  for its commitment to excellence, sustainability, and innovation. Today, 
                  we continue to handcraft each piece with the same dedication and attention 
                  to detail that Maria brought to her first chocolate creations.
                </p>
                <p>
                  Our chocolates are more than just treats – they're expressions of love, 
                  celebration, and the simple joy of indulging in something truly exceptional.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Heart className="h-24 w-24 text-accent mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Crafted with Love</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Our Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do, from sourcing ingredients 
              to crafting each chocolate by hand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-charcoal" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                Excellence
              </h3>
              <p className="text-gray-600 text-sm">
                We never compromise on quality, using only the finest ingredients and traditional techniques.
              </p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-charcoal" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600 text-sm">
                Committed to ethical sourcing and environmentally responsible practices.
              </p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-charcoal" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                Community
              </h3>
              <p className="text-gray-600 text-sm">
                Supporting local communities and fair trade practices throughout our supply chain.
              </p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-charcoal" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                Passion
              </h3>
              <p className="text-gray-600 text-sm">
                Every chocolate is crafted with love and a genuine passion for the art of chocolate making.
              </p>
            </Card>
          </div>
        </motion.section>

        {/* Awards & Recognition */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          {/* <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-6">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and chocolate connoisseurs worldwide.
            </p>
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-white fill-white" />
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">International Chocolate Awards</h3>
              <p className="text-gray-600 text-sm">Gold Medal Winner 2023</p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-r from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-charcoal" />
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">Artisan Food Awards</h3>
              <p className="text-gray-600 text-sm">Best Chocolate Brand 2022</p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">Sustainable Business Award</h3>
              <p className="text-gray-600 text-sm">Ethical Sourcing Excellence 2023</p>
            </Card>
          </div> */}
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-12">
            <h2 className="font-playfair text-3xl font-bold text-primary mb-6">
              Experience the Difference
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover why our chocolates have been delighting customers for over a decade. 
              Taste the difference that passion, quality, and tradition make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-charcoal hover:bg-accent/90">
                Shop Our Collection
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Learn Our Process
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
