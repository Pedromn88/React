import React from "react";
import {Cart} from "./component/cart";
import { CartProvider } from "./context/context";
import { Header } from "./layout/header";
import { ProductNike } from "./component/product-nike";
import { ProductPuma } from "./component/product-puma";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles.css"

export const App = () => {
  return (
   

<BrowserRouter>

    <CartProvider>
      <Header />
      <div className="principal">
    <Routes>
        

        <Route path="/" element={<ProductNike /> } />
        <Route path="/nike" element={<ProductNike /> } />
        
        <Route path="/puma" element={<ProductPuma /> } />
        

        </Routes> 
        <Cart />
        </div>
    </CartProvider>
   
    </BrowserRouter>
  );
};




