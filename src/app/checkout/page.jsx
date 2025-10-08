"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/auth-context'
import { useCart } from '@/components/cart-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'

export default function CheckoutPage() {
  const router = useRouter()
  const { user, token } = useAuth()
  const { items, total, clearCart } = useCart()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
    notes: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!user) {
      alert('Please login to continue')
      router.push('/')
      return
    }

    if (items.length === 0) {
      alert('Your cart is empty!')
      router.push('/')
      return
    }

    setLoading(true)

    try {
      console.log('Placing order with token:', !!token)
      
      const orderItems = items.map(item => ({
        productId: item.id,
        quantity: item.qty
      }))

      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          items: orderItems,
          shippingAddress: {
            fullName: formData.fullName,
            addressLine1: formData.addressLine1,
            addressLine2: formData.addressLine2,
            city: formData.city,
            state: formData.state,
            pincode: formData.pincode
          },
          phone: formData.phone,
          notes: formData.notes
        }),
      })

      console.log('Order response status:', response.status)
      const data = await response.json()
      console.log('Order response data:', data)

      if (response.ok) {
        // Show professional success message
        const successMessage = `
🎉 ORDER CONFIRMED!

✅ Order ID: ${data.orderId}
💰 Total: ₹${data.totalAmount.toLocaleString('en-IN')}
📅 Estimated Delivery: ${data.estimatedDelivery}

📧 Confirmation emails have been sent to your email address and our team.

📞 WHAT'S NEXT?
• Our team will contact you within 24 hours
• We'll confirm your order details and delivery schedule  
• Multiple payment options available (UPI, Bank Transfer, COD)
• Free delivery and professional installation included

Thank you for choosing Archik Constructions! 🏠✨`;

        alert(successMessage);
        
        // Clear the cart and form
        clearCart();
        setFormData({
          fullName: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: '',
          pincode: '',
          phone: '',
          notes: ''
        });
        
        router.push('/');
      } else {
        alert(data.error || 'Failed to place order')
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Failed to place order. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-3">Login Required</h2>
          <p className="text-slate-600 mb-6">Please login to your account to continue with secure checkout</p>
          <Button 
            onClick={() => router.push('/')}
            className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-2 rounded-lg"
          >
            Go to Home & Login
          </Button>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-3">Your Cart is Empty</h2>
          <p className="text-slate-600 mb-6">Looks like you haven't added any furniture to your cart yet. Explore our collection!</p>
          <Button 
            onClick={() => router.push('/')}
            className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-2 rounded-lg"
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">Secure Checkout</h1>
            <p className="text-slate-600">Complete your order with confidence</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Order Summary - Left Column */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-800">Order Summary</h3>
                  <div className="bg-slate-100 px-3 py-1 rounded-full">
                    <span className="text-sm text-slate-600">{items.length} item{items.length !== 1 ? 's' : ''}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6 max-h-80 lg:max-h-96 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-lg flex items-center justify-center border border-gray-200 flex-shrink-0">
                        <img 
                          src="/placeholder-logo.png" 
                          alt="Archik Constructions" 
                          className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-slate-800 text-sm lg:text-base truncate">{item.name}</h4>
                        <p className="text-xs lg:text-sm text-slate-500">Qty: {item.qty}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="font-bold text-slate-800 text-sm lg:text-base">₹{(item.priceNumber * item.qty).toLocaleString('en-IN')}</p>
                        <p className="text-xs text-slate-500">₹{item.priceNumber.toLocaleString('en-IN')} each</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Price Breakdown */}
                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span>₹{total.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Delivery</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Installation</span>
                    <span className="text-green-600 font-medium">Included</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between text-lg font-bold text-slate-800">
                    <span>Total Amount</span>
                    <span>₹{total.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkout Form - Right Column */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Delivery Details</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Customer Info Display */}
                  <div className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">Customer Information</h4>
                    <p className="text-slate-600 text-sm">{user.name}</p>
                    <p className="text-slate-600 text-sm">{user.email}</p>
                  </div>

                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full h-10 border-gray-300 focus:border-slate-500 focus:ring-slate-500 rounded-lg"
                    />
                  </div>

                  <div>
                    <label htmlFor="addressLine1" className="block text-sm font-semibold text-slate-700 mb-2">
                      Address Line 1 *
                    </label>
                    <Input
                      id="addressLine1"
                      name="addressLine1"
                      type="text"
                      value={formData.addressLine1}
                      onChange={handleInputChange}
                      placeholder="House/Flat No., Building Name, Street"
                      required
                      className="w-full h-10 border-gray-300 focus:border-slate-500 focus:ring-slate-500 rounded-lg"
                    />
                  </div>

                  <div>
                    <label htmlFor="addressLine2" className="block text-sm font-semibold text-slate-700 mb-2">
                      Address Line 2
                    </label>
                    <Input
                      id="addressLine2"
                      name="addressLine2"
                      type="text"
                      value={formData.addressLine2}
                      onChange={handleInputChange}
                      placeholder="Area, Landmark (Optional)"
                      className="w-full h-10 border-gray-300 focus:border-slate-500 focus:ring-slate-500 rounded-lg"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="city" className="block text-sm font-semibold text-slate-700 mb-2">
                        City *
                      </label>
                      <Input
                        id="city"
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="City"
                        required
                        className="w-full h-10 border-gray-300 focus:border-slate-500 focus:ring-slate-500 rounded-lg"
                      />
                    </div>
                    <div>
                      <label htmlFor="pincode" className="block text-sm font-semibold text-slate-700 mb-2">
                        PIN Code *
                      </label>
                      <Input
                        id="pincode"
                        name="pincode"
                        type="text"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        placeholder="000000"
                        required
                        pattern="[0-9]{6}"
                        maxLength="6"
                        className="w-full h-10 border-gray-300 focus:border-slate-500 focus:ring-slate-500 rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="state" className="block text-sm font-semibold text-slate-700 mb-2">
                      State *
                    </label>
                    <Input
                      id="state"
                      name="state"
                      type="text"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="State"
                      required
                      className="w-full h-10 border-gray-300 focus:border-slate-500 focus:ring-slate-500 rounded-lg"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Contact Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      pattern="[0-9+\-\s]+"
                      className="w-full h-10 border-gray-300 focus:border-slate-500 focus:ring-slate-500 rounded-lg"
                    />
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-semibold text-slate-700 mb-2">
                      Special Instructions
                    </label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Any special delivery or installation instructions..."
                      rows={2}
                      className="w-full border-gray-300 focus:border-slate-500 focus:ring-slate-500 rounded-lg"
                    />
                  </div>

                  {/* Trust Indicators */}
                  <div className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 mb-3 text-sm">Payment & Delivery</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <svg className="w-3 h-3 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Secure payment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-3 h-3 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Free delivery</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-3 h-3 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>5-7 days delivery</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-3 h-3 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>24/7 support</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-blue-900 text-sm">Order Process</h4>
                        <p className="text-blue-700 text-xs mt-1">
                          Our team will contact you within 24 hours to confirm details and arrange payment. We accept UPI, bank transfer, and cash on delivery.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full h-12 bg-slate-700 hover:bg-slate-600 text-white font-bold text-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Confirm Order - ₹{total.toLocaleString('en-IN')}</span>
                      </div>
                    )}
                  </Button>

                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => router.push('/')}
                    className="w-full border-gray-300 text-slate-700 hover:bg-gray-50 rounded-lg h-10"
                  >
                    ← Continue Shopping
                  </Button>
                </form>
              </div>

              {/* Security Badges - Mobile: Below form, Desktop: Sidebar */}
              <div className="mt-6 bg-white rounded-xl shadow-md border border-gray-200 p-4 lg:sticky lg:top-8">
                <h4 className="font-semibold text-slate-800 mb-3 text-center text-sm">Trusted & Secure</h4>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <span className="text-xs text-slate-600">SSL Secure</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <span className="text-xs text-slate-600">Data Protected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
