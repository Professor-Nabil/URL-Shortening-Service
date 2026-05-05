import { z } from "zod";

export const UrlSchema = z.object({
  url: z.string().url({ message: "Invalid URL format" }),
});

export const ShortUrlResponseSchema = z.object({
  id: z.string(),
  url: z.string().url(),
  shortCode: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const UrlStatsResponseSchema = ShortUrlResponseSchema.extend({
  accessCount: z.number().int().nonnegative(),
});

export const ShortCodeParamSchema = z.object({
  shortCode: z.string().min(1),
});
