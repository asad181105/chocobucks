export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why chocolate lovers choose our artisanal creations time and again.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Priya Sharma",
              location: "Mumbai",
              text: "The quality is exceptional. You can taste the difference in every bite.",
              rating: 5
            },
            {
              name: "Rajesh Kumar",
              location: "Delhi",
              text: "Perfect for gifting. The packaging is as beautiful as the chocolates inside.",
              rating: 5
            },
            {
              name: "Anjali Patel",
              location: "Bangalore",
              text: "Love that they use only natural ingredients. My kids can enjoy guilt-free!",
              rating: 5
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
