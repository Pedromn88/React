import React from "react";
import { EvoEnergy } from "./component/evo-energy";
import { NoRenovables } from "./component/emisiones";
import { Generacion } from "./component/generacion";
import './styles.css'



  
  export const App = () => {
   

  
    return (
          
      
   <> 
 <div className="container">
     <h1>Datos Energia España</h1>
     <div className="column-1">
  <EvoEnergy />
  <Generacion />
    </div>

  </div>
  </>  
  
    );
  
  }

