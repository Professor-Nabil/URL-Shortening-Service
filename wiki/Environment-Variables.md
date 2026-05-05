# Environment Variables - URL Shortening Service

This document defines the required environment variables for different stages of the project.

## Required Variables

### 1. `.env.example` (Template for Development)

```bash
# Application Port
PORT=3000

# Database Connection String (MariaDB)
# Format: mysql://USER:PASSWORD@HOST:PORT/DATABASE
DATABASE_URL="mysql://root:password@localhost:3306/url_shortener_db"
```

### 2. `.env` (Local Development)

_Create this file locally; do not commit._

```bash
PORT=3000
DATABASE_URL="mysql://root:local_password@localhost:3306/url_shortener_dev"
```

### 3. `.env.test.example` (Template for Testing)

```bash
# Test Application Port
PORT=3001

# Test Database Connection String
DATABASE_URL="mysql://root:test_password@localhost:3307/url_shortener_test"
```

### 4. `.env.test` (Local Testing)

_Create this file locally; do not commit._

```bash
PORT=3001
DATABASE_URL="mysql://root:test_password@localhost:3307/url_shortener_test"
```
