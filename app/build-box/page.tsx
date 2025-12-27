import { ComingSoon } from '@/components/coming-soon'

export default function BuildBoxPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory via-white to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl font-bold text-primary mb-6">
            Build Your Own Box
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Create the perfect chocolate box by selecting your favorite treats. 
            Mix and match to create a unique gift or treat yourself to a custom collection.
          </p>
        </div>

        {/* Coming Soon */}
        <ComingSoon 
          title="Build Your Box Coming Soon" 
          message="We're working on an amazing custom box builder for you. Check back soon!" 
        />
      </div>
    </div>
  )
}
