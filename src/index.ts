import "dotenv/config";

import { Client, type ParseClient } from "seyfert";

import * as middlewares from "./middlewares/index.js";

/**
 * Create the client instance.
 * This is the entry point of the application.
 */
const client = new Client({
    globalMiddlewares: ["loggerMiddleware"],
    allowedMentions: {
        parse: ["users", "roles"],
        replied_user: false,
    },
    commands: {
        // Override the default deferReply method to provide a custom response.
        deferReplyResponse: ({ client }) => ({ content: `**${client.me.username}** is thinking...` }),
        // Set the default prefixes for text commands.
        prefix: (): string[] => ["!", "?", ">>"],
        // The bot will respond with replies instead of sending messages directly.
        reply: (): boolean => true,
    },
});

client.setServices({ middlewares });

// Initialize the client and connect to discord.
await client.start();

// Module augmentation to extend the UsingClient interface
declare module "seyfert" {
    interface SeyfertRegistry {
        client: ParseClient<Client<true>>;
        middlewares: typeof middlewares;
    }
}
