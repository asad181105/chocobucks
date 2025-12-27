# Chocobucks - Setup Instructions

## Overview
This is a premium chocolate e-commerce website built with Next.js 15, Supabase, and Tailwind CSS. The site features dynamic product management, user authentication, and real-time cart functionality.

## Features Implemented

### ✅ Completed Features
1. **Supabase Integration** - Replaced Prisma with Supabase for database and authentication
2. **Authentication** - Email/password and Google OAuth sign-in/sign-up
3. **Shop Page** - Dynamic product display with filtering and sorting
4. **Collections Page** - Curated product bundles
5. **Build-A-Box Page** - Custom box creation with real-time updates
6. **Gifting Page** - Special gift products and services
7. **Corporate Page** - Business-focused content and information
8. **Product Detail Pages** - Individual product information and purchase options
9. **About Page** - Company information and values
10. **Premium UI/UX** - Modern design with animations and mobile responsiveness

## Setup Instructions

### 1. Environment Setup
1. Copy `.env.example` to `.env.local`
2. Fill in your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
   ```

### 2. Supabase Database Setup
1. Create a new Supabase project
2. Run the SQL from `supabase-schema.sql` in your Supabase SQL editor
3. This will create all necessary tables and sample data

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Development Server
```bash
npm run dev
```

### 5. Configure Authentication
1. In Supabase Dashboard, go to Authentication > Settings
2. Add your domain to "Site URL" and "Redirect URLs"
3. Enable Google OAuth if desired

## Database Schema

### Tables Created
- `products` - Product information and inventory
- `collections` - Curated product bundles
- `boxes` - User's custom box configurations
- `orders` - Order history and status
- `cart` - Shopping cart items

### Key Features
- Real-time updates for cart and boxes
- Row Level Security (RLS) enabled
- Automatic timestamp updates
- User-specific data isolation

## Project Structure

```
app/
├── auth/                 # Authentication pages
├── shop/                # Product listing
├── collections/         # Curated collections
├── build-box/          # Custom box builder
├── gifting/            # Gift products
├── corporate/          # Business information
├── about/              # Company information
└── product/[id]/       # Product detail pages

components/
├── ui/                 # Reusable UI components
├── skeletons/          # Loading state components
└── ...                 # Feature-specific components

lib/
├── supabase.ts         # Supabase client configuration
├── supabase-client.ts  # Browser client
├── supabase-server.ts  # Server client
└── utils.ts           # Utility functions
```

## Customization

### Styling
- Uses Tailwind CSS with custom color scheme
- Premium typography with Playfair Display and Inter fonts
- Consistent spacing and component design
- Mobile-first responsive design

### Colors
- Primary: #2B1B17 (Espresso)
- Secondary: #0F0F0F (Charcoal)
- Accent: #D4AF37 (Gold)
- Muted: #FAF7F2 (Ivory)

### Adding Products
1. Use the Supabase dashboard to add products to the `products` table
2. Ensure all required fields are filled
3. Upload images and update `image_url` field

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms
- Ensure environment variables are set
- Build command: `npm run build`
- Start command: `npm start`

## Support

For questions or issues:
1. Check the Supabase documentation
2. Review Next.js 15 documentation
3. Check Tailwind CSS documentation

## Next Steps

Consider implementing:
- Payment integration (Razorpay is already configured)
- Email notifications
- Advanced filtering and search
- Product reviews and ratings
- Inventory management
- Order tracking
