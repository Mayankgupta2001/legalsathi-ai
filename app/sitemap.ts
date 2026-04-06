import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://legalsathi-ai.vercel.app';

  return [
    {
      url: baseUrl,
      priority: 1.0,
      changeFrequency: 'daily',
    },
    {
      url: `${baseUrl}/fir-guide`,
      priority: 0.9,
      changeFrequency: 'weekly',
    },
  ];
}