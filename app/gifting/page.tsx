import { ComingSoon } from '@/components/coming-soon'
import { Gift } from 'lucide-react'

export default function GiftingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory via-white to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-accent to-accent/80 rounded-full flex items-center justify-center">
                <Gift className="h-10 w-10 text-charcoal" />
              </div>
            </div>
          </div>
          
          <h1 className="font-playfair text-5xl font-bold text-primary mb-6">
            Perfect Gifts for Every Occasion
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Thoughtfully curated chocolate gifts that will make any moment special. 
            From elegant gift boxes to personalized hampers, find the perfect way to show you care.
          </p>
        </div>

        {/* Coming Soon */}
        <ComingSoon 
          title="Gift Collections Coming Soon" 
          message="We're preparing amazing gift collections for you. Check back soon!" 
        />
      </div>
    </div>
  )
}
