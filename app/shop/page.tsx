import { Suspense } from 'react'
import { ProductGrid } from '@/components/product-grid'
import { FilterSidebar } from '@/components/filter-sidebar'
import { SortDropdown } from '@/components/sort-dropdown'
import { ProductGridSkeleton } from '@/components/skeletons/product-grid-skeleton'

interface ShopPageProps {
  searchParams: Promise<{
    type?: string
    price?: string
    dietary?: string
    flavor?: string
    occasion?: string
    sort?: string
    page?: string
  }>
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const resolvedSearchParams = await searchParams
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory via-white to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl font-bold text-primary mb-6">
            Shop Our Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our handcrafted luxury chocolates, each made with 100% natural ingredients 
            and crafted to perfection. From single-origin bars to artisanal truffles.
          </p>
          
          {/* Natural Ingredients Badge */}
          <div className="mt-8">
            <div className="natural-seal text-lg px-6 py-3">
              <span>🍃 100% Natural Ingredients</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-semibold text-gray-900 font-playfair">
                  Products
                </h2>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {/* Product count will be shown here */}
                </span>
              </div>
              
              <SortDropdown />
            </div>

            {/* Product Grid */}
            <Suspense fallback={<ProductGridSkeleton />}>
              <ProductGrid searchParams={resolvedSearchParams} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
