# Affiliate Management System

This module contains the affiliate management and tracking system.

## Components

### 1. Affiliate Dashboard
- Commission tracking
- Real-time earnings
- Performance analytics
- Withdrawal management

### 2. Affiliate API
- Registration endpoints
- Authentication
- Commission calculations
- Performance reporting

### 3. Database Schema
- Affiliate profiles
- Commission records
- Transaction history
- Performance metrics

## Structure

```
affiliate/
├── controllers/      # API endpoints
├── models/          # Database models
├── services/        # Business logic
├── middlewares/     # Authentication, validation
└── utils/           # Helper functions
```

## Key Features (Planned)

- ✅ Affiliate Registration
- ✅ Login & Authentication
- 📊 Real-time Commission Tracking
- 💰 Payment Processing
- 📈 Performance Analytics
- 🎁 Bonus & Incentive Management
- 📧 Automated Email Notifications
- 📱 Mobile-friendly Dashboard

## API Endpoints (Coming Soon)

```
POST   /api/affiliates/register
POST   /api/affiliates/login
GET    /api/affiliates/me
GET    /api/affiliates/dashboard
GET    /api/affiliates/commissions
POST   /api/affiliates/withdraw
GET    /api/affiliates/transactions
```

## Configuration

See `config/example.env` for affiliate-specific settings:
- `MIN_PAYOUT_THRESHOLD`: Minimum payout amount (¥10,000)
- `PAYOUT_FREQUENCY`: monthly, weekly
- `COMMISSION_RATE_DEFAULT`: Default commission percentage

## Testing

```bash
npm test -- affiliate/
```

## Documentation

For detailed documentation, see:
- Commission Calculation Logic: `docs/COMMISSION_LOGIC.md` (coming soon)
- API Documentation: `docs/API.md` (coming soon)
- Affiliate Guide: `docs/AFFILIATE_GUIDE.md` (coming soon)
