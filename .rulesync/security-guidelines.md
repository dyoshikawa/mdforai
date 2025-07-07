---
root: false
targets: ["*"]
description: "Security best practices and requirements"
globs: ["**/*"]
---

# Security Guidelines

## Secret Management
- Never commit secrets, API keys, or credentials to the repository
- Use environment variables for sensitive configuration
- Implement secretlint checks in CI/CD pipeline
- Use secure credential storage in production

## Input Validation
- Validate all user inputs at entry points
- Sanitize file paths to prevent directory traversal attacks
- Use allowlists for file extensions and command arguments
- Implement proper bounds checking for arrays and objects

## File System Security
- Check file permissions before reading/writing
- Use secure temporary file creation
- Validate file types and content before processing
- Implement proper cleanup of temporary files

## Dependency Security
- Regularly audit dependencies with `pnpm audit`
- Keep dependencies updated to latest secure versions
- Use lockfiles to ensure reproducible builds
- Review security advisories for used packages

## Error Handling Security
- Never expose internal paths or system information in error messages
- Log security events appropriately without exposing sensitive data
- Implement proper error boundaries to prevent information leakage
- Use structured logging for security monitoring

## CLI Security
- Validate command line arguments and options
- Prevent command injection in any system calls
- Use safe file operations with proper error handling
- Implement rate limiting for operations that could be abused

## Build and Deployment Security
- Use reproducible builds
- Verify integrity of published packages
- Implement proper CI/CD security practices
- Use signed commits and releases

## Monitoring and Auditing
- Log security-relevant events
- Monitor for unusual patterns in CLI usage
- Implement proper access controls for development tools
- Regular security reviews of code changes