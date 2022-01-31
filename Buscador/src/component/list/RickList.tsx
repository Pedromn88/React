import axios from "axios";
import React, { useState } from "react";

import  "../style.component.css"


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { generatePath, Link} from "react-router-dom";

import { RickFilterContext } from "../context";
import { useDebounce } from 'use-debounce';

export const RickList: React.FC = (props) => {
  const [rick, setRick] = useState([]);
  const filterContext = React.useContext(RickFilterContext)
  const [debounceRick] = useDebounce(rick, 50000)

  React.useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?name=${filterContext.filter}`).then((rest) => {
      setRick(rest.data.results);
      console.log(rest.data.results);
    });
  }, [filterContext, debounceRick]);

  return (
    

    <div className="list">
            
 <> 
 
                
  {rick.map((member) => (
    <Link to={generatePath(`/rick-details/:id`, {
      id: member.id,
    })}>
 <Card sx={{ maxWidth: 345 }} className="card">
 <CardActionArea>
   <CardMedia
     component="img"
     height="140"
     image={member.image}
     alt=""
   />
   <CardContent>
     <Typography gutterBottom variant="h5" component="div">
     {member.name}
     </Typography>
     <Typography variant="body2" color="text.secondary">
     {member.species}
     </Typography>
   </CardContent>
 </CardActionArea>
</Card>
</Link>
))}

</>  
</div>
  );
}


