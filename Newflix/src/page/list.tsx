import { css } from "@emotion/react"
import React from "react"
import { FooterList } from "../component/Footer"
import { HeaderNewflix } from "../component/Header"
import { MovieList } from "../component/MovieList"






export const List = () => {

  return (
    <> 
    <div>
      <HeaderNewflix />
    
    </div>
  <div>
  <MovieList />
  </div>
  <div>
  <FooterList />
  </div>
    </>
  )
}