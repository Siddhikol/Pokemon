const express = require('express');
const mongoose = require('mongoose');
const pokeData = require('./models/pokelist.js')
require('dotenv').config();
const app = express();
const mongo_uri = process.env.MONGODB_URI;

// Allow requests from localhost:3000 (your frontend)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

mongoose.connect(mongo_uri)
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error);
    });

app.get('/getRandomPokemon/:nop', async (req, res) => {
    const numberOfPokemon = parseInt(req.params.nop, 10);
    try {
        const randomPokemon = await pokeUrlList.aggregate([
            { $sample: { size: numberOfPokemon } },
        ]);
        res.json(randomPokemon);
    }
    catch (error) {
        console.log('Error fetching random pokemon', error);
        res.status(500).json({ error: "Failed to fetch random pokemon" })
    }
})


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
//     .then((res) => res.json())
//     .then((data) => {
//         for (let i = 0; i <= 1280; i++) {
//             console.log(data.results[i]);
//             const newPokeUrl = new pokeUrlList({
//                 pokemonName: data.results[i].name,
//                 pokeApiUrl: data.results[i].url
//             });
//             newPokeUrl.save();
//         }
//     })

async function fetchPokemonData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(`Fetched ${data.results.length} Pokemon data from ${url}`);

        // Save the data for each Pokemon
        for (const pokemon of data.results) {
            const pokeFetch = await fetch(pokemon.url);
            const newPokeUrl = new pokeData({
                pokeId: (pokemon.url).split('/').slice(-2, -1)[0],
                pokemonName: pokemon.name,
                pokeApiUrl: pokemon.url,
                pokeData: pokeFetch,
            });
            console.log(pokemon)
            await newPokeUrl.save();
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }

}
const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
fetchPokemonData(apiUrl).then(() => {
    console.log('All Pokemon data saved to MongoDB.');
});
