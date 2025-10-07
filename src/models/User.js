import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email',
    ],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: [6, 'Password must be at least 6 characters'],
    select: false, 
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  cart: [{
    productId: {
      type: String, 
      required: true,
    },
    name: String,
    price: Number,
    image: String,
    quantity: {
      type: Number,
      default: 1,
    },
  }],
  addresses: [{
    type: {
      type: String,
      enum: ['shipping', 'billing'],
      required: true,
    },
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
    isDefault: {
      type: Boolean,
      default: false,
    },
  }],
  passwordResetToken: String,
  passwordResetExpires: Date,
}, {
  timestamps: true,
});

// Hash password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to check password
UserSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Method to add item to cart
UserSchema.methods.addToCart = function(item) {
  const existingItemIndex = this.cart.findIndex(
    cartItem => cartItem.productId === item.productId
  );

  if (existingItemIndex >= 0) {
    this.cart[existingItemIndex].quantity += item.quantity || 1;
  } else {
    this.cart.push(item);
  }

  return this.save();
};

// Method to remove item from cart
UserSchema.methods.removeFromCart = function(productId) {
  this.cart = this.cart.filter(
    item => item.productId !== productId
  );
  return this.save();
};

// Method to update cart item quantity
UserSchema.methods.updateCartItemQuantity = function(productId, quantity) {
  const item = this.cart.find(
    cartItem => cartItem.productId === productId
  );
  
  if (item) {
    item.quantity = Math.max(1, quantity);
  }
  
  return this.save();
};

// Method to clear cart
UserSchema.methods.clearCart = function() {
  this.cart = [];
  return this.save();
};

export default mongoose.models.User || mongoose.model('User', UserSchema);