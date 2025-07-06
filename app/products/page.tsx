"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Star, Filter, Heart } from "lucide-react"
import { products } from "@/data/products"

export default function ProductsPage() {
  const [selectedSkinTypes, setSelectedSkinTypes] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("popularity")
  const [showFilters, setShowFilters] = useState(false)

  const skinTypes = ["Oily", "Dry", "Combination", "Sensitive", "Normal"]
  const categories = ["Cleanser", "Serum", "Moisturizer", "Sunscreen", "Treatment", "Mask"]
  const concerns = ["Acne", "Aging", "Hydration", "Brightening", "Sensitivity", "Pores"]

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const skinTypeMatch =
        selectedSkinTypes.length === 0 || selectedSkinTypes.some((type) => product.skinTypes.includes(type))
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category)
      const concernMatch =
        selectedConcerns.length === 0 || selectedConcerns.some((concern) => product.concerns.includes(concern))

      return skinTypeMatch && categoryMatch && concernMatch
    })

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "newest":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        case "rating":
          return b.rating - a.rating
        default: // popularity
          return b.reviews - a.reviews
      }
    })

    return filtered
  }, [selectedSkinTypes, selectedCategories, selectedConcerns, sortBy])

  const handleSkinTypeChange = (skinType: string, checked: boolean) => {
    if (checked) {
      setSelectedSkinTypes([...selectedSkinTypes, skinType])
    } else {
      setSelectedSkinTypes(selectedSkinTypes.filter((type) => type !== skinType))
    }
  }

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category))
    }
  }

  const handleConcernChange = (concern: string, checked: boolean) => {
    if (checked) {
      setSelectedConcerns([...selectedConcerns, concern])
    } else {
      setSelectedConcerns(selectedConcerns.filter((c) => c !== concern))
    }
  }

  const clearAllFilters = () => {
    setSelectedSkinTypes([])
    setSelectedCategories([])
    setSelectedConcerns([])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">All Products</h1>
          <p className="text-gray-600">Discover your perfect skincare routine</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg p-6 sticky top-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">Filters</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>

              <div className={`space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
                {/* Skin Type Filter */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Skin Type</h4>
                  <div className="space-y-2">
                    {skinTypes.map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox
                          id={`skin-${type}`}
                          checked={selectedSkinTypes.includes(type)}
                          onCheckedChange={(checked) => handleSkinTypeChange(type, checked as boolean)}
                        />
                        <label htmlFor={`skin-${type}`} className="text-sm text-gray-700">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={`cat-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                        />
                        <label htmlFor={`cat-${category}`} className="text-sm text-gray-700">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Concerns Filter */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Concerns</h4>
                  <div className="space-y-2">
                    {concerns.map((concern) => (
                      <div key={concern} className="flex items-center space-x-2">
                        <Checkbox
                          id={`concern-${concern}`}
                          checked={selectedConcerns.includes(concern)}
                          onCheckedChange={(checked) => handleConcernChange(concern, checked as boolean)}
                        />
                        <label htmlFor={`concern-${concern}`} className="text-sm text-gray-700">
                          {concern}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="outline" size="sm" onClick={clearAllFilters} className="w-full bg-transparent">
                  Clear All
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">{filteredAndSortedProducts.length} products found</p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedProducts.map((product, index) => (
                <Card
                  key={product.id}
                  className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-white animate-fade-in-up cursor-pointer overflow-hidden border-0 shadow-md hover:shadow-rose-200/50`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden relative">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {product.isNew && <Badge className="absolute top-2 left-2 bg-green-600 animate-pulse">New</Badge>}
                      {product.onSale && (
                        <Badge className="absolute top-2 right-2 bg-red-600 animate-bounce">Sale</Badge>
                      )}

                      {/* Hover Overlay with Quick Actions */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <Button
                            size="sm"
                            className="bg-white text-gray-900 hover:bg-rose-600 hover:text-white transition-all duration-300 shadow-lg"
                          >
                            <Heart className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-rose-600 hover:bg-rose-700 transition-all duration-300 shadow-lg"
                          >
                            Quick Add
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 transition-all duration-300 hover:scale-125 ${
                              i < product.rating ? "fill-yellow-400 text-yellow-400 animate-twinkle" : "text-gray-300"
                            }`}
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                        <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-rose-600 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {product.skinTypes.slice(0, 2).map((type, typeIndex) => (
                          <Badge
                            key={type}
                            variant="secondary"
                            className={`text-xs transition-all duration-300 hover:scale-105 animate-fade-in-up`}
                            style={{ animationDelay: `${typeIndex * 0.1}s` }}
                          >
                            {type}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-rose-600 group-hover:animate-pulse">
                            ${product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                          )}
                        </div>
                        <Button
                          size="sm"
                          className="bg-rose-600 hover:bg-rose-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          <Link href={`/products/${product.slug}`}>View</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">No products found matching your filters.</p>
                <Button onClick={clearAllFilters} variant="outline">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
