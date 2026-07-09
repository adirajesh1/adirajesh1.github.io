import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const writingSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: writingSchema,
});

const memos = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/memos" }),
  schema: writingSchema,
});

export const collections = { blog, memos };
