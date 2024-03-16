const fp = require('fastify-plugin');
const mongoose = require('../../plugins/mongooseConnector');
const games = require('./games');


const MONGO_USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME
const MONGO_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD
const MONGO_DATABASE = process.env.MONGO_INITDB_DATABASE
const MONGO_HOST = process.env.MONGO_HOST
const MONGO_PORT = process.env.MONGO_PORT


const connectionUrl = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`;
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

module.exports = fp((fastify, opts, done) => {
    fastify.register(mongoose.plugin, {
        uri: connectionUrl,
        settings: mongooseOptions,
        models: [
            games
        ],
    });

    done();
});
