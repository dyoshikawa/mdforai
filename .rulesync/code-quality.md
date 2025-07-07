---
root: false
targets: ["*"]
description: "Code quality standards and linting configuration"
globs: ["**/*.ts", "**/*.js", "**/*.json"]
---

# Code Quality Standards

## Linting Setup
- **Biome**: Primary formatter for consistent code style
- **ESLint**: TypeScript-specific rules and best practices
- **Oxlint**: Fast Rust-based linter for additional checks
- All linters configured with zero warnings policy

## Formatting Standards
- 2-space indentation for consistency
- 100 character line length for readability
- Always use semicolons for clarity
- Double quotes for strings
- Trailing commas for better diffs
- Arrow function parentheses always present

## Code Style Rules
- Use meaningful variable and function names
- Prefer const over let, never use var
- Use template literals for string interpolation
- Organize imports automatically
- Remove unused variables and imports
- Use consistent naming conventions:
  - camelCase for variables and functions
  - PascalCase for classes and types
  - UPPER_SNAKE_CASE for constants

## Git Hooks
- Pre-commit hooks run all quality checks
- Automatic formatting and fixing of linting issues
- Secret detection to prevent credential leaks
- Spell checking for documentation

## CI/CD Quality Gates
- All quality checks must pass in CI
- Test coverage requirements
- Build artifacts verification
- Security scanning with secretlint

## Documentation Standards
- JSDoc comments for public APIs
- README with clear usage examples
- Comprehensive error message documentation
- Type definitions should be self-documenting