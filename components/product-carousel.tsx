"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Star, Heart, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

interface Product {
  id: string
  name: string
  slug: string
  category: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  isNew?: boolean
  onSale?: boolean
}

interface ProductCarouselProps {
  products: Product[]
  title?: string
  autoPlay?: boolean
  showControls?: boolean
  itemsPerView?: number
}

export function ProductCarousel({
  products,
  title = "Featured Products",
  autoPlay = true,
  showControls = true,
  itemsPerView = 4,
}: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay)
  const [isHovered, setIsHovered] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout>()

  const maxIndex = Math.max(0, products.length - itemsPerView)

  useEffect(() => {
    if (isAutoPlaying && !isHovered) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
      }, 3000)
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, isHovered, maxIndex])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  return (
    <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {title && (
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 animate-gradient-text bg-gradient-to-r from-gray-900 via-rose-600 to-gray-900 bg-clip-text">
            {title}
          </h2>
        </div>
      )}

      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
            width: `${(products.length * 100) / itemsPerView}%`,
          }}
        >
          {products.map((product, index) => (
            <div key={product.id} className={`flex-shrink-0 px-3`} style={{ width: `${100 / products.length}%` }}>
              <Card
                className={`group hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-rose-200/50 bg-white/90 backdrop-blur-sm animate-slide-in-stagger`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg overflow-hidden relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    {/* Floating Badges */}
                    {product.isNew && (
                      <Badge className="absolute top-3 left-3 bg-green-600 animate-bounce-gentle shadow-lg">New</Badge>
                    )}
                    {product.onSale && (
                      <Badge className="absolute top-3 right-3 bg-red-600 animate-pulse-glow shadow-lg">Sale</Badge>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex gap-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <Button
                          size="sm"
                          className="bg-white text-gray-900 hover:bg-rose-600 hover:text-white transition-all duration-300 shadow-xl hover:scale-110 animate-bounce-gentle ripple-mega"
                        >
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          className="bg-rose-600 hover:bg-rose-700 transition-all duration-300 shadow-xl hover:scale-110 animate-bounce-gentle ripple-mega"
                          style={{ animationDelay: "0.1s" }}
                        >
                          Quick Add
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 transition-all duration-500 hover:scale-150 ${
                            i < product.rating
                              ? "fill-yellow-400 text-yellow-400 animate-twinkle-slow"
                              : "text-gray-300"
                          }`}
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors duration-300 text-lg">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.category}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-rose-600 group-hover:animate-pulse">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      <Button
                        size="sm"
                        className="bg-rose-600 hover:bg-rose-700 transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-xl ripple-mega"
                      >
                        <Link href={`/products/${product.slug}`}>View</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      {showControls && (
        <>
          <Button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 rounded-full w-12 h-12 p-0"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 rounded-full w-12 h-12 p-0"
            disabled={currentIndex >= maxIndex}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? "bg-rose-600 scale-125 shadow-lg"
                    : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
                }`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          <Button
            onClick={toggleAutoPlay}
            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 rounded-full w-10 h-10 p-0"
          >
            {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
        </>
      )}
    </div>
  )
}
