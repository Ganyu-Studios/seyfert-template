# Contributing to Seyfert Bot Template

First off, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to the Seyfert Bot Template. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Styleguides](#styleguides)
- [Development Setup](#development-setup)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

**Before Submitting A Bug Report:**
- Check the [existing issues](https://github.com/Ganyu-Studios/seyfert-template/issues) to see if the problem has already been reported
- Check the [Seyfert documentation](https://seyfert.dev/) to see if the issue is related to the framework itself

**How Do I Submit A Bug Report?**
Use the [Bug Report template](https://github.com/Ganyu-Studios/seyfert-template/issues/new?template=bug_report.yml) and provide as much information as possible.

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. Use the [Feature Request template](https://github.com/Ganyu-Studios/seyfert-template/issues/new?template=feature_request.yml) when creating enhancement suggestions.

### Pull Requests

1. Fork the repository
2. Create a new branch from `main`
3. Make your changes
4. Ensure all tests pass
5. Submit a pull request

## Development Setup

### Prerequisites

- Node.js 20+
- pnpm (recommended)
- Discord Bot Token

### Installation

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/seyfert-template.git
cd seyfert-template

# Install dependencies
pnpm install

# Copy environment file
cp .env.example .env
# Edit .env with your bot token

# Start development
pnpm dev
```

### Development Commands

```bash
# Development mode with hot reload
pnpm dev

# Debug mode
pnpm test

# Build the project
pnpm build

# Run linting
pnpm lint

# Format code
pnpm format

# Type checking
pnpm typecheck
```

## Styleguides

### Git Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation only changes
- `style:` changes that do not affect the meaning of the code
- `refactor:` code change that neither fixes a bug nor adds a feature
- `perf:` code change that improves performance
- `test:` adding missing tests
- `chore:` changes to the build process or auxiliary tools

Examples:
```
feat: add user management command
fix: resolve ping command timeout issue
docs: update README installation guide
```

### TypeScript Styleguide

- Use TypeScript for all new code
- Follow the existing code style (enforced by Biome)
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Prefer `const` over `let` where possible
- Use modern ES6+ features

### Code Structure

- Commands go in `src/commands/`
- Events go in `src/events/`
- Use the `@Declare` decorator for commands
- Use `createEvent` for events
- Export default the command/event class/function

### Example Command

```typescript
import { Command, type CommandContext, Declare } from "seyfert";

@Declare({
    name: "example",
    description: "An example command",
})
export default class ExampleCommand extends Command {
    override async run(ctx: CommandContext) {
        await ctx.reply({ content: "Hello, world!" });
    }
}
```

### Example Event

```typescript
import { createEvent } from "seyfert";

export default createEvent({
    data: { name: "messageCreate" },
    async run(message, client) {
        // Handle the event
    },
});
```

## Testing

- Test your changes thoroughly before submitting
- Ensure all existing functionality still works
- Add tests for new features when possible
- Test with different Discord servers and permissions

## Documentation

- Update README.md if you change functionality
- Add JSDoc comments for new public APIs
- Update configuration documentation if needed
- Include examples for new features

## Questions?

Feel free to ask questions by:
- Opening a [Question issue](https://github.com/Ganyu-Studios/seyfert-template/issues/new?template=question.yml)
- Starting a [Discussion](https://github.com/Ganyu-Studios/seyfert-template/discussions)

Thank you for contributing! 🚀
