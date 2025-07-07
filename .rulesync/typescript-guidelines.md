---
root: false
targets: ["*"]
description: "TypeScript coding standards and best practices"
globs: ["**/*.ts", "**/*.mts", "**/*.cts"]
---

# TypeScript Guidelines

## Type Safety
- Use strict TypeScript configuration with `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes`
- Prefer `interface` over `type` for object shapes that might be extended
- Use `readonly` for immutable data structures
- Avoid `any` type - use `unknown` for truly unknown types
- Use type guards for runtime type checking

## Code Organization
- Export types and interfaces at the top of files
- Group imports: Node.js built-ins, external packages, internal modules
- Use named exports instead of default exports for better refactoring
- Organize code in logical modules with clear responsibilities

## Error Handling
- Use Result/Either pattern for operations that can fail
- Throw errors only for truly exceptional cases
- Provide meaningful error messages with context
- Use custom error classes for different error types

## CLI-Specific Guidelines
- Use Commander.js action handlers with proper typing
- Validate user input at command boundaries
- Use proper exit codes (0 for success, 1+ for errors)
- Provide helpful error messages and usage examples

## Performance Considerations
- Use lazy loading for heavy modules
- Avoid synchronous file operations in the main thread
- Use streams for large file processing
- Cache expensive computations when appropriate

## Testing Guidelines
- Write unit tests for pure functions
- Use integration tests for CLI commands
- Mock external dependencies and file system operations
- Test error conditions and edge cases