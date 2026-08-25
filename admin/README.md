# Admin Dashboard

Administrative interface for managing the affiliate platform.

## Features

### 1. Dashboard Overview
- Total revenue overview
- Active affiliates count
- Recent registrations
- Performance metrics

### 2. Affiliate Management
- View all affiliates
- Approve/reject registrations
- Manage affiliate status
- Communication history

### 3. School Management
- Add/edit schools
- Commission rates
- Partnership agreements
- School analytics

### 4. Transaction Management
- Payout approvals
- Payment history
- Refund processing
- Financial reporting

### 5. Content Management
- Landing pages
- Email templates
- Banner management
- SEO settings

### 6. Analytics & Reporting
- Conversion analytics
- Affiliate performance
- Revenue reports
- Traffic analysis

## Structure

```
admin/
├── components/      # React/Vue components
├── pages/          # Admin pages
├── api/            # Admin API client
├── middleware/     # Authentication, authorization
├── styles/         # CSS/SCSS
└── utils/          # Helper functions
```

## Security

- Admin-only authentication
- Role-based access control (RBAC)
- Two-factor authentication (2FA)
- Audit logging
- IP whitelist support

## Access Control

| Role | Permissions |
|------|-------------|
| Admin | All |
| Manager | Affiliates, Analytics |
| Accountant | Transactions, Payouts |
| Viewer | Read-only access |

## Technology (Planned)

- Frontend: React 18+ / Next.js
- State Management: Redux / Zustand
- UI Framework: Material-UI / Tailwind CSS
- Charts: Chart.js / Recharts

## Deployment

Admin dashboard will be deployed to:
- Production: https://admin.menkyo-affiliate.jp
- Staging: https://admin-staging.menkyo-affiliate.jp

## Documentation

- User Guide: `docs/ADMIN_GUIDE.md` (coming soon)
- API Documentation: `docs/ADMIN_API.md` (coming soon)
