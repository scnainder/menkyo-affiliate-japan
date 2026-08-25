# Menkyo.me Web Frontend

Official website for Menkyo.me - Japanese driver's license affiliate platform.

## Overview

Menkyo.me is a platform that connects Japanese drivers (aged 17-23) with quality driving schools (自動車学校/jidousha gakkou) across Japan.

### Key Features

- 🏠 **Homepage**: Explains "元付き" (gentsuki) concept in simple Japanese
- 📍 **School Directory**: Browse 400+ driving schools by prefecture
- 💰 **Price Comparison**: Find affordable options
- ⭐ **Reviews & Ratings**: See real student feedback
- 📱 **Mobile-Optimized**: Works great on smartphones

## Language & Tone

- **Language**: Japanese (日本語)
- **Audience**: 17-23 year old Japanese drivers
- **Tone**: Simple & Direct (Caveman Method) - no unnecessary jargon

## Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: CSS (Global styles)
- **Runtime**: React 18+

## Project Structure

```
web/
├── app/
│   ├── layout.tsx          # Main layout with header/footer
│   ├── page.tsx            # Homepage (/)
│   └── list/
│       └── page.tsx        # Schools list page (/list)
├── components/             # Reusable components (coming soon)
├── lib/
│   └── schools.ts          # School data & utilities
├── styles/
│   └── globals.css         # Global styles
├── public/                 # Static assets
├── package.json            # Dependencies
├── tsconfig.json          # TypeScript config
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
cd web

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local  # if available

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the site.

## Pages

### 1. Homepage (`/`)

**What it does:**
- Explains what Menkyo is
- Introduces the "元付き" concept
- Lists problems drivers face
- Shows how Menkyo.me solves them
- Includes FAQ section

**Language Feature:**
- Uses simple Japanese
- Conversational tone ("お前", "だけ")
- Targets 17-23 year olds
- "Caveman method" - straightforward explanations

### 2. School List (`/list`)

**What it does:**
- Display all 400+ driving schools
- Filter by prefecture
- Sort by price/rating/reviews
- Show price range slider
- Display school details card with:
  - Name & location
  - Price (¥)
  - Rating (⭐)
  - Key features
  - Contact & website links

**Monetization:**
- When users click "詳しく見る" (Details), they go to the school's page
- Affiliate commission is earned when they register

## Data

Schools data is stored in `lib/schools.ts`:

```typescript
interface School {
  id: string
  name: string
  prefecture: string      // 都道府県
  city: string            // 市区町村
  price: number           // ¥ (en yen)
  rating: number          // Star rating (0-5)
  reviews: number         // Number of reviews
  features: string[]      // Key features
  contact: string         // Phone number
  website: string         // URL
  address: string         // Full address
}
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

The site can be deployed to:
- Vercel (recommended for Next.js)
- AWS/DigitalOcean/Heroku
- Self-hosted server

For Vercel:
```bash
vercel deploy
```

## Monetization Points

### 1. Affiliate Links
- Links to school websites earn commission
- Users pay same price regardless

### 2. School Partnerships
- Partner schools pay commission for leads
- Display partnership badges

### 3. Premium Listings (Future)
- Schools can pay for featured placement
- Premium badge on school cards

## SEO Optimization

- Title: "Menkyo.me - 運転免許を取得しよう"
- Meta: Simple, keyword-rich descriptions
- Structured data for schools
- Mobile-friendly
- Fast load times

## Analytics (Planned)

- Google Analytics for traffic
- Conversion tracking
- School click-through rates
- Price comparison usage
- Filter preference analysis

## Common Tasks

### Add a new school
Edit `lib/schools.ts` and add to the `schools` array:

```typescript
{
  id: 'region-###',
  name: 'School Name',
  prefecture: '都道府県',
  city: '市区町村',
  price: 250000,
  rating: 4.5,
  reviews: 100,
  features: ['Feature 1', 'Feature 2'],
  contact: 'XX-XXXX-XXXX',
  website: 'https://...',
  address: '...',
}
```

### Update styling
Edit `styles/globals.css` - all styles are there.

### Add new page
1. Create `app/[path]/page.tsx`
2. Use the same layout as existing pages
3. Follow Japanese language guidelines

## Testing

```bash
npm run lint
```

## Contributing

See `../docs/CONTRIBUTING.md` for guidelines.

## Troubleshooting

### Port already in use
```bash
npm run dev -- -p 3001
```

### TypeScript errors
```bash
npx tsc --noEmit
```

## Support

For issues or questions:
- GitHub Issues
- Email: dev@menkyo.me
- Twitter: @MenkyoMe

## License

MIT - See root LICENSE file

---

**Latest Update**: 2026-08-25
**Status**: MVP Ready (Phase 1)
