import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from "react-router-dom";


import './styles.Details.css'

interface PokemonDetailsEntity {
    sprites:any
    name: string,
    id: string,
    abilities: any,
    height: string,
    base_experience: string,
    types:any,
    weight: string

    
}

const createPokemonDefault = () => ({
  id: '',
  sprites: {
   other: {
     dream_world: {
       front_default:''
     },
     home: {
       front_shiny:''
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
  types: [{
    type: {
      name:''
    }
  }],
  
  sprite: {
    front_shiny: '',
  },
  weight:'',

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


      /*const handlePrevPage = () => {
        setActualId(actualId - 1);    
      };
    
      const handleNextPage = () => {
        setActualId(actualId + 1);
        
      };*/
      

return (

  <><div className="details">
    <div className="headercard-details"><img className="imgheadercard" src="https://pngimg.com/uploads/pokeball/pokeball_PNG24.png"></img><h3>{pokemonDetails.id}</h3></div>
    <div className="card-details">
    <div className="card-1">
    <img className="imgdetails" src={pokemonDetails.sprites.other.dream_world.front_default}></img>
    <div className="card-name">
      <h3>Name</h3> <p style={{ textTransform: 'capitalize' }}>{pokemonDetails.name}</p>
      <div className="card-shiny">
      <h3>Shiny</h3><img className="shiny" src={pokemonDetails.sprites.other.home.front_shiny}></img>
      </div>
    
      <h3>Type</h3> <p style={{ textTransform: 'capitalize' }}>{pokemonDetails.types.map((tipo) => tipo.type.name).join(" ")}</p>
   <div className="card-wh">
    <div className="card-w">
      <h3>Weight</h3> <p style={{ textTransform: 'capitalize' }}>{pokemonDetails.weight}</p></div>
      <div className="card-h">
      <h3>Height</h3> <p style={{ textTransform: 'capitalize' }}>{pokemonDetails.height}</p></div>
    
    </div>
    </div>
    </div>
   <div></div>
   <div className="caracteristicas">
   <div className="card-hability">
      <h3>Hability</h3> <p style={{ textTransform: 'capitalize' }}>{pokemonDetails.abilities.map((habilidad) => habilidad.ability.name).join(", ")}</p></div>
      <div className="card-experience">
      <h3>Experience</h3> <p style={{ textTransform: 'capitalize' }}>{pokemonDetails.base_experience}</p></div>
 
    
      <div className="card-type">
      <h3>Type</h3> <p style={{ textTransform: 'capitalize' }}>{pokemonDetails.types.map((tipo) => tipo.type.name).join(" ")}</p>
      </div>
    </div>
    </div>
  </div></>

);

}


//

