'use client'

import { X, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface SearchModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchModal({ open, onOpenChange }: SearchModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50" 
        onClick={() => onOpenChange(false)}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 flex items-start justify-center pt-20 px-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-gray-200">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for chocolates, flavors, occasions..."
              className="flex-1 text-lg outline-none"
              autoFocus
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Search our collection</h3>
              <p className="text-gray-500 mb-6">
                Find your perfect chocolate by flavor, occasion, or dietary preference
              </p>
              
              {/* Quick Search Suggestions */}
              <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
                <Button variant="outline" size="sm" className="text-sm">
                  Dark Chocolate
                </Button>
                <Button variant="outline" size="sm" className="text-sm">
                  Gift Boxes
                </Button>
                <Button variant="outline" size="sm" className="text-sm">
                  Vegan Options
                </Button>
                <Button variant="outline" size="sm" className="text-sm">
                  Valentine's Day
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
