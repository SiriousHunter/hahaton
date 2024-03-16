const games = require('../controllers/games');

module.exports = async fastify => {
    fastify.register(games);
};
