import axios from 'axios';
import React, { useEffect, useState } from 'react';
import  "./styles.list.css"


import { generatePath, Link } from 'react-router-dom';



export const PokemonList = ()  => {

const [pokemon, setPokemon] = useState ([])



React.useEffect(() => {
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
  .then(resp => {
    for (let i = 0; i < resp.data.results.length; i++) {
      axios.get(resp.data.results[i].url)
        .then(result => {
          setPokemon(prevArray => [...prevArray, result.data])
          console.log(result.data)
        })
    }
  })
}, [setPokemon]);





return (
<div className="lista">
  
    {pokemon.map((pokemone) => (
    <Link to={generatePath(`/pokemon/:id`, {
  id: pokemone.id,
})}>
      <div className="card"><div className="headercard-list"><img className="imgheadercard" src="https://pngimg.com/uploads/pokeball/pokeball_PNG24.png"></img><h3>{pokemone.id}</h3></div><div className="card-data"><img className="pokeImg" src={pokemone.sprites.other.dream_world.front_default}></img><h3 style={{ textTransform: 'capitalize' }}>{pokemone.name}</h3></div></div>
      </Link>    
      ))}
  
</div>

)



}


//https://home.pokemon.com/assets/img/screens/es/p06_02.jpg


