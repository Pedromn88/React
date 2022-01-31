import React from "react";
import { FooterList } from "../component/Footer";

import { HeaderNewflix } from "../component/Header";
import { MovieDetails } from "../component/MovieDetails";






export const DetailPage = () => {

  return (
    
<> 
<div>
  <HeaderNewflix />
</div>
<div>
<MovieDetails />
</div>
<div>
<FooterList />
</div>
</>
  )
}



