import { createDirectus, rest, readItems, RestCommand } from '@directus/sdk';

// Define the About collection type
interface About {
    id: number;
    title: string;
    subtitle: string;
    description: string; // This will be rich text from WYSIWYG
    image: {
        id: string;
        filename_download: string;
    };
}

// Define your collections
interface Schema {
    about: About[];
}

const directusUrl = import.meta.env.DIRECTUS_URL;
const directusToken = import.meta.env.DIRECTUS_TOKEN;

if (!directusUrl) {
    console.warn('DIRECTUS_URL not set. Content will use fallback values.');
}

export const directus = createDirectus<Schema>(directusUrl || 'http://localhost:8055')
    .with(rest({
        credentials: 'include',
        headers: {
            'Authorization': `Bearer ${directusToken}`
        }
    }));

// Typed function to fetch about content
export async function fetchAbout() {
    if (!directusUrl) {
        return null;
    }
    
    try {
        const items = await directus.request(
            readItems('about', {
                fields: ['title', 'subtitle', 'description', 'image.filename_download']
            })
        );
        return items;
    } catch (error) {
        console.error('Error fetching from Directus:', error);
        return null;
    }
}

// Example function to fetch data from a collection
export async function fetchFromDirectus(collection: string) {
    try {
        const response = await directus.request(collection);
        return response;
    } catch (error) {
        console.error('Error fetching from Directus:', error);
        return null;
    }
} 