import axios from "axios";
import React, { useState } from "react";

import { Col, Figure, Form, Row } from "react-bootstrap";
import noSignal from "../img/nosignal.jpg"

import './pokedex-style.scss' 


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
    <>
    
      <div className="pokedex">
      <Row>
      <Col lg="6">
        <Form.Select size="sm" aria-label="Default select example"   onChange={handleChange}>
        <option value="0" > Selecciona tu pokemon
        </option>
        <option value="1">Bulbasur</option>
          <option value="25">Pikachu</option>
          <option value="4">Charmander</option>
        </Form.Select>
        <div className="pokedex-1">
        <h2> Foto</h2>
        <div className="screen-container">
          <div className="screen">
            <div className="top-screen-lights">
              <div className="mini-light red"></div>
              <div className="mini-light red"></div>
            </div>
            <div id="main-screen">
              <Figure>
                <Figure.Image
                className="fondo-img"
                  width={180}
                  height={180}
                  alt="171x180"
                  src={img}
                  />    
              </Figure>
            </div>
            <div className="bottom-screen-lights">
              <div className="small-light red">
                <div className="dot light-red"></div>
              </div>
              <div className="burger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>

        <Row className="justify-content-md-center">
        <Col md="2">
        <div className="right-nav-container">
              <div className="big-button">
        </div> 
        </div>       
        </Col>

        <Col md="3">
          <div>
        <p className=" datos" style={{ textTransform: 'capitalize' }}>{name}</p>
        </div>
        </Col>
        <Col md="3">
        <div>
        <p className="fondo-letra datos">{id}</p>
        </div>
        </Col>
        <Col md="2">
        <div className="right-nav-container">
              <div className="nav-button">

                <div className="nav-button-vertical"></div>
                <div className="nav-button-horizontal">
                  
                </div>
        </div> 
        </div>       
        </Col>
        </Row>
        </div>
        </Col>
     <Col className="pokedex-2" lg="6">
       <Row className="justify-content-md-center">
       <Col lg="3">
        <h2> Weight</h2>
        <p className=" datos">{weight}</p>
        </Col>
        <Col lg="3">
        <h2> Height</h2>
        <p className=" datos">{height}</p>
        </Col>

        <Col lg="3">
        <h2> Type</h2>
        <p className=" datos">{type}</p> 
        </Col>
        </Row>
        <div className="shiny">
        <h2> Shiny</h2> 
        <Figure>
        <Figure.Image
    
          width={180}
          height={100}
          alt="80x80"
          src={shiny}
          />    
        </Figure>
        </div>
        <div className="lights-container">
           
           <div className="big-light-boarder">
             <div className="big-light blue">
               <div className="big-dot light-blue"></div>
             </div>
           </div>
          
           <div className="small-lights-container">
             <div className="small-light red">
               <div className="dot light-red"></div>
             </div>
             <div className="small-light yellow">
               <div className="dot light-yellow"></div>
             </div>
             <div className="small-light green">
               <div className="dot light-green"></div>
             </div>
           </div>
         </div>


        </Col> 
        
        </Row> 
      </div>

      </>
    );
  };