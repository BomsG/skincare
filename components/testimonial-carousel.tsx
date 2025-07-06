"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface Testimonial {
  name: string
  text: string
  rating: number
  image: string
  location: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoPlay?: boolean
  interval?: number
}

export function TestimonialCarousel({ testimonials, autoPlay = true, interval = 4000 }: TestimonialCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (autoPlay) {
      const testimonialInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
      }, interval)
      return () => clearInterval(testimonialInterval)
    }
  }, [testimonials.length, autoPlay, interval])

  return (
    <div className="relative h-80 overflow-hidden">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 transform translate-x-0 scale-100"
              : index < currentSlide
                ? "opacity-0 transform -translate-x-full scale-95"
                : "opacity-0 transform translate-x-full scale-95"
          }`}
        >
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl max-w-4xl mx-auto hover:shadow-3xl transition-all duration-500">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-twinkle-slow"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed animate-fade-in-up">
                "{testimonial.text}"
              </blockquote>
              <div
                className="flex items-center justify-center gap-4 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-rose-200 animate-bounce-gentle shadow-lg"
                />
                <div className="text-left">
                  <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}

      {/* Indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "bg-white scale-125 shadow-lg animate-pulse-glow"
                : "bg-white/50 hover:bg-white/70 hover:scale-110"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
