# API Schema - URL Shortening Service

This document defines the data structures and schemas for the URL Shortening API.

## Models

### ShortURL

| Field         | Type     | Description                                 |
| :------------ | :------- | :------------------------------------------ |
| `id`          | `string` | Unique database identifier                  |
| `url`         | `string` | Original long URL                           |
| `shortCode`   | `string` | Unique generated short code                 |
| `createdAt`   | `string` | ISO 8601 timestamp                          |
| `updatedAt`   | `string` | ISO 8601 timestamp                          |
| `accessCount` | `number` | Total number of times accessed (stats only) |

---

## Endpoints Schemas

### 1. POST /shorten

**Request Body:**

```json
{
  "url": "string" // Required: Valid URL format
}
```

**Response (201 Created):**
`ShortURL`

### 2. GET /shorten/:shortCode

**Response (200 OK):**
`ShortURL`

### 3. PUT /shorten/:shortCode

**Request Body:**

```json
{
  "url": "string" // Required: Valid URL format
}
```

**Response (200 OK):**
`ShortURL`

### 4. DELETE /shorten/:shortCode

**Response (204 No Content):**
Empty

### 5. GET /shorten/:shortCode/stats

**Response (200 OK):**
`ShortURL` (with `accessCount` field)
