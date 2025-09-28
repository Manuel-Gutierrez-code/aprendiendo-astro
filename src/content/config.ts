import { defineCollection, z } from "astro:content";

const beers = defineCollection({
    schema: z.object({
        title: z.string(),
        img: z.string(),
        auth: z.string(),
        desc: z.string(),
        alcohol_content: z.number().min(0).max(100),
        style: z.string(),
        buy: z.string().url()
    })
})

export const collections = { beers }