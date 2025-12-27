export function EthosSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold text-primary mb-4">
            Our Ethos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We believe in creating exceptional chocolates that not only delight your taste buds 
            but also respect our planet and support sustainable practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="font-semibold text-lg text-primary mb-2">Sustainability</h3>
            <p className="text-gray-600">
              Committed to eco-friendly practices and responsible sourcing
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🍃</span>
            </div>
            <h3 className="font-semibold text-lg text-primary mb-2">Natural Ingredients</h3>
            <p className="text-gray-600">
              100% natural ingredients, no artificial additives or preservatives
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">❤️</span>
            </div>
            <h3 className="font-semibold text-lg text-primary mb-2">Artisanal Craft</h3>
            <p className="text-gray-600">
              Handcrafted with love and attention to every detail
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
