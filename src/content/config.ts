import { z, defineCollection } from "astro:content";

const coursesCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number().optional(),
      description: z.string(),
      image: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
    }),
});

export const collections = {
  courses: coursesCollection,
};
