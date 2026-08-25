# Source Code

Main backend and shared code for the Menkyo Affiliate platform.

## Structure

```
src/
├── api/             # Core API implementations
├── db/              # Database setup & migrations
├── services/        # Business logic services
├── models/          # Data models
├── middleware/      # Express/Server middleware
├── utils/           # Utility functions
├── config/          # Configuration
└── types/           # TypeScript type definitions
```

## Core Modules

### 1. API Module (`/api`)
- Express app setup
- Route definitions
- Request/response handling
- Error handling

### 2. Database Module (`/db`)
- Connection management
- Migration system
- Query builders
- Connection pooling

### 3. Services Module (`/services`)
- Affiliate service
- School service
- Commission service
- Payment service
- Email service

### 4. Models Module (`/models`)
- Affiliate model
- School model
- Commission model
- Transaction model
- User model

## Key Features (Planned)

- ✅ RESTful API
- ✅ Database ORM/Query Builder
- ✅ Authentication & Authorization
- 📊 Real-time Analytics
- 💰 Payment Processing
- 📧 Email Service
- 🔔 Notifications System
- 📱 Mobile API

## Environment Variables

See `config/example.env` for all required variables.

## Getting Started

```bash
# Install dependencies
npm install

# Setup database
npm run db:migrate

# Start development server
npm run dev

# Run tests
npm run test

# Build for production
npm run build
```

## API Documentation

Detailed API documentation coming soon:
- `docs/API.md` - Full API reference
- `docs/ENDPOINTS.md` - All endpoints
- `docs/WEBHOOKS.md` - Webhook specifications

## Database

### Supported Databases
- PostgreSQL 14+ (Primary)
- MySQL 8+ (Secondary)

### Setup
```bash
# Create database
createdb menkyo_affiliate

# Run migrations
npm run db:migrate

# Seed data
npm run db:seed
```

## Testing

```bash
# Run all tests
npm test

# Watch mode
npm test -- --watch

# Coverage
npm test -- --coverage

# Specific test file
npm test -- src/services/__tests__/affiliate.test.ts
```

## Code Quality

### Linting
```bash
npm run lint
```

### Code Formatting
```bash
npm run format
```

### Type Checking (TypeScript)
```bash
npm run type-check
```

## Performance Monitoring

- Request logging
- Error tracking
- Performance metrics
- Database query logging

## Security Best Practices

- ✅ Environment variables for secrets
- ✅ SQL injection prevention
- ✅ CORS configuration
- ✅ Rate limiting
- ✅ Input validation
- ✅ HTTPS enforcement
- ✅ Password hashing
- ✅ JWT tokens

## Documentation

- TypeScript Types: `src/types/` (in-code documentation)
- Service Documentation: `docs/SERVICES.md` (coming soon)
- Database Schema: `docs/DATABASE.md` (coming soon)
