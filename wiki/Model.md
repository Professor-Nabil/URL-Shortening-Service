# Database Models - URL Shortening Service

This project uses a relational database (MariaDB) with Prisma as the ORM. Below is the proposed model definition for the `schema.prisma` file.

## Prisma Model

```prisma
model ShortURL {
  id          String   @id @default(uuid())
  url         String
  shortCode   String   @unique
  accessCount Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@map("short_urls")
}
```

## Model Explanation

- **`id`**: Unique primary key generated as a UUID to ensure global uniqueness.
- **`url`**: Stores the original long URL.
- **`shortCode`**: The unique identifier for the shortened link. Marked as `@unique` to ensure quick lookups and prevent collisions.
- **`accessCount`**: Tracks the number of times this specific short URL has been accessed. Defaults to `0`.
- **`createdAt`**: Timestamp recording when the record was created.
- **`updatedAt`**: Automatically updated timestamp whenever the record is modified.
- **`@@map("short_urls")`**: Maps the model to a specific table name in the MariaDB database to follow naming conventions.
