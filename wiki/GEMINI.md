# Project Context - URL Shortening Service

This document acts as a "source of truth" for the AI agent (Gemini) to remember constraints, architecture, and workflows for this project.

## Core Mandates

- **Language/Stack:** TypeScript, Node.js, Express, Prisma 6, MariaDB, Zod, Vitest.
- **Development Philosophy:** "Layered Build Strategy" (Inside-Out).
- **Quality Assurance:** TDD-first, exhaustive testing (unit/integration/E2E), and constant validation (`npm run check`, `npm run lint`).

## Architectural Rules

1. **Separation of Concerns:** Strictly follow the `server`, `app`, `route`, `controller`, `service` structure.
2. **Data Model:** Use the `ShortURL` model as defined in `Model.md`. UUIDs for IDs, unique `shortCode`, `accessCount` for stats.
3. **Validation:** Always use Zod for request/response validation before processing logic.
4. **Error Handling:** Standardized error format (JSON `status`, `message`, `errors`).
5. **Database:** Use MariaDB (local). Use Prisma 6 for migrations and ORM interactions. Wrap DB calls in `try-catch`.

## Development Workflow

1. **Foundation:** Initialize project, setup folder structure, configure databases/env.
2. **Services (Business Logic):** Implement functions, write unit tests, verify isolation.
3. **Controllers (API Layer):** Implement handlers, map request/response.
4. **Routes & Assembly:** Wire it all up in Express.
5. **Testing & Validation:** Integration/E2E tests, final linting/checks.

## Key Resources

- **Schema/Models:** `wiki/Model.md`, `wiki/Zod-Schema.md`
- **Endpoints:** `wiki/API-Docs.md`, `wiki/API-Schema.md`
- **Error Strategy:** `wiki/Error-Handling-Strategy.md`
- **Testing Strategy:** `wiki/Testing-Strategy.md`
- **Roadmap:** `wiki/TODO.md`

## Gemini Guidelines

- Be direct, concise, and terminal-first.
- Always run `npm run check` before any test runs.
- Commit frequently with clear messages.
- If a bug occurs, reproduce it with a test case first.
- Prioritize project conventions over generic solutions.
