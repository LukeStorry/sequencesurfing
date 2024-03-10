import { z, defineCollection } from "astro:content";

const coursesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    order: z.number().optional(),
    description: z.string(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
  }),
});

export const collections = {
  courses: coursesCollection,
};
