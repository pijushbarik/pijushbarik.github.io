import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
	loader: glob({ pattern: "*.md", base: "./src/posts" }),
	schema: z.object({
		title: z.string(),
		publishDate: z.union([z.string(), z.date()]),
		description: z.string(),
		tags: z.array(z.string()),
		nextPost: z.string().optional(),
		prevPost: z.string().optional(),
	})
});

export const collections = { posts };