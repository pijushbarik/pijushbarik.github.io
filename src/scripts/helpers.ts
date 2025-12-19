import { getCollection } from "astro:content";

type CompareFunction = (a, b) => number;

type Options = {
    sort?: boolean;
    compareFn?: CompareFunction;
}

export async function getAllPublishedPosts(options?:Options) {
    const posts = await getCollection("posts", ({ data }) => {
        if (!import.meta.env.PROD) return true; // show all in non-prod

        return data.published;
    });

    if (options?.sort) {
        if (options.compareFn) {
            return posts.sort(options.compareFn);
        }

        return posts.sort(
            (a, b) =>
                new Date(b.data.publishDate).valueOf() -
                new Date(a.data.publishDate).valueOf(),
        )
    }

    return posts;
}