"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCart } from "./cart-context"

const products = [
  { id: 1, name: "Walnut Coffee Table", price: "₹12,999", image: "/walnut-coffee-table-with-decor.jpg" },
  { id: 2, name: "Oak Lounge Chair", price: "₹15,499", image: "/modern-oak-lounge-chair-in-cozy-living-room.jpg" },
  { id: 3, name: "Cozy 3-Seater Sofa", price: "₹29,999", image: "/beige-fabric-sofa-three-seater-modern-interior.jpg" },
  { id: 4, name: "Dining Chair Set (4)", price: "₹18,999", image: "/wooden-dining-chair-set-modern-kitchen.jpg" },
  { id: 5, name: "Minimal Sideboard", price: "₹22,499", image: "/modern-sideboard-console-oak-finish.jpg" },
  { id: 6, name: "Oak Bedside Table", price: "₹7,499", image: "/oak-bedside-table-with-lamp.jpg" },
]

export default function Products() {
  const { addToCart } = useCart()
  const toNumber = (s) => Number(String(s).replace(/[^\d.]/g, "")) || 0

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <Card key={p.id} className="overflow-hidden">
          <div className="aspect-[4/3] w-full overflow-hidden">
            <img src={p.image || "/placeholder.svg"} alt={p.name} className="h-full w-full object-cover" />
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{p.name}</h3>
              <span className="font-semibold">{p.price}</span>
            </div>
            <div className="mt-4">
              <Button
                className="w-full bg-primary text-primary-foreground"
                onClick={() =>
                  addToCart({ id: String(p.id), name: p.name, imageUrl: p.image, priceNumber: toNumber(p.price) })
                }
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
