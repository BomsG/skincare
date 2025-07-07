"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Star,
  Heart,
  ShoppingCart,
  Truck,
  Shield,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/hooks/use-cart";
import { notFound } from "next/navigation";
import Link from "next/link";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { addToCart } = useCart();

  const product = products.find((p) => p.slug === params.slug);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    });
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const productImages = product.images || [
    product.image,
    product.image,
    product.image,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8 animate-fade-in-up">
          <Link href="/" className="hover:text-[#BF6159] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/products"
            className="hover:text-[#BF6159] transition-colors"
          >
            Products
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div
            className={`space-y-4 transition-all duration-1000 ${
              isVisible ? "animate-slide-in-left" : ""
            }`}
          >
            <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-2xl relative group">
              <img
                src={productImages[selectedImage] || product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Image Navigation */}
              {productImages.length > 1 && (
                <>
                  <Button
                    onClick={() =>
                      setSelectedImage(
                        (prev) =>
                          (prev - 1 + productImages.length) %
                          productImages.length
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 p-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    onClick={() =>
                      setSelectedImage(
                        (prev) => (prev + 1) % productImages.length
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 p-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </>
              )}
            </div>

            {productImages.length > 1 && (
              <div className="flex gap-3">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                      selectedImage === index
                        ? "border-[#BF6159] shadow-lg"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "animate-slide-in-right" : ""
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary" className="animate-bounce-gentle">
                  {product.category}
                </Badge>
                {product.isNew && (
                  <Badge className="bg-green-600 animate-pulse-glow">New</Badge>
                )}
                {product.onSale && (
                  <Badge className="bg-[#BF6159] animate-pulse-glow">
                    Sale
                  </Badge>
                )}
              </div>
              <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4 animate-gradient-text bg-gradient-to-r from-gray-900 via-rose-600 to-gray-900 bg-clip-text">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 transition-all duration-300 hover:scale-125 ${
                        i < product.rating
                          ? "fill-yellow-400 text-yellow-400 animate-twinkle-slow"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 text-lg">
                  ({product.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-[#BF6159] animate-pulse-slow">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                Suitable for:
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.skinTypes.map((type, index) => (
                  <Badge
                    key={type}
                    variant="outline"
                    className="border-rose-300 text-[#BF6159] hover:bg-rose-50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {type} Skin
                  </Badge>
                ))}
              </div>
            </div>

            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                Addresses:
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.concerns.map((concern, index) => (
                  <Badge
                    key={concern}
                    variant="secondary"
                    className="hover:bg-gray-200 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {concern}
                  </Badge>
                ))}
              </div>
            </div>

            <div
              className="flex items-center gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-gray-100 transition-colors duration-300 text-lg font-semibold"
                >
                  -
                </button>
                <span className="px-6 py-3 border-x-2 border-gray-200 min-w-[4rem] text-center text-lg font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-gray-100 transition-colors duration-300 text-lg font-semibold"
                >
                  +
                </button>
              </div>
              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-[#BF6159] hover:bg-[#823831] text-lg py-6 ripple-mega transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                size="lg"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="py-6 px-6 border-2 border-rose-300 text-[#BF6159] hover:bg-rose-50 transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            <div
              className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-gray-100 animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <Truck className="w-8 h-8 mx-auto mb-3 text-green-600 group-hover:animate-bounce" />
                <p className="text-sm font-medium">Free Shipping</p>
                <p className="text-xs text-gray-500">Orders over $50</p>
              </div>
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <Shield className="w-8 h-8 mx-auto mb-3 text-blue-600 group-hover:animate-bounce" />
                <p className="text-sm font-medium">Secure Payment</p>
                <p className="text-xs text-gray-500">SSL Protected</p>
              </div>
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <RotateCcw className="w-8 h-8 mx-auto mb-3 text-purple-600 group-hover:animate-bounce" />
                <p className="text-sm font-medium">30-Day Returns</p>
                <p className="text-xs text-gray-500">Money back guarantee</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16 animate-fade-in-up">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-white shadow-lg rounded-xl p-2">
              <TabsTrigger
                value="description"
                className="rounded-lg transition-all duration-300"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                value="ingredients"
                className="rounded-lg transition-all duration-300"
              >
                Ingredients
              </TabsTrigger>
              <TabsTrigger
                value="usage"
                className="rounded-lg transition-all duration-300"
              >
                How to Use
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="rounded-lg transition-all duration-300"
              >
                Reviews
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-8">
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ingredients" className="mt-8">
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <h3 className="font-semibold mb-6 text-xl">
                    Key Ingredients:
                  </h3>
                  <div className="space-y-4">
                    {product.keyIngredients?.map((ingredient, index) => (
                      <div
                        key={index}
                        className="animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <h4 className="font-medium text-gray-900 text-lg">
                          {ingredient.name}
                        </h4>
                        <p className="text-gray-600">{ingredient.benefit}</p>
                      </div>
                    )) || (
                      <p className="text-gray-600 text-lg">
                        This product contains carefully selected ingredients
                        that are gentle yet effective for your skin type.
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="usage" className="mt-8">
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-xl">
                        How to Use:
                      </h3>
                      <p className="text-gray-700 text-lg">
                        {product.usage ||
                          "Apply to clean skin as directed. Use morning and/or evening as part of your skincare routine."}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 text-xl">Best Used:</h3>
                      <p className="text-gray-700 text-lg">
                        {product.bestUsed || "Morning and evening"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews" className="mt-8">
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="space-y-8">
                    <div className="flex items-center gap-6">
                      <div className="text-5xl font-bold animate-pulse-slow">
                        {product.rating}
                      </div>
                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-6 h-6 ${
                                i < product.rating
                                  ? "fill-yellow-400 text-yellow-400 animate-twinkle-slow"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-600 text-lg">
                          Based on {product.reviews} reviews
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {[
                        {
                          name: "Sarah M.",
                          rating: 5,
                          text: "Amazing product! My skin feels so much smoother and looks brighter. Will definitely repurchase!",
                          date: "2 weeks ago",
                        },
                        {
                          name: "Emily R.",
                          rating: 5,
                          text: "Perfect for my sensitive skin. No irritation and great results. Highly recommend!",
                          date: "1 month ago",
                        },
                        {
                          name: "Jessica L.",
                          rating: 4,
                          text: "Good product, noticed improvements after a few weeks of use. Love the texture.",
                          date: "3 weeks ago",
                        },
                      ].map((review, index) => (
                        <div
                          key={index}
                          className="border-b pb-6 last:border-b-0 animate-fade-in-up"
                          style={{ animationDelay: `${index * 0.2}s` }}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <span className="font-medium text-lg">
                              {review.name}
                            </span>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">
                              {review.date}
                            </span>
                          </div>
                          <p className="text-gray-700">{review.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <Card
                  key={relatedProduct.id}
                  className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-3 animate-slide-in-stagger"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                      <img
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < relatedProduct.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-sm text-gray-500 ml-1">
                          ({relatedProduct.reviews})
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-rose-600 transition-colors duration-300">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {relatedProduct.category}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-rose-600">
                          ${relatedProduct.price}
                        </span>
                        <Button
                          size="sm"
                          className="bg-rose-600 hover:bg-rose-700 transform hover:scale-105 transition-all duration-300"
                        >
                          <Link href={`/products/${relatedProduct.slug}`}>
                            View
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
