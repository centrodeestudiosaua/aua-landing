/**
 * Course Data Fetching
 * Queries Supabase REST API directly for full course data.
 * Used server-side only — anon key is safe for public read (RLS enforced).
 * No cache — always fetches fresh data so CRM changes reflect immediately.
 */

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://cixfitucqskplvfbavzq.supabase.co';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpeGZpdHVjcXNrcGx2ZmJhdnpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg1MzQ4NTcsImV4cCI6MjA4NDExMDg1N30.O14U6qZCH21NI1IbgPeHxqwxPrcWftPefcIp7-_NY9E';

// --- Types ---

export interface InstructorData {
    name: string;
    title: string;
    photo_url: string;
    bio: string;
    badge: string;
    credentials: string[];
}

export interface BenefitItem {
    icon: string;
    title: string;
    text: string;
}

export interface AudienceItem {
    icon: string;
    label: string;
}

export interface SyllabusTopic {
    title: string;
    detail: string;
}

export interface SyllabusModule {
    module_number: number;
    title: string;
    description?: string;
    is_highlighted?: boolean;
    topics: SyllabusTopic[];
}

export interface Course {
    id: string;
    slug: string;
    title: string;
    description: string | null;
    price: number | null;
    stripe_price_id: string | null;
    thumbnail_url: string | null;
    is_published: boolean;
    created_at: string;
    // Landing page fields
    badge_text: string | null;
    urgency_text: string | null;
    start_date: string | null;
    duration: string | null;
    modality: string | null;
    original_price: number | null;
    online_price: number | null;
    long_description: string | null;
    benefits: BenefitItem[] | null;
    instructor: InstructorData | null;
    target_audience: AudienceItem[] | null;
    syllabus: SyllabusModule[] | null;
    whatsapp_number: string | null;
}

// --- Supabase REST API ---

async function supabaseQuery(table: string, params: string = ''): Promise<Course[]> {
    const url = `${SUPABASE_URL}/rest/v1/${table}?${params}`;

    const response = await fetch(url, {
        headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
        },
        cache: 'no-store', // Always fetch fresh data — CRM changes reflect immediately
    });

    if (!response.ok) {
        throw new Error(`Supabase query failed: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

// --- Public Functions ---

/**
 * Fetch all published courses.
 */
export async function fetchPublishedCourses(): Promise<Course[]> {
    try {
        return await supabaseQuery('courses', 'is_published=eq.true&order=created_at.asc&select=*');
    } catch (error) {
        console.error('[Supabase] Failed to fetch courses:', error);
        return [];
    }
}

/**
 * Fetch a single course by slug.
 */
export async function fetchCourseBySlug(slug: string): Promise<Course | null> {
    try {
        const courses = await supabaseQuery('courses', `slug=eq.${slug}&is_published=eq.true&select=*&limit=1`);
        return courses[0] || null;
    } catch (error) {
        console.error(`[Supabase] Failed to fetch course ${slug}:`, error);
        return null;
    }
}

/**
 * Fetch all course slugs for static generation.
 */
export async function fetchAllCourseSlugs(): Promise<string[]> {
    try {
        const courses = await supabaseQuery('courses', 'is_published=eq.true&select=slug');
        return courses.map(c => c.slug);
    } catch (error) {
        console.error('[Supabase] Failed to fetch slugs:', error);
        return [];
    }
}
