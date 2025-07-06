import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CartProvider } from "@/hooks/use-cart";
import { SmoothScroll } from "@/components/smooth-scroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "SkinCare - Clean, Effective Skincare Products",
  description:
    "Discover your perfect skincare routine with our curated collection of clean, effective products tailored to your unique skin needs.",
  keywords:
    "skincare, clean beauty, natural skincare, dermatologist tested, cruelty free",
  authors: [{ name: "SkinCare Team" }],
  openGraph: {
    title: "SkinCare - Clean, Effective Skincare Products",
    description:
      "Discover your perfect skincare routine with our curated collection of clean, effective products.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <CartProvider>
          <SmoothScroll />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
