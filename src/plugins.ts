import { definePlugins } from "seyfert";
import { Yuna } from "yunaforseyfert";

/**
 * Indicates whether the bot is running in debug mode.
 * @type {boolean}
 * @description Use the `--debug` flag to enable debug mode, which provides additional logging and debugging information.
 */
const isDebug: boolean = process.argv.includes("--debug");

/**
 * The Yuna parser plugin.
 */
const yunaParser = Yuna.plugin({
    parser: {
        logResult: isDebug,
        syntax: {
            namedOptions: ["-", "--"],
        },
    },
    resolver: {
        logResult: isDebug,
        afterPrepare(metadata): void {
            if (isDebug) this.logger.debug(`Commands prepared with ${metadata.commands.length} commands.`);
        },
    },
});

/**
 * Seyfert funky plugins.
 */
export const plugins = definePlugins(yunaParser);

/**
 * The seyfert funky plugin definition type.
 */
export type PluginsDefinition = typeof plugins;
