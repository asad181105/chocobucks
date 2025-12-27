export function FeaturedCollections() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold text-primary mb-4">
            Our Collections
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collections, each designed to bring you the finest 
            chocolate experiences for every occasion and preference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Premium Collection */}
          <div className="text-center">
            <div className="w-64 h-64 bg-gray-200 rounded-lg mx-auto mb-4 animate-pulse" />
            <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
              Premium Collection
            </h3>
            <p className="text-gray-600 mb-4">
              Our finest single-origin and artisanal chocolates
            </p>
            <div className="natural-seal mx-auto">
              <span>🍃 100% Natural Ingredients</span>
            </div>
          </div>

          {/* Gift Collection */}
          <div className="text-center">
            <div className="w-64 h-64 bg-gray-200 rounded-lg mx-auto mb-4 animate-pulse" />
            <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
              Gift Collection
            </h3>
            <p className="text-gray-600 mb-4">
              Perfect gifts for every special occasion
            </p>
            <div className="natural-seal mx-auto">
              <span>🍃 100% Natural Ingredients</span>
            </div>
          </div>

          {/* Organic Collection */}
          <div className="text-center">
            <div className="w-64 h-64 bg-gray-200 rounded-lg mx-auto mb-4 animate-pulse" />
            <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
              Organic Collection
            </h3>
            <p className="text-gray-600 mb-4">
              Certified organic chocolates for health-conscious lovers
            </p>
            <div className="natural-seal mx-auto">
              <span>🍃 100% Natural Ingredients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
