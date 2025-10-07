import { ProductCard } from "./product-card"

const products = [
  {
    id: "1",
    name: "Oak Lounge Chair",
    price: "$249",
    imageAlt: "Warm oak lounge chair with fabric cushion",
    imageUrl: "/modern-oak-lounge-chair-in-cozy-living-room.jpg",
  },
  {
    id: "2",
    name: "Walnut Coffee Table",
    price: "$179",
    imageAlt: "Sleek walnut coffee table",
    imageUrl: "/walnut-coffee-table-with-decor.jpg",
  },
  {
    id: "3",
    name: "Fabric Sofa 3-Seater",
    price: "$899",
    imageAlt: "Beige fabric sofa three-seater",
    imageUrl: "/beige-fabric-sofa-three-seater-modern-interior.jpg",
  },
  {
    id: "4",
    name: "Minimal Bookshelf",
    price: "$299",
    imageAlt: "Minimal wooden bookshelf",
    imageUrl: "/minimal-wooden-bookshelf-with-decor.jpg",
  },
  {
    id: "5",
    name: "Dining Chair (Set of 2)",
    price: "$219",
    imageAlt: "Set of two wooden dining chairs",
    imageUrl: "/wooden-dining-chair-set-modern-kitchen.jpg",
  },
  {
    id: "6",
    name: "Sideboard Console",
    price: "$449",
    imageAlt: "Modern sideboard console",
    imageUrl: "/modern-sideboard-console-oak-finish.jpg",
  },
  {
    id: "7",
    name: "Bedside Table",
    price: "$139",
    imageAlt: "Small oak bedside table",
    imageUrl: "/oak-bedside-table-with-lamp.jpg",
  },
  {
    id: "8",
    name: "Floor Lamp",
    price: "$129",
    imageAlt: "Minimal standing floor lamp",
    imageUrl: "/minimal-floor-lamp-next-to-sofa.jpg",
  },
]

export function ProductGrid() {
  return (
    <div id="shop" className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}

// Consider removing once all imports are confirmed to use components/product-grid.jsx
