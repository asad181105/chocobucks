import { Card, CardContent, CardFooter } from '@/components/ui/card'

export function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 12 }).map((_, i) => (
        <Card key={i} className="h-full">
          {/* Image Skeleton */}
          <div className="aspect-square bg-gray-200 animate-pulse rounded-t-lg" />
          
          <CardContent className="p-4">
            {/* Collection Badge Skeleton */}
            <div className="w-20 h-5 bg-gray-200 rounded animate-pulse mb-2" />
            
            {/* Title Skeleton */}
            <div className="space-y-2 mb-3">
              <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse" />
              <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse" />
            </div>
            
            {/* Description Skeleton */}
            <div className="space-y-2 mb-3">
              <div className="w-full h-3 bg-gray-200 rounded animate-pulse" />
              <div className="w-2/3 h-3 bg-gray-200 rounded animate-pulse" />
            </div>
            
            {/* Rating Skeleton */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <div key={j} className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
                ))}
              </div>
              <div className="w-12 h-3 bg-gray-200 rounded animate-pulse" />
            </div>
            
            {/* Price Skeleton */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-16 h-5 bg-gray-200 rounded animate-pulse" />
              <div className="w-12 h-4 bg-gray-200 rounded animate-pulse" />
            </div>
            
            {/* Badges Skeleton */}
            <div className="flex gap-2 mb-3">
              <div className="w-16 h-5 bg-gray-200 rounded-full animate-pulse" />
              <div className="w-20 h-5 bg-gray-200 rounded-full animate-pulse" />
            </div>
          </CardContent>
          
          <CardFooter className="p-4 pt-0">
            <div className="w-full h-10 bg-gray-200 rounded animate-pulse" />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
