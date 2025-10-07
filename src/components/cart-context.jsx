"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { useAuth } from "./auth-context"

const CartCtx = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { user, token } = useAuth() // Get token from auth context

  // Load cart when user logs in
  useEffect(() => {
    if (user && token) {
      loadCart()
    } else {
      // If user logs out, check localStorage for guest cart
      loadGuestCart()
    }
  }, [user, token]) // Watch both user and token

  const loadCart = async () => {
    if (!user || !token) return

    try {
      setLoading(true)

      const response = await fetch('/api/cart', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const data = await response.json()
        // Transform backend cart data to frontend format
        const transformedCart = (data.cart || []).map(item => ({
          id: item.productId || item.id,
          name: item.name,
          imageUrl: '/placeholder-logo.png', // Use hardcoded placeholder
          priceNumber: item.price,
          qty: item.quantity
        }))
        setItems(transformedCart)
      } else {
        console.error('Failed to load cart, status:', response.status)
        setItems([])
      }
    } catch (error) {
      console.error('Error loading cart:', error)
      setItems([])
    } finally {
      setLoading(false)
    }
  }

  const loadGuestCart = () => {
    try {
      const raw = localStorage.getItem("arCart:items")
      if (raw) {
        const guestItems = JSON.parse(raw)
        // Ensure guest cart items have consistent format
        const transformedItems = guestItems.map(item => ({
          id: item.id || item.productId,
          name: item.name,
          imageUrl: '/placeholder-logo.png', // Use hardcoded placeholder
          priceNumber: item.priceNumber || item.price,
          qty: item.qty || item.quantity || 1
        }))
        setItems(transformedItems)
      } else {
        setItems([])
      }
    } catch {
      setItems([])
    }
  }

  const saveGuestCart = (cartItems) => {
    try {
      localStorage.setItem("arCart:items", JSON.stringify(cartItems))
    } catch (error) {
      console.error('Error saving guest cart:', error)
    }
  }

  const addToCart = async (item) => {
    try {
      setError(null)
      setLoading(true)
      console.log('Adding to cart:', item)

      if (user && token) {
        // Add to backend cart
        const response = await fetch('/api/cart', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            productId: item.id,
            name: item.name,
            price: item.price || item.priceNumber,
            image: '/placeholder-logo.png', // Use hardcoded placeholder
            quantity: item.qty || item.quantity || 1,
          }),
        })

        if (response.ok) {
          const data = await response.json()
          console.log('Item added to cart, updated cart:', data.cart)
          // Transform backend cart data to frontend format
          const transformedCart = (data.cart || []).map(cartItem => ({
            id: cartItem.productId || cartItem.id,
            name: cartItem.name,
            imageUrl: '/placeholder-logo.png', // Use hardcoded placeholder
            priceNumber: cartItem.price,
            qty: cartItem.quantity
          }))
          setItems(transformedCart)
        } else {
          const error = await response.json()
          console.error('Failed to add to cart:', error)
          setError(error.error || 'Failed to add item to cart')
        }
      } else {
        // Add to local storage cart
        console.log('Adding to guest cart:', item)
        setItems((prev) => {
          const idx = prev.findIndex((p) => p.id === item.id)
          let newItems
          if (idx >= 0) {
            newItems = [...prev]
            newItems[idx] = { 
              ...newItems[idx], 
              qty: newItems[idx].qty + (item.qty || item.quantity || 1) 
            }
          } else {
            newItems = [...prev, { 
              id: item.id,
              name: item.name,
              priceNumber: item.price || item.priceNumber,
              imageUrl: '/placeholder-logo.png', // Use hardcoded placeholder
              qty: item.qty || item.quantity || 1 
            }]
          }
          saveGuestCart(newItems)
          return newItems
        })
      }
    } catch (error) {
      console.error('Error adding to cart:', error)
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const removeFromCart = async (productId) => {
    try {
      setError(null)
      setLoading(true)

      if (user && token) {
        // Remove from backend cart
        const response = await fetch(`/api/cart/${productId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })

        if (response.ok) {
          const data = await response.json()
          // Transform backend cart data to frontend format
          const transformedCart = (data.cart || []).map(item => ({
            id: item.productId || item.id,
            name: item.name,
            imageUrl: '/placeholder-logo.png', // Use hardcoded placeholder
            priceNumber: item.price,
            qty: item.quantity
          }))
          setItems(transformedCart)
        } else {
          const error = await response.json()
          setError(error.error || 'Failed to remove item from cart')
        }
      } else {
        // Remove from local storage cart
        setItems((prev) => {
          const newItems = prev.filter((p) => p.id !== productId)
          saveGuestCart(newItems)
          return newItems
        })
      }
    } catch (error) {
      console.error('Error removing from cart:', error)
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const updateQty = async (productId, qty) => {
    try {
      setError(null)
      setLoading(true)

      if (user && token) {
        // Update backend cart
        const response = await fetch(`/api/cart/${productId}`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ quantity: Math.max(1, qty) }),
        })

        if (response.ok) {
          const data = await response.json()
          // Transform backend cart data to frontend format
          const transformedCart = (data.cart || []).map(item => ({
            id: item.productId || item.id,
            name: item.name,
            imageUrl: '/placeholder-logo.png', // Use hardcoded placeholder
            priceNumber: item.price,
            qty: item.quantity
          }))
          setItems(transformedCart)
        } else {
          const error = await response.json()
          setError(error.error || 'Failed to update cart')
        }
      } else {
        // Update local storage cart
        setItems((prev) => {
          const newItems = prev.map((p) => 
            p.id === productId 
              ? { ...p, qty: Math.max(1, qty) } 
              : p
          )
          saveGuestCart(newItems)
          return newItems
        })
      }
    } catch (error) {
      console.error('Error updating cart:', error)
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const clearCart = async () => {
    try {
      setError(null)
      setLoading(true)

      if (user && token) {
        // Clear backend cart
        const response = await fetch('/api/cart', {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })

        if (response.ok) {
          setItems([])
        } else {
          const error = await response.json()
          setError(error.error || 'Failed to clear cart')
        }
      } else {
        // Clear local storage cart
        setItems([])
        saveGuestCart([])
      }
    } catch (error) {
      console.error('Error clearing cart:', error)
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const total = items.reduce((sum, it) => sum + (it.priceNumber || 0) * (it.qty || 0), 0)

  const value = useMemo(() => ({ 
    items, 
    addToCart, 
    removeFromCart, 
    updateQty, 
    clearCart, 
    total,
    loading,
    error,
    loadCart
  }), [items, total, loading, error])

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>
}

export function useCart() {
  const ctx = useContext(CartCtx)
  if (!ctx) throw new Error("useCart must be used inside CartProvider")
  return ctx
}
