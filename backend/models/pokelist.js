const mongoose = require('mongoose');

const pokeList = new mongoose.Schema({
    pokeId: {
        type: Number,
        required: true,
    },
    pokemonName: {
        type: String,
        required: true,
    },
    pokeApiUrl: {
        type: String,
        required: true,
    },
    pokeData: {
        type: Object,
        required: true,
    },
});

const pokeData = mongoose.model('pokeUrlList', pokeList);

module.exports = pokeData;
