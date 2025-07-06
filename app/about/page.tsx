"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Heart, Leaf, Users, Award, ArrowRight } from "lucide-react"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const values = [
    {
      icon: Leaf,
      title: "Clean Beauty",
      description:
        "We believe in the power of clean, natural ingredients that are safe for your skin and the environment.",
      color: "green",
    },
    {
      icon: Heart,
      title: "Self-Care",
      description:
        "Skincare is more than just products—it's about taking time for yourself and feeling confident in your skin.",
      color: "rose",
    },
    {
      icon: Users,
      title: "Community",
      description: "We're building a community of people who support each other on their skincare journeys.",
      color: "blue",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We're committed to providing the highest quality products backed by science and dermatologist testing.",
      color: "purple",
    },
  ]

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & Chief Dermatologist",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With over 15 years of experience in dermatology, Dr. Johnson founded SkinCare to make professional-grade skincare accessible to everyone.",
    },
    {
      name: "Emily Chen",
      role: "Head of Product Development",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Emily leads our product development team, ensuring every formula meets our high standards for efficacy and safety.",
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Science Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Michael oversees our research and development, bringing cutting-edge skincare science to our product formulations.",
    },
    {
      name: "Lisa Park",
      role: "Customer Experience Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Lisa ensures every customer has an exceptional experience, from product selection to ongoing support.",
    },
  ]

  const milestones = [
    { year: "2020", event: "SkinCare founded with a mission to democratize clean beauty" },
    { year: "2021", event: "Launched our first product line with 5 essential skincare products" },
    { year: "2022", event: "Reached 10,000 happy customers and expanded to 15 products" },
    { year: "2023", event: "Opened our first retail location and launched the skin quiz feature" },
    { year: "2024", event: "Celebrating 50,000+ customers and 25 award-winning products" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-rose-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-rose-600 to-pink-600 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float-mega"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/15 rounded-full animate-float-delayed-mega"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1
            className={`text-5xl md:text-6xl font-serif font-bold mb-6 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : ""}`}
          >
            About SkinCare
          </h1>
          <p
            className={`text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            We're on a mission to make professional-grade, clean skincare accessible to everyone, helping you achieve
            healthy, glowing skin with products you can trust.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  SkinCare was born from a simple belief: everyone deserves access to effective, clean skincare products
                  that actually work. Our founder, Dr. Sarah Johnson, noticed that many of her patients were struggling
                  to find products that were both gentle and effective.
                </p>
                <p>
                  After years of research and development, we created a line of products that combines the best of
                  nature and science. Each formula is carefully crafted with clean, proven ingredients and rigorously
                  tested for safety and efficacy.
                </p>
                <p>
                  Today, we're proud to serve thousands of customers worldwide, helping them achieve their best skin
                  while staying true to our values of transparency, sustainability, and inclusivity.
                </p>
              </div>
              <Button asChild className="mt-8 bg-rose-600 hover:bg-rose-700 text-lg px-8 py-4">
                <Link href="/products">
                  Shop Our Products <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Our story"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do, from product development to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className={`text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg animate-slide-in-stagger`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-${value.color}-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className={`w-8 h-8 text-${value.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our passionate team of experts is dedicated to bringing you the best in clean, effective skincare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className={`text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg animate-slide-in-stagger`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="aspect-square bg-gray-100 rounded-full overflow-hidden mb-6 mx-auto w-32 h-32">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-4">
                    {member.role}
                  </Badge>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 px-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-serif font-bold mb-6">Our Journey</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              From a small startup to a trusted skincare brand, here are the key milestones in our journey.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`flex items-center gap-8 animate-slide-in-left`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-2xl font-bold">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <p className="text-lg">{milestone.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Certifications & Awards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to be recognized for our commitment to quality, safety, and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cruelty-Free Certified",
                description: "Certified by Leaping Bunny, ensuring no animal testing",
                icon: "🐰",
              },
              {
                title: "Clean Beauty Award 2024",
                description: "Recognized for excellence in clean beauty formulations",
                icon: "🏆",
              },
              {
                title: "Dermatologist Tested",
                description: "All products tested and approved by board-certified dermatologists",
                icon: "👩‍⚕️",
              },
              {
                title: "Sustainable Packaging",
                description: "Committed to eco-friendly and recyclable packaging",
                icon: "♻️",
              },
              {
                title: "FDA Compliant",
                description: "All products meet FDA safety and quality standards",
                icon: "✅",
              },
              {
                title: "Customer Choice Award",
                description: "Voted #1 skincare brand by our customers",
                icon: "⭐",
              },
            ].map((cert, index) => (
              <Card
                key={cert.title}
                className={`text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-rose-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6 animate-fade-in-up">
            Ready to Start Your Skincare Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Join thousands of happy customers who trust SkinCare for their daily routine.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4">
              <Link href="/quiz">Take Our Skin Quiz</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 bg-transparent"
            >
              <Link href="/products">Shop Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
