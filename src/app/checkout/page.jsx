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
    shippingAddress: '',
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
          shippingAddress: formData.shippingAddress,
          phone: formData.phone,
          notes: formData.notes
        }),
      })

      console.log('Order response status:', response.status)
      const data = await response.json()
      console.log('Order response data:', data)

      if (response.ok) {
        alert(`Order placed successfully! 

Order ID: ${data.orderId}
Total: ₹${data.totalAmount.toLocaleString('en-IN')}
Estimated Delivery: ${data.estimatedDelivery}

We will contact you within 24 hours to confirm your order and arrange payment.`)
        
        // Clear the form
        setFormData({
          shippingAddress: '',
          phone: '',
          notes: ''
        })
        
        router.push('/')
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
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto">
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4">Login Required</h2>
            <p className="text-gray-600 mb-4">Please login to continue with checkout</p>
            <Button onClick={() => router.push('/')}>
              Go to Home
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto">
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4">Cart is Empty</h2>
            <p className="text-gray-600 mb-4">Add some items to your cart first</p>
            <Button onClick={() => router.push('/')}>
              Continue Shopping
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div>
            <Card>
              <div className="mb-4">
                <h3 className="text-xl font-bold">Order Summary</h3>
              </div>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-2 border-b">
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹{(item.priceNumber * item.qty).toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-4 text-lg font-bold">
                  <span>Total:</span>
                  <span>₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Checkout Form */}
          <div>
            <Card>
              <div className="mb-4">
                <h3 className="text-xl font-bold">Shipping Information</h3>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="shippingAddress" className="block text-sm font-medium mb-2">
                    Shipping Address *
                  </label>
                  <Textarea
                    id="shippingAddress"
                    name="shippingAddress"
                    value={formData.shippingAddress}
                    onChange={handleInputChange}
                    placeholder="Enter your complete shipping address"
                    required
                    rows={3}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium mb-2">
                    Special Instructions (Optional)
                  </label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Any special delivery instructions..."
                    rows={2}
                  />
                </div>

                <div className="space-y-4 pt-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Payment Information</h4>
                    <p className="text-sm text-blue-700">
                      We will contact you within 24 hours to confirm your order and arrange payment. 
                      We accept cash on delivery, bank transfer, and UPI payments.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50"
                  >
                    {loading ? 'Placing Order...' : `Place Order - ₹${total.toLocaleString('en-IN')}`}
                  </Button>

                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => router.push('/')}
                    className="w-full"
                  >
                    Continue Shopping
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
