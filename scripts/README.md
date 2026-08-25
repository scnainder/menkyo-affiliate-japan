# Utility Scripts

Helpful scripts for development, deployment, and maintenance.

## Available Scripts

### Database Scripts

#### `db-migrate.sh`
Run database migrations.
```bash
./scripts/db-migrate.sh
```

#### `db-seed.sh`
Seed database with sample data.
```bash
./scripts/db-seed.sh
```

#### `db-backup.sh`
Backup database to file.
```bash
./scripts/db-backup.sh [environment]
```

#### `db-restore.sh`
Restore database from backup.
```bash
./scripts/db-restore.sh [backup-file]
```

### Deployment Scripts

#### `deploy.sh`
Deploy to production.
```bash
./scripts/deploy.sh [environment] [branch]
```

#### `health-check.sh`
Check system health.
```bash
./scripts/health-check.sh [environment]
```

#### `rollback.sh`
Rollback to previous version.
```bash
./scripts/rollback.sh [version]
```

### Maintenance Scripts

#### `cleanup.sh`
Clean up temporary files and cache.
```bash
./scripts/cleanup.sh
```

#### `optimize-images.sh`
Optimize images for web.
```bash
./scripts/optimize-images.sh
```

#### `generate-sitemaps.sh`
Generate XML sitemaps for SEO.
```bash
./scripts/generate-sitemaps.sh
```

### Development Scripts

#### `dev-setup.sh`
Initial setup for development environment.
```bash
./scripts/dev-setup.sh
```

#### `generate-types.sh`
Generate TypeScript types from database schema.
```bash
./scripts/generate-types.sh
```

#### `lint-and-fix.sh`
Run linting and auto-fix issues.
```bash
./scripts/lint-and-fix.sh
```

### Testing Scripts

#### `run-tests.sh`
Run all tests with coverage.
```bash
./scripts/run-tests.sh
```

#### `test-e2e.sh`
Run end-to-end tests.
```bash
./scripts/test-e2e.sh
```

## Script Structure

All scripts should follow this template:

```bash
#!/bin/bash
set -e  # Exit on error

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Functions
log() {
  echo -e "${GREEN}[INFO]${NC} $1"
}

error() {
  echo -e "${RED}[ERROR]${NC} $1" >&2
  exit 1
}

# Main logic
main() {
  log "Script starting..."
  # Do work here
  log "Script completed successfully!"
}

main "$@"
```

## Environment Variables

Scripts use environment variables from `config/.env`:
```bash
source config/.env
```

## Safety Guidelines

- ✅ Always use `set -e` to exit on errors
- ✅ Validate inputs before running
- ✅ Create backups before destructive operations
- ✅ Use dry-run mode for major operations
- ✅ Log all important actions
- ✅ Handle errors gracefully

## Contributing Scripts

When adding new scripts:

1. Use `.sh` extension
2. Add shebang: `#!/bin/bash`
3. Add usage documentation
4. Include error handling
5. Test thoroughly
6. Document in this README

## Permissions

Make scripts executable:
```bash
chmod +x scripts/*.sh
```

## Examples

### Running a Script
```bash
./scripts/db-migrate.sh
```

### Running with Arguments
```bash
./scripts/deploy.sh production main
```

### Running from Any Directory
```bash
/path/to/menkyo-affiliate-japan/scripts/cleanup.sh
```

## Troubleshooting

### Permission Denied
```bash
chmod +x scripts/script-name.sh
```

### Script Not Found
```bash
# Make sure you're in the project root
cd /path/to/menkyo-affiliate-japan
```

### Permission Issues with Database
```bash
# Make sure .env has correct database credentials
cat config/.env | grep DB_
```

## Creating New Scripts

Template for new script:

```bash
#!/bin/bash
set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

log() { echo -e "${GREEN}[INFO]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1" >&2; exit 1; }

usage() {
  cat << EOF
Usage: $(basename "$0") [OPTIONS]

Description: What this script does

OPTIONS:
  -h, --help        Show this help message
  -v, --verbose     Verbose output

EOF
  exit 1
}

main() {
  while [[ $# -gt 0 ]]; do
    case $1 in
      -h|--help) usage ;;
      -v|--verbose) VERBOSE=1; shift ;;
      *) error "Unknown option: $1" ;;
    esac
  done

  log "Starting script..."
  # Add your logic here
  log "Script completed!"
}

main "$@"
```

---

For more information, see:
- Project Plan: `docs/PROJECT_PLAN.md`
- Contributing Guide: `docs/CONTRIBUTING.md`
