const fp = require('fastify-plugin');

class GamesControllerBehavior {
    constructor(Game) {
        this.Game = Game;
    }

    /**
     * Get random game info
     * @param filter
     * @param lang
     * @returns {Promise<*>}
     */
    async getRandomGame(filter) {
        return await this.Game.getOne(filter)
    }
}

module.exports = fp((fastify, opts, done) => {
    const behavior = new GamesControllerBehavior(fastify.Game);

    fastify.decorate('Behavior', behavior);

    done();
});
