# File Structure - URL Shortening Service

This project follows a structured approach to maintain separation of concerns:

- **`server`**: Entry point and middleware configuration.
- **`app`**: Application bootstrap and configuration.
- **`route`**: API route definitions.
- **`controller`**: Request handling and response formatting.
- **`service`**: Business logic and database interactions.

## Proposed Directory Structure

```text
/
├── prisma/               # Prisma schema and migrations
├── src/
│   ├── app.ts            # App initialization (middleware, routes)
│   ├── server.ts         # Server entry point (starts listener)
│   ├── controllers/      # Route handlers
│   ├── routes/           # Express router definitions
│   ├── services/         # Business logic layer
│   ├── schemas/          # Zod validation schemas
│   └── utils/            # Helper functions
├── tests/                # Vitest test suites
├── wiki/                 # Documentation
├── .env                  # Local environment variables
├── .env.example          # Environment variable template
├── package.json
├── tsconfig.json
└── vitest.config.ts
```
