import { z } from "zod";

export const ProductDetailSchema = z.object({
  title: z.string(),
  href: z.string(),
  image: z.string(),
  category: z.string(),
  slug: z.string(),
  categorySlug: z.string().optional().default(""),
  summary: z.string(),
  points: z.array(z.string()),
  video: z.string().nullable(),
});

export const GeneratedContentSchema = z.object({
  aboutParagraphs: z.array(z.string()),
  aboutRange: z.array(z.string()),
  contactCards: z.array(z.object({ title: z.string(), text: z.string() })),
  productDetails: z.array(ProductDetailSchema),
  groupedProducts: z.record(z.string(), z.array(ProductDetailSchema)),
  assets: z.object({
    all: z.array(z.string()),
    clientLogos: z.array(z.string()),
    eventImages: z.array(z.string()),
    iconImages: z.array(z.string()),
    machineImages: z.array(z.string()),
    factoryImages: z.array(z.string()),
  }),
});
