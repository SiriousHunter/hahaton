const {randomUUID} = require('node:crypto');
const Fastify = require('fastify');
const models = require('./components/models');
const routes = require('./components/routes');

const fastify = Fastify({
    logger: true,
    genReqId() {
        return randomUUID();
    },
});

fastify.register(models);
fastify.register(routes);

fastify.listen({ port: 3000, host: '0.0.0.0'}, async (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }

    console.log(`Server is now listening on ${address}`);
});
