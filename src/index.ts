import "dotenv/config";

import { Client, type ParseClient, type UsingClient } from "seyfert";
import { HandleCommand } from "seyfert/lib/commands/handle.js";
import { Yuna } from "yunaforseyfert";

/**
 * Indicates whether the bot is running in debug mode.
 * @type {boolean}
 * @description Use the `--debug` flag to enable debug mode, which provides additional logging and debugging information.
 */
const isDebug: boolean = process.argv.includes("--debug");

/**
 * Create the client instance.
 * This is the entry point of the application.
 * @type {Client<true> & UsingClient}
 */
const client: Client<true> & UsingClient = new Client({
    allowedMentions: {
        parse: ["users", "roles"],
        replied_user: false,
    },
    commands: {
        // Override the default deferReply method to provide a custom response.
        deferReplyResponse: ({ client }) => ({ content: `**${client.me.username}** is thinking...` }),
        // Set the default prefixes for text commands.
        prefix: () => ["!", "?", ">>"],
        // The bot will respond with replies instead of sending messages directly.
        reply: () => true,
    },
});

// Set services for the client.
// This needs to be done before the client starts.
client.setServices({
    handleCommand: class extends HandleCommand {
        override argsParser = Yuna.parser({
            logResult: isDebug,
        });
    },
});

// Initialize the client and connect to discord.
await client.start();

// Module augmentation to extend the UsingClient interface
declare module "seyfert" {
    interface UsingClient extends ParseClient<Client<true>> {}
}
