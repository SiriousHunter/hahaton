const GamesControllerBehavior = require('./behavior');

class GamesController {
    async getRandomGame(request, reply) {
        // const game = await this.Behavior.getRandomGame({id: 1});
        const data = [
            {
                "label": "spacecollector",
                "min_bet": null,
                "max_bet": null,
                "is_mobile": true,
                "is_desktop": true,
                "logo": "05c6f379-922d-4f68-8d18-37313eef4f96.jpg"
            },
            {
                "label": "Bars and bells",
                "min_bet": null,
                "max_bet": null,
                "is_mobile": true,
                "is_desktop": true,
                "logo": "0e26f3e9-5e12-4c31-be48-b3e874af27af.png"
            },
            {
                "label": "Pilot",
                "min_bet": null,
                "max_bet": null,
                "is_mobile": true,
                "is_desktop": true,
                "logo": "0f6d72c3-c4b8-4997-bbbf-cf908bacffd2.jpg"
            },
            {
                "label": "Book of Cairo",
                "min_bet": null,
                "max_bet": null,
                "is_mobile": true,
                "is_desktop": true,
                "logo": "25b6d1b8-ed43-4657-aa4b-1aa6f0aee194.jpg"
            },
            {
                "label": "Hot Patrick",
                "min_bet": null,
                "max_bet": null,
                "is_mobile": true,
                "is_desktop": true,
                "logo": "2675a841-55da-4059-8ceb-080e92f43fb9.jpg"
            }
        ]

        let item = data[Math.floor(Math.random()*data.length)];

        reply.send(item);
    }
}

module.exports = (fastify, opts, done) => {
    fastify.register(GamesControllerBehavior);

    const controller = new GamesController();

    fastify.get('/games/getRandom', controller.getRandomGame);

    done();
};
