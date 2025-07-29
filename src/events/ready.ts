import { createEvent } from "seyfert";

// This event is triggered when the client is ready and logged in.
export default createEvent({
    data: { name: "ready", once: true },
    async run(user, client, shardId) {
        client.logger.info(`Logged in as: ${user.tag} on shard #${shardId}`);

        // Upload commands to discord and cache them.
        await client.uploadCommands({ cachePath: "./commands.json" });
    },
});
