import { css } from "@emotion/react";
import React from "react"
import { generatePath, Link } from "react-router-dom";
import { getList } from "../utils/apiRest";

export const MovieList = () => {
    const [film, setFilm] = React.useState([]);

    const imgUrl = "https://image.tmdb.org/t/p/w300"
    
  
    React.useEffect(() => {
    getList("/discover/movie").then((res) => {
          setFilm(res.data.results);
          console.log(res)
        })
    }, [setFilm]);
  
  
    return (
      <div css={css` flex-direction:row; display:flex; margin: 15px 0px; flex-wrap: wrap;`}>

        {film.map((movie) => (
          <><li css={css`list-style: none; margin: 0 auto`} key={movie.id}>  
         <Link to={generatePath("/detail/:id", { id: movie.id })}>
         <img src={imgUrl+movie.poster_path} css={css` height:auto; width: 250px; margin: 15px 15px`} ></img></Link> 
          <div css={css`  color:white;   text-align: center`}> {movie.title }
          </div></li></>
          
        ))}
     </div>
    )}