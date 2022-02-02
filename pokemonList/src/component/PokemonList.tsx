import axios from 'axios';
import React, { useEffect, useState } from 'react';
import  "./styles.component.css"

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { generatePath, Link } from 'react-router-dom';


export const PokemonList = ()  => {

const [pokemon, setPokemon] = useState ([])


const loadData = () => {
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
}


useEffect(loadData, [])
return (
  <div className='lista'>

  {pokemon.map((pokemone) => (
    <Link to={generatePath(`/pokemon/:id`, {
      id: pokemone.id,
    })}>
  <Card sx={{ width: 200, height: 'auto', margin: 1, padding: 1 }}>

    <CardActionArea>
      <CardMedia className="foto-tarjeta"
        component="img"
        height="150"
        width="150"
        image={pokemone.sprites.other.dream_world.front_default}
        alt={pokemone.name}
      />
      <CardContent>
      <Typography gutterBottom variant="inherit" component="div">
          ID: 
          {pokemone.id}
        </Typography>
        <Typography gutterBottom variant="inherit" component="div" style={{ textTransform: 'capitalize'}}>
          {pokemone.name}
        </Typography>
      </CardContent>
    </CardActionArea>
    </Card>
    </Link>
  ))}

</div>
);
}