const gamesSchema = {
    title: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    modifyDate: {type: Date, default: new Date()},
    enabled: {type: Boolean, default: false},
};

module.exports = {
    name: 'games',
    alias: 'Games',
    schema: gamesSchema,
    options: {
        autoIndex: true,
        autoCreate: true,
    },
};
