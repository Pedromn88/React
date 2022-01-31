import React, { useContext }  from "react";
import { generatePath, Link } from "react-router-dom";
import { CartContext } from "../context/context";
import "./style-layout.css"

export const Header = () => {
    const items = useContext(CartContext);

  return (
    <>
    <div className="header">
        <img className="header-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/DeporteTotal_Logo.svg/1200px-DeporteTotal_Logo.svg.png"></img>
        <ul>
          <Link className="enlace" to={generatePath(`/nike`)}> <li>Nike</li> </Link>
          <Link className="enlace" to={generatePath(`/puma`)}> <li>Puma</li>  </Link>     
        </ul>
        <img className="img-cart" src="https://svgsilh.com/svg/306793.svg"></img>
    </div>
    </>
  );
};