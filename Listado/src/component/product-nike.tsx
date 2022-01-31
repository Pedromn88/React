import React, { useContext } from "react";
import { AddCartContext } from "../context/context";
import { IProduct } from "../interface/interface";

import "./style-component.css"

export const ProductNike = () => {
  const addItems = useContext(AddCartContext);

  const items = [
    {
      id: 1,
      name: "Nike React Miler 2 Shield",
      price: 80,
      img: 'https://resize.sprintercdn.com/f/261x261/products/0320164/nike-react-miler-2-shield_0320164_00_4_3877722329.jpg'
    },
    {
      id: 2,
      name: "Nike Revolution 6",
      price: 56,
      img: 'https://resize.sprintercdn.com/f/261x261/products/0319954/nike-revolution-6_0319954_00_4_716015379.jpg'
    },
    {
      id: 3,
      name: "Nike Air Structure 24",
      price: 80,
      img: 'https://resize.sprintercdn.com/f/261x261/products/0314092/nike-air-zoom-structure-24_0314092_00_4_1565192739.jpg'
    }
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: IProduct
  ) => {
    e.preventDefault();
    addItems(item);
  };


  

  return (
    
      <div className="list">
        <div className="cabecera">
        <img className="logo-marca"src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/2560px-Logo_NIKE.svg.png"></img>
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