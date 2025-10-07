// Hardcoded products data - no need for database or admin panel
export const hardcodedProducts = [
  {
    id: "1",
    name: "Modern Oak Lounge Chair",
    description: "A beautifully crafted lounge chair featuring premium oak wood construction with contemporary design elements. Perfect for modern living spaces.",
    price: 12999,
    originalPrice: 15999,
    category: "living-room",
    subcategory: "chairs",
    image: "/modern-oak-lounge-chair-in-cozy-living-room.jpg",
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
    features: [
      "Premium oak wood construction",
      "Comfortable fabric upholstery",
      "Ergonomic design",
      "Durable finish"
    ],
    tags: ["oak", "lounge", "chair", "modern", "living-room"],
    isActive: true,
    isFeatured: true,
    inStock: true,
    rating: {
      average: 4.8,
      count: 24
    }
  },
  {
    id: "2",
    name: "Walnut Coffee Table with Decor",
    description: "Elegant walnut coffee table featuring clean lines and superior craftsmanship. Includes decorative styling for a complete look.",
    price: 8999,
    originalPrice: 11999,
    category: "living-room",
    subcategory: "tables",
    image: "/walnut-coffee-table-with-decor.jpg",
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
    features: [
      "Solid walnut construction",
      "Tempered glass top",
      "Contemporary design",
      "Easy to clean"
    ],
    tags: ["walnut", "coffee-table", "contemporary", "living-room"],
    isActive: true,
    isFeatured: true,
    inStock: true,
    rating: {
      average: 4.6,
      count: 18
    }
  },
  {
    id: "3",
    name: "Beige Three-Seater Sofa",
    description: "Luxurious three-seater sofa with premium fabric upholstery and modern design. Perfect centerpiece for any living room.",
    price: 24999,
    originalPrice: 29999,
    category: "living-room",
    subcategory: "sofas",
    image: "/beige-fabric-sofa-three-seater-modern-interior.jpg",
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
    inStock: true,
    rating: {
      average: 4.9,
      count: 32
    }
  },
  {
    id: "4",
    name: "Oak Bedside Table with Lamp",
    description: "Elegant oak bedside table featuring a drawer and open shelf. Comes with a matching modern lamp for complete bedroom styling.",
    price: 5999,
    originalPrice: 7999,
    category: "bedroom",
    subcategory: "nightstands",
    image: "/oak-bedside-table-with-lamp.jpg",
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
    inStock: true,
    rating: {
      average: 4.7,
      count: 15
    }
  },
  {
    id: "5",
    name: "Wooden Dining Chair Set",
    description: "Set of 4 modern wooden dining chairs perfect for contemporary kitchens and dining rooms. Ergonomic design with comfortable seating.",
    price: 7999,
    originalPrice: 9999,
    category: "dining-room",
    subcategory: "chairs",
    image: "/wooden-dining-chair-set-modern-kitchen.jpg",
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
    inStock: true,
    rating: {
      average: 4.5,
      count: 21
    }
  },
  {
    id: "6",
    name: "Modern Sideboard Console",
    description: "Sleek oak finish sideboard console perfect for dining rooms or living spaces. Features ample storage with modern design aesthetics.",
    price: 15999,
    originalPrice: 19999,
    category: "storage",
    subcategory: "sideboards",
    image: "/modern-sideboard-console-oak-finish.jpg",
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
    inStock: true,
    rating: {
      average: 4.4,
      count: 9
    }
  }
];

// Helper functions for working with hardcoded products
export function getAllProducts() {
  return hardcodedProducts.filter(product => product.isActive);
}

export function getProductById(id) {
  return hardcodedProducts.find(product => product.id === id && product.isActive);
}

export function getFeaturedProducts() {
  return hardcodedProducts.filter(product => product.isActive && product.isFeatured);
}

export function getProductsByCategory(category) {
  return hardcodedProducts.filter(product => 
    product.isActive && product.category === category
  );
}

export function searchProducts(query) {
  const searchTerm = query.toLowerCase();
  return hardcodedProducts.filter(product => 
    product.isActive && (
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.tags.some(tag => tag.includes(searchTerm))
    )
  );
}

export function getProductsPaginated(page = 1, limit = 20) {
  const activeProducts = getAllProducts();
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  return {
    products: activeProducts.slice(startIndex, endIndex),
    pagination: {
      currentPage: page,
      totalPages: Math.ceil(activeProducts.length / limit),
      totalProducts: activeProducts.length,
      hasNextPage: endIndex < activeProducts.length,
      hasPrevPage: page > 1,
    }
  };
}