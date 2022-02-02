import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

interface PokemonDetailsEntity {
    sprites:any
    name: string,
    id: string,
    abilities: any,
    height: string,
    base_experience: string,
    forms: any,
    moves: any,

    
}

const createPokemonDefault = () => ({
  id: '',
  sprites: {
   other: {
     dream_world: {
       front_default:''
     }
   }
  },
  name:'',
  abilities: [{
    ability: {
      name: '',
    }
  }],
  height: '',
  base_experience: '',
  forms: [{
    name:'',
  }],
  moves: [{
    move: {
      name:'',
    }
  }],
  sprite: {
    front_shiny: '',
  }

})



export const PokemonDetails = ()  => {
    const [pokemonDetails, setPokemonDetails] = React.useState<PokemonDetailsEntity>(createPokemonDefault());
    const { id } = useParams();
    
    
    React.useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}` ).then((res) => {
            setPokemonDetails(res.data);
            console.log(res.data)
          })
      }, [id]);

return (

  <div className="details">
    <p>
      <strong>Id:</strong> {pokemonDetails.id}
    </p>     
      <img src={pokemonDetails.sprites.other.dream_world.front_default}></img>
    <div>
      <strong>Name:</strong> <p style={{ textTransform: 'capitalize'}}>{pokemonDetails.name}</p>
    </div>
    <p>
      <strong>Habilidad:</strong> <p style={{ textTransform: 'capitalize'}}>{pokemonDetails.abilities[0].ability.name}</p>
    </p>
    <p>
      <strong>altura:</strong> <p style={{ textTransform: 'capitalize'}}>{pokemonDetails.height}</p>
    </p>
    <img src={pokemonDetails.sprites.front_shiny}></img>
    <p>
      <strong>experiencia:</strong> <p style={{ textTransform: 'capitalize'}}>{pokemonDetails.base_experience}</p>
    </p>
    <p>
      <strong>Forma:</strong><p style={{ textTransform: 'capitalize'}}> {pokemonDetails.forms[0].name}</p>
    </p>

    <p>
      <strong>Ataque:</strong> <p style={{ textTransform: 'capitalize'}}> {pokemonDetails.moves[0].move.name}</p>
    </p>

  </div>

);

}


//

