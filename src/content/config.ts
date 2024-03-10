import { z, defineCollection } from "astro:content";

const courseInfoSchema = z.object({
  title: z.string(),
  order: z.number().optional(),
  description: z.string(),
  slug: z.string(),
  image: z
    .object({
      src: z.string(),
      alt: z.string(),
    })
    .optional(),
});
const coursesCollection = defineCollection({
  type: "content",
  schema: courseInfoSchema,
});

export type CourseInfo = z.infer<typeof courseInfoSchema>;

export const collections = {
  courses: coursesCollection,
};
