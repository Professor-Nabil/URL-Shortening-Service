# Zod Schemas - URL Shortening Service

This document defines the Zod schemas for request validation and data modeling.

```typescript
import { z } from "zod";

// Base Schema for a URL
export const UrlSchema = z.object({
  url: z.string().url({ message: "Invalid URL format" }),
});

// ShortURL Response Schema
export const ShortUrlResponseSchema = z.object({
  id: z.string(),
  url: z.string().url(),
  shortCode: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

// Statistics Response Schema
export const UrlStatsResponseSchema = ShortUrlResponseSchema.extend({
  accessCount: z.number().int().nonnegative(),
});

// Parameter Validation (for shortCode)
export const ShortCodeParamSchema = z.object({
  shortCode: z.string().min(1),
});
```
