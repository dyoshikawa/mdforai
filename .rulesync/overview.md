---
root: true
targets: ["*"]
description: "mdforai project overview and development philosophy"
globs: ["**/*"]
---

# mdforai - AI-Powered Markdown Processing CLI

## Project Overview
mdforai is a Node.js CLI tool designed for AI-related markdown processing. The project emphasizes modern TypeScript development with comprehensive tooling for code quality, testing, and deployment.

## Development Philosophy
- **TypeScript-First**: All code written in TypeScript with strict type checking
- **Modern Node.js**: Uses ES modules and latest Node.js features (>=20.0.0)
- **Code Quality**: Multi-layer linting with Biome, ESLint, and Oxlint
- **Security**: Automated secret detection and secure development practices
- **Performance**: Lightweight CLI with fast startup and efficient processing
- **Developer Experience**: Comprehensive tooling with hot reload and testing

## Architecture Principles
- **Clean CLI Interface**: Simple, intuitive command structure using Commander.js
- **Modular Design**: Separated concerns between CLI layer and core processing logic
- **Extensible**: Plugin-ready architecture for future markdown processors
- **Error Handling**: Graceful error handling with meaningful user feedback

## Tech Stack
- **Runtime**: Node.js 20+ with ES modules
- **Language**: TypeScript with strict configuration
- **CLI Framework**: Commander.js for argument parsing
- **Build Tool**: tsup for fast bundling
- **Package Manager**: pnpm for efficient dependency management
- **Testing**: Vitest for unit and integration tests