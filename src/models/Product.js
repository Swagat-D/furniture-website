import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a product name'],
    maxlength: [100, 'Product name cannot be more than 100 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a product description'],
    maxlength: [1000, 'Description cannot be more than 1000 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price'],
    min: [0, 'Price cannot be negative'],
  },
  originalPrice: {
    type: Number,
    min: [0, 'Original price cannot be negative'],
  },
  category: {
    type: String,
    required: [true, 'Please provide a category'],
    enum: ['living-room', 'bedroom', 'dining-room', 'office', 'storage', 'lighting', 'decor'],
  },
  subcategory: {
    type: String,
  },
  images: [{
    url: {
      type: String,
      required: true,
    },
    alt: String,
    isPrimary: {
      type: Boolean,
      default: false,
    },
  }],
  specifications: {
    dimensions: {
      length: Number,
      width: Number,
      height: Number,
      unit: {
        type: String,
        default: 'cm',
      },
    },
    weight: Number,
    material: [String],
    color: [String],
    style: String,
  },
  inventory: {
    quantity: {
      type: Number,
      required: true,
      min: [0, 'Quantity cannot be negative'],
    },
    lowStockThreshold: {
      type: Number,
      default: 10,
    },
    sku: {
      type: String,
      unique: true,
      sparse: true,
    },
  },
  features: [String],
  tags: [String],
  isActive: {
    type: Boolean,
    default: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  rating: {
    average: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: String,
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: String,
    date: {
      type: Date,
      default: Date.now,
    },
  }],
  seo: {
    metaTitle: String,
    metaDescription: String,
    slug: {
      type: String,
      unique: true,
      sparse: true,
    },
  },
}, {
  timestamps: true,
});

// Index for search functionality
ProductSchema.index({ name: 'text', description: 'text', tags: 'text' });
ProductSchema.index({ category: 1, isActive: 1 });
ProductSchema.index({ price: 1 });
ProductSchema.index({ 'rating.average': -1 });

// Virtual for discounted price
ProductSchema.virtual('isOnSale').get(function() {
  return this.originalPrice && this.originalPrice > this.price;
});

ProductSchema.virtual('discountPercentage').get(function() {
  if (this.originalPrice && this.originalPrice > this.price) {
    return Math.round(((this.originalPrice - this.price) / this.originalPrice) * 100);
  }
  return 0;
});

// Method to check if product is in stock
ProductSchema.methods.isInStock = function(quantity = 1) {
  return this.inventory.quantity >= quantity;
};

// Method to reduce inventory
ProductSchema.methods.reduceInventory = function(quantity) {
  this.inventory.quantity = Math.max(0, this.inventory.quantity - quantity);
  return this.save();
};

// Method to add review
ProductSchema.methods.addReview = function(review) {
  this.reviews.push(review);
  
  // Recalculate rating
  const totalRating = this.reviews.reduce((sum, r) => sum + r.rating, 0);
  this.rating.count = this.reviews.length;
  this.rating.average = totalRating / this.reviews.length;
  
  return this.save();
};

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);