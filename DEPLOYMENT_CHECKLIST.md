# Deployment Checklist

Use this checklist before deploying to Vercel to ensure everything is ready.

## Pre-Deployment

### Code Quality
- [ ] All code is committed to Git
- [ ] No console errors in development
- [ ] TypeScript compiles without errors (`npm run build` locally if possible)
- [ ] All pages load correctly
- [ ] No broken links or images

### Environment Variables
- [ ] `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon key
- [ ] `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key
- [ ] `NEXT_PUBLIC_APP_URL` - Your Vercel deployment URL
- [ ] `NEXT_PUBLIC_APP_NAME` - App name (e.g., "Chocobucks")

### Optional (if using these features)
- [ ] `NEXTAUTH_URL` - Same as NEXT_PUBLIC_APP_URL
- [ ] `NEXTAUTH_SECRET` - Generated secret key
- [ ] Razorpay credentials (if using payments)
- [ ] Shiprocket credentials (if using shipping)
- [ ] Resend API key (if using emails)
- [ ] Cloudinary credentials (if using image uploads)

### Supabase Configuration
- [ ] Supabase project is active
- [ ] Database tables are created (run `supabase-schema.sql`)
- [ ] Authentication is configured
- [ ] Site URL in Supabase dashboard matches your Vercel URL
- [ ] Redirect URLs include: `https://your-project.vercel.app/auth/callback`

### Files Check
- [ ] `.gitignore` includes `.env*` files
- [ ] No sensitive data in code
- [ ] `vercel.json` is present (optional but recommended)
- [ ] `next.config.js` is properly configured
- [ ] All images are in `public/` folder

### Product Data
- [ ] Product image (`product.png`) is in `public/` folder
- [ ] Product details are correct in `components/product-grid.tsx`
- [ ] Product details are correct in `app/page.tsx`
- [ ] WhatsApp number is correct in `components/product-card.tsx`

## Deployment Steps

1. [ ] Push code to GitHub/GitLab/Bitbucket
2. [ ] Connect repository to Vercel
3. [ ] Add all environment variables in Vercel dashboard
4. [ ] Deploy project
5. [ ] Wait for build to complete
6. [ ] Check deployment logs for errors

## Post-Deployment Testing

### Basic Functionality
- [ ] Homepage loads correctly
- [ ] Navigation works
- [ ] Product card displays correctly
- [ ] Product image loads
- [ ] "Order Now" button redirects to WhatsApp
- [ ] WhatsApp message includes product name and price

### Pages
- [ ] Shop page loads
- [ ] Collections page shows "Coming Soon"
- [ ] Build Box page shows "Coming Soon"
- [ ] Gifting page shows "Coming Soon"
- [ ] Corporate page shows "Coming Soon"
- [ ] About page loads correctly

### Filters
- [ ] Applying filters shows "Coming Soon" message
- [ ] Clearing filters shows product card

### Mobile Responsiveness
- [ ] Site works on mobile devices
- [ ] Navigation is accessible
- [ ] Product card displays correctly on mobile
- [ ] WhatsApp link works on mobile

## Common Issues & Solutions

### Build Fails
- Check environment variables are set
- Verify `package.json` has correct scripts
- Check for TypeScript errors
- Ensure all dependencies are in `package.json`

### Images Don't Load
- Verify images are in `public/` folder
- Check image paths are correct
- Verify `next.config.js` image configuration

### Supabase Connection Fails
- Verify environment variables are correct
- Check Supabase project is active
- Verify redirect URLs in Supabase dashboard

### WhatsApp Link Doesn't Work
- Verify number is correct: `8247579990`
- Check message format is correct
- Test on mobile device

## Quick Deploy Commands

If using Vercel CLI:
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Support

- Vercel Documentation: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Supabase Documentation: https://supabase.com/docs

