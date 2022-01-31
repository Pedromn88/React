import React, { useContext } from "react";
import { CartContext, RemoveCartContext } from "../context/context";


import "./style-component.css"



export const Cart = () => {
  const items = useContext(CartContext);
  const removeItem = useContext(RemoveCartContext);



  return (

    
    <div className="cart">
      <div className="list">
        <div className="cabecera">
            <h2>Carrito</h2>
            </div>
        {items.map(item => (
          <div className="card-item-cart" key={item.id}>
            <img src={item.img}></img>
            <h2>{item.name}</h2>
            <p>{item.price} € </p>
            <button className="button-item-cart" onClick={e => removeItem(item)} >Borrar Producto </button>
          </div>))}

      </div>
      
    </div>



  );
};


