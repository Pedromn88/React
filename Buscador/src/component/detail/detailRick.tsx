import axios from "axios"

import React, { useState } from "react"
import { useParams } from "react-router-dom";
import "./style-details.css"


 const createDefaultRickDetail = () => ({
    name: '',
    image: '',
    status: '',
    species:'',
    origin: {
        name: '',
    }
    })

export const ShowRickDetails = () => {
    const [rickDetails, setRickDetails] = useState<RickDetailsEntity>(createDefaultRickDetail());
    const { id } = useParams();
    
  
    React.useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((rest) => {
        setRickDetails(rest.data);
        console.log(rest.data);
      });
    }, []);
  
    return ( 
    <>
    
        
           
            <div className="rick-details">
              <div className="img-rick">
            <img src={rickDetails.image}></img>
            </div>
            <div className="dates-rick">
            <h2 >{rickDetails.name}</h2>
            <h3>Estado</h3>
            <p>{rickDetails.status}</p>
            <h3>Especie</h3>
            <p>{rickDetails.species}</p>
            <h3>Lugar de origen</h3>
            <p>{rickDetails.origin.name}</p>
            </div>
            </div>
    </>
    )

}

