# TODO - URL Shortening Service

## Phase 1: Foundation & Data Layer

- [ ] Initialize project (npm/package.json, TypeScript config).
- [ ] Setup folder structure (as defined in `File-Structure.md`).
- [ ] Install dependencies (Node.js, Express, Prisma 6, Zod, Vitest, etc.).
- [ ] Setup database (MariaDB) and configure `.env` files.
- [ ] Setup Prisma (`schema.prisma` with `ShortURL` model as defined in `Model.md`).
- [ ] Run initial migrations.

## Phase 2: Services (Business Logic - Inside Out)

- [ ] Implement `UrlService` (Create short URL).
- [ ] Implement `UrlService` (Retrieve original URL).
- [ ] Implement `UrlService` (Update short URL).
- [ ] Implement `UrlService` (Delete short URL).
- [ ] Implement `UrlService` (Get URL Statistics).
- [ ] Write unit tests for all `UrlService` methods.

## Phase 3: Controllers (API Layer - Outside)

- [ ] Implement `UrlController` for `POST /shorten`.
- [ ] Implement `UrlController` for `GET /shorten/:shortCode`.
- [ ] Implement `UrlController` for `PUT /shorten/:shortCode`.
- [ ] Implement `UrlController` for `DELETE /shorten/:shortCode`.
- [ ] Implement `UrlController` for `GET /shorten/:shortCode/stats`.

## Phase 4: Routes & App Assembly

- [ ] Configure `routes/` (Express Routers).
- [ ] Setup `app.ts` (Middleware, global error handling).
- [ ] Setup `server.ts` (App bootstrap).

## Phase 5: Verification & Testing

- [ ] Write integration tests for all API endpoints (using `supertest`).
- [ ] Write E2E tests for main workflows.
- [ ] Run all tests and ensure 100% pass rate.
- [ ] Final project linting (`npm run lint`) and type check (`npm run check`).
