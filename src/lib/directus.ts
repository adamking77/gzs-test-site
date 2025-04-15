import { createDirectus, rest } from '@directus/sdk';

// You'll set these in your Render environment variables
const directusUrl = import.meta.env.DIRECTUS_URL || 'https://your-directus-url.onrender.com';
const directusToken = import.meta.env.DIRECTUS_TOKEN;

export const directus = createDirectus(directusUrl)
    .with(rest());

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