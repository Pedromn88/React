
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './component/Header';
import { PokemonDetails } from './component/PokemonDetails';
import { PokemonList } from './component/PokemonList';


export const App = ()  => {


return (

  <>
  <Header />
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<PokemonList />} />
  <Route path="/pokemon/:id"element={<PokemonDetails />}/>
  </Routes>
  </BrowserRouter>
  </>
);
}