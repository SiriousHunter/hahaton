const fp = require('fastify-plugin');

class Game {
    constructor(mongoose) {
        this.mongoose = mongoose;
    }

    async getAll(filters, limit = 50, offset = 0) {
        const {
            title,
            lang,
            category,
            enabled,
        } = filters;

        const filter = {
            ...title && { title: { $regex: new RegExp(`${title}`) } },
            ...lang && { lang },
            ...category && { category },
            ...enabled && { enabled },
        };

        const projection = {
            id: '$_id',
            title: 1,
            description: 1,
            category: 1,
            image: 1,
            lang: 1,
            url: 1,
            modifyDate: 1,
        };

        return this.mongoose.Game
            .find(filter)
            .select(projection)
            .limit(limit)
            .skip(offset)
            .exec();
    }

    async getOne({id, url, enabled}, lang) {
        const filter = {
            ...id && {_id: id},
            ...url && {url},
            ...lang && { lang },
            ...enabled && { enabled },
        };
        return this.mongoose.Game
            .findOne(filter)
            .exec();
    }

    async count({title, lang, category}) {
        const filter = {
            ...title && { title: { $regex: new RegExp(`${title}`) } },
            ...lang && { lang },
            ...category && { category },
        };

        return this.mongoose.Game
            .find(filter)
            .count()
            .exec();
    }
}

module.exports = fp((fastify, opts, done) => {
    const game = new Game(fastify.mongoose);

    fastify.decorate('Game', game);

    done();
});
