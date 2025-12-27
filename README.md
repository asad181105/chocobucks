# Chocobucks - Premium E-commerce Site

A production-ready luxury chocolate e-commerce platform built with Next.js 14, featuring premium UI, Razorpay payments, and Shiprocket delivery integration for the Indian market.

## ✨ Features

- **Premium Design**: Elegant, minimal UI with generous whitespace and luxury branding
- **100% Natural Ingredients**: Prominently displayed throughout the site
- **Advanced Filtering**: Server-side filtering with URL params for SEO
- **Secure Payments**: Razorpay integration with signature verification
- **Shipping Integration**: Shiprocket API for order management and tracking
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Performance**: Lighthouse score ≥ 90 for Performance/SEO/Best Practices

## 🚀 Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components, Framer Motion
- **Database**: Prisma + PostgreSQL (Supabase/Neon)
- **Authentication**: NextAuth.js with email magic link
- **Payments**: Razorpay (Orders API, signature verification, webhooks)
- **Shipping**: Shiprocket API (order creation, courier assignment, tracking)
- **Images**: Cloudinary for product image hosting
- **Emails**: Resend for order confirmations
- **SEO**: next-seo, next-sitemap

## 🎨 Brand Identity

- **Color Palette**: 
  - Espresso (#2B1B17)
  - Charcoal (#0F0F0F) 
  - Gold (#D4AF37)
  - Ivory (#FAF7F2)
  - Berry (#7D3C98)
- **Typography**: Playfair Display (headings) + Inter (body)
- **Tone**: Premium, minimal, generous whitespace

## 📱 Pages & Features

### Core Pages
- **Home**: Hero section, featured collections, ethos, gifting CTA
- **Shop**: Product listing with advanced filters & sorting
- **Product Detail**: Variant selector, ingredients, gift wrap options
- **Build-A-Box**: Customizable chocolate box builder
- **Gifting**: Gift options, wraps, message cards
- **Corporate**: Bulk order form
- **About/Ingredients**: Sustainability and ingredient information
- **Cart & Checkout**: Seamless shopping experience
- **Account**: Order history, wishlist, tracking

### Advanced Features
- **Server-side Filtering**: URL-based filtering for SEO
- **Real-time Pricing**: Dynamic pricing with gift wrap options
- **Pincode Checker**: Delivery serviceability verification
- **Order Tracking**: Real-time shipment updates
- **Wishlist Management**: Save favorite products
- **Responsive Navigation**: Mobile-first design approach

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Razorpay account
- Shiprocket account
- Resend account (for emails)
- Cloudinary account (for images)

### 1. Clone & Install
```bash
git clone <repository-url>
cd chocobucks
npm install
```

### 2. Environment Configuration
Copy `.env.example` to `.env.local` and fill in your credentials:

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/luxury_chocolate_db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-key"

# Razorpay
RAZORPAY_KEY_ID="your-razorpay-key-id"
RAZORPAY_KEY_SECRET="your-razorpay-key-secret"
RAZORPAY_WEBHOOK_SECRET="your-razorpay-webhook-secret"

# Shiprocket
SHIPROCKET_EMAIL="your-shiprocket-email"
SHIPROCKET_PASSWORD="your-shiprocket-password"

# Resend (Email)
RESEND_API_KEY="your-resend-api-key"

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloudinary-cloud-name"
CLOUDINARY_API_KEY="your-cloudinary-api-key"
CLOUDINARY_API_SECRET="your-cloudinary-api-secret"
```

### 3. Database Setup
```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Seed with demo data
npm run db:seed
```

### 4. Development
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

## 🗄️ Database Schema

The Prisma schema includes comprehensive models for:

- **Products**: Chocolate bars, truffles, hampers, gift boxes
- **Collections**: Premium, Gift, Organic collections
- **Ingredients**: Natural ingredient tracking with allergen info
- **Orders**: Complete order management with addresses
- **Users**: Authentication and profile management
- **Shipping**: Shiprocket integration data

### Key Features:
- 25+ demo products with realistic data
- Comprehensive filtering attributes
- Gift wrap and message options
- Dietary and flavor classifications
- Occasion-based categorization

## 💳 Payment Integration

### Razorpay Setup
1. Create Razorpay account and get API keys
2. Configure webhook endpoint: `/api/payments/webhook`
3. Set webhook secret in environment variables
4. Test payment flow in test mode

### Payment Flow
1. User adds items to cart
2. Checkout creates order in database
3. Razorpay order created via API
4. Payment processed on client
5. Webhook verifies payment signature
6. Order status updated and Shiprocket notified

## 🚚 Shipping Integration

### Shiprocket Setup
1. Create Shiprocket account
2. Configure pickup locations
3. Set courier preferences
4. Test order creation API

### Shipping Flow
1. Payment verified successfully
2. Shiprocket order created automatically
3. Courier assigned based on serviceability
4. Tracking number generated
5. Real-time updates via webhooks

## 📧 Email System

### Resend Integration
- Order confirmation emails
- Shipping updates
- Delivery notifications
- Customizable templates

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically on push

### Environment Variables for Production
```bash
NEXTAUTH_URL="https://yourdomain.com"
DATABASE_URL="your-production-database-url"
# ... other production variables
```

### Database Migration
```bash
# Generate migration
npx prisma migrate dev --name production

# Apply to production
npx prisma migrate deploy
```

## 🔧 Development Commands

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start

# Database
npm run db:generate    # Generate Prisma client
npm run db:push        # Push schema changes
npm run db:seed        # Seed with demo data
npm run db:studio      # Open Prisma Studio

# Linting
npm run lint
```

## 📊 Performance & SEO

### Lighthouse Score Targets
- **Performance**: ≥ 90
- **Accessibility**: ≥ 90  
- **Best Practices**: ≥ 90
- **SEO**: ≥ 90

### SEO Features
- Server-side rendering for product pages
- Dynamic sitemap generation
- Meta tags optimization
- Structured data markup
- URL-based filtering for search engines

## 🎯 Customization

### Branding
- Update colors in `tailwind.config.js`
- Modify fonts in `app/layout.tsx`
- Customize logo and branding elements

### Products
- Add new product types in Prisma schema
- Extend filtering options
- Customize gift wrap pricing

### Payment
- Modify tax calculation logic
- Adjust shipping rules
- Customize order number format

## 🐛 Troubleshooting

### Common Issues

**Database Connection**
```bash
# Check connection
npx prisma db pull

# Reset database
npx prisma migrate reset
```

**Payment Issues**
- Verify Razorpay keys
- Check webhook configuration
- Test in sandbox mode first

**Shipping Problems**
- Validate Shiprocket credentials
- Check pincode serviceability
- Verify courier availability

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes with tests
4. Submit pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the troubleshooting guide

---

**Built with ❤️ for luxury chocolate lovers everywhere**
