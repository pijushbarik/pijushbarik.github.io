import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/posts" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		relatedPosts: z.array(reference('posts')).optional(),
		published: z.boolean(),
		publishDate: z.union([z.string(), z.date()]),
	})
});

export const collections = { posts };