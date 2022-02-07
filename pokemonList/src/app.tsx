import React, {  useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



import { ListPage } from './page/listpage';
import { DetailPage } from './page/detailpage';
import { LoginPage } from './page/login';
import { Footer } from './component/layout/footer';


export const App = ()  => {


return (

  <>
  
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<LoginPage />} />
  <Route path="/list" element={<ListPage />} />
  <Route path="/pokemon/:id"element={<DetailPage />}/>
  </Routes>
  </BrowserRouter>
  
  </>
);
}