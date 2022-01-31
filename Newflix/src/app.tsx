import { css } from "@emotion/react"
import React from "react"

import { Routes, Route, BrowserRouter } from "react-router-dom"



import { LoginPage } from "./page/login";

import { List } from "./page/list";
import { DetailPage } from "./page/detail";




export const App = () => {

  return (
    <><BrowserRouter>
      <Routes>
      <Route path="/" element={<><List /></>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/detail/:movieId" element={<DetailPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}
