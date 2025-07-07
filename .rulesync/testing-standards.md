---
root: false
targets: ["*"]
description: "Testing standards and practices with Vitest"
globs: ["**/*.test.ts", "**/*.spec.ts", "src/**/*"]
---

# Testing Standards

## Testing Framework
- Use Vitest for all testing (unit, integration, e2e)
- Configure global test utilities and mocks
- Use Node.js environment for CLI testing
- Enable coverage reporting with v8 provider

## Test Organization
- Place test files adjacent to source files with `.test.ts` extension
- Group related tests using `describe` blocks
- Use descriptive test names that explain expected behavior
- Follow Arrange-Act-Assert pattern

## Unit Testing
- Test pure functions in isolation
- Mock external dependencies and side effects
- Test error conditions and edge cases
- Aim for high code coverage (>90%)

## CLI Testing
- Test commands through their exported functions
- Mock file system operations and external processes
- Test both success and failure scenarios
- Verify correct exit codes and output

## Integration Testing
- Test complete workflows end-to-end
- Use temporary directories for file operations
- Test with realistic input data
- Verify side effects and state changes

## Test Utilities
- Create reusable test fixtures and helpers
- Use factory functions for test data generation
- Implement custom matchers for domain-specific assertions
- Mock external APIs and services consistently

## Performance Testing
- Test CLI startup time and memory usage
- Benchmark critical processing functions
- Test with large input files
- Set reasonable performance thresholds

## Test Configuration
- Configure test timeouts appropriately
- Use test isolation to prevent side effects
- Set up proper test database/file cleanup
- Enable parallel test execution where safe

## Continuous Testing
- Run tests on every commit
- Include tests in pre-commit hooks
- Generate and publish coverage reports
- Run tests across multiple Node.js versions