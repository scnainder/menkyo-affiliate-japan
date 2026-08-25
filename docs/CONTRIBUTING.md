# Contributing to Menkyo Affiliate Japan

Thank you for your interest in contributing! This document provides guidelines for contributions.

## Getting Started

1. **Fork the repository**
2. **Clone your fork** locally
3. **Create a feature branch** from `main`
4. **Make your changes**
5. **Submit a pull request**

## Development Setup

### Prerequisites
- Git
- Node.js 18+ / Python 3.9+ (depending on component)
- PostgreSQL 14+ (for backend)

### Installation

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/menkyo-affiliate-japan.git
cd menkyo-affiliate-japan

# Setup environment
cp config/example.env config/.env

# Install dependencies (component-specific)
cd src && npm install  # or pip install -r requirements.txt
```

## Coding Standards

### General Guidelines
- Write clean, readable code
- Follow language-specific conventions
- Add comments for complex logic
- Write meaningful commit messages
- Keep PRs focused and smaller when possible

### Naming Conventions
- **Variables**: camelCase (JavaScript) or snake_case (Python)
- **Files**: kebab-case for general files, PascalCase for classes
- **Branches**: feature/*, bugfix/*, docs/* (descriptive names)

### Commit Messages
```
type(scope): subject

body

footer
```

**Types**: feat, fix, docs, style, refactor, test, chore
**Scope**: affiliate, admin, templates, etc.

**Example**:
```
feat(affiliate): add commission tracking dashboard

Implement real-time commission tracking with:
- Live calculation of earnings
- Historical data visualization
- Monthly payout schedule

Closes #123
```

## Multilingual Support

All content should support:
- **Japanese (ja)** - Primary language
- **English (en)** - Secondary for international users

Use locale-specific files:
```
/src/locales/
  ├── ja.json
  └── en.json
```

## Testing

### Before Submitting PR
- [ ] Code follows style guidelines
- [ ] New tests added for new features
- [ ] All tests pass locally
- [ ] Documentation updated
- [ ] No console errors/warnings

### Running Tests
```bash
# Backend tests
npm test

# Linting
npm run lint

# Coverage
npm run test:coverage
```

## Pull Request Process

1. **Update** `docs/CHANGELOG.md` with changes
2. **Ensure** CI/CD passes
3. **Link** related issues in PR description
4. **Request** review from maintainers
5. **Address** review feedback promptly

### PR Template
```markdown
## Description
Brief description of changes

## Related Issues
Closes #XXX

## Changes Made
- Change 1
- Change 2
- Change 3

## Testing
How was this tested?

## Screenshots (if UI changes)
Before/After if applicable

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update
```

## Code Review Guidelines

### For Contributors
- Respond to feedback respectfully
- Ask clarifying questions if needed
- Update code based on review
- Thank reviewers for their time

### For Reviewers
- Be constructive and kind
- Explain reasoning for suggestions
- Approve when satisfied
- Merge when ready

## Reporting Issues

### Bug Reports
Include:
- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Environment (OS, Node/Python version)
- Logs/screenshots if applicable

### Feature Requests
Include:
- Clear use case
- Expected behavior
- Why it's beneficial
- Potential implementation approach

## Code of Conduct

- Be respectful and inclusive
- No harassment or discrimination
- Welcome feedback
- Respect privacy
- Follow local laws and regulations

## Questions?

- Open a GitHub Discussion
- Email: dev@menkyo-affiliate.jp
- Check existing documentation

---

**Thank you for contributing to Menkyo Affiliate Japan! 🙏**
