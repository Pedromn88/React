import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

interface PokemonDetailsEntity {
    sprites:any
    name: string,
    id: string,
    
}

export const PokemonDetails = ()  => {
    const [pokemonDetails, setPokemonDetails] = React.useState<PokemonDetailsEntity>([]);
    const { id } = useParams();
    
    
    React.useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/1" ).then((res) => {
            setPokemonDetails(res.data);
            console.log(res.data)
          })
      }, [id]);

return (

  <div className="details">
    <p>
      <strong>Id:</strong> {pokemonDetails.id}
    </p>     
      <img src={pokemonDetails.sprites.front_default}></img>
    <p>
      <strong>Name:</strong> {pokemonDetails.name}
    </p>

  </div>

);

}


//

