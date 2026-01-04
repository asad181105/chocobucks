# Vercel Deployment Guide

This guide will help you deploy your Chocobucks e-commerce site to Vercel.

## Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. A GitHub/GitLab/Bitbucket account (for connecting your repository)
3. Your Supabase project credentials

## Step 1: Prepare Your Repository

1. Make sure your code is committed to a Git repository (GitHub, GitLab, or Bitbucket)
2. Ensure all your changes are pushed to the main/master branch

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will auto-detect Next.js and configure the project
5. Configure environment variables (see Step 3)
6. Click "Deploy"

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

## Step 3: Configure Environment Variables

In your Vercel project dashboard, go to **Settings > Environment Variables** and add the following:

### Required Variables

```bash
# Supabase (Required)
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# App URL (Update with your Vercel domain)
NEXT_PUBLIC_APP_URL=https://your-project.vercel.app
NEXT_PUBLIC_APP_NAME=Chocobucks
```

### Optional Variables (if using these features)

```bash
# NextAuth (if using authentication)
NEXTAUTH_URL=https://your-project.vercel.app
NEXTAUTH_SECRET=your-nextauth-secret-key-here

# Razorpay (if using payments)
RAZORPAY_KEY_ID=your-razorpay-key-id
RAZORPAY_KEY_SECRET=your-razorpay-key-secret
RAZORPAY_WEBHOOK_SECRET=your-razorpay-webhook-secret

# Shiprocket (if using shipping)
SHIPROCKET_EMAIL=your-shiprocket-email
SHIPROCKET_PASSWORD=your-shiprocket-password
SHIPROCKET_WEBHOOK_SECRET=your-shiprocket-webhook-secret

# Resend (if using email)
RESEND_API_KEY=your-resend-api-key

# Cloudinary (if using image uploads)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
```

**Important Notes:**
- Add variables for all environments (Production, Preview, Development)
- After adding environment variables, redeploy your project
- Never commit `.env` files to your repository

## Step 4: Update Supabase Settings

1. Go to your Supabase project dashboard
2. Navigate to **Authentication > URL Configuration**
3. Add your Vercel domain to:
   - **Site URL**: `https://your-project.vercel.app`
   - **Redirect URLs**: `https://your-project.vercel.app/auth/callback`

## Step 5: Build Configuration

Vercel will automatically detect Next.js and use these settings:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build` (or `next build`)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install`

## Step 6: Custom Domain (Optional)

1. In Vercel dashboard, go to **Settings > Domains**
2. Add your custom domain
3. Follow the DNS configuration instructions
4. Vercel will automatically provision SSL certificates

## Post-Deployment Checklist

- [ ] Verify all environment variables are set
- [ ] Test the homepage loads correctly
- [ ] Test product pages
- [ ] Verify Supabase connection works
- [ ] Test authentication (if enabled)
- [ ] Check mobile responsiveness
- [ ] Verify images load correctly
- [ ] Test WhatsApp redirect functionality

## Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Ensure all environment variables are set
3. Verify `package.json` has correct build script
4. Check for TypeScript errors locally: `npm run build`

### Environment Variables Not Working

1. Make sure variables are added for the correct environment
2. Redeploy after adding new variables
3. Check variable names match exactly (case-sensitive)

### Supabase Connection Issues

1. Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are correct
2. Check Supabase project is active
3. Verify redirect URLs are configured in Supabase

### Images Not Loading

1. Check `next.config.js` has correct image domains
2. Verify image paths are correct
3. Ensure images are in the `public` folder

## Support

For issues:
1. Check Vercel deployment logs
2. Review Next.js documentation
3. Check Supabase status page

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Supabase Documentation](https://supabase.com/docs)

