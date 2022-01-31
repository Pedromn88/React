import axios from "axios";
import React, { useState } from "react";
import './pokedex-style.css' 

export const Pokedex = () => {
    const [id, setId ]= useState(null);
    const [name, setName] = useState();
    const [img, setImg] = useState();
    const [height, setHeight] = useState();
    const [weight, setWidth] = useState();
    const [shiny, setShiny] = useState();
    const [type, setType] = useState()
  
    
  
    React.useEffect(() => {
      if( id > 0 ) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((rest) => {
  
        setName(rest.data.name);
        setHeight(rest.data.height);
        setWidth(rest.data.weight)
        setShiny(rest.data.sprites.front_shiny);
        setImg(rest.data.sprites.other.dream_world.front_default);
        setType(rest.data.types[0].type.name)
        console.log(rest.data);
      });}
    }, [id]);
  
    const handleChange = (e) => {
      setId(e.target.value);
    };
  
    return ( 
    <><h1>POKEDEX</h1>
      <div className="pokedex">
      <select value={id} onChange={handleChange}>
        <option selected="" disabled="disabled">Selecciona tu Pokemon</option>
          <option value="1">Bulbasur</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      <div className="datos-1">
        <div>
        <h2> ID</h2>
        <p className="fondo-letra">{id}</p>
        </div>
        <div>
        <h2> Nombre</h2>
        <p className="fondo-letra">{name}</p>
        </div>
        </div>
        <h2> Foto</h2>
        <img className="fondo-img" src={img}></img>
        <h2> Peso</h2>
        <p>{weight}</p>
        <h2> Altura</h2>
        <p>{height}</p>
        <h2> Shiny</h2>      
        <img className="fondo-img" src={shiny}></img>
        <h2> Tipo</h2>
        <p>{type}</p>  
        
      </div>
      </>
    );
  };