// To run this script: node scripts/seed-products.js
import mongoose from 'mongoose';
import connectDB from '../src/lib/mongodb.js';
import Product from '../src/models/Product.js';

const sampleProducts = [
  {
    name: "Modern Oak Lounge Chair",
    description: "A beautifully crafted lounge chair featuring premium oak wood construction with contemporary design elements. Perfect for modern living spaces.",
    price: 1299,
    originalPrice: 1599,
    category: "living-room",
    subcategory: "chairs",
    images: [
      {
        url: "/modern-oak-lounge-chair-in-cozy-living-room.jpg",
        alt: "Modern Oak Lounge Chair",
        isPrimary: true
      }
    ],
    specifications: {
      dimensions: {
        length: 75,
        width: 80,
        height: 85,
        unit: "cm"
      },
      weight: 15,
      material: ["Oak Wood", "Fabric Upholstery"],
      color: ["Natural Oak", "Beige"],
      style: "Modern"
    },
    inventory: {
      quantity: 25,
      lowStockThreshold: 5,
      sku: "OAK-CHAIR-001"
    },
    features: [
      "Premium oak wood construction",
      "Comfortable fabric upholstery",
      "Ergonomic design",
      "Durable finish"
    ],
    tags: ["oak", "lounge", "chair", "modern", "living-room"],
    isActive: true,
    isFeatured: true,
    rating: {
      average: 4.8,
      count: 24
    }
  },
  {
    name: "Walnut Coffee Table with Decor",
    description: "Elegant walnut coffee table featuring clean lines and superior craftsmanship. Includes decorative styling for a complete look.",
    price: 899,
    originalPrice: 1199,
    category: "living-room",
    subcategory: "tables",
    images: [
      {
        url: "/walnut-coffee-table-with-decor.jpg",
        alt: "Walnut Coffee Table",
        isPrimary: true
      }
    ],
    specifications: {
      dimensions: {
        length: 120,
        width: 60,
        height: 45,
        unit: "cm"
      },
      weight: 25,
      material: ["Walnut Wood", "Glass"],
      color: ["Dark Walnut"],
      style: "Contemporary"
    },
    inventory: {
      quantity: 15,
      lowStockThreshold: 3,
      sku: "WAL-TABLE-001"
    },
    features: [
      "Solid walnut construction",
      "Tempered glass top",
      "Contemporary design",
      "Easy to clean"
    ],
    tags: ["walnut", "coffee-table", "contemporary", "living-room"],
    isActive: true,
    isFeatured: true,
    rating: {
      average: 4.6,
      count: 18
    }
  },
  {
    name: "Beige Three-Seater Sofa",
    description: "Luxurious three-seater sofa with premium fabric upholstery and modern design. Perfect centerpiece for any living room.",
    price: 2499,
    originalPrice: 2999,
    category: "living-room",
    subcategory: "sofas",
    images: [
      {
        url: "/beige-fabric-sofa-three-seater-modern-interior.jpg",
        alt: "Beige Three-Seater Sofa",
        isPrimary: true
      }
    ],
    specifications: {
      dimensions: {
        length: 210,
        width: 90,
        height: 85,
        unit: "cm"
      },
      weight: 65,
      material: ["Hardwood Frame", "Premium Fabric", "High-Density Foam"],
      color: ["Beige", "Cream"],
      style: "Modern"
    },
    inventory: {
      quantity: 8,
      lowStockThreshold: 2,
      sku: "SOFA-BEI-001"
    },
    features: [
      "Three-seater capacity",
      "Premium fabric upholstery",
      "High-density foam cushions",
      "Solid hardwood frame",
      "Removable cushion covers"
    ],
    tags: ["sofa", "three-seater", "beige", "modern", "living-room"],
    isActive: true,
    isFeatured: true,
    rating: {
      average: 4.9,
      count: 32
    }
  },
  {
    name: "Oak Bedside Table with Lamp",
    description: "Elegant oak bedside table featuring a drawer and open shelf. Comes with a matching modern lamp for complete bedroom styling.",
    price: 599,
    originalPrice: 799,
    category: "bedroom",
    subcategory: "nightstands",
    images: [
      {
        url: "/oak-bedside-table-with-lamp.jpg",
        alt: "Oak Bedside Table with Lamp",
        isPrimary: true
      }
    ],
    specifications: {
      dimensions: {
        length: 45,
        width: 35,
        height: 65,
        unit: "cm"
      },
      weight: 12,
      material: ["Oak Wood", "Metal Hardware"],
      color: ["Natural Oak"],
      style: "Scandinavian"
    },
    inventory: {
      quantity: 20,
      lowStockThreshold: 5,
      sku: "OAK-NIGHT-001"
    },
    features: [
      "Solid oak construction",
      "One drawer with soft-close mechanism",
      "Open shelf for storage",
      "Includes matching lamp",
      "Cable management hole"
    ],
    tags: ["oak", "bedside", "nightstand", "bedroom", "lamp"],
    isActive: true,
    isFeatured: false,
    rating: {
      average: 4.7,
      count: 15
    }
  },
  {
    name: "Wooden Dining Chair Set",
    description: "Set of 4 modern wooden dining chairs perfect for contemporary kitchens and dining rooms. Ergonomic design with comfortable seating.",
    price: 799,
    originalPrice: 999,
    category: "dining-room",
    subcategory: "chairs",
    images: [
      {
        url: "/wooden-dining-chair-set-modern-kitchen.jpg",
        alt: "Wooden Dining Chair Set",
        isPrimary: true
      }
    ],
    specifications: {
      dimensions: {
        length: 45,
        width: 50,
        height: 80,
        unit: "cm"
      },
      weight: 6,
      material: ["Beech Wood", "Natural Finish"],
      color: ["Natural Wood"],
      style: "Modern"
    },
    inventory: {
      quantity: 12,
      lowStockThreshold: 3,
      sku: "DINING-CHAIR-SET"
    },
    features: [
      "Set of 4 chairs",
      "Ergonomic design",
      "Solid beech wood construction",
      "Stackable for easy storage",
      "Natural wood finish"
    ],
    tags: ["dining", "chairs", "wooden", "set", "modern"],
    isActive: true,
    isFeatured: false,
    rating: {
      average: 4.5,
      count: 21
    }
  },
  {
    name: "Modern Sideboard Console",
    description: "Sleek oak finish sideboard console perfect for dining rooms or living spaces. Features ample storage with modern design aesthetics.",
    price: 1599,
    originalPrice: 1999,
    category: "storage",
    subcategory: "sideboards",
    images: [
      {
        url: "/modern-sideboard-console-oak-finish.jpg",
        alt: "Modern Sideboard Console",
        isPrimary: true
      }
    ],
    specifications: {
      dimensions: {
        length: 160,
        width: 45,
        height: 80,
        unit: "cm"
      },
      weight: 45,
      material: ["Oak Veneer", "MDF Core", "Metal Hardware"],
      color: ["Oak Finish"],
      style: "Contemporary"
    },
    inventory: {
      quantity: 6,
      lowStockThreshold: 2,
      sku: "SIDEBOARD-OAK-001"
    },
    features: [
      "Three cabinet doors",
      "Adjustable shelving",
      "Soft-close hinges",
      "Cable management",
      "Anti-tip safety feature"
    ],
    tags: ["sideboard", "console", "oak", "storage", "modern"],
    isActive: true,
    isFeatured: false,
    rating: {
      average: 4.4,
      count: 9
    }
  }
];

async function seedProducts() {
  try {
    await connectDB();
    
    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    // Insert sample products
    const products = await Product.insertMany(sampleProducts);
    console.log(`Inserted ${products.length} products`);
    
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedProducts();