# 3KPRO Website

Professional website for 3KPRO.services showcasing software and service solutions.

## Overview

This is the official corporate website for 3KPRO, a software and service solutions company specializing in:

- SaaS Products (featuring TrendPulse)
- Custom Software Development
- AI Agent Solutions
- IT Consulting
- Cloud Infrastructure
- System Integration

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Forms**: React Hook Form
- **Deployment**: Vercel

## Features

- Fully responsive design
- SEO optimized with comprehensive metadata
- Functional contact form with validation
- Professional color scheme (Sky Blue #0ea5e9)
- Social media integration
- Featured TrendPulse SaaS product
- Six service sections with clear descriptions

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The development server runs on `http://localhost:3001`

## Deployment

The site is deployed on Vercel and accessible at:

- **Production**: https://3kpro.services
- **WWW**: https://www.3kpro.services
- **Vercel URL**: https://3kpro-website.vercel.app

### Deploying Updates

```bash
# Deploy to production
vercel --prod
```

## Project Structure

```
3kpro-website/
├── app/
│   ├── globals.css      # Global styles with Tailwind imports
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page
├── components/
│   └── ContactForm.tsx  # Contact form with validation
├── public/              # Static assets
└── README.md
```

## Contact Form

The contact form includes:
- Name validation (required)
- Email validation (required, with format checking)
- Company field (optional)
- Message field (required)
- Success/error state handling
- Responsive design

Currently logs to console. To connect to an API, update the `onSubmit` function in `components/ContactForm.tsx`.

## DNS Configuration

The domain `3kpro.services` should be configured with the following DNS records:

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

Vercel will automatically handle SSL certificates.

## License

Proprietary - 3KPRO Services

## Maintenance

For updates or issues, contact hello@3kpro.services
