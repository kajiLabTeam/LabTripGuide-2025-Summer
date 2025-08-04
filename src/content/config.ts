import { defineCollection, z } from 'astro:content';

const tripCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.string().optional(),
    location: z.string().optional(),
    participants: z.string().optional(),
    transportation: z.string().optional(),
    duration: z.string().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  trip: tripCollection,
}; 