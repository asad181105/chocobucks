'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { X, Filter } from 'lucide-react'

export function FilterSidebar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const updateFilters = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString())
    
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    
    // Reset to page 1 when filters change
    params.delete('page')
    
    router.push(`/shop?${params.toString()}`)
  }

  const clearAllFilters = () => {
    router.push('/shop')
  }

  const getActiveFiltersCount = () => {
    let count = 0
    if (searchParams.get('type')) count++
    if (searchParams.get('price')) count++
    if (searchParams.get('dietary')) count++
    if (searchParams.get('flavor')) count++
    if (searchParams.get('occasion')) count++
    return count
  }

  const activeFiltersCount = getActiveFiltersCount()

  const FilterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="border-b border-gray-200 pb-6 mb-6">
      <h3 className="font-semibold text-gray-900 mb-4">{title}</h3>
      {children}
    </div>
  )

  const FilterOption = ({ 
    value, 
    label, 
    active, 
    onClick 
  }: { 
    value: string; 
    label: string; 
    active: boolean; 
    onClick: () => void 
  }) => (
    <button
      onClick={onClick}
      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
        active
          ? 'bg-accent text-charcoal font-medium'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {label}
    </button>
  )

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Product Type */}
      <FilterSection title="Product Type">
        <div className="space-y-2">
          {[
            { value: 'BAR', label: 'Chocolate Bars' },
            { value: 'TRUFFLE', label: 'Truffles' },
            { value: 'ASSORTMENT', label: 'Assortments' },
            { value: 'HAMPER', label: 'Gift Hampers' },
            { value: 'GIFT_BOX', label: 'Gift Boxes' },
            { value: 'HOT_CHOCOLATE', label: 'Hot Chocolate' },
            { value: 'SPREAD', label: 'Spreads' },
          ].map((type) => (
            <FilterOption
              key={type.value}
              value={type.value}
              label={type.label}
              active={searchParams.get('type') === type.value}
              onClick={() => updateFilters('type', searchParams.get('type') === type.value ? null : type.value)}
            />
          ))}
        </div>
      </FilterSection>

      {/* Price Range */}
      <FilterSection title="Price Range">
        <div className="space-y-2">
          {[
            { value: '0-299', label: 'Under ₹300' },
            { value: '300-599', label: '₹300 - ₹599' },
            { value: '600-999', label: '₹600 - ₹999' },
            { value: '1000-1499', label: '₹1000 - ₹1499' },
            { value: '1500-2499', label: '₹1500 - ₹2499' },
            { value: '2500+', label: '₹2500 & above' },
          ].map((range) => (
            <FilterOption
              key={range.value}
              value={range.value}
              label={range.label}
              active={searchParams.get('price') === range.value}
              onClick={() => updateFilters('price', searchParams.get('price') === range.value ? null : range.value)}
            />
          ))}
        </div>
      </FilterSection>

      {/* Dietary Preferences */}
      <FilterSection title="Dietary Preferences">
        <div className="space-y-2">
          {[
            { value: 'VEGAN', label: 'Vegan' },
            { value: 'VEGETARIAN', label: 'Vegetarian' },
            { value: 'GLUTEN_FREE', label: 'Gluten Free' },
            { value: 'SUGAR_FREE', label: 'Sugar Free' },
            { value: 'NUT_FREE', label: 'Nut Free' },
            { value: 'DAIRY_FREE', label: 'Dairy Free' },
            { value: 'ORGANIC', label: 'Organic' },
          ].map((dietary) => (
            <FilterOption
              key={dietary.value}
              value={dietary.value}
              label={dietary.label}
              active={searchParams.get('dietary') === dietary.value}
              onClick={() => updateFilters('dietary', searchParams.get('dietary') === dietary.value ? null : dietary.value)}
            />
          ))}
        </div>
      </FilterSection>

      {/* Flavor Notes */}
      <FilterSection title="Flavor Notes">
        <div className="space-y-2">
          {[
            { value: 'NUTTY', label: 'Nutty' },
            { value: 'FRUITY', label: 'Fruity' },
            { value: 'FLORAL', label: 'Floral' },
            { value: 'CARAMEL', label: 'Caramel' },
            { value: 'SPICED', label: 'Spiced' },
            { value: 'CITRUS', label: 'Citrus' },
            { value: 'BERRY', label: 'Berry' },
            { value: 'VANILLA', label: 'Vanilla' },
            { value: 'MINT', label: 'Mint' },
            { value: 'COFFEE', label: 'Coffee' },
          ].map((flavor) => (
            <FilterOption
              key={flavor.value}
              value={flavor.value}
              label={flavor.label}
              active={searchParams.get('flavor') === flavor.value}
              onClick={() => updateFilters('flavor', searchParams.get('flavor') === flavor.value ? null : flavor.value)}
            />
          ))}
        </div>
      </FilterSection>

      {/* Occasion */}
      <FilterSection title="Occasion">
        <div className="space-y-2">
          {[
            { value: 'BIRTHDAY', label: 'Birthday' },
            { value: 'ANNIVERSARY', label: 'Anniversary' },
            { value: 'CORPORATE', label: 'Corporate' },
            { value: 'FESTIVE', label: 'Festive' },
            { value: 'VALENTINE', label: 'Valentine\'s Day' },
            { value: 'MOTHERS_DAY', label: 'Mother\'s Day' },
            { value: 'FATHERS_DAY', label: 'Father\'s Day' },
            { value: 'THANK_YOU', label: 'Thank You' },
            { value: 'CONGRATULATIONS', label: 'Congratulations' },
          ].map((occasion) => (
            <FilterOption
              key={occasion.value}
              value={occasion.value}
              label={occasion.label}
              active={searchParams.get('occasion') === occasion.value}
              onClick={() => updateFilters('occasion', searchParams.get('occasion') === occasion.value ? null : occasion.value)}
            />
          ))}
        </div>
      </FilterSection>

      {/* Natural Ingredients Badge */}
      <div className="pt-4 border-t border-gray-200">
        <div className="natural-seal">
          <span>🍃 100% Natural Ingredients</span>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-6">
        <Button
          onClick={() => setIsMobileOpen(true)}
          variant="outline"
          className="w-full justify-between"
        >
          <span className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {activeFiltersCount}
              </Badge>
            )}
          </span>
        </Button>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <div className="sticky top-24">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
            {activeFiltersCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Clear all
              </Button>
            )}
          </div>

          {/* Active Filters */}
          {activeFiltersCount > 0 && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Active Filters:</h3>
              <div className="flex flex-wrap gap-2">
                {searchParams.get('type') && (
                  <Badge variant="secondary" className="text-xs">
                    Type: {searchParams.get('type')?.replace('_', ' ')}
                    <button
                      onClick={() => updateFilters('type', null)}
                      className="ml-1 hover:text-red-500"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {searchParams.get('price') && (
                  <Badge variant="secondary" className="text-xs">
                    Price: {searchParams.get('price')}
                    <button
                      onClick={() => updateFilters('price', null)}
                      className="ml-1 hover:text-red-500"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {/* Add more active filter badges as needed */}
              </div>
            </div>
          )}

          <FilterContent />
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-4 overflow-y-auto h-full">
              <FilterContent />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
