# API Documentation - URL Shortening Service

## Overview

This RESTful API allows users to shorten long URLs, retrieve original URLs, update mappings, delete records, and track access statistics.

---

## Base URL

`/`

---

## Endpoints

### 1. Create Short URL

Generates a new unique short code for a given long URL.

- **Endpoint:** `POST /shorten`
- **Request Body:**

  ```json
  {
    "url": "https://www.example.com/some/long/url"
  }
  ```

- **Success Response (201 Created):**

  ```json
  {
    "id": "1",
    "url": "https://www.example.com/some/long/url",
    "shortCode": "abc123",
    "createdAt": "2021-09-01T12:00:00Z",
    "updatedAt": "2021-09-01T12:00:00Z"
  }
  ```

- **Error Response (400 Bad Request):** Returns error messages for invalid URL formats.

### 2. Retrieve Original URL

Retrieves the original URL associated with the short code.

- **Endpoint:** `GET /shorten/:shortCode`
- **Success Response (200 OK):**

  ```json
  {
    "id": "1",
    "url": "https://www.example.com/some/long/url",
    "shortCode": "abc123",
    "createdAt": "2021-09-01T12:00:00Z",
    "updatedAt": "2021-09-01T12:00:00Z"
  }
  ```

- **Error Response (404 Not Found):** If the short code does not exist.

### 3. Update Short URL

Updates the original URL associated with an existing short code.

- **Endpoint:** `PUT /shorten/:shortCode`
- **Request Body:**

  ```json
  {
    "url": "https://www.example.com/some/updated/url"
  }
  ```

- **Success Response (200 OK):**

  ```json
  {
    "id": "1",
    "url": "https://www.example.com/some/updated/url",
    "shortCode": "abc123",
    "createdAt": "2021-09-01T12:00:00Z",
    "updatedAt": "2021-09-01T12:30:00Z"
  }
  ```

- **Error Responses:**
  - `400 Bad Request`: Invalid request body.
  - `404 Not Found`: Short code does not exist.

### 4. Delete Short URL

Deletes an existing short URL mapping.

- **Endpoint:** `DELETE /shorten/:shortCode`
- **Success Response (204 No Content):** Successful deletion.
- **Error Response (404 Not Found):** If the short code does not exist.

### 5. Get URL Statistics

Retrieves access statistics for a short URL.

- **Endpoint:** `GET /shorten/:shortCode/stats`
- **Success Response (200 OK):**

  ```json
  {
    "id": "1",
    "url": "https://www.example.com/some/long/url",
    "shortCode": "abc123",
    "createdAt": "2021-09-01T12:00:00Z",
    "updatedAt": "2021-09-01T12:00:00Z",
    "accessCount": 10
  }
  ```

- **Error Response (404 Not Found):** If the short code does not exist.

---

## Security

- Authentication and authorization are currently **not required** for this project.
