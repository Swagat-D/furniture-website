"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useCart } from "./cart-context"
import CheckoutButton from "./checkout-button"
import { useState } from "react"

export default function CartPanel() {
  const { items, updateQty, removeFromCart, total, clearCart, loading, error } = useCart()
  const [open, setOpen] = useState(false)

  const totalQuantity = items.reduce((n, i) => n + (i.quantity || 0), 0)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" aria-label="Open cart" className="border-white text-white hover:bg-white hover:text-slate-800 relative bg-transparent">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 8m1.5-8h10m0 0v8a2 2 0 01-2 2H9a2 2 0 01-2-2v-8m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
          </svg>
          <span className="hidden sm:inline">Cart</span>
          {totalQuantity > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center animate-pulse">
              {totalQuantity}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[380px] sm:w-[420px]">
        <SheetHeader>
          <SheetTitle>Your cart</SheetTitle>
        </SheetHeader>
        
        {loading && (
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Loading cart...
          </div>
        )}
        
        {error && (
          <div className="mt-4 p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded">
            {error}
          </div>
        )}
        
        <div className="mt-4 space-y-4">
          {items.length === 0 && !loading && (
            <p className="text-sm text-muted-foreground">Your cart is empty.</p>
          )}
          
          {items.map((item) => (
            <div key={item.productId} className="flex gap-3 items-center">
              <img
                src={item.image || "/placeholder-logo.png"}
                alt={item.name}
                className="h-14 w-14 rounded-md object-cover"
              />
              <div className="flex-1">
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-muted-foreground">₹{(item.price || 0).toLocaleString("en-IN")}</div>
                <div className="flex items-center gap-2 mt-2">
                  <Button 
                    type="button" 
                    size="icon" 
                    variant="outline" 
                    onClick={() => updateQty(item.productId, (item.quantity || 1) - 1)}
                    disabled={loading || (item.quantity || 1) <= 1}
                  >
                    -
                  </Button>
                  <span className="w-6 text-center text-sm">{item.quantity || 1}</span>
                  <Button 
                    type="button" 
                    size="icon" 
                    variant="outline" 
                    onClick={() => updateQty(item.productId, (item.quantity || 1) + 1)}
                    disabled={loading}
                  >
                    +
                  </Button>
                </div>
              </div>
              <Button 
                variant="ghost" 
                onClick={() => removeFromCart(item.productId)}
                disabled={loading}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
        
        {items.length > 0 && (
          <>
            <div className="mt-6 border-t pt-4 flex items-center justify-between">
              <div className="text-sm text-muted-foreground">Subtotal</div>
              <div className="font-semibold">₹{total.toLocaleString("en-IN")}</div>
            </div>
            <div className="mt-3 flex gap-2">
              <CheckoutButton className="flex-1 bg-primary text-primary-foreground" />
              <Button 
                variant="outline" 
                onClick={clearCart}
                disabled={loading}
              >
                Clear
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
