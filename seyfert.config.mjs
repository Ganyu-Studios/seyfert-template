//@ts-check

import { config } from "seyfert";
import { GatewayIntentBits } from "seyfert/lib/types";

/**
 * The bot token used for authentication.
 * @type {string | undefined}
 */
const token = process.env.TOKEN;
if (!token) throw new Error("TOKEN environment variable is not set");

/**
 * Indicates whether the bot is running in development mode.
 * @type {boolean}
 * @description Use the `--dev` flag to enable development mode, which uses the `src` directory for source files.
 */
const isDev = process.argv.includes("--dev");

/**
 * Indicates whether the bot is running in debug mode.
 * @type {boolean}
 * @description Use the `--debug` flag to enable debug mode, which provides additional logging and debugging information.
 */
const isDebug = process.argv.includes("--debug");

/**
 * Base directory for the bot's source files.
 * @type {"src" | "dist"}
 * @description In development mode, the base directory is `src`, while in production mode it is `dist`.
 * This affects where the bot looks for its event handlers and other resources.
 */
const base = isDev ? "src" : "dist";

/**
 * The main configuration for seyfert.
 */
export default config.bot({
    token,
    debug: isDebug,
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
    locations: {
        base,
        events: "events",
        commands: "commands",
    },
});
