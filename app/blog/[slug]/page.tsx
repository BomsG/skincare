"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  Heart,
  BookOpen,
} from "lucide-react";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const post = blogPosts.find((p) => p.slug === params.slug);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-rose-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#BF6159] to-[#77241d] text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float-mega"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/15 rounded-full animate-float-delayed-mega"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-6 animate-fade-in-up">
            <Button
              asChild
              variant="secondary"
              className="bg-white/20 text-white hover:bg-white/30 border-0"
            >
              <Link href="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>

          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white animate-bounce-gentle">
              {post.category}
            </Badge>
            <h1
              className={`text-4xl md:text-5xl font-serif font-bold mb-6 transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up" : ""
              }`}
            >
              {post.title}
            </h1>

            <div
              className={`flex items-center justify-center gap-6 text-white/90 mb-8 transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {post.readTime}
              </div>
            </div>

            <p
              className={`text-xl opacity-90 max-w-3xl mx-auto transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: "0.4s" }}
            >
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Image */}
            <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-12 shadow-2xl animate-slide-in-left">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Body */}
            <div
              className="prose prose-lg max-w-none animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Article Actions */}
            <div
              className="flex items-center justify-between pt-8 mt-8 border-t border-gray-200 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center gap-4">
                <Button
                  onClick={() => setIsLiked(!isLiked)}
                  variant="outline"
                  className={`transition-all duration-300 hover:scale-105 ${
                    isLiked
                      ? "bg-rose-50 border-rose-300 text-rose-600"
                      : "bg-transparent"
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 mr-2 ${isLiked ? "fill-rose-600" : ""}`}
                  />
                  {isLiked ? "Liked" : "Like"}
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent hover:scale-105 transition-all duration-300"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <BookOpen className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Author Card */}
              <Card className="shadow-lg border-0 animate-slide-in-right">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-rose-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {post.author}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Board-certified dermatologist with over 15 years of
                    experience in skincare and cosmetic treatments.
                  </p>
                  <Button size="sm" className="bg-[#BF6159] hover:bg-[#7a3630]">
                    View Profile
                  </Button>
                </CardContent>
              </Card>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <Card
                  className="shadow-lg border-0 animate-slide-in-right"
                  style={{ animationDelay: "0.2s" }}
                >
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.id}
                          href={`/blog/${relatedPost.slug}`}
                          className="block group hover:bg-gray-50 p-3 rounded-lg transition-all duration-300"
                        >
                          <h4 className="font-medium text-sm text-gray-900 group-hover:text-[#BF6159] transition-colors duration-300 mb-1">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {relatedPost.readTime}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Newsletter Signup */}
              <Card
                className="bg-gradient-to-r from-[#BF6159] to-pink-600 text-white shadow-lg border-0 animate-slide-in-right"
                style={{ animationDelay: "0.4s" }}
              >
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold mb-2">Stay Updated</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Get the latest skincare tips delivered to your inbox
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-white text-rose-600 hover:bg-gray-100"
                  >
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
