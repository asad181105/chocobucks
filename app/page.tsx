import { HeroSection } from '@/components/hero-section'
import { ProductCard } from '@/components/product-card'
import { EthosSection } from '@/components/ethos-section'
import { GiftingCTA } from '@/components/gifting-cta'
import { TestimonialsSection } from '@/components/testimonials-section'

// Hardcoded product data - replace image_url with your image path
const product = {
  id: '1',
  name: 'Almond Shots',
  description: 'A luxurious collection of handcrafted chocolates made with the finest ingredients.',
  short_description: 'Luxurious handcrafted chocolates made with finest ingredients.',
  price: 100,
  compare_price: null,
  image_url: '/product.png',
  category: 'Premium',
  stock: 10,
  featured: true,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Single Product Card Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-primary mb-4">
              Featured Product
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our handcrafted luxury chocolates, made with 100% natural ingredients.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <ProductCard product={product} />
            </div>
          </div>
        </div>
      </section>
      
      <EthosSection />
      <TestimonialsSection />
      <GiftingCTA />
    </div>
  )
}
