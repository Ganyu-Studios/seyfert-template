import { createMiddleware } from "seyfert";

export const loggerMiddleware = createMiddleware<void>(({ context, next }) => {
    if (context.isChat())
        context.client.logger.info(
            `Executed command '/${context.fullCommandName}' by ${context.author.tag} (${context.author.id})`,
        );
    else if (context.isComponent())
        context.client.logger.info(
            `Executed component '${context.customId}' by ${context.author.tag} (${context.author.id})`,
        );
    else if (context.isMenu())
        context.client.logger.info(
            `Executed context command '${context.fullCommandName}' by ${context.author.tag} (${context.author.id})`,
        );

    return next();
});
