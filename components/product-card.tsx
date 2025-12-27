'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { formatPrice } from '@/lib/utils'
import { motion } from 'framer-motion'

interface ProductCardProps {
  product: {
    id: string
    name: string
    description: string
    short_description: string
    price: number
    compare_price?: number | null
    image_url: string
    category: string
    stock: number
    featured: boolean
    created_at: string
    updated_at: string
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleOrderNow = () => {
    // Redirect to WhatsApp with product details
    const message = `Hi! I'm interested in ordering: ${product.name} - ${formatPrice(product.price)}`
    const whatsappNumber = '8247579990'
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    // TODO: Implement wishlist functionality
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
    >
      <Card className="group h-full flex flex-col transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-accent/20 hover:scale-[1.02] border-0 shadow-lg hover:border-accent/20">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <Link href={`/product/${product.id}`}>
            <Image
              src={product.image_url || '/placeholder-product.jpg'}
              alt={product.name}
              fill
              className="object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110"
            />
          </Link>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Wishlist Button */}
          <motion.button
            onClick={handleWishlist}
            className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-all duration-200 hover:scale-110 hover:shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart 
              className={`h-4 w-4 transition-colors duration-200 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600 hover:text-red-500'}`} 
            />
          </motion.button>

          {/* Featured Badge */}
          {product.featured && (
            <div className="absolute top-3 left-3">
              <Badge variant="natural" className="text-xs">
                Featured
              </Badge>
            </div>
          )}

          {/* Out of Stock Overlay */}
          {product.stock === 0 && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">Out of Stock</span>
            </div>
          )}
        </div>

        <CardContent className="flex-1 p-4">
          {/* Category */}
          <Badge variant="outline" className="mb-2 text-xs hover:bg-accent hover:text-charcoal transition-all duration-200 hover:scale-105 hover:shadow-md">
            {product.category}
          </Badge>

          {/* Title */}
          <Link href={`/product/${product.id}`}>
            <h3 className="font-semibold text-gray-900 group-hover:text-accent transition-all duration-200 line-clamp-2 mb-2 hover:translate-x-1">
              {product.name}
            </h3>
          </Link>

          {/* Description */}
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
            {product.short_description}
          </p>

          {/* Price */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.compare_price && product.compare_price > product.price && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.compare_price)}
              </span>
            )}
          </div>

          {/* Stock Status */}
          <div className="flex items-center gap-2 mb-3">
            <div className={`w-2 h-2 rounded-full ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className="text-xs text-gray-500">
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </span>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full"
          >
            <Button
              onClick={handleOrderNow}
              disabled={product.stock === 0}
              className="w-full transition-all duration-200 hover:shadow-lg hover:shadow-accent/30"
              variant="luxury"
            >
              {product.stock === 0 ? (
                'Out of Stock'
              ) : (
                <>
                  <ShoppingCart className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:scale-110" />
                  Order Now
                </>
              )}
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
