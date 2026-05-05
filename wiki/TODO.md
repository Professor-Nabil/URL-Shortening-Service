# TODO - URL Shortening Service

## Phase 1: Foundation & Data Layer

- [x] Initialize project (npm/package.json, TypeScript config).
- [x] Setup folder structure (as defined in `File-Structure.md`).
- [x] Install dependencies (Node.js, Express, Prisma 6, Zod, Vitest, etc.).
- [x] Setup database (MariaDB) and configure `.env` files.
- [x] Setup Prisma (`schema.prisma` with `ShortURL` model as defined in `Model.md`).
- [x] Run initial migrations.

## Phase 2: Services (Business Logic - Inside Out)

- [x] Implement `UrlService` (Create short URL).
- [x] Implement `UrlService` (Retrieve original URL).
- [x] Implement `UrlService` (Update short URL).
- [x] Implement `UrlService` (Delete short URL).
- [x] Implement `UrlService` (Get URL Statistics).
- [x] Write unit tests for all `UrlService` methods.

## Phase 3: Controllers (API Layer - Outside)

- [x] Implement `UrlController` for `POST /shorten`.
- [x] Implement `UrlController` for `GET /shorten/:shortCode`.
- [x] Implement `UrlController` for `PUT /shorten/:shortCode`.
- [x] Implement `UrlController` for `DELETE /shorten/:shortCode`.
- [x] Implement `UrlController` for `GET /shorten/:shortCode/stats`.

## Phase 4: Routes & App Assembly

- [x] Configure `routes/` (Express Routers).
- [x] Setup `app.ts` (Middleware, global error handling).
- [x] Setup `server.ts` (App bootstrap).

## Phase 5: Verification & Testing

- [x] Write integration tests for all API endpoints (using `supertest`).
- [x] Write E2E tests for main workflows.
- [x] Run all tests and ensure 100% pass rate.
- [x] Final project linting (`npm run lint`) and type check (`npm run check`).
