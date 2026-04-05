import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const sourceSchema = z.object({
  book_title: z.string().optional(),
  author: z.string().optional(),
  cover: z.string().optional(),
  amazon_url: z.url().optional(),
  url: z.url().optional(),
  isbn: z.string().optional(),
});

const entries = defineCollection({
  loader: glob({ base: "./content/entries", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    published: z.boolean().default(true),
    tags: z.array(z.string()).optional(),
    started_at: z.coerce.date().optional(),
    finished_at: z.coerce.date().optional(),
    sources: z.array(sourceSchema).optional(),
  }),
});

export const collections = { entries };
