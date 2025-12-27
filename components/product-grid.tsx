import { ProductCard } from './product-card'
import { ComingSoon } from './coming-soon'

interface ProductGridProps {
  searchParams: {
    type?: string
    price?: string
    dietary?: string
    flavor?: string
    occasion?: string
    sort?: string
    page?: string
  }
}

// Hardcoded product data - replace image_url with your image path
const product = {
  id: '1',
  name: 'Almond shots',
  description: 'A luxurious collection of handcrafted chocolates made with the finest ingredients.',
  short_description: 'Luxurious handcrafted chocolates made with finest ingredients.',
  price: 100,
  compare_price: null,
  image_url: '/product.png', // Replace with your image path
  category: 'Premium',
  stock: 10,
  featured: true,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
}

export function ProductGrid({ searchParams }: ProductGridProps) {
  // Check if any filters are applied
  const hasFilters = !!(
    searchParams.type || 
    searchParams.price || 
    searchParams.dietary || 
    searchParams.flavor || 
    searchParams.occasion
  )

  // Show "Coming Soon" if filters are applied
  if (hasFilters) {
    return (
      <ComingSoon 
        title="Coming Soon" 
        message="More products in this category are coming soon. Check back later!" 
      />
    )
  }

  // Show single product card when no filters are applied
  return (
    <div className="flex justify-center">
      {/* Single Product Card */}
      <div className="w-full max-w-sm">
        <ProductCard product={product} />
      </div>
    </div>
  )
}
