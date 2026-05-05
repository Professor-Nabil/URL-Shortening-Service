# Error Handling Strategy - URL Shortening Service

This document defines how errors are handled throughout the API to ensure consistency, clarity, and robust client-side integration.

## Error Response Format

All error responses will follow a standard JSON structure:

```json
{
  "status": "error",
  "message": "Human-readable error description",
  "errors": [] // Optional: Field-level validation errors
}
```

## Status Codes & Scenarios

| Status Code                   | Scenario                                                | Handling                                                                                      |
| :---------------------------- | :------------------------------------------------------ | :-------------------------------------------------------------------------------------------- |
| **400 Bad Request**           | Validation failed (e.g., malformed URL, invalid body).  | Return error detailing the specific field validation failure (using Zod issues).              |
| **404 Not Found**             | The requested `shortCode` does not exist.               | Return generic "Not Found" error message.                                                     |
| **500 Internal Server Error** | Unexpected failures (e.g., database connection issues). | Log the error server-side and return a generic "Internal Server Error" message to the client. |

## Implementation Guidelines

- **Input Validation:** Use `Zod` schemas to validate all request bodies and path parameters. If validation fails, immediately return a `400 Bad Request` with the Zod error map.
- **Database Operations:** Wrap all database operations in `try-catch` blocks.
- **Data Not Found:** If a query for a `shortCode` yields no results, explicitly return a `404 Not Found`.
- **Global Error Handling:** Implement a global middleware/handler to catch uncaught exceptions, log them (with stack traces for debugging), and send a standardized `500` error response.
