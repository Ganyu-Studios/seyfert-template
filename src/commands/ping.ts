import { Command, type CommandContext, Declare } from "seyfert";

// Using the Declare decorator to define the command data.
@Declare({
    name: "ping",
    description: "Respond with the bot's latency.",
    aliases: ["latency", "pong"],
})
// This command responds with the bot's latency and API response time.
export default class PingCommand extends Command {
    override async run(ctx: CommandContext) {
        const latency = ctx.client.gateway.latency;
        const now = Date.now();

        await ctx.editOrReply({ content: "`📦` Fetching..." });

        const api = Date.now() - now;

        await ctx.editOrReply({ content: `\`🏓\` Pong! Latency: \`${latency}ms\` | API: \`${api}ms\`` });
    }
}
