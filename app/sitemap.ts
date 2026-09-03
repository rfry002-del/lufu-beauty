import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://lufubeauty.com'
  return ['', '/story', '/products', '/philosophy', '/contact', '/products/lip-oil', '/products/moisturizer'].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }))
}
