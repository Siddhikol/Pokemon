import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './pokemonGrid.css'

export default function PokemonGrid() {
    const [randomPokemon, setRandomPokemon] = useState([]);
    const randomPokemons = 20
    useEffect(() => {
        axios.get(`http://localhost:5000/getRandomPokemon/${randomPokemons}`)
            .then((response) => {
                setRandomPokemon(response.data);
            })
            .catch((error) => {
                console.error('Error fetching random Pokémon:', error);
            });
    }, []);
    return (
        <div className="pokemonGridMainContainer grid12">
            {
                randomPokemon.map((pokemon) => (
                    <div key={pokemon._id} className="pokemonTile gColSpan3 flex flexColumn">
                        <div className="pokeId">
                            #{pokemon.pokeId}
                        </div>
                        <div className="pokemonName">
                            {pokemon.pokemonName}
                        </div>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.pokeId}.svg`}
                            alt={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.pokeId}.png`} />
                    </div>
                ))
            }
        </div>
    )
}
