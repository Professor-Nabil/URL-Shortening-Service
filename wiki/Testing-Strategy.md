# Testing Strategy - URL Shortening Service

This project employs a multi-layered testing strategy using **Vitest** to ensure high code quality, reliability, and security.

## Testing Layers

### 1. Unit Tests

- **Target:** Pure utility functions, Zod schema validations, and isolated service logic.
- **Why:** To ensure individual building blocks work correctly in isolation without side effects.
- **Location:** `tests/unit/**/*.test.ts`

### 2. Integration Tests

- **Target:** API endpoints (controllers, routes, services) using `supertest` against a test database.
- **Why:** To verify the interactions between the API layer, business logic, and the database, ensuring the contract defined in `API-Docs.md` is met.
- **Location:** `tests/integration/**/*.test.ts`

### 3. End-to-End (E2E) Tests

- **Target:** Complete workflows (e.g., Create -> Retrieve -> Stats) spanning the entire stack.
- **Why:** To simulate real-world usage and catch regressions across the full application path.
- **Location:** `tests/e2e/**/*.test.ts`

---

## Testing Protocol

1. **Isolation:** Use a dedicated test database (MariaDB) defined in `.env.test`.
2. **State Management:** Clear database tables before/after each integration and E2E test suite.
3. **Automation:** Run `npm run check` (type checking) and `npm run lint` before executing test suites.
4. **Coverage:** Aim for high coverage on core business logic services.
