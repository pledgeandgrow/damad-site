# Pre-Launch SEO Improvements for DMD Ascenseur

This document outlines actionable SEO improvements that can be implemented before the website launch to ensure better search engine visibility from day one.

## 1. Metadata Optimization

### Page Title & Meta Descriptions
Implement proper title and meta description tags for all pages:

```tsx
// In layout.tsx or individual page files
export const metadata = {
  title: {
    default: 'DMD Ascenseur | Installation et Maintenance d\'Ascenseurs en France',
    template: '%s | DMD Ascenseur'
  },
  description: 'DMD Ascenseur offre des services d\'installation, maintenance et réparation d\'ascenseurs pour bâtiments résidentiels et commerciaux dans toute la France.',
  // Add more metadata as needed
}
```

For individual pages, customize metadata:

```tsx
// In each page.tsx file
export const metadata = {
  title: 'Services de Maintenance d\'Ascenseurs',
  description: 'Nos services de maintenance préventive et corrective pour tous types d\'ascenseurs. Contrats personnalisés et interventions rapides.',
}
```

### Open Graph & Twitter Cards
Add social media metadata to improve sharing appearance:

```tsx
// Add to metadata object
openGraph: {
  type: 'website',
  locale: 'fr_FR',
  url: 'https://www.dmd-ascenseur.fr/',
  siteName: 'DMD Ascenseur',
  images: [
    {
      url: 'https://www.dmd-ascenseur.fr/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'DMD Ascenseur',
    },
  ],
},
twitter: {
  cardType: 'summary_large_image',
},
```

## 2. Structured Data Implementation

### Local Business Schema
Add JSON-LD structured data to improve local search results:

```tsx
// Create a component for JSON-LD
export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "DMD Ascenseur",
          "image": "https://www.dmd-ascenseur.fr/images/logo.png",
          "url": "https://www.dmd-ascenseur.fr",
          "telephone": "+33123456789",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Rue Example",
            "addressLocality": "Paris",
            "postalCode": "75000",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 48.8566,
            "longitude": 2.3522
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "18:00"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/damadascenseurs",
            "https://www.linkedin.com/company/damad-ascenseurs"
          ]
        })
      }}
    />
  );
}
```

### Service Schema
Add structured data for each service:

```tsx
// Create a component for service schema
export default function ServiceSchema({ service }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": service.title,
          "provider": {
            "@type": "LocalBusiness",
            "name": "DMD Ascenseur"
          },
          "areaServed": {
            "@type": "Country",
            "name": "France"
          },
          "description": service.description,
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "EUR"
            }
          }
        })
      }}
    />
  );
}
```

## 3. Technical SEO Improvements

### Sitemap Generation
Create a sitemap.xml file:

```tsx
// src/app/sitemap.ts
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.dmd-ascenseur.fr',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.dmd-ascenseur.fr/a-propos',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.dmd-ascenseur.fr/services/installation',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Add all other pages
  ]
}
```

### Robots.txt
Create a robots.txt file:

```tsx
// src/app/robots.ts
import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: 'https://www.dmd-ascenseur.fr/sitemap.xml',
  }
}
```

### Canonical URLs
Add canonical URLs to prevent duplicate content issues:

```tsx
// In metadata object
alternates: {
  canonical: 'https://www.dmd-ascenseur.fr/current-page-path',
}
```

## 4. Image Optimization

### Image Metadata
Add proper alt text and loading attributes to all images:

```tsx
<Image
  src="/images/elevator.jpg"
  alt="Installation d'ascenseur dans un immeuble résidentiel à Paris"
  width={800}
  height={600}
  loading="lazy"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### Next.js Image Component
Ensure all images use the Next.js Image component for automatic optimization:

```tsx
import Image from 'next/image';

// Replace all img tags with Image components
```

## 5. Performance Improvements

### Font Optimization
Optimize font loading to prevent layout shifts:

```tsx
// In layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
```

### Core Web Vitals
Improve Core Web Vitals metrics:

1. **LCP (Largest Contentful Paint)**
   - Preload hero images
   - Optimize critical CSS

```tsx
// In layout.tsx head
<link
  rel="preload"
  href="/images/hero.jpg"
  as="image"
  type="image/webp"
/>
```

2. **CLS (Cumulative Layout Shift)**
   - Add width and height to all images
   - Use aspect-ratio CSS for responsive elements

3. **FID (First Input Delay)**
   - Minimize JavaScript execution time
   - Use code splitting and lazy loading

## 6. Content Optimization

### Keyword Targeting
Optimize content for target keywords:

1. **Homepage**: "ascenseurs installation maintenance", "entreprise ascenseurs France"
2. **Services Pages**: "installation ascenseur résidentiel", "maintenance préventive ascenseur"
3. **About Page**: "entreprise ascenseurs expérience", "spécialistes ascenseurs France"

### Heading Structure
Implement proper heading hierarchy:

```tsx
<h1>DMD Ascenseur - Installation et Maintenance</h1>
<h2>Nos Services d'Ascenseurs</h2>
<h3>Installation d'Ascenseurs</h3>
```

### Internal Linking
Improve internal linking structure:

1. Add contextual links between related pages
2. Use descriptive anchor text
3. Create a breadcrumb navigation system

```tsx
// Breadcrumb component
export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            {index === items.length - 1 ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

## 7. Implementation Plan

1. **Day 1**: Set up metadata for all pages
2. **Day 2**: Implement structured data
3. **Day 3**: Generate sitemap and robots.txt
4. **Day 4**: Optimize images and implement performance improvements
5. **Day 5**: Review and test all SEO implementations

## 8. Post-Launch Monitoring

1. Set up Google Search Console and submit sitemap
2. Configure Google Analytics 4 for tracking
3. Monitor Core Web Vitals through PageSpeed Insights
4. Track keyword rankings and organic traffic

---

By implementing these SEO improvements before launch, the DMD Ascenseur website will have a strong foundation for search engine visibility and better user experience from day one.
