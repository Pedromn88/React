import React, { useContext } from "react";
import { AddCartContext } from "../context/context";
import { IProduct } from "../interface/interface";


import "./style-component.css"



export const ProductPuma = () => {
  const addItems = useContext(AddCartContext);

  const items = [
    {
      id: 4,
      name: "Puma Flyer Flex",
      price: 45,
      img: 'https://resize.sprintercdn.com/f/261x261/products/0313217/puma-flyer-flex_0313217_00_4_4122914174.jpg'
    },
    {
      id: 5,
      name: "Puma Eternity Nitro",
      price: 39,
      img: 'https://resize.sprintercdn.com/f/261x261/products/0304693/puma-eternity-nitro_0304693_00_4_2296872499.jpg'
    },
    {
      id: 6,
      name: "Puma Velocity Nitro",
      price: 45,
      img: 'https://resize.sprintercdn.com/f/261x261/products/0313236/puma-velocity-nitro_0313236_00_4_1448250007.jpg'
    }
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: IProduct
  ) => {
    e.preventDefault();
    addItems(item);
  };

  const listItems = items.map(item => (
    <div key={item.id}>
      <p>{item.name}</p>
      <p>{item.price}</p>
      <img src={item.img}></img>
      <button onClick={e => handleClick(e, item)}> Agregar a Carrito</button>
    </div>
  ));

  return (
    <div className="list">
    <div className="cabecera">
        <img className="logo-marca"src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c4f8.png"></img>
        </div>
    {items.map(item => (
<div className="card-item" key={item.id}>
  <img src={item.img}></img>
  <h2>{item.name}</h2>
  <p>{item.price} € </p>
  <button className="button-item" onClick={e => handleClick(e, item)}> Agregar a Carrito</button>
</div>))}
  </div>
  );
};