import { Card, CardContent, CardFooter } from '@/components/ui/card'

export function CollectionGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <Card key={i} className="h-full flex flex-col border-0 shadow-lg">
          <div className="aspect-[4/3] bg-gray-200 animate-pulse rounded-t-lg" />
          <CardContent className="flex-1 p-6">
            <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-20" />
            <div className="h-6 bg-gray-200 rounded animate-pulse mb-3 w-3/4" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6" />
            </div>
            <div className="space-y-2 mt-4">
              <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4" />
              <div className="h-3 bg-gray-200 rounded animate-pulse w-2/3" />
              <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2" />
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <div className="h-10 bg-gray-200 rounded animate-pulse w-full" />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
