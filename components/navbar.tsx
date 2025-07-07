"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ShoppingCart, User, Menu, X, Search, Heart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getItemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg backdrop-blur-sm bg-white/95" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Bounce Animation */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-[#BF6159] rounded-full flex items-center justify-center group-hover:animate-bounce transition-all duration-300 group-hover:bg-[#BF6159]">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#BF6159] transition-colors duration-300">
              SkinCare
            </span>
          </Link>

          {/* Desktop Navigation with Hover Effects */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: "/products", label: "Products" },
              { href: "/quiz", label: "Skin Test" },
              { href: "/blog", label: "Blog" },
              { href: "/about", label: "About" },
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-[#BF6159] transition-all duration-300 relative group animate-fade-in-down"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#BF6159] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Actions with Micro-interactions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Search className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:scale-110 transition-transform duration-300 group"
            >
              <Heart className="w-4 h-4 group-hover:fill-rose-500 group-hover:text-rose-500 transition-all duration-300" />
            </Button>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="relative hover:scale-110 transition-transform duration-300"
            >
              <Link href="/cart">
                <ShoppingCart className="w-4 h-4" />
                {getItemCount() > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 bg-rose-600 text-xs animate-bounce">
                    {getItemCount()}
                  </Badge>
                )}
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Link href="/login">
                <User className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button with Animation */}
          <div className="md:hidden flex items-center space-x-2">
            <Button asChild variant="ghost" size="sm" className="relative">
              <Link href="/cart">
                <ShoppingCart className="w-4 h-4" />
                {getItemCount() > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 bg-rose-600 text-xs animate-bounce">
                    {getItemCount()}
                  </Badge>
                )}
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="transition-transform duration-300 hover:scale-110"
            >
              <div className="relative w-4 h-4">
                <Menu
                  className={`w-4 h-4 absolute transition-all duration-300 ${
                    isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  className={`w-4 h-4 absolute transition-all duration-300 ${
                    isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  }`}
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu with Slide Animation */}
        <div
          className={`md:hidden border-t border-gray-200 overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
          }`}
        >
          <div className="flex flex-col space-y-4">
            {[
              { href: "/products", label: "Products" },
              { href: "/categories", label: "Categories" },
              { href: "/quiz", label: "Skin Quiz" },
              { href: "/blog", label: "Blog" },
              { href: "/about", label: "About" },
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-gray-700 hover:text-rose-600 transition-all duration-300 transform ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div
              className={`flex items-center space-x-4 pt-4 border-t border-gray-200 transition-all duration-300 transform ${
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: "0.5s" }}
            >
              <Button
                variant="ghost"
                size="sm"
                className="hover:scale-110 transition-transform duration-300"
              >
                <Search className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:scale-110 transition-transform duration-300"
              >
                <Heart className="w-4 h-4" />
              </Button>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="hover:scale-110 transition-transform duration-300"
              >
                <Link href="/login">
                  <User className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
