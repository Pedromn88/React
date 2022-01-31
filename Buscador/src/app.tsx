import axios from "axios";
import React, { useState } from "react";


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import { RickList } from "./component/list/RickList";
import { HeaderLayout } from "./layouts/header";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { RickProvider } from "./component/context";
import { ListRick } from "./component/page/listRick";
import { MyfilterContextProvider } from "./component/context/context-member";
import { DetailPage } from "./component/page/detailsmembers";
import { ListPage } from "./component/page/listmembers";
import { LoginPage } from "./component/page/login";
import { RickDetails } from "./component/page/rick-details";

export const App = () => {
  

  return (
    <div className="main">
        <> 
        <BrowserRouter>

         <MyfilterContextProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/list"
            element={
                <ListPage />
              }
          />
          <Route
            path="/detail/:id"
            element={
                <DetailPage />
                 }
          />
        </Routes>     
      </MyfilterContextProvider>
       <RickProvider>   
      <Routes>  
      <Route path="/rick-morty-list" element={<><ListRick /></>} />
        <Route path="/rick-details/:id" element={<RickDetails />} />
      </Routes>
      </RickProvider>
      </BrowserRouter>  
    </>

         </div>   
 

  );
}