import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { CheckCircle, Package, Mail, ArrowRight } from "lucide-react"

export default function OrderSuccessPage() {
  const orderNumber = "SK" + Math.random().toString(36).substr(2, 9).toUpperCase()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <Card className="shadow-lg">
          <CardContent className="p-8 text-center relative">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <CheckCircle className="w-12 h-12 text-green-600 animate-pulse" />
            </div>

            {/* Add confetti effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-2 h-2 bg-rose-400 rounded-full animate-float"></div>
              <div className="absolute top-20 right-20 w-3 h-3 bg-yellow-400 rounded-full animate-float-delayed"></div>
              <div className="absolute top-32 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-float-slow"></div>
              <div className="absolute top-16 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="absolute top-40 left-1/2 w-3 h-3 bg-purple-400 rounded-full animate-float"></div>
            </div>

            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2 animate-fade-in-up">Order Confirmed!</h1>
            <p className="text-gray-600 mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Thank you for your purchase. Your skincare journey continues!
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Package className="w-5 h-5 text-gray-600" />
                <span className="font-semibold">Order Number</span>
              </div>
              <div className="text-2xl font-mono font-bold text-rose-600 mb-4">#{orderNumber}</div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Processing
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Confirmation Email</h3>
                <p className="text-sm text-gray-600">We've sent order details to your email address</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Package className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Shipping Updates</h3>
                <p className="text-sm text-gray-600">You'll receive tracking info once your order ships</p>
              </div>
            </div>

            <div className="bg-rose-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-rose-900 mb-2">What's Next?</h3>
              <ul className="text-sm text-rose-800 space-y-1">
                <li>• Your order will be processed within 1-2 business days</li>
                <li>• Free shipping on orders over $50 (3-5 business days)</li>
                <li>• Track your package with the link we'll email you</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-rose-600 hover:bg-rose-700">
                <Link href="/products">
                  Continue Shopping
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/account/orders">View Order Details</Link>
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t">
              <p className="text-sm text-gray-500 mb-4">Questions about your order?</p>
              <div className="flex justify-center gap-4 text-sm">
                <Link href="/support" className="text-rose-600 hover:text-rose-700">
                  Contact Support
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/faq" className="text-rose-600 hover:text-rose-700">
                  FAQ
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
