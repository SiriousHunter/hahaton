const GamesControllerBehavior = require('./behavior');

class GamesController {
    async getRandomGame(request, reply) {
        const { rtp, minBet } = request.params;

        const game = await this.Behavior.getRandomGame({});

        reply.send(game);
    }
}

module.exports = (fastify, opts, done) => {
    fastify.register(GamesControllerBehavior);

    const controller = new GamesController();

    fastify.get('/games/getRandom', controller.getRandomGame);

    done();
};
