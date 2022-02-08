import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import "./styles.layout.css"


export const Header = ()  => {


return (
  <div className="menu">
    <Link to={`/list/`}>     
  <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"></img>
  </Link>
  </div>)
}