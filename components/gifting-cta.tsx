import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function GiftingCTA() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-playfair text-3xl font-bold mb-4">
          Perfect Gifts for Every Occasion
        </h2>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
          From birthdays to corporate events, our luxury chocolates make every moment special. 
          Customize your gift with beautiful packaging and personal messages.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/gifting">
            <Button 
              size="xl" 
              variant="luxury"
              className="w-full sm:w-auto"
            >
              Explore Gifting
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

        {/* Natural Ingredients Badge */}
        <div className="mt-8">
          <div className="natural-seal mx-auto">
            <span>🍃 100% Natural Ingredients</span>
          </div>
        </div>
      </div>
    </section>
  )
}
