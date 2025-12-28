"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Star,
  Leaf,
  Shield,
  Heart,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import { products } from "@/data/products";
import Image from "next/image";
import img1 from "../public/images/simg1.jpg";
import img2 from "../public/images/simg2.jpg";
import img3 from "../public/images/simg3.jpg";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const featuredProducts = products.slice(0, 8);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const heroSlides = [
    {
      title: "Beauty that",
      highlight: "heals.",
      subtitle:
        "Discover your perfect skincare routine with our curated collection of clean, effective products.",
      bgImage: img1,
      cta: "Shop Now",
    },
    {
      title: "Effortless Glow",
      highlight: "unleashed.",
      subtitle:
        "Reveal radiant skin through our nature-powered, clinically-tested solutions.",
      bgImage: img2,
      cta: "Explore Products",
    },
    {
      title: "Radiate your",
      highlight: "light.",
      subtitle: "We dont belive in 10 step Routine!",
      bgImage: img3,
      cta: "Start Journey",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "My skin has never looked better! The gentle cleanser and vitamin C serum transformed my routine completely.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
      location: "New York, NY",
    },
    {
      name: "Emily R.",
      text: "Finally found products that work for my sensitive skin. No more irritation, just healthy glow every day!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
      location: "Los Angeles, CA",
    },
    {
      name: "Jessica L.",
      text: "The personalized routine quiz helped me discover exactly what my skin needed. Amazing results in just weeks!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
      location: "Chicago, IL",
    },
    {
      name: "Maria G.",
      text: "Love how natural and effective these products are. My friends keep asking what I'm using!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
      location: "Miami, FL",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, heroSlides.length]);

  // Auto-play testimonials
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setTestimonialSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(testimonialInterval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Enhanced Hero Carousel */}
      <section className="relative h-screen overflow-hidden">
        {/* Carousel Container */}
        <div className="relative w-full h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${slide.bgImage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform ${
                index === currentSlide
                  ? "opacity-100 scale-100 translate-x-0"
                  : index < currentSlide
                  ? "opacity-0 scale-95 -translate-x-full"
                  : "opacity-0 scale-95 translate-x-full"
              }`}
            >
              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float-mega"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-white/15 rounded-full animate-float-delayed-mega"></div>
                <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/5 rounded-full animate-float-slow-mega"></div>
                <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/20 rounded-full animate-pulse-mega"></div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 z-10" />
              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="max-w-6xl mx-auto px-4 text-center">
                  <div
                    className={`transition-all duration-1000 delay-300 ${
                      index === currentSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    <Badge
                      variant="secondary"
                      className="mb-6 bg-white/20 text-gray-800 hover:bg-white/30 transition-all duration-500 hover:scale-110 backdrop-blur-sm animate-bounce-gentle"
                    >
                      Soft • Clean • Effective
                    </Badge>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 tracking-wider">
                      {slide.title}
                      <span className="block text-[#BF6159] animate-gradient-text-mega bg-gradient-to-r from-[#BF6159] via-pink-600 to-[#BF6159] bg-clip-text text-transparent">
                        {slide.highlight}
                      </span>
                    </h1>
                    <p className="text-[16px] md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Button
                        asChild
                        size="lg"
                        className="bg-[#BF6159] hover:bg-white/80 hover:text-black transform hover:scale-110 transition-all duration-500 hover:shadow-2xl group text-lg px-8 py-4 animate-pulse-glow"
                      >
                        <Link href="/products">
                          <span className="group-hover:animate-bounce">
                            {slide.cta}
                          </span>
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-2 border-gray-800 text-gray-800 hover:bg-[#e7b5b0] hover:text-white bg-white/80 backdrop-blur-sm transform hover:scale-110 transition-all duration-500 hover:shadow-2xl text-lg px-8 py-4"
                      >
                        <Link href="/quiz">Find Your Routine</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-20">
          <Button
            onClick={prevSlide}
            variant="outline"
            size="sm"
            className="bg-white/20 backdrop-blur-sm border-white/30 text-gray-800 hover:bg-white/40 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <div className="flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? "bg-[#BF6159] scale-125 shadow-lg"
                    : "bg-white/50 hover:bg-white/70 hover:scale-110"
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            variant="outline"
            size="sm"
            className="bg-white/20 backdrop-blur-sm border-white/30 text-gray-800 hover:bg-white/40 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          <Button
            onClick={toggleAutoPlay}
            variant="outline"
            size="sm"
            className="bg-white/20 backdrop-blur-sm border-white/30 text-gray-800 hover:bg-white/40 transition-all duration-300 hover:scale-110 ml-2"
          >
            {isAutoPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <div
            className="h-full bg-[#BF6159] transition-all duration-300 ease-linear"
            style={{
              width: `${((currentSlide + 1) / heroSlides.length) * 100}%`,
              animation: isAutoPlaying ? "progress 5s linear infinite" : "none",
            }}
          />
        </div>
      </section>

      {/* Floating Features Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-50/50 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Clean Ingredients",
                desc: "Natural, non-toxic formulations",
                color: "green",
                delay: "0s",
              },
              {
                icon: Shield,
                title: "Dermatologist Tested",
                desc: "Safe for all skin types",
                color: "blue",
                delay: "0.2s",
              },
              {
                icon: Heart,
                title: "Cruelty Free",
                desc: "Never tested on animals",
                color: "rose",
                delay: "0.4s",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`group text-center animate-float-in-up hover:animate-none`}
                style={{ animationDelay: feature.delay }}
              >
                <div
                  className={`w-20 h-20 bg-${feature.color}-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-2xl animate-bounce-slow`}
                >
                  <feature.icon
                    className={`w-10 h-10 text-${feature.color}-600 group-hover:animate-pulse`}
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 text-xl group-hover:text-rose-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Products Carousel */}
      {/* Enhanced Products Carousel */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-rose-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4 md:mb-6 bg-gradient-to-r from-gray-900 via-rose-600 to-gray-900 bg-clip-text text-transparent">
              Featured Products
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Our most loved products, carefully selected for effectiveness.
            </p>
          </div>

          {/* Products Carousel Container */}
          <div className="relative group">
            <div className="overflow-x-auto md:overflow-hidden pb-4 md:pb-0 scrollbar-hide snap-x snap-mandatory">
              <div
                className="flex gap-4 md:gap-6 transition-transform duration-700 ease-in-out"
                style={{
                  // On mobile (max-width 768px), we disable the transform to allow native swiping
                  transform:
                    typeof window !== "undefined" && window.innerWidth > 768
                      ? `translateX(-${(currentSlide * 100) / 4}%)`
                      : "none",
                }}
              >
                {featuredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="w-[85%] sm:w-[45%] md:w-1/3 lg:w-1/4 flex-shrink-0 snap-center md:snap-start"
                  >
                    <Card
                      className="group/card hover:shadow-2xl transition-all duration-500 md:hover:-translate-y-4 cursor-pointer overflow-hidden border-0 shadow-lg bg-white/80 backdrop-blur-sm h-full"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-0">
                        <div className="aspect-[4/5] bg-gray-100 overflow-hidden relative">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-1000"
                          />

                          {/* Badge Handling */}
                          <div className="absolute top-3 left-3 flex flex-col gap-2">
                            {product.isNew && (
                              <Badge className="bg-green-600 border-none shadow-md">
                                New
                              </Badge>
                            )}
                            {product.onSale && (
                              <Badge className="bg-red-600 border-none shadow-md animate-pulse">
                                Sale
                              </Badge>
                            )}
                          </div>

                          {/* Desktop Hover Actions (Hidden on Mobile) */}
                          <div className="absolute inset-0 bg-black/20 opacity-0 md:group-hover/card:opacity-100 transition-opacity flex items-center justify-center gap-3">
                            <Button
                              size="sm"
                              className="bg-white text-black hover:bg-rose-50 rounded-full"
                            >
                              <Heart className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              className="bg-[#BF6159] hover:bg-[#a8443b] rounded-full"
                            >
                              Quick Add
                            </Button>
                          </div>
                        </div>

                        <div className="p-4 md:p-6">
                          <div className="flex gap-0.5 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3.5 h-3.5 ${
                                  i < product.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <h3 className="font-bold text-gray-900 mb-1 truncate text-base md:text-lg">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-500 mb-3">
                            {product.category}
                          </p>

                          <div className="flex items-center justify-between mt-auto">
                            <span className="text-lg font-bold text-[#BF6159]">
                              ${product.price}
                            </span>
                            <Button
                              size="sm"
                              asChild
                              className="bg-[#BF6159] hover:bg-[#9e423a] rounded-full h-8 px-4"
                            >
                              <Link href={`/products/${product.slug}`}>
                                View
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center mt-10 md:mt-16">
            <Button
              asChild
              variant="outline"
              className="border-2 border-[#BF6159] text-[#BF6159] hover:bg-[#BF6159] hover:text-white rounded-full px-10 py-6 text-lg transition-all"
            >
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Carousel */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#BF6159] to-[#bb6d66] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 animate-fade-in-up">
              What Our Customers Say
            </h2>
            <p
              className="text-xl text-white/90 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Real results from real people
            </p>
          </div>

          <div className="relative h-80 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === testimonialSlide
                    ? "opacity-100 transform translate-x-0 scale-100"
                    : index < testimonialSlide
                    ? "opacity-0 transform -translate-x-full scale-95"
                    : "opacity-0 transform translate-x-full scale-95"
                }`}
              >
                <Card className="bg-white/95 backdrop-blur-sm shadow-2xl max-w-4xl mx-auto">
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
                    <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-rose-200 animate-bounce-gentle"
                      />
                      <div className="text-left">
                        <p className="font-bold text-gray-900 text-lg">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-600">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setTestimonialSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-500 ${
                  index === testimonialSlide
                    ? "bg-white scale-125 shadow-lg"
                    : "bg-white/50 hover:bg-white/70 hover:scale-110"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 bg-[#b26e68] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 to-pink-600/20 animate-gradient-shift-slow"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-float-mega"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-float-delayed-mega"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up animate-gradient-text-white bg-gradient-to-r from-white via-rose-200 to-white bg-clip-text">
            Ready to Transform Your Skin?
          </h2>
          <p
            className="text-xl md:text-2xl mb-12 opacity-90 animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Join thousands of happy customers who've discovered their perfect
            skincare routine.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="transform hover:scale-110 transition-all duration-500 hover:shadow-2xl animate-pulse-glow text-lg px-10 py-4 bg-white text-gray-900 hover:bg-rose-100"
            >
              <Link href="/quiz">Take the Text</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent transform hover:scale-110 transition-all duration-500 hover:shadow-2xl text-lg px-10 py-4"
            >
              <Link href="/products">Shop Collection</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
