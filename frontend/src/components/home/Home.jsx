import React from 'react'
import Searchbar from '../searchbar/Searchbar'
import './home.css'
import PokemonGrid from '../pokemon/PokemonGrid'

export default function Home() {
  return (
    <div className="homeMainContainer">
      <Searchbar />
      <PokemonGrid />
    </div>
  )
}
