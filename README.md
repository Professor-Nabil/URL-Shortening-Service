# URL Shortener API

A robust, TypeScript-based URL shortening service built with Express, Prisma 6, and MariaDB.

## Features

- Shorten long URLs into unique short codes.
- Retrieve, update, and delete URL mappings.
- Track access statistics for short URLs.
- Built-in API documentation via Swagger (`/api-docs`).

## Tech Stack

- **Runtime:** Node.js
- **Language:** TypeScript
- **Framework:** Express.js
- **ORM:** Prisma 6
- **Validation:** Zod
- **Database:** MariaDB
- **Testing:** Vitest, Supertest

## Getting Started

### Prerequisites

- Node.js (v20+)
- MariaDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Professor-Nabil/URL-Shortening-Service.git
   cd URL-Shortening-Service
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Setup Environment Variables:

   ```bash
   cp .env.example .env
   # Update .env with your database credentials
   ```

4. Setup Database:

   ```bash
   npx prisma migrate dev
   ```

5. Start the Server:

   ```bash
   npm run dev
   ```

## API Documentation

Once the server is running, visit:
`http://localhost:3000/api-docs`

## Testing

Run tests with:

```bash
npm test
```

---

[Roadmap.sh](https://roadmap.sh/projects/url-shortening-service)
