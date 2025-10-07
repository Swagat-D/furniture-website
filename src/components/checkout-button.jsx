"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useAuth } from "@/components/auth-context"
import { useCart } from "@/components/cart-context"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function CheckoutButton({ className }) {
  const { user, token } = useAuth()
  const { items, total, clearCart } = useCart()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [formData, setFormData] = useState({
    phone: "",
    shippingAddress: "",
    notes: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!user) {
      setError("Please login to place an order")
      return
    }

    if (items.length === 0) {
      setError("Your cart is empty")
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          items: items.map(item => ({
            productId: item.id,
            quantity: item.qty
          })),
          shippingAddress: formData.shippingAddress,
          phone: formData.phone,
          notes: formData.notes
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(`Order placed successfully! Order ID: ${data.orderId}`)
        setFormData({ phone: "", shippingAddress: "", notes: "" })
        // Cart will be cleared by the API
        setTimeout(() => {
          setOpen(false)
          setSuccess("")
        }, 3000)
      } else {
        setError(data.error || 'Failed to place order')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!user) {
    return (
      <Button className={className} disabled>
        Login to Checkout
      </Button>
    )
  }

  if (items.length === 0) {
    return (
      <Button className={className} disabled>
        Cart is Empty
      </Button>
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={className}>
          Checkout (₹{total.toLocaleString()})
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Your Order</DialogTitle>
        </DialogHeader>
        
        {success ? (
          <div className="p-6 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-xl font-bold text-green-600 mb-2">Order Placed!</h3>
            <p className="text-slate-600">{success}</p>
            <p className="text-sm text-slate-500 mt-2">
              You will receive a confirmation call shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded">
                {error}
              </div>
            )}

            {/* Order Summary */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Order Summary</h4>
              <div className="space-y-2 text-sm">
                {items.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{item.name} × {item.qty}</span>
                    <span>₹{(item.priceNumber * item.qty).toLocaleString()}</span>
                  </div>
                ))}
                <div className="border-t pt-2 font-medium flex justify-between">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium">Phone Number *</label>
              <Input
                required
                type="tel"
                placeholder="+91 90000 00000"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                disabled={loading}
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium">Shipping Address *</label>
              <Textarea
                required
                rows={3}
                placeholder="Enter your complete address..."
                value={formData.shippingAddress}
                onChange={(e) => setFormData({...formData, shippingAddress: e.target.value})}
                disabled={loading}
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium">Additional Notes</label>
              <Textarea
                rows={2}
                placeholder="Any special instructions..."
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                disabled={loading}
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Placing Order...' : `Place Order ₹${total.toLocaleString()}`}
            </Button>

            <p className="text-xs text-gray-500 text-center">
              By placing this order, you agree to our terms and conditions.
              You will receive a confirmation call to verify your order.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}