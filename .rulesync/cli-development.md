---
root: false
targets: ["*"]
description: "CLI development guidelines and best practices"
globs: ["src/cli/**/*", "**/*.ts"]
---

# CLI Development Guidelines

## Command Design
- Use clear, descriptive command names
- Follow conventional CLI patterns (verb-noun structure)
- Provide helpful descriptions for all commands and options
- Use consistent option naming across commands

## User Experience
- Provide meaningful progress indicators for long operations
- Use colorized output sparingly for better accessibility
- Support both verbose and quiet modes
- Include examples in help text

## Error Handling
- Always provide actionable error messages
- Include context about what the user can do to fix the issue
- Use appropriate exit codes:
  - 0: Success
  - 1: General error
  - 2: Invalid usage
  - 126: Command not executable
  - 127: Command not found

## File Processing
- Support standard input/output for pipeline usage
- Validate file paths and permissions before processing
- Handle large files efficiently with streaming
- Provide backup options for destructive operations

## Configuration
- Support configuration files in standard locations
- Allow CLI options to override configuration file settings
- Use JSON/YAML for configuration files
- Validate configuration schema

## Development Workflow
- Use `pnpm dev` for development with hot reload
- Test CLI commands in isolation
- Create integration tests for complete workflows
- Document new commands and options

## Security Considerations
- Validate all user inputs
- Sanitize file paths to prevent directory traversal
- Use secure file permissions for created files
- Never log sensitive information

## Performance
- Start fast - lazy load heavy dependencies
- Stream large files instead of loading into memory
- Cache computation results when appropriate
- Provide options to control resource usage