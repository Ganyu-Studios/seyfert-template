# 🚀 Seyfert Bot Template

<div align="center">

![Seyfert](https://img.shields.io/badge/Seyfert-v2.x-blue?style=for-the-badge&logo=discord)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-blue?style=for-the-badge&logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-20+-green?style=for-the-badge&logo=node.js)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

*A modern, feature-rich Discord bot template built with Seyfert framework*

</div>

## ✨ Features

- **🔥 Modern TypeScript** - Written in TypeScript with full type safety
- **⚡ Seyfert Framework** - Built on top of the powerful Seyfert Discord library
- **🎯 Command System** - Easy-to-use command structure with decorators
- **📦 Event Handling** - Clean event system for Discord events
- **🛠️ Development Tools** - Hot reload, linting, and formatting included
- **🔧 Configuration** - Flexible configuration with environment variables
- **📝 Code Quality** - Biome for linting and formatting, Husky for git hooks
- **🎨 Argument Parsing** - YunaForSeyfert for advanced command argument parsing

## 🏗️ Project Structure

```
seyfert-template/
├── src/
│   ├── commands/          # Bot commands
│   │   └── ping.ts        # Example ping command
│   ├── events/            # Discord events
│   │   └── ready.ts       # Bot ready event
│   └── index.ts           # Main entry point
├── dist/                  # Compiled JavaScript (generated)
├── seyfert.config.mjs     # Seyfert configuration
├── tsconfig.json          # TypeScript configuration
├── biome.json             # Biome linting/formatting config
└── package.json           # Project dependencies
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20+ 
- **pnpm** (recommended package manager)
- **Discord Bot Token** ([Get one here](https://discord.com/developers/applications))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ganyu-Studios/seyfert-template.git
   cd seyfert-template
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   # Create a .env file in the root directory
   TOKEN=your_discord_bot_token_here
   ```

4. **Start development**
   ```bash
   pnpm dev
   ```

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start the bot in development mode with hot reload |
| `pnpm test` | Run the bot in debug mode for testing |
| `pnpm build` | Compile TypeScript to JavaScript |
| `pnpm start` | Start the production build |
| `pnpm lint` | Run Biome linter |
| `pnpm format` | Format code with Biome |
| `pnpm typecheck` | Check TypeScript types without emitting |

## 🎮 Commands

### Built-in Commands

- **`/ping`** - Check bot latency and API response time
  - Aliases: `!ping`, `?latency`, `>>pong`
  - Shows gateway latency and API response time

## 📚 Adding New Commands

Create a new file in `src/commands/` directory:

```typescript
import { Command, type CommandContext, Declare } from "seyfert";

@Declare({
    name: "hello",
    description: "Say hello to the user",
})
export default class HelloCommand extends Command {
    override async run(ctx: CommandContext) {
        await ctx.reply({ content: `Hello, ${ctx.author.displayName}! 👋` });
    }
}
```

## 🎯 Adding New Events

Create a new file in `src/events/` directory:

```typescript
import { createEvent } from "seyfert";

export default createEvent({
    data: { name: "messageCreate" },
    async run(message, client) {
        // Handle message create event
        console.log(`Message received: ${message.content}`);
    },
});
```

## ⚙️ Configuration

The bot configuration is handled through `seyfert.config.mjs`. Key features:

- **Environment-based setup** - Automatically switches between development and production
- **Debug mode** - Use `--debug` flag for detailed logging
- **Intent management** - Configurable Discord gateway intents
- **Command handling** - Custom command processing with Yuna parser

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `TOKEN` | Discord bot token | ✅ |

## 🛠️ Development

### Code Quality

This template includes:

- **Biome** - Fast linting and formatting
- **Husky** - Git hooks for code quality
- **lint-staged** - Run linters on staged files
- **TypeScript** - Type checking and compilation

### Development Flags

- `--dev` - Development mode (uses `src/` directory)
- `--debug` - Debug mode (enhanced logging)

## 📦 Dependencies

### Core
- **seyfert** - Modern Discord bot framework
- **yunaforseyfert** - Advanced argument parsing
- **dotenv** - Environment variable management

### Development
- **typescript** - TypeScript compiler
- **@biomejs/biome** - Linting and formatting
- **tsx** - TypeScript execution
- **husky** - Git hooks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

- **GitHub Issues** - [Report bugs or request features](https://github.com/Ganyu-Studios/seyfert-template/issues)
- **Seyfert Docs** - [Official Seyfert Documentation](https://seyfert.dev/)

## 💝 Acknowledgments

- **Seyfert Team** - For the amazing Discord bot framework
- **Ganyu Studios** - Template development and maintenance
- **Community** - For feedback and contributions

---

<div align="center">

**Made with ❤️ by [Ganyu Studios](https://github.com/Ganyu-Studios)**

*Star ⭐ this repository if you found it helpful!*

</div>
