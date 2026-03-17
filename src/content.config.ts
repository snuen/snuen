import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const entries = defineCollection({
  loader: glob({ base: './content/entries', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    date: z.coerce.date(),
    status: z.enum(['reading', 'finished', 'paused']).default('reading'),
    published: z.boolean().default(true),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
    isbn: z.string().optional(),
    started_at: z.coerce.date().optional(),
    finished_at: z.coerce.date().optional(),
  }),
});

export const collections = { entries };
