import { ComingSoon } from '@/components/coming-soon'

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory via-white to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl font-bold text-primary mb-6">
            Curated Collections
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our carefully curated chocolate collections, each thoughtfully assembled 
            to create the perfect gifting experience for every occasion.
          </p>
        </div>

        {/* Coming Soon */}
        <ComingSoon 
          title="Collections Coming Soon" 
          message="We're curating amazing chocolate collections for you. Check back soon!" 
        />
      </div>
    </div>
  )
}
