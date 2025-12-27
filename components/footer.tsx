import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-2">
                <span className="text-charcoal font-bold text-sm">C</span>
              </div>
              <span className="font-playfair text-xl font-bold">
                Chocobucks
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Crafting the finest artisanal chocolates with 100% natural ingredients. 
              Every piece tells a story of tradition, innovation, and pure indulgence.
            </p>
            
            {/* Natural Ingredients Badge */}
            <div className="natural-seal mb-4">
              <span>🍃 100% Natural Ingredients</span>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hi@chocobucks.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Edventure Park, Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-accent transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-gray-300 hover:text-accent transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/build-box" className="text-gray-300 hover:text-accent transition-colors">
                  Build-A-Box
                </Link>
              </li>
              <li>
                <Link href="/gifting" className="text-gray-300 hover:text-accent transition-colors">
                  Gifting
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="text-gray-300 hover:text-accent transition-colors">
                  Corporate
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support & Info</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/ingredients" className="text-gray-300 hover:text-accent transition-colors">
                  Our Ingredients
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-300 hover:text-accent transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Chocobucks. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="/shipping" className="hover:text-accent transition-colors">
                Shipping Info
              </Link>
              <Link href="/returns" className="hover:text-accent transition-colors">
                Returns
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
