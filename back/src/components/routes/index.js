const Game = require('../entities/game');
const controllers = require('./pages');

module.exports = async fastify => {
    fastify.addHook('preHandler', async (request, reply) => {
        reply.header('Access-Control-Allow-Origin', '*');
        reply.header('Access-Control-Allow-Methods', '*');
        reply.header('Access-Control-Allow-Headers', '*');
    });

    fastify.options('*', (request, reply) => reply.send());

    // Entities
    fastify.register(Game);

    // Controllers
    fastify.register(controllers);
};
