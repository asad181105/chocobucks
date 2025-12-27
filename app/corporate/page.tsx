import { ComingSoon } from '@/components/coming-soon'
import { Building2 } from 'lucide-react'

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory via-white to-accent/5">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-charcoal/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center text-white">
            <h1 className="font-playfair text-5xl font-bold mb-6">
              Corporate Excellence
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Elevate your business relationships with our premium chocolate solutions. 
              From client gifts to employee recognition, we deliver excellence in every detail.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Coming Soon */}
        <ComingSoon 
          title="Corporate Solutions Coming Soon" 
          message="We're preparing amazing corporate gifting solutions for you. Check back soon!" 
        />
      </div>
    </div>
  )
}
