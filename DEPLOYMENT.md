# Deployment Guide for Test SAAS 1754600369283

## Deploy to Vercel (Recommended)

1. **Connect your repository to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your project from GitHub/GitLab

2. **Configure environment variables in Vercel:**
   - Add all variables from `.env.example`
   - Set `NEXT_PUBLIC_APP_URL` to your Vercel domain

3. **Deploy:**
   - Vercel will automatically deploy on push

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

## Environment Variables

- `WEBHOOK_URL`: Your automation webhook URL
- `NEXT_PUBLIC_APP_NAME`: App name
- `NEXT_PUBLIC_APP_URL`: Your app's URL

## Support

For support, visit our documentation or contact support.
