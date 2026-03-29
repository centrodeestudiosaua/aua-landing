import { MetadataRoute } from 'next';
import { fetchAllCourseSlugs } from '@/lib/crm-mcp';

// Force dynamic generation
export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.centrodeestudiosaua.com';

    // Fetch dynamic course slugs from Supabase
    const courseSlugs = await fetchAllCourseSlugs();

    // Create course site map entries
    const courseEntries: MetadataRoute.Sitemap = courseSlugs.map((slug) => ({
        url: `${baseUrl}/cursos/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
    }));

    // Static route entries
    const staticEntries: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/nosotros`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contacto`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/privacidad`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terminos`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];

    return [...staticEntries, ...courseEntries];
}
