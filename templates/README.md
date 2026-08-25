# Landing Page Templates

Responsive landing page templates for affiliate marketing campaigns.

## Template Catalog

### 1. Homepage
- Main landing page
- Feature highlights
- School preview
- CTA buttons
- Testimonials

### 2. School Comparison
- Side-by-side comparison
- Price comparison
- Course offerings
- Location filters
- Rating display

### 3. Affiliate Registration
- Simple signup form
- Benefit highlights
- Commission structure
- Terms & conditions
- Email verification

### 4. Success Stories
- Testimonials
- Student reviews
- School ratings
- Statistics
- Call-to-action

## Design Principles

✅ **Mobile-First**: Optimized for mobile devices
✅ **Fast Loading**: Optimized images & lazy loading
✅ **Accessible**: WCAG 2.1 AA compliance
✅ **SEO-Friendly**: Proper meta tags & structured data
✅ **Bilingual**: Japanese & English support
✅ **Conversion-Focused**: Clear CTAs & user flow

## Localization

All templates support:
- Japanese (ja) - Primary
- English (en) - Secondary

Use localization files:
```
templates/i18n/
├── en.json
└── ja.json
```

## Technical Stack (Planned)

- **Framework**: Next.js / Nuxt
- **Styling**: Tailwind CSS / CSS Modules
- **Components**: Headless UI
- **Forms**: React Hook Form / VeeValidate
- **Images**: Next.js Image / Nuxt Image

## Performance Targets

- Lighthouse Score: 90+
- FCP: < 1.5s
- LCP: < 2.5s
- CLS: < 0.1
- TTI: < 3.5s

## Responsive Breakpoints

```
Mobile:     < 640px
Tablet:     640px - 1024px
Desktop:    > 1024px
```

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest versions

## SEO Optimization

- Sitemap generation
- Meta tag management
- Schema.org structured data
- Open Graph tags
- Canonical URLs

## Conversion Optimization

- A/B testing framework
- Heat map integration
- Form analytics
- Goal tracking
- User flow analysis

## Asset Management

```
templates/
├── public/
│   ├── images/
│   ├── videos/
│   └── fonts/
├── components/
├── pages/
├── styles/
└── locales/
```

## Template Usage

```bash
# Copy template for customization
cp -r templates/homepage templates/homepage-v2

# Run locally
npm run dev:templates

# Build for production
npm run build:templates
```

## Documentation

- Component Library: `docs/COMPONENTS.md` (coming soon)
- Template Guide: `docs/TEMPLATE_GUIDE.md` (coming soon)
- Design System: `docs/DESIGN_SYSTEM.md` (coming soon)
