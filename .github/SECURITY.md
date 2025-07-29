# Security Policy

## Supported Versions

We actively support the following versions of the Seyfert Bot Template with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Reporting a Vulnerability

The Seyfert Bot Template team takes security bugs seriously. We appreciate your efforts to responsibly disclose your findings, and will make every effort to acknowledge your contributions.

### How to Report a Security Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them by emailing [security@ganyu-studios.dev](mailto:security@ganyu-studios.dev) with the following information:

- Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit the issue

### What to Expect

After you submit a report, we will:

1. **Acknowledge receipt** of your vulnerability report within 48 hours
2. **Confirm the problem** and determine the affected versions
3. **Audit code** to find any potential similar problems
4. **Prepare fixes** for all supported versions
5. **Release patched versions** as soon as possible
6. **Publicly announce** the vulnerability after the fix is released

## Security Best Practices

When using this template for your Discord bot:

### Environment Variables
- Never commit your `.env` file to version control
- Use strong, unique tokens for your Discord bot
- Regularly rotate your bot tokens
- Store sensitive configuration in environment variables

### Bot Permissions
- Follow the principle of least privilege
- Only request Discord permissions your bot actually needs
- Regularly audit your bot's permissions
- Use role-based access control in your Discord server

### Code Security
- Keep all dependencies up to date
- Use `pnpm audit` to check for known vulnerabilities
- Validate and sanitize user inputs
- Implement rate limiting for commands
- Use TypeScript for type safety

### Deployment Security
- Use HTTPS for all web services
- Keep your hosting environment updated
- Use proper logging and monitoring
- Implement proper error handling (don't expose sensitive information)

### Discord-Specific Security
- Validate Discord interactions
- Implement proper command cooldowns
- Be cautious with file uploads and external links
- Follow Discord's Terms of Service and Community Guidelines

## Dependency Security

This template includes several security measures:

- **Biome** for code quality and potential security issues
- **TypeScript** for type safety
- **Husky** for git hooks to prevent committing sensitive data
- **Package audit** via pnpm for dependency vulnerabilities

## Reporting Non-Security Issues

For non-security related bugs, please use our [Bug Report template](https://github.com/Ganyu-Studios/seyfert-template/issues/new?template=bug_report.yml).

## Attribution

We will acknowledge security researchers who report vulnerabilities to us, unless they prefer to remain anonymous.

---

Thank you for helping keep the Seyfert Bot Template and our community safe! 🔒
