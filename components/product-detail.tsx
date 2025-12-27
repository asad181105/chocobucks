'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from '@/lib/supabase-client'
import { useSupabase } from '@/components/providers'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { 
  ShoppingCart, 
  Heart, 
  Share2, 
  Star, 
  Plus, 
  Minus, 
  ArrowLeft,
  Truck,
  Shield,
  RotateCcw
} from 'lucide-react'
import { formatPrice } from '@/lib/utils'

interface ProductDetailProps {
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

export function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const { user } = useSupabase()
  const supabase = createClient()

  const handleAddToCart = async () => {
    if (!user) {
      window.location.href = '/auth/signin'
      return
    }

    setIsAddingToCart(true)
    try {
      // Add to cart logic here
      console.log('Adding to cart:', product.id, quantity)
      // TODO: Implement add to cart functionality
    } catch (error) {
      console.error('Error adding to cart:', error)
    } finally {
      setIsAddingToCart(false)
    }
  }

  const handleWishlist = async () => {
    if (!user) {
      window.location.href = '/auth/signin'
      return
    }

    try {
      // Wishlist logic here
      console.log('Toggling wishlist:', product.id)
      setIsWishlisted(!isWishlisted)
      // TODO: Implement wishlist functionality
    } catch (error) {
      console.error('Error updating wishlist:', error)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <Link 
          href="/shop" 
          className="inline-flex items-center text-gray-600 hover:text-accent transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Shop
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="aspect-square relative overflow-hidden rounded-2xl bg-white shadow-2xl">
            <Image
              src={product.image_url || '/placeholder-product.jpg'}
              alt={product.name}
              fill
              className="object-cover"
            />
            
            {/* Featured Badge */}
            {product.featured && (
              <div className="absolute top-4 left-4">
                <Badge variant="natural" className="text-sm">
                  Featured
                </Badge>
              </div>
            )}

            {/* Stock Status */}
            <div className="absolute top-4 right-4">
              <Badge 
                variant={product.stock > 0 ? "default" : "destructive"}
                className="text-sm"
              >
                {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
              </Badge>
            </div>
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Category & Title */}
          <div>
            <Badge variant="outline" className="mb-4">
              {product.category}
            </Badge>
            <h1 className="font-playfair text-4xl font-bold text-primary mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {product.short_description}
            </p>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            {product.compare_price && product.compare_price > product.price && (
              <>
                <span className="text-xl text-gray-500 line-through">
                  {formatPrice(product.compare_price)}
                </span>
                <Badge variant="destructive" className="text-sm">
                  Save {formatPrice(product.compare_price - product.price)}
                </Badge>
              </>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold text-lg text-primary mb-3">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="font-medium text-gray-700">Quantity:</span>
              <div className="flex items-center border border-gray-200 rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  disabled={quantity >= product.stock}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={handleAddToCart}
                disabled={product.stock === 0 || isAddingToCart}
                className="flex-1 h-12 bg-accent text-charcoal hover:bg-accent/90"
              >
                {isAddingToCart ? (
                  'Adding...'
                ) : product.stock === 0 ? (
                  'Out of Stock'
                ) : (
                  <>
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </>
                )}
              </Button>

              <Button
                onClick={handleWishlist}
                variant="outline"
                size="icon"
                className="h-12 w-12"
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Features */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg text-primary mb-4">Product Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <Truck className="h-5 w-5 text-accent" />
                  <span className="text-sm text-gray-600">Free Shipping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="text-sm text-gray-600">Quality Guaranteed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="h-5 w-5 text-accent" />
                  <span className="text-sm text-gray-600">Easy Returns</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="space-y-4 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Category:</span>
              <span className="font-medium">{product.category}</span>
            </div>
            <div className="flex justify-between">
              <span>Stock:</span>
              <span className="font-medium">{product.stock} available</span>
            </div>
            <div className="flex justify-between">
              <span>SKU:</span>
              <span className="font-medium">{product.id.slice(-8).toUpperCase()}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Related Products Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-20"
      >
        <h2 className="font-playfair text-3xl font-bold text-primary mb-8 text-center">
          You Might Also Like
        </h2>
        <div className="text-center">
          <p className="text-gray-600 mb-8">
            Discover more products in the same category
          </p>
          <Link href="/shop">
            <Button variant="outline" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
