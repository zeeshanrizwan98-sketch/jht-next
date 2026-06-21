import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.jhtenergyservices.com';
  
  const routes = ['', '/about', '/services', '/eligibility', '/contact'];
  
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/eligibility' ? 0.9 : 0.8,
  }));
}
