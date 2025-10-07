"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

const CartCtx = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem("arCart:items")
      if (raw) setItems(JSON.parse(raw))
    } catch {}
  }, [])
  useEffect(() => {
    try {
      localStorage.setItem("arCart:items", JSON.stringify(items))
    } catch {}
  }, [items])

  const addToCart = (item) => {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.id === item.id)
      if (idx >= 0) {
        const next = [...prev]
        next[idx] = { ...next[idx], qty: next[idx].qty + (item.qty || 1) }
        return next
      }
      return [...prev, { ...item, qty: item.qty || 1 }]
    })
  }
  const removeFromCart = (id) => setItems((prev) => prev.filter((p) => p.id !== id))
  const updateQty = (id, qty) =>
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty: Math.max(1, qty) } : p)))
  const clearCart = () => setItems([])

  const total = items.reduce((sum, it) => sum + (it.priceNumber || 0) * it.qty, 0)

  const value = useMemo(() => ({ items, addToCart, removeFromCart, updateQty, clearCart, total }), [items, total])

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>
}

export function useCart() {
  const ctx = useContext(CartCtx)
  if (!ctx) throw new Error("useCart must be used inside CartProvider")
  return ctx
}
