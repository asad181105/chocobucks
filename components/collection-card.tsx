'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { ArrowRight, Gift } from 'lucide-react'

interface CollectionCardProps {
  collection: {
    id: string
    name: string
    description: string
    image_url: string
    product_ids: string[]
    created_at: string
    updated_at: string
  }
}

export function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <motion.div
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
    >
      <Card className="group h-full flex flex-col transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-accent/20 hover:scale-[1.02] border-0 shadow-lg hover:border-accent/20 overflow-hidden">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Link href={`/collections/${collection.id}`}>
            <Image
              src={collection.image_url || '/placeholder-collection.jpg'}
              alt={collection.name}
              fill
              className="object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110"
            />
          </Link>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Product Count Badge */}
          <div className="absolute top-4 right-4">
            <Badge className="bg-white/90 text-gray-700 hover:bg-white transition-all duration-200">
              <Gift className="h-3 w-3 mr-1" />
              {collection.product_ids.length} items
            </Badge>
          </div>

          {/* Collection Badge */}
          <div className="absolute bottom-4 left-4">
            <Badge variant="natural" className="text-sm">
              Collection
            </Badge>
          </div>
        </div>

        <CardContent className="flex-1 p-6">
          {/* Title */}
          <Link href={`/collections/${collection.id}`}>
            <h3 className="font-playfair text-xl font-semibold text-gray-900 group-hover:text-accent transition-all duration-200 mb-3 hover:translate-x-1">
              {collection.name}
            </h3>
          </Link>

          {/* Description */}
          <p className="text-gray-600 line-clamp-3 mb-4 leading-relaxed">
            {collection.description}
          </p>

          {/* Features */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-500">
              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
              <span>Curated selection</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
              <span>Perfect for gifting</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
              <span>Premium packaging</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full"
          >
            <Button
              asChild
              className="w-full transition-all duration-200 hover:shadow-lg hover:shadow-accent/30"
              variant="luxury"
            >
              <Link href={`/collections/${collection.id}`}>
                View Collection
                <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
