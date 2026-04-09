import { MetadataRoute } from 'next'
import { getAllSlugs } from './blog/_posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://legalsathi-ai.vercel.app'
  const now = new Date()

  const blogUrls: MetadataRoute.Sitemap = getAllSlugs().map((slug: string) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: now,
      priority: 1.0,
      changeFrequency: 'daily',
    },
    {
      url: `${baseUrl}/fir-guide`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/draft`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    ...blogUrls,
  ]
}