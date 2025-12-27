import { Card, CardContent } from '@/components/ui/card'

export function ProductDetailSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <div className="mb-8">
        <div className="h-4 bg-gray-200 rounded animate-pulse w-24" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="aspect-square bg-gray-200 animate-pulse rounded-2xl" />

        {/* Product Info */}
        <div className="space-y-8">
          {/* Category & Title */}
          <div>
            <div className="h-6 bg-gray-200 rounded animate-pulse w-20 mb-4" />
            <div className="h-10 bg-gray-200 rounded animate-pulse w-3/4 mb-4" />
            <div className="h-6 bg-gray-200 rounded animate-pulse w-full" />
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <div className="h-8 bg-gray-200 rounded animate-pulse w-24" />
            <div className="h-6 bg-gray-200 rounded animate-pulse w-20" />
          </div>

          {/* Description */}
          <div>
            <div className="h-6 bg-gray-200 rounded animate-pulse w-32 mb-3" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6" />
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-16" />
              <div className="h-10 bg-gray-200 rounded animate-pulse w-32" />
            </div>

            <div className="flex gap-4">
              <div className="flex-1 h-12 bg-gray-200 rounded animate-pulse" />
              <div className="h-12 w-12 bg-gray-200 rounded animate-pulse" />
              <div className="h-12 w-12 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>

          {/* Features */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="h-6 bg-gray-200 rounded animate-pulse w-40 mb-4" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-24" />
                <div className="h-4 bg-gray-200 rounded animate-pulse w-28" />
                <div className="h-4 bg-gray-200 rounded animate-pulse w-20" />
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="space-y-4">
            <div className="flex justify-between">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-16" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-20" />
            </div>
            <div className="flex justify-between">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-12" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-24" />
            </div>
            <div className="flex justify-between">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-8" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
