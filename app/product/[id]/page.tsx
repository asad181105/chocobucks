import { Suspense } from 'react'
import { createClient } from '@/lib/supabase-server'
import { ProductDetail } from '@/components/product-detail'
import { ProductDetailSkeleton } from '@/components/skeletons/product-detail-skeleton'
import { notFound } from 'next/navigation'

interface ProductPageProps {
  params: {
    id: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const supabase = await createClient()
  
  const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', params.id)
    .single()

  if (error || !product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory via-white to-accent/5">
      <Suspense fallback={<ProductDetailSkeleton />}>
        <ProductDetail product={product} />
      </Suspense>
    </div>
  )
}
