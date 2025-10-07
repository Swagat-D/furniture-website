# Archik Constructions - Backend Integration Setup

This guide will help you set up the complete backend integration with MongoDB for your furniture website.

## Prerequisites

1. **MongoDB** - You need MongoDB installed and running on your system
   - Download and install MongoDB from: https://www.mongodb.com/try/download/community
   - Or use MongoDB Atlas (cloud): https://www.mongodb.com/atlas/database

2. **Node.js** - Make sure you have Node.js installed

3. **Email Account** - For SMTP functionality (Gmail recommended)

## Setup Instructions

### 1. Environment Configuration

Your `.env.local` file should contain:

```env
# MongoDB Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/archik_constructions

# JWT Secret (ALREADY GENERATED - DO NOT CHANGE)
JWT_SECRET=ce1592ed8cc021e524fdcdc8caef76bdecab867e05d23c06ac06218fc28beeba900c0ac89f6421711618b105f04eebc26e24a3fd137bdb7847f124c36846fb4a

# NextAuth Secret (ALREADY GENERATED - DO NOT CHANGE)
NEXTAUTH_SECRET=d7ea685f2d50a95a122205bf646b83fa41a97a50f07fe9af4c8cdb14835a2329

# App URL
NEXTAUTH_URL=http://localhost:3000

# SMTP Configuration for emails
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@archik-constructions.com
```

**🔐 IMPORTANT - SMTP Setup:**
1. **Gmail Setup**: Use Gmail for easy setup
2. **Enable 2FA**: Enable 2-factor authentication on your Gmail account
3. **App Password**: Generate an app password (not your regular password)
   - Go to Google Account Settings > Security > 2-Step Verification > App passwords
   - Generate an app password for "Mail"
   - Use this app password in `SMTP_PASS`
4. **Update Variables**: Replace these in your `.env.local`:
   - `SMTP_USER`: Your Gmail address
   - `SMTP_PASS`: The app password you generated
   - `ADMIN_EMAIL`: Email where you want to receive contact forms and orders

### 2. Install Dependencies

The required dependencies are already installed:
- `mongoose` - MongoDB ODM
- `bcryptjs` - Password hashing
- `jsonwebtoken` - JWT token handling
- `cookie` - Cookie parsing
- `nodemailer` - Email functionality

### 3. Database Setup

#### MongoDB Atlas (Recommended - Cloud)
1. Create account at https://www.mongodb.com/atlas
2. Create a new cluster (free tier available)
3. Create a database user with read/write permissions
4. Get connection string and update `MONGODB_URI` in `.env.local`
5. Replace `<username>`, `<password>`, and `<database>` in the connection string

#### Local MongoDB (Alternative)
1. Install MongoDB Community Server
2. Start MongoDB service
3. Use: `MONGODB_URI=mongodb://localhost:27017/archik_constructions`

### 4. Start the Application

```bash
npm run dev
```

## 🎯 Current Implementation (Simplified)

### ✅ What's Working Now

1. **Hardcoded Products** - No database needed for products
   - 6 furniture products ready to use
   - Images, pricing, categories all included
   - No admin panel needed

2. **User Authentication**
   - Registration and login with MongoDB
   - Secure JWT tokens
   - Protected cart functionality

3. **Cart Management**
   - Persistent cart for logged-in users
   - Guest cart with localStorage
   - Real-time updates

4. **Email Notifications**
   - Contact form submissions → Admin email
   - Order confirmations → Admin email
   - Professional email templates

5. **Order Processing**
   - Complete checkout flow
   - Order details sent to admin
   - Phone-based order confirmation

### 📧 Email Features

**Contact Form:**
- Customer fills contact form
- Admin receives detailed email with customer info
- Includes name, email, phone, subject, message

**Order Processing:**
- Customer places order
- Admin receives order email with:
  - Order ID and customer details
  - Complete item list with quantities and prices
  - Total amount and shipping address
  - Customer phone for confirmation call

### 🛒 How Orders Work (No Payment Gateway)

1. **Customer Journey:**
   - Browse hardcoded products
   - Add items to cart
   - Login/register
   - Provide shipping address and phone
   - Submit order

2. **Admin Process:**
   - Receive order email immediately
   - Call customer to confirm order
   - Arrange delivery/pickup
   - Process payment via phone/cash

### 📱 Admin Workflow

**For Contact Forms:**
1. Check admin email for new contact submissions
2. Respond to customer directly via email/phone

**For Orders:**
1. Check admin email for new orders
2. Review order details (items, quantity, total, address)
3. Call customer using provided phone number
4. Confirm order details and payment method
5. Arrange delivery/pickup

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Create new user account
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user info

### Cart Management
- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/[productId]` - Update item quantity
- `DELETE /api/cart/[productId]` - Remove item from cart
- `DELETE /api/cart` - Clear entire cart

### Products (Hardcoded)
- `GET /api/products` - Get all products (with filtering)
- `GET /api/products/[id]` - Get single product

### Communication
- `POST /api/contact` - Send contact form (emails admin)
- `POST /api/orders` - Place order (emails admin)

## 🔧 Testing the Setup

### 1. Test Contact Form
1. Go to your contact section
2. Fill out the form with test data
3. Submit
4. Check admin email for the message

### 2. Test Order Flow
1. Add products to cart
2. Register/login
3. Go to cart and click checkout
4. Fill shipping address and phone
5. Submit order
6. Check admin email for order details

### 3. Test Authentication
1. Try registering a new account
2. Login with the new account
3. Add items to cart
4. Logout and login again - cart should persist

## 🚀 Production Deployment

Before going live:

1. **Update Environment Variables:**
   - Use production MongoDB connection string
   - Set `NODE_ENV=production`
   - Use real SMTP credentials
   - Update `NEXTAUTH_URL` to your domain

2. **Security:**
   - Keep JWT secrets secure
   - Use HTTPS in production
   - Restrict MongoDB access

3. **Email:**
   - Use professional email addresses
   - Set up proper email signatures
   - Consider using services like SendGrid for better deliverability

## 🔍 Troubleshooting

### Contact Form Not Sending Emails
1. Check SMTP credentials in `.env.local`
2. Verify Gmail app password is correct
3. Check spam folder
4. Look at browser console for errors

### Cart Not Working
1. Ensure user is logged in
2. Check MongoDB connection
3. Verify JWT tokens in browser cookies

### Products Not Loading
1. Check if hardcoded products file exists
2. Verify API endpoints are responding
3. Check browser network tab for errors

### MongoDB Connection Issues
1. Verify connection string format
2. Check username/password
3. Ensure IP whitelist includes your IP (Atlas)
4. Test connection with MongoDB Compass

## 📋 Quick Start Checklist

- [ ] Update `SMTP_USER` with your Gmail address
- [ ] Update `SMTP_PASS` with Gmail app password
- [ ] Update `ADMIN_EMAIL` with your admin email
- [ ] Verify MongoDB connection string
- [ ] Run `npm run dev`
- [ ] Test contact form
- [ ] Test user registration
- [ ] Test adding products to cart
- [ ] Test order placement

## 💡 Next Steps (Optional)

- Add more hardcoded products
- Implement image upload for custom orders
- Add order tracking system
- Create admin dashboard for order management
- Integrate payment gateway
- Add email templates customization
- Implement inventory management
- Add product reviews system

Your furniture website is now fully functional with backend integration! The system is designed to be simple but effective for a small to medium furniture business.